# GoHighLevel API v2 - Documentation Hub

Auto-synced, unified documentation for the GoHighLevel API 2.0 and MCP Server.

## What's Inside

```
specs/
  original/           # Git submodule → GoHighLevel/highlevel-api-docs (36 OpenAPI specs)
  merged-openapi.json # Single unified OpenAPI 3.0 spec (413 operations, 792 schemas)

generated/
  api-summary.json    # Stats and metadata about the merged spec
  mcp-reference.json  # MCP server tools, config examples, and auth setup
  ghl-api-context.md  # Compact markdown with all endpoints (optimized for AI context)

scripts/
  merge-openapi-specs.js  # Merges 36 individual specs into one
  generate-mcp-docs.js    # Generates MCP server reference
  generate-ai-context.js  # Generates AI-friendly markdown summary

.github/workflows/
  sync.yml            # Weekly auto-sync from upstream + rebuild
```

## Setup

```bash
git clone <this-repo-url>
cd gohighlevel-docs
npm run setup
```

## Usage

### As AI Context (Claude Code, Cursor, etc.)

Point your AI tool to `generated/ghl-api-context.md` as project documentation. This 45KB file contains every endpoint, method, path, and required scope.

For Claude Code, you can add to your project's `CLAUDE.md`:
```
See generated/ghl-api-context.md for GoHighLevel API reference.
See generated/mcp-reference.json for MCP server configuration.
```

### As OpenAPI Spec

Use `specs/merged-openapi.json` with any OpenAPI-compatible tool:

- **Swagger UI / Redoc**: Serve interactive API docs
- **openapi-typescript**: Generate TypeScript types
- **openapi-generator**: Generate SDK clients in any language
- **Postman**: Import as collection

### Using the GHL MCP Server Directly

Add to your Claude Desktop config (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "gohighlevel": {
      "url": "https://services.leadconnectorhq.com/mcp/",
      "headers": {
        "Authorization": "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
        "x-location-id": "<YOUR_LOCATION_ID>"
      }
    }
  }
}
```

See `generated/mcp-reference.json` for configs for Cursor and Claude Code.

## Updating

```bash
# Manual update
npm run update

# Or just sync without rebuild
npm run sync
npm run build
```

The GitHub Action runs every Monday at 06:00 UTC and auto-commits if there are upstream changes.

## Commands

| Command | Description |
|---------|-------------|
| `npm run setup` | First-time setup (clone submodule + build) |
| `npm run update` | Pull latest from upstream + rebuild |
| `npm run sync` | Pull latest submodule only |
| `npm run merge` | Merge 36 specs into one |
| `npm run mcp-docs` | Generate MCP reference |
| `npm run ai-context` | Generate AI context markdown |
| `npm run build` | Run all generators |

## Sources

- [GoHighLevel API Docs](https://marketplace.gohighlevel.com/docs/oauth/GettingStarted)
- [GoHighLevel API Docs Repo](https://github.com/GoHighLevel/highlevel-api-docs)
- [HighLevel MCP Server Guide](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)
