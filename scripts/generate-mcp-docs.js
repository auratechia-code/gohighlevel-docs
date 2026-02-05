#!/usr/bin/env node

/**
 * Generates documentation for the GoHighLevel MCP Server.
 *
 * The official HighLevel MCP server is at:
 *   https://services.leadconnectorhq.com/mcp/
 *
 * This script creates a reference document with all known MCP tools,
 * configuration examples for popular AI clients, and authentication setup.
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_PATH = path.join(__dirname, "..", "generated", "mcp-reference.json");

const mcpReference = {
  generatedAt: new Date().toISOString(),
  server: {
    name: "HighLevel MCP Server",
    description:
      "Official GoHighLevel MCP (Model Context Protocol) server providing AI agents access to GoHighLevel data and functionality.",
    endpoint: "https://services.leadconnectorhq.com/mcp/",
    transport: "HTTP (Streamable)",
    authentication: {
      method: "Private Integration Token (PIT)",
      headers: {
        Authorization: "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
        "x-location-id": "<YOUR_LOCATION_ID>",
      },
      setup: [
        "Go to Settings > Private Integrations in your GoHighLevel sub-account",
        "Create a new Private Integration",
        "Enable the scopes you need (contacts, calendars, conversations, etc.)",
        "Copy the generated API key (this is your PIT)",
        "Find your Location ID in Settings > Company > Business Info",
      ],
    },
  },
  tools: {
    calendar: [
      {
        name: "get_calendar_events",
        description: "Retrieve calendar events for a location",
        requiredScope: "calendars.readonly",
      },
      {
        name: "get_appointment_notes",
        description: "Get notes for a specific appointment",
        requiredScope: "calendars.readonly",
      },
    ],
    contacts: [
      {
        name: "search_contacts",
        description: "Search for contacts by various criteria",
        requiredScope: "contacts.readonly",
      },
      {
        name: "get_contact",
        description: "Get a single contact by ID",
        requiredScope: "contacts.readonly",
      },
      {
        name: "create_contact",
        description: "Create a new contact",
        requiredScope: "contacts.write",
      },
      {
        name: "update_contact",
        description: "Update an existing contact",
        requiredScope: "contacts.write",
      },
      {
        name: "delete_contact",
        description: "Delete a contact",
        requiredScope: "contacts.write",
      },
      {
        name: "add_contact_tags",
        description: "Add tags to a contact",
        requiredScope: "contacts.write",
      },
      {
        name: "remove_contact_tags",
        description: "Remove tags from a contact",
        requiredScope: "contacts.write",
      },
      {
        name: "get_contact_tasks",
        description: "Get tasks for a contact",
        requiredScope: "contacts.readonly",
      },
      {
        name: "create_contact_task",
        description: "Create a task for a contact",
        requiredScope: "contacts.write",
      },
    ],
    conversations: [
      {
        name: "search_conversations",
        description: "Search conversations",
        requiredScope: "conversations.readonly",
      },
      {
        name: "get_conversation",
        description: "Get a specific conversation",
        requiredScope: "conversations.readonly",
      },
      {
        name: "send_message",
        description: "Send a message in a conversation",
        requiredScope: "conversations.write",
      },
    ],
    opportunities: [
      {
        name: "search_opportunities",
        description: "Search opportunities/deals in pipelines",
        requiredScope: "opportunities.readonly",
      },
      {
        name: "get_opportunity",
        description: "Get a specific opportunity",
        requiredScope: "opportunities.readonly",
      },
      {
        name: "create_opportunity",
        description: "Create a new opportunity",
        requiredScope: "opportunities.write",
      },
      {
        name: "update_opportunity",
        description: "Update an existing opportunity",
        requiredScope: "opportunities.write",
      },
    ],
    payments: [
      {
        name: "get_orders",
        description: "Get payment orders",
        requiredScope: "payments.readonly",
      },
      {
        name: "get_transactions",
        description: "Get payment transactions",
        requiredScope: "payments.readonly",
      },
    ],
    content: [
      {
        name: "get_blogs",
        description: "Get blog posts",
        requiredScope: "blogs.readonly",
      },
      {
        name: "get_email_templates",
        description: "Get email templates",
        requiredScope: "emails.readonly",
      },
      {
        name: "create_social_post",
        description: "Create a social media post",
        requiredScope: "social-media-posting.write",
      },
    ],
  },
  clientConfigurations: {
    claudeDesktop: {
      description: "Configuration for Claude Desktop (claude_desktop_config.json)",
      config: {
        mcpServers: {
          gohighlevel: {
            url: "https://services.leadconnectorhq.com/mcp/",
            headers: {
              Authorization: "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
              "x-location-id": "<YOUR_LOCATION_ID>",
            },
          },
        },
      },
    },
    cursor: {
      description: "Configuration for Cursor IDE (.cursor/mcp.json)",
      config: {
        mcpServers: {
          gohighlevel: {
            url: "https://services.leadconnectorhq.com/mcp/",
            headers: {
              Authorization: "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
              "x-location-id": "<YOUR_LOCATION_ID>",
            },
          },
        },
      },
    },
    claudeCode: {
      description:
        "Configuration for Claude Code CLI (~/.claude/settings.json or project .mcp.json)",
      config: {
        mcpServers: {
          gohighlevel: {
            type: "url",
            url: "https://services.leadconnectorhq.com/mcp/",
            headers: {
              Authorization: "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
              "x-location-id": "<YOUR_LOCATION_ID>",
            },
          },
        },
      },
    },
  },
  communityMCPServers: [
    {
      name: "@mastanley13/ghl-mcp-server",
      description: "269+ tools, most comprehensive community MCP server",
      npm: "https://www.npmjs.com/package/@mastanley13/ghl-mcp-server",
      github: "https://github.com/mastanley13/GoHighLevel-MCP",
    },
    {
      name: "@drausal/gohighlevel-mcp",
      description: "Auto-generated from OpenAPI spec, easier to maintain",
      npm: "https://www.npmjs.com/package/@drausal/gohighlevel-mcp",
      github: "https://github.com/drausal/gohighlevel-mcp",
    },
  ],
  references: {
    officialDocs:
      "https://marketplace.gohighlevel.com/docs/oauth/GettingStarted",
    mcpGuide:
      "https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server",
    apiDocsRepo: "https://github.com/GoHighLevel/highlevel-api-docs",
    developerCommunity: "https://developers.gohighlevel.com/",
  },
};

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(mcpReference, null, 2), "utf-8");

console.log("MCP Reference generated:");
console.log(`  Output: ${OUTPUT_PATH}`);
console.log(
  `  Tools documented: ${Object.values(mcpReference.tools).flat().length}`
);
console.log(
  `  Categories: ${Object.keys(mcpReference.tools).join(", ")}`
);
console.log(
  `  Client configs: ${Object.keys(mcpReference.clientConfigurations).join(", ")}`
);
