#!/usr/bin/env node

/**
 * Generates a markdown file optimized for AI context with full request/response structure.
 * Output: generated/ghl-api-context.md
 */

const fs = require("fs");
const path = require("path");

const MERGED_SPEC = path.join(__dirname, "..", "specs", "merged-openapi.json");
const MCP_REF = path.join(__dirname, "..", "generated", "mcp-reference.json");
const OUTPUT = path.join(__dirname, "..", "generated", "ghl-api-context.md");

function run() {
  const spec = JSON.parse(fs.readFileSync(MERGED_SPEC, "utf-8"));
  const mcp = JSON.parse(fs.readFileSync(MCP_REF, "utf-8"));

  const lines = [];

  lines.push("# GoHighLevel API v2 - Complete Reference");
  lines.push("");
  lines.push(`Base URL: \`${spec.servers[0].url}\``);
  lines.push(`Source: ${mcp.references.apiDocsRepo}`);
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");

  lines.push("## Authentication");
  lines.push("");
  lines.push("All endpoints require a Bearer token (OAuth2 or Private Integration Token).");
  lines.push("Header: `Authorization: Bearer <token>`");
  lines.push("Most endpoints also require a `Version` header with the API version date.");
  lines.push("");

  const endpointsByTag = groupEndpointsByTag(spec);
  const sortedTags = Object.keys(endpointsByTag).sort();

  lines.push("## API Endpoints (Detailed)");
  lines.push("");

  for (const tag of sortedTags) {
    lines.push(`### ${tag}`);
    lines.push("");

    for (const ep of endpointsByTag[tag]) {
      lines.push(`#### ${ep.method} \`${ep.path}\``);
      lines.push("");

      if (ep.summary) lines.push(`- **Summary**: ${ep.summary}`);
      if (ep.operationId) lines.push(`- **Operation ID**: \`${ep.operationId}\``);

      const scopes = extractScopes(ep.operation.security);
      lines.push(`- **Scopes**: ${scopes.length ? scopes.map((s) => `\`${s}\``).join(", ") : "-"}`);

      const refs = extractExternalReferences(ep.operation);
      if (refs.length) {
        lines.push(`- **External references**: ${refs.map((r) => `<${r}>`).join(", ")}`);
      }

      lines.push("");
      renderParameterSection(lines, spec, "Request Header Parameters", getParameters(ep, "header"));
      renderParameterSection(lines, spec, "Path Parameters", getParameters(ep, "path"));
      renderParameterSection(lines, spec, "Query Parameters", getParameters(ep, "query"));
      renderRequestBodySection(lines, spec, ep.operation.requestBody);
      renderResponsesSection(lines, spec, ep.operation.responses || {});
      lines.push("");
    }
  }

  lines.push("## MCP Server");
  lines.push("");
  lines.push(`Endpoint: \`${mcp.server.endpoint}\``);
  lines.push(`Transport: ${mcp.server.transport}`);
  lines.push("");
  lines.push("### MCP Tools");
  lines.push("");
  for (const [category, tools] of Object.entries(mcp.tools)) {
    lines.push(`**${category}**: ${tools.map((t) => t.name).join(", ")}`);
  }
  lines.push("");

  lines.push("### Client Configuration (Claude Desktop)");
  lines.push("");
  lines.push("```json");
  lines.push(JSON.stringify(mcp.clientConfigurations.claudeDesktop.config, null, 2));
  lines.push("```");
  lines.push("");

  const content = lines.join("\n");
  fs.writeFileSync(OUTPUT, content, "utf-8");

  const pathCount = Object.keys(spec.paths).length;
  const opCount = Object.values(spec.paths).reduce(
    (sum, methods) =>
      sum + Object.keys(methods).filter((m) => !m.startsWith("x-") && m !== "parameters").length,
    0
  );

  console.log("AI Context generated:");
  console.log(`  Output: ${OUTPUT}`);
  console.log(`  Endpoints: ${opCount} across ${pathCount} paths`);
  console.log(`  Tags: ${sortedTags.length}`);
  console.log(`  File size: ${(Buffer.byteLength(content) / 1024).toFixed(1)} KB`);
}

function groupEndpointsByTag(spec) {
  const endpointsByTag = {};
  for (const [pathKey, methods] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (method.startsWith("x-") || method === "parameters") continue;
      const tags = operation.tags || ["Untagged"];
      for (const tag of tags) {
        if (!endpointsByTag[tag]) endpointsByTag[tag] = [];
        endpointsByTag[tag].push({ method: method.toUpperCase(), path: pathKey, operation, pathParameters: methods.parameters || [], operationId: operation.operationId || "", summary: operation.summary || "" });
      }
    }
  }

  for (const tag of Object.keys(endpointsByTag)) {
    endpointsByTag[tag].sort((a, b) => `${a.path}:${a.method}`.localeCompare(`${b.path}:${b.method}`));
  }
  return endpointsByTag;
}

function renderParameterSection(lines, spec, title, params) {
  lines.push(`**${title}**`);
  if (!params.length) {
    lines.push("- None");
    lines.push("");
    return;
  }

  for (const rawParam of params) {
    const p = resolveMaybeRef(spec, rawParam);
    const schema = p.schema ? resolveMaybeRef(spec, p.schema) : undefined;
    const type = schema?.type || inferTypeFromSchema(schema) || "any";
    const req = p.required ? "required" : "optional";
    let text = `- \`${p.name}\` [${req}] (${type})`;
    if (p.description) text += ` - ${sanitizeText(p.description)}`;
    if (schema?.enum?.length) text += ` | enum: ${schema.enum.map((v) => `\`${v}\``).join(", ")}`;
    lines.push(text);
  }
  lines.push("");
}

function renderRequestBodySection(lines, spec, requestBody) {
  lines.push("**Request Body**");
  if (!requestBody) {
    lines.push("- None");
    lines.push("");
    return;
  }

  const rb = resolveMaybeRef(spec, requestBody);
  const req = rb.required ? "required" : "optional";
  lines.push(`- Body is **${req}**.`);

  const contentEntries = Object.entries(rb.content || {});
  if (!contentEntries.length) {
    lines.push("- No content schema provided.");
    lines.push("");
    return;
  }

  for (const [contentType, contentDef] of contentEntries) {
    lines.push(`- Content-Type: \`${contentType}\``);
    const schema = contentDef.schema;
    if (!schema) {
      lines.push("  - Schema: not specified");
      continue;
    }
    renderSchemaSummary(lines, spec, schema, "  ");
  }

  lines.push("");
}

function renderResponsesSection(lines, spec, responses) {
  lines.push("**Response Schema**");
  const codes = Object.keys(responses);
  if (!codes.length) {
    lines.push("- None");
    lines.push("");
    return;
  }

  for (const code of codes) {
    const resolved = resolveMaybeRef(spec, responses[code]);
    const description = sanitizeText(resolved.description || "No description");
    lines.push(`- **${code}**: ${description}`);

    const contentEntries = Object.entries(resolved.content || {});
    if (!contentEntries.length) {
      lines.push("  - No response body.");
      continue;
    }

    for (const [contentType, contentDef] of contentEntries) {
      lines.push(`  - Content-Type: \`${contentType}\``);
      if (!contentDef.schema) {
        lines.push("    - Schema: not specified");
        continue;
      }
      renderSchemaSummary(lines, spec, contentDef.schema, "    ");
    }
  }

  lines.push("");
}

function renderSchemaSummary(lines, spec, schemaLike, indent) {
  const schema = resolveMaybeRef(spec, schemaLike);

  if (schemaLike.$ref) {
    lines.push(`${indent}- Schema ref: \`${schemaLike.$ref}\``);
  }

  if (schema.oneOf || schema.anyOf || schema.allOf) {
    const key = schema.oneOf ? "oneOf" : schema.anyOf ? "anyOf" : "allOf";
    const items = schema[key] || [];
    lines.push(`${indent}- Composition: \`${key}\``);
    for (const item of items.slice(0, 10)) {
      if (item.$ref) {
        lines.push(`${indent}  - \`${item.$ref}\``);
      } else {
        const t = resolveMaybeRef(spec, item).type || "object";
        lines.push(`${indent}  - inline (${t})`);
      }
    }
    return;
  }

  if (schema.type === "array") {
    lines.push(`${indent}- Type: array`);
    if (schema.items) {
      const item = resolveMaybeRef(spec, schema.items);
      if (schema.items.$ref) lines.push(`${indent}- Items ref: \`${schema.items.$ref}\``);
      lines.push(`${indent}- Item type: ${item.type || "object"}`);
    }
    return;
  }

  const type = schema.type || inferTypeFromSchema(schema) || "object";
  lines.push(`${indent}- Type: ${type}`);

  const properties = schema.properties || {};
  const required = new Set(schema.required || []);
  const names = Object.keys(properties);
  if (!names.length) return;

  lines.push(`${indent}- Properties:`);
  for (const name of names.slice(0, 20)) {
    const propSchema = resolveMaybeRef(spec, properties[name]);
    const propType = propSchema.type || inferTypeFromSchema(propSchema) || "any";
    const flag = required.has(name) ? "required" : "optional";
    let row = `${indent}  - \`${name}\` [${flag}] (${propType})`;
    if (properties[name].$ref) row += ` ref: \`${properties[name].$ref}\``;
    if (propSchema.enum?.length) row += ` enum: ${propSchema.enum.map((v) => `\`${v}\``).join(", ")}`;
    lines.push(row);
  }
  if (names.length > 20) lines.push(`${indent}  - ... ${names.length - 20} more properties`);
}

function getParameters(endpoint, where) {
  const combined = [
    ...(endpoint.pathParameters || []),
    ...(endpoint.operation.parameters || []),
  ];

  const seen = new Set();
  return combined
    .map((p) => ({ ...p }))
    .filter((p) => {
      if (p.in !== where) return false;
      const key = `${p.in}:${p.name}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function resolveMaybeRef(spec, obj) {
  if (!obj || typeof obj !== "object") return obj;
  if (!obj.$ref) return obj;
  const parts = obj.$ref.replace(/^#\//, "").split("/");
  let cur = spec;
  for (const part of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, part)) cur = cur[part];
    else return obj;
  }
  return cur;
}

function extractScopes(security) {
  if (!security) return [];
  const scopes = new Set();
  for (const entry of security) {
    for (const values of Object.values(entry)) {
      if (Array.isArray(values)) values.forEach((s) => scopes.add(s));
    }
  }
  return [...scopes];
}

function extractExternalReferences(operation) {
  const refs = new Set();
  if (operation.externalDocs?.url) refs.add(operation.externalDocs.url);
  const text = operation.description || "";
  const matches = text.match(/https?:\/\/[^\s)]+/g) || [];
  for (const match of matches) refs.add(match.replace(/[.,;]$/, ""));
  return [...refs];
}

function sanitizeText(text) {
  return String(text || "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function inferTypeFromSchema(schema = {}) {
  if (schema.format) return `${schema.type || "string"}:${schema.format}`;
  if (schema.properties) return "object";
  if (schema.items) return "array";
  return schema.type;
}

run();
