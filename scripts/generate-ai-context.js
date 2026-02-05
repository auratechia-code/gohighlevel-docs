#!/usr/bin/env node

/**
 * Generates a compact markdown file optimized for use as AI context.
 * This file contains every endpoint, method, path, description, and required scopes
 * in a format that's token-efficient for LLMs.
 *
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

  // Auth section
  lines.push("## Authentication");
  lines.push("");
  lines.push("All endpoints require a Bearer token (OAuth2 or Private Integration Token).");
  lines.push("Header: `Authorization: Bearer <token>`");
  lines.push("Most endpoints also require a `Version` header with the API version date.");
  lines.push("");

  // Endpoints grouped by tag
  const endpointsByTag = {};

  for (const [pathKey, methods] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (method.startsWith("x-") || method === "parameters") continue;

      const tags = operation.tags || ["Untagged"];
      for (const tag of tags) {
        if (!endpointsByTag[tag]) endpointsByTag[tag] = [];
        endpointsByTag[tag].push({
          method: method.toUpperCase(),
          path: pathKey,
          summary: operation.summary || "",
          description: (operation.description || "").replace(/<[^>]*>/g, "").substring(0, 200),
          operationId: operation.operationId || "",
          scopes: extractScopes(operation.security),
        });
      }
    }
  }

  lines.push("## API Endpoints");
  lines.push("");

  const sortedTags = Object.keys(endpointsByTag).sort();
  for (const tag of sortedTags) {
    const endpoints = endpointsByTag[tag];
    lines.push(`### ${tag}`);
    lines.push("");
    lines.push("| Method | Path | Summary | Scopes |");
    lines.push("|--------|------|---------|--------|");

    for (const ep of endpoints) {
      const scopes = ep.scopes.length > 0 ? `\`${ep.scopes.join("`, `")}\`` : "-";
      lines.push(
        `| ${ep.method} | \`${ep.path}\` | ${ep.summary} | ${scopes} |`
      );
    }
    lines.push("");
  }

  // MCP section
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

  // Client config examples
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
      sum +
      Object.keys(methods).filter((m) => !m.startsWith("x-") && m !== "parameters").length,
    0
  );

  console.log("AI Context generated:");
  console.log(`  Output: ${OUTPUT}`);
  console.log(`  Endpoints: ${opCount} across ${pathCount} paths`);
  console.log(`  Tags: ${sortedTags.length}`);
  console.log(`  File size: ${(Buffer.byteLength(content) / 1024).toFixed(1)} KB`);
}

function extractScopes(security) {
  if (!security) return [];
  const scopes = new Set();
  for (const entry of security) {
    for (const values of Object.values(entry)) {
      if (Array.isArray(values)) {
        values.forEach((s) => scopes.add(s));
      }
    }
  }
  return [...scopes];
}

run();
