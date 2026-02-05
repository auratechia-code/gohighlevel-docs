# 📚 GoHighLevel API v2 - Documentación Completa

**Documentación auto-sincronizada de la API de GoHighLevel v2.0 con especificación OpenAPI unificada y referencia del servidor MCP.**

🔗 **URL Base**: `https://services.leadconnectorhq.com`
📦 **Total de endpoints**: 413 operaciones
📂 **Categorías**: 95
🔄 **Auto-actualización**: Cada lunes a las 6:00 UTC

---

## 📖 Índice

- [¿Qué es esto?](#qué-es-esto)
- [¿Para qué sirve?](#para-qué-sirve)
- [Formas de usar esta documentación](#formas-de-usar-esta-documentación)
  - [1. Como contexto para IA (Claude, ChatGPT, etc.)](#1-como-contexto-para-ia-claude-chatgpt-etc)
  - [2. Configurar el servidor MCP](#2-configurar-el-servidor-mcp)
  - [3. Generar tipos TypeScript](#3-generar-tipos-typescript)
  - [4. Importar a Postman](#4-importar-a-postman)
  - [5. Generar SDK en cualquier lenguaje](#5-generar-sdk-en-cualquier-lenguaje)
- [Todos los Endpoints Disponibles](#todos-los-endpoints-disponibles)
- [Autenticación](#autenticación)
- [Comandos disponibles](#comandos-disponibles)

---

## ¿Qué es esto?

Este repositorio contiene **toda la documentación oficial de la API de GoHighLevel v2** en un solo lugar, actualizada automáticamente cada semana.

**¿Qué incluye?**

- ✅ **413 endpoints** de la API organizados y documentados
- ✅ **Especificación OpenAPI 3.0 unificada** (un solo archivo con todas las APIs)
- ✅ **Documentación del servidor MCP** con configuraciones listas para copiar
- ✅ **Markdown optimizado para IA** (45.5KB con todos los endpoints)
- ✅ **Auto-sincronización semanal** desde el repo oficial de GoHighLevel

---

## ¿Para qué sirve?

### 🤖 Para desarrolladores que usan IA
Puedes darle este repositorio como contexto a Claude, ChatGPT, o cualquier IA para que entienda toda la API de GoHighLevel y te ayude a:
- Escribir código que interactúe con la API
- Entender qué endpoints existen y cómo usarlos
- Generar tipos TypeScript automáticamente
- Crear integraciones con GoHighLevel

### 🔧 Para desarrolladores en general
- Tener toda la API en un solo archivo OpenAPI para importar en Postman, Insomnia, etc.
- Generar SDKs automáticamente en cualquier lenguaje (JavaScript, Python, PHP, etc.)
- Consultar rápidamente qué endpoints existen sin navegar la documentación web

---

## Formas de usar esta documentación

### 1. Como contexto para IA (Claude, ChatGPT, etc.)

#### En Claude Code o Cursor
Simplemente menciona en tu conversación:
```
Lee https://github.com/auratechia-code/gohighlevel-docs/blob/main/generated/ghl-api-context.md
```

O clona este repo como submódulo en tu proyecto:
```bash
git submodule add https://github.com/auratechia-code/gohighlevel-docs.git docs/ghl
```

Luego en tu `CLAUDE.md` o en conversaciones:
```markdown
Ver docs/ghl/generated/ghl-api-context.md para referencia de la API de GoHighLevel
```

#### En ChatGPT o cualquier otra IA
Copia y pega el contenido de `generated/ghl-api-context.md` al inicio de tu conversación.

### 2. Configurar el servidor MCP

El servidor MCP te permite conectar Claude Desktop, Cursor, o Claude Code directamente a tu cuenta de GoHighLevel.

#### Paso 1: Obtén tus credenciales
1. Entra a tu sub-cuenta de GoHighLevel
2. Ve a **Settings → Private Integrations**
3. Crea una nueva integración y selecciona los permisos (scopes) que necesitas
4. Copia el API Key generado (este es tu token)
5. Ve a **Settings → Company → Business Info** y copia tu Location ID

#### Paso 2: Configura tu cliente

**Para Claude Desktop** (`claude_desktop_config.json`):
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

**Para Claude Code** (`~/.claude/settings.json` o `.mcp.json` en tu proyecto):
```json
{
  "mcpServers": {
    "gohighlevel": {
      "type": "url",
      "url": "https://services.leadconnectorhq.com/mcp/",
      "headers": {
        "Authorization": "Bearer <YOUR_PRIVATE_INTEGRATION_TOKEN>",
        "x-location-id": "<YOUR_LOCATION_ID>"
      }
    }
  }
}
```

**Para Cursor** (`.cursor/mcp.json`):
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

Reemplaza `<YOUR_PRIVATE_INTEGRATION_TOKEN>` y `<YOUR_LOCATION_ID>` con tus credenciales del Paso 1.

Ver `generated/mcp-reference.json` para más detalles sobre las herramientas disponibles.

### 3. Generar tipos TypeScript

Si trabajas con TypeScript, puedes generar tipos automáticamente desde el spec OpenAPI:
```bash
npx openapi-typescript specs/merged-openapi.json -o ghl-api.d.ts
```

Esto te da autocompletado y type-checking para toda la API de GoHighLevel.

### 4. Importar a Postman

1. Abre Postman
2. Click en **Import**
3. Selecciona **Upload Files**
4. Sube el archivo `specs/merged-openapi.json`
5. Los 413 endpoints se importarán automáticamente organizados por categorías

### 5. Generar SDK en cualquier lenguaje

Usando `openapi-generator`, puedes generar un SDK completo en el lenguaje que prefieras:

**JavaScript/TypeScript:**
```bash
npx @openapitools/openapi-generator-cli generate \
  -i specs/merged-openapi.json \
  -g typescript-fetch \
  -o ./ghl-sdk
```

**Python:**
```bash
npx @openapitools/openapi-generator-cli generate \
  -i specs/merged-openapi.json \
  -g python \
  -o ./ghl-sdk-python
```

**PHP:**
```bash
npx @openapitools/openapi-generator-cli generate \
  -i specs/merged-openapi.json \
  -g php \
  -o ./ghl-sdk-php
```

Ver todos los lenguajes disponibles: https://openapi-generator.tech/docs/generators

---

## Todos los Endpoints Disponibles

**Total: 413 operaciones organizadas en 95 categorías**

### Account (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/{locationId}/accounts` | Get Accounts | socialplanner/account.readonly |
| **DELETE** | `/social-media-posting/{locationId}/accounts/{id}` | Delete Account | N/A |

### Actions (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/voice-ai/actions` | Create Agent Action | voice-ai-agent-goals.write |
| **PUT** | `/voice-ai/actions/{actionId}` | Update Agent Action | voice-ai-agent-goals.write |
| **GET** | `/voice-ai/actions/{actionId}` | Get Agent Action | voice-ai-agent-goals.readonly |
| **DELETE** | `/voice-ai/actions/{actionId}` | Delete Agent Action | voice-ai-agent-goals.write |

### Agents (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/voice-ai/agents` | Create Agent | voice-ai-agents.write |
| **GET** | `/voice-ai/agents` | List Agents | voice-ai-agents.readonly |
| **PATCH** | `/voice-ai/agents/{agentId}` | Patch Agent | voice-ai-agents.write |
| **GET** | `/voice-ai/agents/{agentId}` | Get Agent | voice-ai-agents.readonly |
| **DELETE** | `/voice-ai/agents/{agentId}` | Delete Agent | voice-ai-agents.write |

### App Management (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **DELETE** | `/marketplace/app/{appId}/installations` | Uninstall an application | N/A |
| **GET** | `/marketplace/app/{appId}/installations` | Get Installer Details | N/A |

### Appointment Notes (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/calendars/appointments/{appointmentId}/notes` | Get Notes | calendars/events.readonly |
| **POST** | `/calendars/appointments/{appointmentId}/notes` | Create Note | calendars/events.write |
| **PUT** | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Update Note | calendars/events.write |
| **DELETE** | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Delete Note | calendars/events.write |

### Appointments (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/contacts/{contactId}/appointments` | Get Appointments for Contact | contacts.readonly |

### Associations (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/associations/key/{key_name}` | Get association key by key name | associations.readonly |
| **GET** | `/associations/objectKey/{objectKey}` | Get association by object keys | associations.readonly |
| **PUT** | `/associations/{associationId}` | Update Association By Id | associations.write |
| **DELETE** | `/associations/{associationId}` | Delete Association | associations.write |
| **GET** | `/associations/{associationId}` | Get association by ID | associations.readonly |
| **POST** | `/associations/` | Create Association | associations.write |
| **GET** | `/associations/` | Get all associations for a sub-account / location | associations.readonly |

### Blogs (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/blogs/posts/url-slug-exists` | Check url slug | blogs/check-slug.readonly |
| **PUT** | `/blogs/posts/{postId}` | Update Blog Post | blogs/post-update.write |
| **POST** | `/blogs/posts` | Create Blog Post | blogs/post.write |
| **GET** | `/blogs/authors` | Get all authors | blogs/author.readonly |
| **GET** | `/blogs/categories` | Get all categories | blogs/category.readonly |
| **GET** | `/blogs/posts/all` | Get Blog posts by Blog ID | blogs/posts.readonly |
| **GET** | `/blogs/site/all` | Get Blogs by Location ID | blogs/list.readonly |

### Bulk (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/contacts/bulk/tags/update/{type}` | Update Contacts Tags | N/A |
| **POST** | `/contacts/bulk/business` | Add/Remove Contacts From Business | N/A |

### Businesses (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **PUT** | `/businesses/{businessId}` | Update Business | businesses.write |
| **DELETE** | `/businesses/{businessId}` | Delete Business | businesses.write |
| **GET** | `/businesses/{businessId}` | Get Business | businesses.readonly |
| **GET** | `/businesses/` | Get Businesses by Location | businesses.readonly |
| **POST** | `/businesses/` | Create Business | businesses.write |

### CSV (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/social-media-posting/{locationId}/csv` | Upload CSV | socialplanner/csv.write |
| **GET** | `/social-media-posting/{locationId}/csv` | Get Upload Status | N/A |
| **POST** | `/social-media-posting/{locationId}/set-accounts` | Set Accounts | socialplanner/csv.write |
| **GET** | `/social-media-posting/{locationId}/csv/{id}` | Get CSV Post | N/A |
| **PATCH** | `/social-media-posting/{locationId}/csv/{id}` | Start CSV Finalize | N/A |
| **DELETE** | `/social-media-posting/{locationId}/csv/{id}` | Delete CSV | N/A |
| **DELETE** | `/social-media-posting/{locationId}/csv/{csvId}/post/{postId}` | Delete CSV Post | N/A |

### Calendar Events (8)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/calendars/events/appointments` | Create appointment | calendars/events.write |
| **PUT** | `/calendars/events/appointments/{eventId}` | Update Appointment | calendars/events.write |
| **GET** | `/calendars/events/appointments/{eventId}` | Get Appointment | calendars/events.readonly |
| **GET** | `/calendars/events` | Get Calendar Events | calendars/events.readonly |
| **GET** | `/calendars/blocked-slots` | Get Blocked Slots | calendars/events.readonly |
| **POST** | `/calendars/events/block-slots` | Create Block Slot | calendars/events.write |
| **PUT** | `/calendars/events/block-slots/{eventId}` | Update Block Slot | calendars/events.write |
| **DELETE** | `/calendars/events/{eventId}` | Delete Event | calendars/events.write |

### Calendar Groups (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/calendars/groups` | Get Groups | calendars/groups.readonly |
| **POST** | `/calendars/groups` | Create Calendar Group | calendars/groups.write |
| **POST** | `/calendars/groups/validate-slug` | Validate group slug | calendars/groups.write |
| **DELETE** | `/calendars/groups/{groupId}` | Delete Group | calendars/groups.write |
| **PUT** | `/calendars/groups/{groupId}` | Update Group | calendars/groups.write |
| **PUT** | `/calendars/groups/{groupId}/status` | Disable Group | calendars/groups.write |

### Calendar Notifications (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/calendars/{calendarId}/notifications` | Get notifications | calendars/events.readonly |
| **POST** | `/calendars/{calendarId}/notifications` | Create notification | calendars/events.write |
| **GET** | `/calendars/{calendarId}/notifications/{notificationId}` | Get notification | calendars/events.readonly |
| **PUT** | `/calendars/{calendarId}/notifications/{notificationId}` | Update notification | calendars/events.write |
| **DELETE** | `/calendars/{calendarId}/notifications/{notificationId}` | Delete Notification | calendars/events.write |

### Calendar Resources: Rooms & Equipments (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/calendars/resources/{resourceType}/{id}` | Get Calendar Resource | calendars/resources.readonly |
| **PUT** | `/calendars/resources/{resourceType}/{id}` | Update Calendar Resource | calendars/resources.write |
| **DELETE** | `/calendars/resources/{resourceType}/{id}` | Delete Calendar Resource | calendars/resources.write |
| **GET** | `/calendars/resources/{resourceType}` | List Calendar Resources | calendars/resources.readonly |
| **POST** | `/calendars/resources/{resourceType}` | Create Calendar Resource | calendars/resources.write |

### Calendars (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/calendars/{calendarId}/free-slots` | Get Free Slots | calendars.readonly |
| **PUT** | `/calendars/{calendarId}` | Update Calendar | calendars.write |
| **GET** | `/calendars/{calendarId}` | Get Calendar | calendars.readonly |
| **DELETE** | `/calendars/{calendarId}` | Delete Calendar | calendars.write |
| **GET** | `/calendars/` | Get Calendars | calendars.readonly |
| **POST** | `/calendars/` | Create Calendar | calendars.write |

### Campaigns (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/campaigns/` | Get Campaigns | campaigns.readonly |
| **POST** | `/contacts/{contactId}/campaigns/{campaignId}` | Add Contact to Campaign | contacts.write |
| **DELETE** | `/contacts/{contactId}/campaigns/{campaignId}` | Remove Contact From Campaign | contacts.write |
| **DELETE** | `/contacts/{contactId}/campaigns/removeAll` | Remove Contact From Every Campaign | contacts.write |
| **GET** | `/emails/schedule` | Get Campaigns | emails/schedule.readonly |

### Category (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/{locationId}/categories` | Get categories by location id | socialplanner/category.readonly |
| **GET** | `/social-media-posting/{locationId}/categories/{id}` | Get categories by id | N/A |

### Collections (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/products/collections` | Fetch Product Collections | products/collection.readonly |
| **POST** | `/products/collections` | Create Product Collection | products/collection.write |
| **GET** | `/products/collections/{collectionId}` | Get Details about individual product collection | products/collection.readonly |
| **PUT** | `/products/collections/{collectionId}` | Update Product Collection | products/collection.write |
| **DELETE** | `/products/collections/{collectionId}` | Delete Product Collection | products/collection.write |

### Companies (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/companies/{companyId}` | Get Company | companies.readonly |

### Contacts (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/contacts/{contactId}` | Get Contact | contacts.readonly |
| **PUT** | `/contacts/{contactId}` | Update Contact | contacts.write |
| **DELETE** | `/contacts/{contactId}` | Delete Contact | contacts.write |
| **POST** | `/contacts/upsert` | Upsert Contact | contacts.write |
| **GET** | `/contacts/business/{businessId}` | Get Contacts By BusinessId | contacts.readonly |
| **POST** | `/contacts/` | Create Contact | contacts.write |
| **GET** | `/contacts/` | Get Contacts | contacts.readonly |

### Conversations (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/conversations/{conversationId}` | Get Conversation | conversations.readonly |
| **PUT** | `/conversations/{conversationId}` | Update Conversation | conversations.write |
| **DELETE** | `/conversations/{conversationId}` | Delete Conversation | conversations.write |
| **POST** | `/conversations/` | Create Conversation | conversations.write |

### Coupons (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/payments/coupon/list` | List Coupons | payments/coupons.readonly |
| **POST** | `/payments/coupon` | Create Coupon | payments/coupons.write |
| **PUT** | `/payments/coupon` | Update Coupon | payments/coupons.write |
| **DELETE** | `/payments/coupon` | Delete Coupon | payments/coupons.write |
| **GET** | `/payments/coupon` | Fetch Coupon | payments/coupons.readonly |

### Custom Field (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/locations/{locationId}/customFields` | Get Custom Fields | locations/customFields.readonly |
| **POST** | `/locations/{locationId}/customFields` | Create Custom Field | locations/customFields.write |
| **GET** | `/locations/{locationId}/customFields/{id}` | Get Custom Field | N/A |
| **PUT** | `/locations/{locationId}/customFields/{id}` | Update Custom Field | N/A |
| **DELETE** | `/locations/{locationId}/customFields/{id}` | Delete Custom Field | N/A |
| **POST** | `/locations/{locationId}/customFields/upload` | Uploads File to customFields | locations/customFields.write |

### Custom Fields V2 (8)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/custom-fields/{id}` | Get Custom Field / Folder By Id | locations/customFields.readonly |
| **PUT** | `/custom-fields/{id}` | Update Custom Field By Id | locations/customFields.write |
| **DELETE** | `/custom-fields/{id}` | Delete Custom Field By Id | locations/customFields.write |
| **GET** | `/custom-fields/object-key/{objectKey}` | Get Custom Fields By Object Key | locations/customFields.readonly |
| **POST** | `/custom-fields/folder` | Create Custom Field Folder | locations/customFields.write |
| **PUT** | `/custom-fields/folder/{id}` | Update Custom Field Folder Name | locations/customFields.write |
| **DELETE** | `/custom-fields/folder/{id}` | Delete Custom Field Folder | locations/customFields.write |
| **POST** | `/custom-fields/` | Create Custom Field | locations/customFields.write |

### Custom Menu Links (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/custom-menus/{customMenuId}` | Get Custom Menu Link | custom-menu-link.readonly |
| **DELETE** | `/custom-menus/{customMenuId}` | Delete Custom Menu Link | custom-menu-link.write |
| **PUT** | `/custom-menus/{customMenuId}` | Update Custom Menu Link | custom-menu-link.write |
| **GET** | `/custom-menus/` | Get Custom Menu Links | custom-menu-link.readonly |
| **POST** | `/custom-menus/` | Create Custom Menu Link | custom-menu-link.write |

### Custom Provider (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/payments/custom-provider/provider` | Create new integration | payments/custom-provider.write |
| **DELETE** | `/payments/custom-provider/provider` | Deleting an existing integration | payments/custom-provider.write |
| **GET** | `/payments/custom-provider/connect` | Fetch given provider config | payments/custom-provider.readonly |
| **POST** | `/payments/custom-provider/connect` | Create new provider config | payments/custom-provider.write |
| **POST** | `/payments/custom-provider/disconnect` | Disconnect existing provider config | payments/custom-provider.write |
| **PUT** | `/payments/custom-provider/capabilities` | Custom-provider marketplace app update capabilities | payments/custom-provider.write |

### Custom Value (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/locations/{locationId}/customValues` | Get Custom Values | locations/customValues.readonly |
| **POST** | `/locations/{locationId}/customValues` | Create Custom Value | locations/customValues.write |
| **GET** | `/locations/{locationId}/customValues/{id}` | Get Custom Value | N/A |
| **PUT** | `/locations/{locationId}/customValues/{id}` | Update Custom Value | N/A |
| **DELETE** | `/locations/{locationId}/customValues/{id}` | Delete Custom Value | N/A |

### Dashboard (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/voice-ai/dashboard/call-logs` | List Call Logs | voice-ai-dashboard.readonly |
| **GET** | `/voice-ai/dashboard/call-logs/{callId}` | Get Call Log | voice-ai-dashboard.readonly |

### Documents (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/proposals/document` | List documents | N/A |
| **POST** | `/proposals/document/send` | Send document | N/A |

### Email (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/conversations/messages/email/{id}` | Get email by Id | N/A |
| **DELETE** | `/conversations/messages/email/{emailMessageId}/schedule` | Cancel a scheduled email message. | N/A |

### Email Verification (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/email/verify` | Email Verification | N/A |

### Estimate (13)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/invoices/estimate` | Create New Estimate | invoices/estimate.write |
| **PUT** | `/invoices/estimate/{estimateId}` | Update Estimate | invoices/estimate.write |
| **DELETE** | `/invoices/estimate/{estimateId}` | Delete Estimate | invoices/estimate.write |
| **GET** | `/invoices/estimate/number/generate` | Generate Estimate Number | invoices/estimate.readonly |
| **POST** | `/invoices/estimate/{estimateId}/send` | Send Estimate | invoices/estimate.write |
| **POST** | `/invoices/estimate/{estimateId}/invoice` | Create Invoice from Estimate | invoices/estimate.write |
| **GET** | `/invoices/estimate/list` | List Estimates | invoices/estimate.readonly |
| **PATCH** | `/invoices/estimate/stats/last-visited-at` | Update estimate last visited at | N/A |
| **GET** | `/invoices/estimate/template` | List Estimate Templates | invoices/estimate.readonly |
| **POST** | `/invoices/estimate/template` | Create Estimate Template | invoices/estimate.write |
| **PUT** | `/invoices/estimate/template/{templateId}` | Update Estimate Template | invoices/estimate.write |
| **DELETE** | `/invoices/estimate/template/{templateId}` | Delete Estimate Template | invoices/estimate.write |
| **GET** | `/invoices/estimate/template/preview` | Preview Estimate Template | invoices/estimate.readonly |

### Followers (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/contacts/{contactId}/followers` | Add Followers | contacts.write |
| **DELETE** | `/contacts/{contactId}/followers` | Remove Followers | contacts.write |
| **POST** | `/opportunities/{id}/followers` | Add Followers | opportunities.write |
| **DELETE** | `/opportunities/{id}/followers` | Remove Followers | opportunities.write |

### Forms (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/forms/submissions` | Get Forms Submissions | forms.readonly |
| **POST** | `/forms/upload-custom-files` | Upload files to custom fields | forms.write |
| **GET** | `/forms/` | Get Forms | forms.readonly |

### Funnel (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/funnels/funnel/list` | Fetch List of Funnels | N/A |
| **GET** | `/funnels/page` | Fetch list of funnel pages | N/A |
| **GET** | `/funnels/page/count` | Fetch count of funnel pages | N/A |

### Integrations (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/payments/integrations/provider/whitelabel` | Create White-label Integration Provider | payments/integration.write |
| **GET** | `/payments/integrations/provider/whitelabel` | List White-label Integration Providers | payments/integration.readonly |

### Invoice (11)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/invoices/generate-invoice-number` | Generate Invoice Number | invoices.readonly |
| **GET** | `/invoices/{invoiceId}` | Get invoice | invoices.readonly |
| **PUT** | `/invoices/{invoiceId}` | Update invoice | invoices.write |
| **DELETE** | `/invoices/{invoiceId}` | Delete invoice | invoices.write |
| **PATCH** | `/invoices/{invoiceId}/late-fees-configuration` | Update invoice late fees configuration | N/A |
| **POST** | `/invoices/{invoiceId}/void` | Void invoice | invoices.write |
| **POST** | `/invoices/{invoiceId}/send` | Send invoice | invoices.write |
| **POST** | `/invoices/{invoiceId}/record-payment` | Record a manual payment for an invoice | invoices.write |
| **PATCH** | `/invoices/stats/last-visited-at` | Update invoice last visited at | N/A |
| **POST** | `/invoices/` | Create Invoice | invoices.write |
| **GET** | `/invoices/` | List invoices | invoices.readonly |

### Medias (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/medias/files` | Get List of Files/ Folders | medias.readonly |
| **POST** | `/medias/upload-file` | Upload File into Media Library | medias.write |
| **DELETE** | `/medias/{id}` | Delete File or Folder | medias.write |
| **POST** | `/medias/{id}` | Update File/ Folder | N/A |
| **POST** | `/medias/folder` | Create Folder | N/A |
| **PUT** | `/medias/update-files` | Bulk Update Files/ Folders | N/A |
| **PUT** | `/medias/delete-files` | Bulk Delete / Trash Files or Folders | N/A |

### Messages (11)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/conversations/messages/{id}` | Get message by message id | conversations/message.readonly |
| **GET** | `/conversations/{conversationId}/messages` | Get messages by conversation id | conversations/message.readonly |
| **POST** | `/conversations/messages` | Send a new message | conversations/message.write |
| **POST** | `/conversations/messages/inbound` | Add an inbound message | conversations/message.write |
| **POST** | `/conversations/messages/outbound` | Add an external outbound call | conversations/message.write |
| **DELETE** | `/conversations/messages/{messageId}/schedule` | Cancel a scheduled message. | conversations/message.write |
| **POST** | `/conversations/messages/upload` | Upload file attachments | conversations/message.write |
| **PUT** | `/conversations/messages/{messageId}/status` | Update message status | conversations/message.write |
| **GET** | `/conversations/messages/{messageId}/locations/{locationId}/recording` | Get Recording by Message ID | N/A |
| **GET** | `/conversations/locations/{locationId}/messages/{messageId}/transcription` | Get transcription by Message ID | N/A |
| **GET** | `/conversations/locations/{locationId}/messages/{messageId}/transcription/download` | Download transcription by Message ID | N/A |

### Notes (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/contacts/{contactId}/notes` | Get All Notes | contacts.readonly |
| **POST** | `/contacts/{contactId}/notes` | Create Note | contacts.write |
| **GET** | `/contacts/{contactId}/notes/{id}` | Get Note | contacts.readonly |
| **PUT** | `/contacts/{contactId}/notes/{id}` | Update Note | contacts.write |
| **DELETE** | `/contacts/{contactId}/notes/{id}` | Delete Note | contacts.write |

### Number Pools (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/phone-system/number-pools` | List Number Pools | numberpools.read |

### OAuth 2.0 (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/oauth/token` | Get Access Token | N/A |
| **POST** | `/oauth/locationToken` | Get Location Access Token from Agency Token | oauth.write |
| **GET** | `/oauth/installedLocations` | Get Location where app is installed | oauth.readonly |

### Oauth | Facebook (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/facebook/start` | Starts OAuth For Facebook Account | N/A |
| **GET** | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Get facebook pages | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Attach facebook pages | N/A |

### Oauth | Google (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/google/start` | Starts OAuth For Google Account | socialplanner/oauth.readonly |
| **GET** | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Get google business locations | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Set google business locations | N/A |

### Oauth | Instagram (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/instagram/start` | Starts OAuth For Instagram Account | socialplanner/oauth.readonly |
| **GET** | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Get Instagram Professional Accounts | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Attach Instagram Professional Accounts | N/A |

### Oauth | LinkedIn (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/linkedin/start` | Starts OAuth For LinkedIn Account | N/A |
| **GET** | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Get Linkedin pages and profile | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Attach linkedin pages and profile | N/A |

### Oauth | Tiktok (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/tiktok/start` | Starts OAuth For Tiktok Account | socialplanner/oauth.readonly |
| **GET** | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Get Tiktok profile | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Attach Tiktok profile | N/A |
| **GET** | `/social-media-posting/oauth/tiktok-business/start` | Starts OAuth For Tiktok Business Account | socialplanner/oauth.readonly |
| **GET** | `/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}` | Get Tiktok Business profile | N/A |

### Oauth | Twitter (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/oauth/twitter/start` | Starts OAuth For Twitter Account | socialplanner/oauth.readonly |
| **GET** | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Get Twitter profile | N/A |
| **POST** | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Attach Twitter profile | N/A |

### Object Schema (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/objects/{key}` | Get Object Schema by key / id | objects/schema.readonly |
| **PUT** | `/objects/{key}` | Update Object Schema By Key / Id | objects/schema.write |
| **GET** | `/objects/` | Get all objects for a location | objects/schema.readonly |
| **POST** | `/objects/` | Create Custom Object | objects/schema.write |

### Opportunities (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/opportunities/{id}` | Get Opportunity | opportunities.readonly |
| **DELETE** | `/opportunities/{id}` | Delete Opportunity | opportunities.write |
| **PUT** | `/opportunities/{id}` | Update Opportunity | opportunities.write |
| **PUT** | `/opportunities/{id}/status` | Update Opportunity Status | opportunities.write |
| **POST** | `/opportunities/upsert` | Upsert Opportunity | opportunities.write |
| **POST** | `/opportunities/` | Create Opportunity | opportunities.write |

### Order Notes (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/payments/orders/{orderId}/notes` | List Order Notes | N/A |

### Order fulfillments (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/payments/orders/{orderId}/fulfillments` | Create order fulfillment | payments/orders.write |
| **GET** | `/payments/orders/{orderId}/fulfillments` | List fulfillment | payments/orders.readonly |

### Orders (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/payments/orders` | List Orders | payments/orders.readonly |
| **GET** | `/payments/orders/{orderId}` | Get Order by ID | payments/orders.readonly |
| **POST** | `/payments/orders/{orderId}/record-payment` | Record Order Payment | payments/orders.collectPayment |
| **POST** | `/payments/orders/migrate-order-ps` | migration Endpoint for Order Payment Status | N/A |

### Phone Numbers (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/phone-system/numbers/location/{locationId}` | List active numbers | phonenumbers.read |

### Pipelines (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/opportunities/pipelines` | Get Pipelines | opportunities.readonly |

### Post (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/social-media-posting/{locationId}/posts/list` | Get posts | socialplanner/post.readonly |
| **POST** | `/social-media-posting/{locationId}/posts` | Create post | socialplanner/post.write |
| **GET** | `/social-media-posting/{locationId}/posts/{id}` | Get post | N/A |
| **PUT** | `/social-media-posting/{locationId}/posts/{id}` | Edit post | N/A |
| **DELETE** | `/social-media-posting/{locationId}/posts/{id}` | Delete Post | N/A |
| **POST** | `/social-media-posting/{locationId}/posts/bulk-delete` | Bulk Delete Social Planner Posts | N/A |

### Prices (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/products/{productId}/price` | Create Price for a Product | products/prices.write |
| **GET** | `/products/{productId}/price` | List Prices for a Product | products/prices.readonly |
| **GET** | `/products/inventory` | List Inventory | products/prices.readonly |
| **POST** | `/products/inventory` | Update Inventory | products/prices.write |
| **GET** | `/products/{productId}/price/{priceId}` | Get Price by ID for a Product | products/prices.readonly |
| **PUT** | `/products/{productId}/price/{priceId}` | Update Price by ID for a Product | products/prices.write |
| **DELETE** | `/products/{productId}/price/{priceId}` | Delete Price by ID for a Product | products/prices.write |

### Products (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/products/bulk-update` | Bulk Update Products | products.write |
| **POST** | `/products/bulk-update/edit` | Bulk Edit Products and Prices | N/A |
| **GET** | `/products/{productId}` | Get Product by ID | products.readonly |
| **DELETE** | `/products/{productId}` | Delete Product by ID | products.write |
| **PUT** | `/products/{productId}` | Update Product by ID | products.write |
| **POST** | `/products/` | Create Product | products.write |
| **GET** | `/products/` | List Products | products.readonly |

### Providers (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/conversations/providers/live-chat/typing` | Agent/Ai-Bot is typing a message indicator for live chat | conversations/livechat.write |

### Records (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/objects/{schemaKey}/records/{id}` | Get Record By Id | N/A |
| **PUT** | `/objects/{schemaKey}/records/{id}` | Update Record | N/A |
| **DELETE** | `/objects/{schemaKey}/records/{id}` | Delete Record | N/A |
| **POST** | `/objects/{schemaKey}/records` | Create Record | objects/record.write |

### Recurring Tasks (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/locations/{locationId}/recurring-tasks/{id}` | Get Recurring Task By Id | N/A |
| **PUT** | `/locations/{locationId}/recurring-tasks/{id}` | Update Recurring Task | N/A |
| **DELETE** | `/locations/{locationId}/recurring-tasks/{id}` | Delete Recurring Task | N/A |
| **POST** | `/locations/{locationId}/recurring-tasks` | Create Recurring Task | N/A |

### Redirect (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/funnels/lookup/redirect` | Create Redirect | funnels/redirect.write |
| **PATCH** | `/funnels/lookup/redirect/{id}` | Update Redirect By Id | funnels/redirect.write |
| **DELETE** | `/funnels/lookup/redirect/{id}` | Delete Redirect By Id | funnels/redirect.write |
| **GET** | `/funnels/lookup/redirect/list` | Fetch List of Redirects | funnels/redirect.readonly |

### Relations (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/associations/relations` | Create Relation for you associated entities. | associations/relation.write |
| **GET** | `/associations/relations/{recordId}` | Get all relations By record Id | associations/relation.readonly |
| **DELETE** | `/associations/relations/{relationId}` | Delete Relation | associations/relation.write |

### Reviews (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/products/reviews` | Fetch Product Reviews | products.readonly |
| **GET** | `/products/reviews/count` | Fetch Review Count as per status | products.readonly |
| **PUT** | `/products/reviews/{reviewId}` | Update Product Reviews | products.write |
| **DELETE** | `/products/reviews/{reviewId}` | Delete Product Review | products.write |
| **POST** | `/products/reviews/bulk-update` | Update Product Reviews | products.write |

### Saas (22)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/saas-api/public-api/locations` | Get locations by stripeId with companyId | N/A |
| **PUT** | `/saas-api/public-api/update-saas-subscription/{locationId}` | Update SaaS subscription | N/A |
| **POST** | `/saas-api/public-api/bulk-disable-saas/{companyId}` | Disable SaaS for locations | N/A |
| **POST** | `/saas-api/public-api/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | N/A |
| **POST** | `/saas-api/public-api/pause/{locationId}` | Pause location | N/A |
| **POST** | `/saas-api/public-api/update-rebilling/{companyId}` | Update Rebilling | N/A |
| **GET** | `/saas-api/public-api/agency-plans/{companyId}` | Get Agency Plans | N/A |
| **GET** | `/saas-api/public-api/get-saas-subscription/{locationId}` | Get Location Subscription Details | N/A |
| **POST** | `/saas-api/public-api/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | N/A |
| **GET** | `/saas-api/public-api/saas-locations/{companyId}` | Get SaaS Locations | N/A |
| **GET** | `/saas-api/public-api/saas-plan/{planId}` | Get SaaS Plan | N/A |
| **GET** | `/saas/locations` | Get locations by stripeId with companyId | N/A |
| **PUT** | `/saas/update-saas-subscription/{locationId}` | Update SaaS subscription | N/A |
| **POST** | `/saas/bulk-disable-saas/{companyId}` | Disable SaaS for locations | N/A |
| **POST** | `/saas/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | N/A |
| **POST** | `/saas/pause/{locationId}` | Pause location | N/A |
| **POST** | `/saas/update-rebilling/{companyId}` | Update Rebilling | N/A |
| **GET** | `/saas/agency-plans/{companyId}` | Get Agency Plans | N/A |
| **GET** | `/saas/get-saas-subscription/{locationId}` | Get Location Subscription Details | N/A |
| **POST** | `/saas/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | N/A |
| **GET** | `/saas/saas-locations/{companyId}` | Get SaaS Locations | N/A |
| **GET** | `/saas/saas-plan/{planId}` | Get SaaS Plan | N/A |

### Schedule (9)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/invoices/schedule` | Create Invoice Schedule | invoices/schedule.write |
| **GET** | `/invoices/schedule` | List schedules | invoices/schedule.readonly |
| **GET** | `/invoices/schedule/{scheduleId}` | Get an schedule | invoices/schedule.readonly |
| **PUT** | `/invoices/schedule/{scheduleId}` | Update schedule | invoices/schedule.write |
| **DELETE** | `/invoices/schedule/{scheduleId}` | Delete schedule | invoices/schedule.write |
| **POST** | `/invoices/schedule/{scheduleId}/updateAndSchedule` | Update scheduled recurring invoice | invoices/schedule.write |
| **POST** | `/invoices/schedule/{scheduleId}/schedule` | Schedule an schedule invoice | invoices/schedule.write |
| **POST** | `/invoices/schedule/{scheduleId}/auto-payment` | Manage Auto payment for an schedule invoice | invoices/schedule.write |
| **POST** | `/invoices/schedule/{scheduleId}/cancel` | Cancel an scheduled invoice | invoices/schedule.write |

### Search (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/contacts/search` | Search Contacts | contacts.readonly |
| **GET** | `/contacts/search/duplicate` | Get Duplicate Contact | contacts.readonly |
| **GET** | `/conversations/search` | Search Conversations | conversations.readonly |
| **GET** | `/locations/search` | Search | locations.readonly |
| **GET** | `/opportunities/search` | Search Opportunity | opportunities.readonly |
| **GET** | `/users/search` | Search Users | users.readonly |
| **POST** | `/users/search/filter-by-email` | Filter Users by Email | users.readonly |

### Search Object Records (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/objects/{schemaKey}/records/search` | Search Object Records | objects/record.readonly |

### Shipping Carrier (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/store/shipping-carrier` | Create Shipping Carrier | N/A |
| **GET** | `/store/shipping-carrier` | List Shipping Carriers | N/A |
| **GET** | `/store/shipping-carrier/{shippingCarrierId}` | Get Shipping Carrier | N/A |
| **PUT** | `/store/shipping-carrier/{shippingCarrierId}` | Update Shipping Carrier | N/A |
| **DELETE** | `/store/shipping-carrier/{shippingCarrierId}` | Delete shipping carrier | N/A |

### Shipping Zone (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/store/shipping-zone` | Create Shipping Zone | N/A |
| **GET** | `/store/shipping-zone` | List Shipping Zones | N/A |
| **GET** | `/store/shipping-zone/{shippingZoneId}` | Get Shipping Zone | N/A |
| **PUT** | `/store/shipping-zone/{shippingZoneId}` | Update Shipping Zone | N/A |
| **DELETE** | `/store/shipping-zone/{shippingZoneId}` | Delete shipping zone | N/A |
| **POST** | `/store/shipping-zone/shipping-rates` | Get available shipping rates | N/A |

### Shipping Zone Rates (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | Create Shipping Rate | N/A |
| **GET** | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | List Shipping Rates | N/A |
| **GET** | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Get Shipping Rate | N/A |
| **PUT** | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Update Shipping Rate | N/A |
| **DELETE** | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Delete shipping rate | N/A |

### Sin categoría (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/courses/courses-exporter/public/import` | Import Courses | N/A |

### Snapshots (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/snapshots/` | Get Snapshots | N/A |
| **POST** | `/snapshots/share/link` | Create Snapshot Share Link | N/A |
| **GET** | `/snapshots/snapshot-status/{snapshotId}` | Get Snapshot Push between Dates | N/A |
| **GET** | `/snapshots/snapshot-status/{snapshotId}/location/{locationId}` | Get Last Snapshot Push | N/A |

### Statistics (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/social-media-posting/statistics` | Get Social Media Statistics | N/A |

### Store (3)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/products/store/{storeId}/stats` | Fetch Product Store Stats | products.readonly |
| **POST** | `/products/store/{storeId}` | Action to include/exclude the product in store | products.write |
| **POST** | `/products/store/{storeId}/priority` | Update product display priorities in store | N/A |

### Store Setting (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/store/store-setting` | Create/Update Store Settings | N/A |
| **GET** | `/store/store-setting` | Get Store Settings | N/A |

### Sub-Account (Formerly Location) (4)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/locations/{locationId}` | Get Sub-Account (Formerly Location) | locations.readonly |
| **PUT** | `/locations/{locationId}` | Put Sub-Account (Formerly Location) | locations.write |
| **DELETE** | `/locations/{locationId}` | Delete Sub-Account (Formerly Location) | locations.internal-access-only |
| **POST** | `/locations/` | Create Sub-Account (Formerly Location) | locations.write |

### Subscriptions (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/payments/subscriptions` | List Subscriptions | payments/subscriptions.readonly |
| **GET** | `/payments/subscriptions/{subscriptionId}` | Get Subscription by ID | payments/subscriptions.readonly |

### Surveys (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/surveys/submissions` | Get Surveys Submissions | surveys.readonly |
| **GET** | `/surveys/` | Get Surveys | surveys.readonly |

### Tag (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/social-media-posting/{locationId}/tags` | Get tags by location id | N/A |
| **POST** | `/social-media-posting/{locationId}/tags/details` | Get tags by ids | N/A |

### Tags (7)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/contacts/{contactId}/tags` | Add Tags | contacts.write |
| **DELETE** | `/contacts/{contactId}/tags` | Remove Tags | contacts.write |
| **GET** | `/locations/{locationId}/tags` | Get Tags | locations/tags.readonly |
| **POST** | `/locations/{locationId}/tags` | Create Tag | locations/tags.write |
| **GET** | `/locations/{locationId}/tags/{tagId}` | Get tag by id | N/A |
| **PUT** | `/locations/{locationId}/tags/{tagId}` | Update tag | N/A |
| **DELETE** | `/locations/{locationId}/tags/{tagId}` | Delete tag | N/A |

### Tasks (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/contacts/{contactId}/tasks` | Get all Tasks | contacts.readonly |
| **POST** | `/contacts/{contactId}/tasks` | Create Task | contacts.write |
| **GET** | `/contacts/{contactId}/tasks/{taskId}` | Get Task | contacts.readonly |
| **PUT** | `/contacts/{contactId}/tasks/{taskId}` | Update Task | contacts.write |
| **DELETE** | `/contacts/{contactId}/tasks/{taskId}` | Delete Task | contacts.write |
| **PUT** | `/contacts/{contactId}/tasks/{taskId}/completed` | Update Task Completed | contacts.write |

### Tasks Search (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/locations/{locationId}/tasks/search` | Task Search Filter | locations/tasks.readonly |

### Template (9)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/invoices/template` | Create template | invoices/template.write |
| **GET** | `/invoices/template` | List templates | invoices/template.readonly |
| **GET** | `/invoices/template/{templateId}` | Get an template | invoices/template.readonly |
| **PUT** | `/invoices/template/{templateId}` | Update template | invoices/template.write |
| **DELETE** | `/invoices/template/{templateId}` | Delete template | invoices/template.write |
| **PATCH** | `/invoices/template/{templateId}/late-fees-configuration` | Update template late fees configuration | N/A |
| **PATCH** | `/invoices/template/{templateId}/payment-methods-configuration` | Update template late fees configuration | N/A |
| **GET** | `/locations/{locationId}/templates` | GET all or email/sms templates | locations/templates.readonly |
| **DELETE** | `/locations/{locationId}/templates/{id}` | DELETE an email/sms template | N/A |

### Templates (6)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/emails/builder` | Create a new template | emails/builder.write |
| **GET** | `/emails/builder` | Fetch email templates | emails/builder.readonly |
| **DELETE** | `/emails/builder/{locationId}/{templateId}` | Delete a template | N/A |
| **POST** | `/emails/builder/data` | Update a template | emails/builder.write |
| **GET** | `/proposals/templates` | List templates | N/A |
| **POST** | `/proposals/templates/send` | Send template | N/A |

### Text2Pay (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/invoices/text2pay` | Create & Send | invoices.write |

### Timezone (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/locations/{locationId}/timezones` | Fetch Timezones | locations.readonly |

### Transactions (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/payments/transactions` | List Transactions | payments/transactions.readonly |
| **GET** | `/payments/transactions/{transactionId}` | Get Transaction by ID | payments/transactions.readonly |

### Trigger Links (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/links/id/{linkId}` | Get Link by ID | N/A |
| **PUT** | `/links/{linkId}` | Update Link | links.write |
| **DELETE** | `/links/{linkId}` | Delete Link | links.write |
| **GET** | `/links/` | Get Links | links.readonly |
| **POST** | `/links/` | Create Link | links.write |

### Trigger Links Search (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/links/search` | Search Trigger Links | N/A |

### Users (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/users/{userId}` | Get User | users.readonly |
| **PUT** | `/users/{userId}` | Update User | users.write |
| **DELETE** | `/users/{userId}` | Delete User | users.write |
| **GET** | `/users/` | Get User by Location | users.readonly |
| **POST** | `/users/` | Create User | users.write |

### Wallet Charges (5)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/marketplace/billing/charges` | Create a new wallet charge | charges.write |
| **GET** | `/marketplace/billing/charges` | Get all wallet charges | charges.readonly |
| **DELETE** | `/marketplace/billing/charges/{chargeId}` | Delete a wallet charge | charges.write |
| **GET** | `/marketplace/billing/charges/{chargeId}` | Get specific wallet charge details | charges.readonly |
| **GET** | `/marketplace/billing/charges/has-funds` | Check if account has sufficient funds | charges.readonly |

### Workflow (2)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **POST** | `/contacts/{contactId}/workflow/{workflowId}` | Add Contact to Workflow | contacts.write |
| **DELETE** | `/contacts/{contactId}/workflow/{workflowId}` | Delete Contact from Workflow | contacts.write |

### Workflows (1)

| Método | Endpoint | Descripción | Permisos |
|--------|----------|-------------|----------|
| **GET** | `/workflows/` | Get Workflow | workflows.readonly |

---

## Autenticación

Todos los endpoints requieren autenticación mediante un **Bearer Token**.

### Obtener un token

**Opción 1: Private Integration Token (recomendado para desarrollo)**
1. Settings → Private Integrations
2. Crear nueva integración
3. Seleccionar los scopes necesarios
4. Copiar el token generado

**Opción 2: OAuth 2.0 (para apps públicas)**
- Ver la documentación oficial: https://marketplace.gohighlevel.com/docs/oauth/GettingStarted

### Usar el token en tus requests

```bash
curl -X GET https://services.leadconnectorhq.com/contacts/ \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Version: 2021-07-28"
```

---

## Comandos disponibles

Si clonaste este repositorio localmente:

```bash
# Primera instalación
npm run setup

# Actualizar desde el repo oficial de GoHighLevel
npm run update

# Solo sincronizar (sin regenerar archivos)
npm run sync

# Regenerar archivos (merge, MCP docs, AI context)
npm run build
```

---

## 📚 Recursos adicionales

- **Documentación oficial de GoHighLevel**: https://marketplace.gohighlevel.com/docs/oauth/GettingStarted
- **Repositorio oficial de specs**: https://github.com/GoHighLevel/highlevel-api-docs
- **Guía del servidor MCP**: https://help.gohighlevel.com/support/solutions/articles/155000005741
- **Comunidad de desarrolladores**: https://developers.gohighlevel.com/

---

## 🤝 Contribuir

Este repositorio se sincroniza automáticamente desde el repo oficial de GoHighLevel cada lunes. Si encuentras algún error o quieres sugerir mejoras en la estructura de este repo, abre un issue o pull request.

---

**Generado automáticamente desde**: https://github.com/GoHighLevel/highlevel-api-docs
**Última actualización**: 2026-02-05