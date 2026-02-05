# How to Use This Documentation

## 🤖 As AI Context (Recommended)

### Claude Code
Add this to your project's `CLAUDE.md` or reference it in conversations:
```markdown
See https://github.com/auratechia-code/gohighlevel-docs/blob/main/generated/ghl-api-context.md for GoHighLevel API reference.
```

Or clone this repo as a submodule in your projects:
```bash
git submodule add https://github.com/auratechia-code/gohighlevel-docs.git docs/ghl
```

Then reference `docs/ghl/generated/ghl-api-context.md` in your code.

### Cursor IDE
1. Clone this repo locally
2. Add to `.cursorrules` or project docs
3. Reference the markdown file when asking about GHL API

### Any AI Chat
Copy/paste the contents of `generated/ghl-api-context.md` into your conversation context.

---

## 📡 Using the MCP Server

### Setup for Claude Desktop
Edit your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "gohighlevel": {
      "url": "https://services.leadconnectorhq.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_PRIVATE_INTEGRATION_TOKEN",
        "x-location-id": "YOUR_LOCATION_ID"
      }
    }
  }
}
```

### Setup for Claude Code
Edit `~/.claude/settings.json` or create `.mcp.json` in your project:
```json
{
  "mcpServers": {
    "gohighlevel": {
      "type": "url",
      "url": "https://services.leadconnectorhq.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_PRIVATE_INTEGRATION_TOKEN",
        "x-location-id": "YOUR_LOCATION_ID"
      }
    }
  }
}
```

### Getting Your Credentials
1. Go to your GoHighLevel sub-account
2. Settings → Private Integrations
3. Create new integration with required scopes
4. Copy the API key (this is your token)
5. Settings → Company → Business Info to find Location ID

See `generated/mcp-reference.json` for more details and available tools.

---

## 🛠️ Using the OpenAPI Spec

### Generate TypeScript Types
```bash
npm install -g openapi-typescript
openapi-typescript specs/merged-openapi.json -o ghl-api.d.ts
```

### Generate SDK (any language)
```bash
npx @openapitools/openapi-generator-cli generate \
  -i specs/merged-openapi.json \
  -g typescript-fetch \
  -o ./generated-sdk
```

### Import to Postman
1. Open Postman
2. Import → Upload Files
3. Select `specs/merged-openapi.json`
4. All 413 endpoints will be imported

### Serve Interactive Docs
```bash
npx @redocly/cli preview-docs specs/merged-openapi.json
# Opens at http://localhost:8080
```

---

## 🔄 Keeping Updated

This repo auto-syncs every Monday at 06:00 UTC via GitHub Actions.

To manually update:
```bash
git pull
npm run update
```

To use in your projects, add as submodule and it will always have the latest API docs.

---

## 📊 What's Available

- **413 API operations** across 285 paths
- **792 schemas** with full type definitions
- **95 tags/categories** (Contacts, Calendars, Workflows, etc.)
- **36+ MCP tools** documented with configs
- **AI-optimized markdown** (45.5KB, perfect for context windows)

## 🔗 Links

- **This repo**: https://github.com/auratechia-code/gohighlevel-docs
- **Official API Docs**: https://marketplace.gohighlevel.com/docs/oauth/GettingStarted
- **Official Repo**: https://github.com/GoHighLevel/highlevel-api-docs
- **MCP Guide**: https://help.gohighlevel.com/support/solutions/articles/155000005741
