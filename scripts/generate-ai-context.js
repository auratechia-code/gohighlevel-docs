#!/usr/bin/env node

/**
 * Generates a compact markdown file optimized for use as AI context.
 * Output: generated/ghl-api-context.md
 */

const fs = require("fs");
const path = require("path");

const MERGED_SPEC = path.join(__dirname, "..", "specs", "merged-openapi.json");
const MCP_REF = path.join(__dirname, "..", "generated", "mcp-reference.json");
const OUTPUT = path.join(__dirname, "..", "generated", "ghl-api-context.md");

const FIELD_LIMIT = 30;

function run() {
  const spec = JSON.parse(fs.readFileSync(MERGED_SPEC, "utf-8"));
  const mcp = JSON.parse(fs.readFileSync(MCP_REF, "utf-8"));
  const resolver = createResolver(spec);
  const lines = [];

  lines.push("# GoHighLevel API v2 - Complete Reference");
  lines.push("");
  lines.push(`Base URL: \`${spec.servers?.[0]?.url || ""}\``);
  lines.push(`Source: ${mcp.references.apiDocsRepo}`);
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");

  lines.push("## Operations");
  lines.push("");

  let opCount = 0;
  const sortedPaths = Object.entries(spec.paths).sort(([a], [b]) => a.localeCompare(b));

  for (const [pathKey, pathItem] of sortedPaths) {
    const commonParams = normalizeParameters(pathItem.parameters || [], resolver);

    for (const method of orderedMethods(pathItem)) {
      const operation = pathItem[method];
      opCount += 1;

      lines.push(`### ${method.toUpperCase()} ${pathKey}`);
      if (operation.summary) lines.push(`Summary: ${sanitizeText(operation.summary)}`);
      if (operation.operationId) lines.push(`OperationId: \`${operation.operationId}\``);

      const scopes = extractScopes(operation.security);
      if (scopes.length) lines.push(`Scopes: ${scopes.map((s) => `\`${s}\``).join(", ")}`);

      const operationParams = normalizeParameters(operation.parameters || [], resolver);
      const allParams = dedupeParameters([...commonParams, ...operationParams]);

      lines.push("");
      lines.push("#### Authentication/Headers");
      lines.push(...renderHeaderSection(allParams, resolver));

      lines.push("");
      lines.push("#### Path Parameters");
      lines.push(...renderParameterSection(allParams, "path", resolver));

      lines.push("");
      lines.push("#### Query Parameters");
      lines.push(...renderParameterSection(allParams, "query", resolver));

      lines.push("");
      lines.push("#### Request Body");
      lines.push(...renderRequestBody(operation.requestBody, resolver));

      lines.push("");
      lines.push("#### Responses");
      lines.push(...renderResponses(operation.responses, resolver));
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

  console.log("AI Context generated:");
  console.log(`  Output: ${OUTPUT}`);
  console.log(`  Endpoints: ${opCount} across ${Object.keys(spec.paths).length} paths`);
  console.log(`  File size: ${(Buffer.byteLength(content) / 1024).toFixed(1)} KB`);
}

function orderedMethods(pathItem) {
  const priority = ["get", "post", "put", "patch", "delete", "options", "head", "trace"];
  return Object.keys(pathItem)
    .filter((m) => m !== "parameters" && !m.startsWith("x-"))
    .sort((a, b) => {
      const ia = priority.indexOf(a);
      const ib = priority.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
}

function normalizeParameters(parameters, resolver) {
  return parameters.map((p) => resolveRefObject(p, resolver)).filter(Boolean);
}

function dedupeParameters(parameters) {
  const seen = new Set();
  const out = [];
  for (const p of parameters) {
    const key = `${p.in || ""}:${p.name || ""}`;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}

function renderHeaderSection(params, resolver) {
  const lines = [
    "- `Authorization` (header, required): `Bearer <token>`",
    "- `Version` (header, usually required): API version date (e.g. `2021-07-28`)",
  ];

  const headerParams = params.filter((p) => p.in === "header");
  for (const p of headerParams) {
    if (["authorization", "version"].includes(String(p.name || "").toLowerCase())) continue;
    lines.push(`- ${formatParameterLine(p, resolver)}`);
  }

  return lines;
}

function renderParameterSection(params, location, resolver) {
  const target = params.filter((p) => p.in === location);
  if (!target.length) return ["- None"];
  return target.map((p) => `- ${formatParameterLine(p, resolver)}`);
}

function formatParameterLine(param, resolver) {
  const schema = flattenSchema(resolveRefObject(param.schema, resolver), resolver);
  const type = getSchemaType(schema);
  const req = param.required ? "required" : "optional";
  const desc = sanitizeText(param.description || schema.description || "");
  return `\`${param.name}\` (${param.in}, ${req}, ${type})${desc ? `: ${desc}` : ""}`;
}

function renderRequestBody(requestBody, resolver) {
  if (!requestBody) return ["- None"];

  const rb = resolveRefObject(requestBody, resolver);
  const requiredFlag = rb.required ? "required" : "optional";
  const mediaEntries = Object.entries(rb.content || {});
  if (!mediaEntries.length) return [`- Body: ${requiredFlag} (no schema details)`];

  return mediaEntries.map(([contentType, media]) => {
    const schema = flattenSchema(resolveRefObject(media.schema, resolver), resolver);
    const fields = collectSchemaFields(schema, resolver);
    const required = fields.filter((f) => f.required);
    const optional = fields.filter((f) => !f.required);

    const details = [];
    details.push(`- ${contentType}: ${requiredFlag}; schema ${describeSchema(schema)}`);
    details.push(`  - Required: ${formatFieldList(required)}`);
    details.push(`  - Optional: ${formatFieldList(optional)}`);
    return details.join("\n");
  }).flatMap((entry) => entry.split("\n"));
}

function renderResponses(responses, resolver) {
  if (!responses) return ["- None"];

  const lines = [];
  for (const [statusCode, rawResponse] of Object.entries(responses)) {
    const response = resolveRefObject(rawResponse, resolver);
    const contentEntries = Object.entries(response.content || {});

    if (!contentEntries.length) {
      lines.push(`- ${statusCode}: no content`);
      continue;
    }

    const responseParts = contentEntries
      .map(([contentType, media]) => {
        const schema = flattenSchema(resolveRefObject(media.schema, resolver), resolver);
        return `${contentType} -> ${describeSchema(schema)}`;
      })
      .join(" | ");

    lines.push(`- ${statusCode}: ${responseParts}`);
  }
  return lines;
}

function collectSchemaFields(schema, resolver) {
  if (!schema) return [];
  const flat = flattenSchema(schema, resolver);
  const props = flat.properties || {};
  const requiredSet = new Set(flat.required || []);

  return Object.entries(props)
    .slice(0, FIELD_LIMIT)
    .map(([name, raw]) => {
      const prop = flattenSchema(resolveRefObject(raw, resolver), resolver);
      return { name, type: getSchemaType(prop), required: requiredSet.has(name) };
    });
}

function flattenSchema(schema, resolver) {
  if (!schema) return {};
  let current = schema;
  if (resolver && current.$ref) current = resolveRefObject(current, resolver);

  if (current.allOf && Array.isArray(current.allOf)) {
    const merged = {
      ...current,
      properties: {},
      required: [],
    };

    for (const item of current.allOf) {
      const piece = flattenSchema(resolveRefObject(item, resolver), resolver);
      Object.assign(merged.properties, piece.properties || {});
      if (Array.isArray(piece.required)) merged.required.push(...piece.required);
      if (!merged.type && piece.type) merged.type = piece.type;
      if (!merged.__schemaName && piece.__schemaName) merged.__schemaName = piece.__schemaName;
    }

    merged.required = [...new Set(merged.required)];
    return merged;
  }

  if (current.type === "array" && current.items) {
    return {
      ...current,
      items: flattenSchema(resolveRefObject(current.items, resolver), resolver),
    };
  }

  return current;
}

function getSchemaType(schema) {
  if (!schema) return "unknown";
  if (schema.enum) return "enum";
  if (schema.oneOf) return "oneOf";
  if (schema.anyOf) return "anyOf";
  if (schema.type === "array") return `array<${getSchemaType(schema.items)}>`;
  return schema.type || "object";
}

function describeSchema(schema) {
  if (!schema) return "unknown";
  if (schema.__schemaName) return `\`${schema.__schemaName}\``;
  if (schema.type === "array") return `array<${describeSchema(schema.items)}>`;
  return getSchemaType(schema);
}

function formatFieldList(fields) {
  if (!fields.length) return "none";
  return fields.map((f) => `\`${f.name}\` (${f.type})`).join(", ");
}

function createResolver(spec) {
  const cache = new Map();

  return (ref) => {
    if (!ref || typeof ref !== "string" || !ref.startsWith("#/")) return null;
    if (cache.has(ref)) return cache.get(ref);

    const segments = ref.slice(2).split("/").map(decodeURIComponent);
    let node = spec;

    for (const segment of segments) {
      if (!node || typeof node !== "object") {
        cache.set(ref, null);
        return null;
      }
      node = node[segment];
    }

    const schemaName = segments[0] === "components" && segments[1] === "schemas" ? segments[2] : undefined;
    const resolved = node ? { name: schemaName, schema: node } : null;
    cache.set(ref, resolved);
    return resolved;
  };
}

function resolveRefObject(input, resolver) {
  if (!input) return null;
  if (!input.$ref) return input;
  if (!resolver) return input;

  const resolved = resolver(input.$ref);
  if (!resolved) return input;

  return {
    ...resolved.schema,
    __schemaName: resolved.name || resolved.schema.__schemaName,
  };
}

function extractScopes(security) {
  if (!security) return [];
  const scopes = new Set();

  for (const entry of security) {
    for (const value of Object.values(entry)) {
      if (Array.isArray(value)) {
        value.forEach((s) => scopes.add(s));
      }
    }
  }

  return [...scopes];
}

function sanitizeText(text) {
  return String(text || "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

run();
