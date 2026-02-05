#!/usr/bin/env node

/**
 * Generates a comprehensive Spanish README with all endpoints listed
 */

const fs = require("fs");
const path = require("path");

const MERGED_SPEC = path.join(__dirname, "..", "specs", "merged-openapi.json");
const MCP_REF = path.join(__dirname, "..", "generated", "mcp-reference.json");
const OUTPUT = path.join(__dirname, "..", "README.md");

function run() {
  const spec = JSON.parse(fs.readFileSync(MERGED_SPEC, "utf-8"));
  const mcp = JSON.parse(fs.readFileSync(MCP_REF, "utf-8"));

  const lines = [];

  // Header
  lines.push("# 📚 GoHighLevel API v2 - Documentación Completa");
  lines.push("");
  lines.push("**Documentación auto-sincronizada de la API de GoHighLevel v2.0 con especificación OpenAPI unificada y referencia del servidor MCP.**");
  lines.push("");
  lines.push(`🔗 **URL Base**: \`${spec.servers[0].url}\``);
  lines.push(`📦 **Total de endpoints**: 413 operaciones`);
  lines.push(`📂 **Categorías**: 95`);
  lines.push(`🔄 **Auto-actualización**: Cada lunes a las 6:00 UTC`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // TOC
  lines.push("## 📖 Índice");
  lines.push("");
  lines.push("- [¿Qué es esto?](#qué-es-esto)");
  lines.push("- [¿Para qué sirve?](#para-qué-sirve)");
  lines.push("- [Formas de usar esta documentación](#formas-de-usar-esta-documentación)");
  lines.push("  - [1. Como contexto para IA (Claude, ChatGPT, etc.)](#1-como-contexto-para-ia-claude-chatgpt-etc)");
  lines.push("  - [2. Configurar el servidor MCP](#2-configurar-el-servidor-mcp)");
  lines.push("  - [3. Generar tipos TypeScript](#3-generar-tipos-typescript)");
  lines.push("  - [4. Importar a Postman](#4-importar-a-postman)");
  lines.push("  - [5. Generar SDK en cualquier lenguaje](#5-generar-sdk-en-cualquier-lenguaje)");
  lines.push("- [Todos los Endpoints Disponibles](#todos-los-endpoints-disponibles)");
  lines.push("- [Autenticación](#autenticación)");
  lines.push("- [Comandos disponibles](#comandos-disponibles)");
  lines.push("");
  lines.push("---");
  lines.push("");

  // What is this
  lines.push("## ¿Qué es esto?");
  lines.push("");
  lines.push("Este repositorio contiene **toda la documentación oficial de la API de GoHighLevel v2** en un solo lugar, actualizada automáticamente cada semana.");
  lines.push("");
  lines.push("**¿Qué incluye?**");
  lines.push("");
  lines.push("- ✅ **413 endpoints** de la API organizados y documentados");
  lines.push("- ✅ **Especificación OpenAPI 3.0 unificada** (un solo archivo con todas las APIs)");
  lines.push("- ✅ **Documentación del servidor MCP** con configuraciones listas para copiar");
  lines.push("- ✅ **Markdown optimizado para IA** (45.5KB con todos los endpoints)");
  lines.push("- ✅ **Auto-sincronización semanal** desde el repo oficial de GoHighLevel");
  lines.push("");
  lines.push("---");
  lines.push("");

  // What is it for
  lines.push("## ¿Para qué sirve?");
  lines.push("");
  lines.push("### 🤖 Para desarrolladores que usan IA");
  lines.push("Puedes darle este repositorio como contexto a Claude, ChatGPT, o cualquier IA para que entienda toda la API de GoHighLevel y te ayude a:");
  lines.push("- Escribir código que interactúe con la API");
  lines.push("- Entender qué endpoints existen y cómo usarlos");
  lines.push("- Generar tipos TypeScript automáticamente");
  lines.push("- Crear integraciones con GoHighLevel");
  lines.push("");
  lines.push("### 🔧 Para desarrolladores en general");
  lines.push("- Tener toda la API en un solo archivo OpenAPI para importar en Postman, Insomnia, etc.");
  lines.push("- Generar SDKs automáticamente en cualquier lenguaje (JavaScript, Python, PHP, etc.)");
  lines.push("- Consultar rápidamente qué endpoints existen sin navegar la documentación web");
  lines.push("");
  lines.push("---");
  lines.push("");

  // How to use
  lines.push("## Formas de usar esta documentación");
  lines.push("");

  // AI context
  lines.push("### 1. Como contexto para IA (Claude, ChatGPT, etc.)");
  lines.push("");
  lines.push("#### En Claude Code o Cursor");
  lines.push("Simplemente menciona en tu conversación:");
  lines.push('```');
  lines.push("Lee https://github.com/auratechia-code/gohighlevel-docs/blob/main/generated/ghl-api-context.md");
  lines.push('```');
  lines.push("");
  lines.push("O clona este repo como submódulo en tu proyecto:");
  lines.push("```bash");
  lines.push("git submodule add https://github.com/auratechia-code/gohighlevel-docs.git docs/ghl");
  lines.push("```");
  lines.push("");
  lines.push("Luego en tu `CLAUDE.md` o en conversaciones:");
  lines.push('```markdown');
  lines.push("Ver docs/ghl/generated/ghl-api-context.md para referencia de la API de GoHighLevel");
  lines.push('```');
  lines.push("");
  lines.push("#### En ChatGPT o cualquier otra IA");
  lines.push("Copia y pega el contenido de `generated/ghl-api-context.md` al inicio de tu conversación.");
  lines.push("");

  // MCP
  lines.push("### 2. Configurar el servidor MCP");
  lines.push("");
  lines.push("El servidor MCP te permite conectar Claude Desktop, Cursor, o Claude Code directamente a tu cuenta de GoHighLevel.");
  lines.push("");
  lines.push("#### Paso 1: Obtén tus credenciales");
  lines.push("1. Entra a tu sub-cuenta de GoHighLevel");
  lines.push("2. Ve a **Settings → Private Integrations**");
  lines.push("3. Crea una nueva integración y selecciona los permisos (scopes) que necesitas");
  lines.push("4. Copia el API Key generado (este es tu token)");
  lines.push("5. Ve a **Settings → Company → Business Info** y copia tu Location ID");
  lines.push("");
  lines.push("#### Paso 2: Configura tu cliente");
  lines.push("");
  lines.push("**Para Claude Desktop** (`claude_desktop_config.json`):");
  lines.push("```json");
  lines.push(JSON.stringify(mcp.clientConfigurations.claudeDesktop.config, null, 2));
  lines.push("```");
  lines.push("");
  lines.push("**Para Claude Code** (`~/.claude/settings.json` o `.mcp.json` en tu proyecto):");
  lines.push("```json");
  lines.push(JSON.stringify(mcp.clientConfigurations.claudeCode.config, null, 2));
  lines.push("```");
  lines.push("");
  lines.push("**Para Cursor** (`.cursor/mcp.json`):");
  lines.push("```json");
  lines.push(JSON.stringify(mcp.clientConfigurations.cursor.config, null, 2));
  lines.push("```");
  lines.push("");
  lines.push("Reemplaza `<YOUR_PRIVATE_INTEGRATION_TOKEN>` y `<YOUR_LOCATION_ID>` con tus credenciales del Paso 1.");
  lines.push("");
  lines.push("Ver `generated/mcp-reference.json` para más detalles sobre las herramientas disponibles.");
  lines.push("");

  // TypeScript
  lines.push("### 3. Generar tipos TypeScript");
  lines.push("");
  lines.push("Si trabajas con TypeScript, puedes generar tipos automáticamente desde el spec OpenAPI:");
  lines.push("```bash");
  lines.push("npx openapi-typescript specs/merged-openapi.json -o ghl-api.d.ts");
  lines.push("```");
  lines.push("");
  lines.push("Esto te da autocompletado y type-checking para toda la API de GoHighLevel.");
  lines.push("");

  // Postman
  lines.push("### 4. Importar a Postman");
  lines.push("");
  lines.push("1. Abre Postman");
  lines.push("2. Click en **Import**");
  lines.push("3. Selecciona **Upload Files**");
  lines.push("4. Sube el archivo `specs/merged-openapi.json`");
  lines.push("5. Los 413 endpoints se importarán automáticamente organizados por categorías");
  lines.push("");

  // SDK generation
  lines.push("### 5. Generar SDK en cualquier lenguaje");
  lines.push("");
  lines.push("Usando `openapi-generator`, puedes generar un SDK completo en el lenguaje que prefieras:");
  lines.push("");
  lines.push("**JavaScript/TypeScript:**");
  lines.push("```bash");
  lines.push("npx @openapitools/openapi-generator-cli generate \\");
  lines.push("  -i specs/merged-openapi.json \\");
  lines.push("  -g typescript-fetch \\");
  lines.push("  -o ./ghl-sdk");
  lines.push("```");
  lines.push("");
  lines.push("**Python:**");
  lines.push("```bash");
  lines.push("npx @openapitools/openapi-generator-cli generate \\");
  lines.push("  -i specs/merged-openapi.json \\");
  lines.push("  -g python \\");
  lines.push("  -o ./ghl-sdk-python");
  lines.push("```");
  lines.push("");
  lines.push("**PHP:**");
  lines.push("```bash");
  lines.push("npx @openapitools/openapi-generator-cli generate \\");
  lines.push("  -i specs/merged-openapi.json \\");
  lines.push("  -g php \\");
  lines.push("  -o ./ghl-sdk-php");
  lines.push("```");
  lines.push("");
  lines.push("Ver todos los lenguajes disponibles: https://openapi-generator.tech/docs/generators");
  lines.push("");
  lines.push("---");
  lines.push("");

  // All endpoints
  lines.push("## Todos los Endpoints Disponibles");
  lines.push("");
  lines.push(`**Total: 413 operaciones organizadas en ${Object.keys(groupEndpointsByTag(spec)).length} categorías**`);
  lines.push("");

  const endpointsByTag = groupEndpointsByTag(spec);
  const sortedTags = Object.keys(endpointsByTag).sort();

  for (const tag of sortedTags) {
    const endpoints = endpointsByTag[tag];
    lines.push(`### ${tag} (${endpoints.length})`);
    lines.push("");
    lines.push("| Método | Endpoint | Descripción | Permisos |");
    lines.push("|--------|----------|-------------|----------|");

    for (const ep of endpoints) {
      const scopes = ep.scopes.length > 0 ? ep.scopes.join(", ") : "N/A";
      const summary = ep.summary || "Sin descripción";
      lines.push(`| **${ep.method}** | \`${ep.path}\` | ${summary} | ${scopes} |`);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("");

  // Authentication
  lines.push("## Autenticación");
  lines.push("");
  lines.push("Todos los endpoints requieren autenticación mediante un **Bearer Token**.");
  lines.push("");
  lines.push("### Obtener un token");
  lines.push("");
  lines.push("**Opción 1: Private Integration Token (recomendado para desarrollo)**");
  lines.push("1. Settings → Private Integrations");
  lines.push("2. Crear nueva integración");
  lines.push("3. Seleccionar los scopes necesarios");
  lines.push("4. Copiar el token generado");
  lines.push("");
  lines.push("**Opción 2: OAuth 2.0 (para apps públicas)**");
  lines.push("- Ver la documentación oficial: https://marketplace.gohighlevel.com/docs/oauth/GettingStarted");
  lines.push("");
  lines.push("### Usar el token en tus requests");
  lines.push("");
  lines.push("```bash");
  lines.push("curl -X GET https://services.leadconnectorhq.com/contacts/ \\");
  lines.push('  -H "Authorization: Bearer TU_TOKEN_AQUI" \\');
  lines.push('  -H "Version: 2021-07-28"');
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Commands
  lines.push("## Comandos disponibles");
  lines.push("");
  lines.push("Si clonaste este repositorio localmente:");
  lines.push("");
  lines.push("```bash");
  lines.push("# Primera instalación");
  lines.push("npm run setup");
  lines.push("");
  lines.push("# Actualizar desde el repo oficial de GoHighLevel");
  lines.push("npm run update");
  lines.push("");
  lines.push("# Solo sincronizar (sin regenerar archivos)");
  lines.push("npm run sync");
  lines.push("");
  lines.push("# Regenerar archivos (merge, MCP docs, AI context)");
  lines.push("npm run build");
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Footer
  lines.push("## 📚 Recursos adicionales");
  lines.push("");
  lines.push("- **Documentación oficial de GoHighLevel**: https://marketplace.gohighlevel.com/docs/oauth/GettingStarted");
  lines.push("- **Repositorio oficial de specs**: https://github.com/GoHighLevel/highlevel-api-docs");
  lines.push("- **Guía del servidor MCP**: https://help.gohighlevel.com/support/solutions/articles/155000005741");
  lines.push("- **Comunidad de desarrolladores**: https://developers.gohighlevel.com/");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 🤝 Contribuir");
  lines.push("");
  lines.push("Este repositorio se sincroniza automáticamente desde el repo oficial de GoHighLevel cada lunes. Si encuentras algún error o quieres sugerir mejoras en la estructura de este repo, abre un issue o pull request.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("**Generado automáticamente desde**: https://github.com/GoHighLevel/highlevel-api-docs");
  lines.push(`**Última actualización**: ${new Date().toISOString().split('T')[0]}`);

  const content = lines.join("\n");
  fs.writeFileSync(OUTPUT, content, "utf-8");

  console.log("README en español generado:");
  console.log(`  Output: ${OUTPUT}`);
  console.log(`  Endpoints documentados: ${Object.values(endpointsByTag).flat().length}`);
  console.log(`  Categorías: ${sortedTags.length}`);
  console.log(`  Tamaño: ${(Buffer.byteLength(content) / 1024).toFixed(1)} KB`);
}

function groupEndpointsByTag(spec) {
  const endpointsByTag = {};

  for (const [pathKey, methods] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      if (method.startsWith("x-") || method === "parameters") continue;

      const tags = operation.tags || ["Sin categoría"];
      for (const tag of tags) {
        if (!endpointsByTag[tag]) endpointsByTag[tag] = [];
        endpointsByTag[tag].push({
          method: method.toUpperCase(),
          path: pathKey,
          summary: operation.summary || "",
          scopes: extractScopes(operation.security),
        });
      }
    }
  }

  return endpointsByTag;
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
