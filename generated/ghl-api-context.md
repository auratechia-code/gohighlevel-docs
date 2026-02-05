# GoHighLevel API v2 - Complete Reference

Base URL: `https://services.leadconnectorhq.com`
Source: https://github.com/GoHighLevel/highlevel-api-docs
Generated: 2026-02-05T14:50:53.842Z

## Authentication

All endpoints require a Bearer token (OAuth2 or Private Integration Token).
Header: `Authorization: Bearer <token>`
Most endpoints also require a `Version` header with the API version date.

## API Endpoints

### Account

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/{locationId}/accounts` | Get Accounts | `socialplanner/account.readonly` |
| DELETE | `/social-media-posting/{locationId}/accounts/{id}` | Delete Account | - |

### Actions

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/voice-ai/actions` | Create Agent Action | `voice-ai-agent-goals.write` |
| PUT | `/voice-ai/actions/{actionId}` | Update Agent Action | `voice-ai-agent-goals.write` |
| GET | `/voice-ai/actions/{actionId}` | Get Agent Action | `voice-ai-agent-goals.readonly` |
| DELETE | `/voice-ai/actions/{actionId}` | Delete Agent Action | `voice-ai-agent-goals.write` |

### Agents

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/voice-ai/agents` | Create Agent | `voice-ai-agents.write` |
| GET | `/voice-ai/agents` | List Agents | `voice-ai-agents.readonly` |
| PATCH | `/voice-ai/agents/{agentId}` | Patch Agent | `voice-ai-agents.write` |
| GET | `/voice-ai/agents/{agentId}` | Get Agent | `voice-ai-agents.readonly` |
| DELETE | `/voice-ai/agents/{agentId}` | Delete Agent | `voice-ai-agents.write` |

### App Management

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| DELETE | `/marketplace/app/{appId}/installations` | Uninstall an application | - |
| GET | `/marketplace/app/{appId}/installations` | Get Installer Details | - |

### Appointment Notes

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/calendars/appointments/{appointmentId}/notes` | Get Notes | `calendars/events.readonly` |
| POST | `/calendars/appointments/{appointmentId}/notes` | Create Note | `calendars/events.write` |
| PUT | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Update Note | `calendars/events.write` |
| DELETE | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Delete Note | `calendars/events.write` |

### Appointments

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/contacts/{contactId}/appointments` | Get Appointments for Contact | `contacts.readonly` |

### Associations

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/associations/key/{key_name}` | Get association key by key name | `associations.readonly` |
| GET | `/associations/objectKey/{objectKey}` | Get association by object keys | `associations.readonly` |
| PUT | `/associations/{associationId}` | Update Association By Id | `associations.write` |
| DELETE | `/associations/{associationId}` | Delete Association | `associations.write` |
| GET | `/associations/{associationId}` | Get association by ID | `associations.readonly` |
| POST | `/associations/` | Create Association | `associations.write` |
| GET | `/associations/` | Get all associations for a sub-account / location | `associations.readonly` |

### Blogs

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/blogs/posts/url-slug-exists` | Check url slug | `blogs/check-slug.readonly` |
| PUT | `/blogs/posts/{postId}` | Update Blog Post | `blogs/post-update.write` |
| POST | `/blogs/posts` | Create Blog Post | `blogs/post.write` |
| GET | `/blogs/authors` | Get all authors | `blogs/author.readonly` |
| GET | `/blogs/categories` | Get all categories | `blogs/category.readonly` |
| GET | `/blogs/posts/all` | Get Blog posts by Blog ID | `blogs/posts.readonly` |
| GET | `/blogs/site/all` | Get Blogs by Location ID | `blogs/list.readonly` |

### Bulk

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/contacts/bulk/tags/update/{type}` | Update Contacts Tags | - |
| POST | `/contacts/bulk/business` | Add/Remove Contacts From Business | - |

### Businesses

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| PUT | `/businesses/{businessId}` | Update Business | `businesses.write` |
| DELETE | `/businesses/{businessId}` | Delete Business | `businesses.write` |
| GET | `/businesses/{businessId}` | Get Business | `businesses.readonly` |
| GET | `/businesses/` | Get Businesses by Location | `businesses.readonly` |
| POST | `/businesses/` | Create Business | `businesses.write` |

### CSV

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/social-media-posting/{locationId}/csv` | Upload CSV | `socialplanner/csv.write` |
| GET | `/social-media-posting/{locationId}/csv` | Get Upload Status | - |
| POST | `/social-media-posting/{locationId}/set-accounts` | Set Accounts | `socialplanner/csv.write` |
| GET | `/social-media-posting/{locationId}/csv/{id}` | Get CSV Post | - |
| PATCH | `/social-media-posting/{locationId}/csv/{id}` | Start CSV Finalize | - |
| DELETE | `/social-media-posting/{locationId}/csv/{id}` | Delete CSV | - |
| DELETE | `/social-media-posting/{locationId}/csv/{csvId}/post/{postId}` | Delete CSV Post | - |

### Calendar Events

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/calendars/events/appointments` | Create appointment | `calendars/events.write` |
| PUT | `/calendars/events/appointments/{eventId}` | Update Appointment | `calendars/events.write` |
| GET | `/calendars/events/appointments/{eventId}` | Get Appointment | `calendars/events.readonly` |
| GET | `/calendars/events` | Get Calendar Events | `calendars/events.readonly` |
| GET | `/calendars/blocked-slots` | Get Blocked Slots | `calendars/events.readonly` |
| POST | `/calendars/events/block-slots` | Create Block Slot | `calendars/events.write` |
| PUT | `/calendars/events/block-slots/{eventId}` | Update Block Slot | `calendars/events.write` |
| DELETE | `/calendars/events/{eventId}` | Delete Event | `calendars/events.write` |

### Calendar Groups

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/calendars/groups` | Get Groups | `calendars/groups.readonly` |
| POST | `/calendars/groups` | Create Calendar Group | `calendars/groups.write` |
| POST | `/calendars/groups/validate-slug` | Validate group slug | `calendars/groups.write` |
| DELETE | `/calendars/groups/{groupId}` | Delete Group | `calendars/groups.write` |
| PUT | `/calendars/groups/{groupId}` | Update Group | `calendars/groups.write` |
| PUT | `/calendars/groups/{groupId}/status` | Disable Group | `calendars/groups.write` |

### Calendar Notifications

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/calendars/{calendarId}/notifications` | Get notifications | `calendars/events.readonly` |
| POST | `/calendars/{calendarId}/notifications` | Create notification | `calendars/events.write` |
| GET | `/calendars/{calendarId}/notifications/{notificationId}` | Get notification | `calendars/events.readonly` |
| PUT | `/calendars/{calendarId}/notifications/{notificationId}` | Update notification | `calendars/events.write` |
| DELETE | `/calendars/{calendarId}/notifications/{notificationId}` | Delete Notification | `calendars/events.write` |

### Calendar Resources: Rooms & Equipments

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/calendars/resources/{resourceType}/{id}` | Get Calendar Resource | `calendars/resources.readonly` |
| PUT | `/calendars/resources/{resourceType}/{id}` | Update Calendar Resource | `calendars/resources.write` |
| DELETE | `/calendars/resources/{resourceType}/{id}` | Delete Calendar Resource | `calendars/resources.write` |
| GET | `/calendars/resources/{resourceType}` | List Calendar Resources | `calendars/resources.readonly` |
| POST | `/calendars/resources/{resourceType}` | Create Calendar Resource | `calendars/resources.write` |

### Calendars

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/calendars/{calendarId}/free-slots` | Get Free Slots | `calendars.readonly` |
| PUT | `/calendars/{calendarId}` | Update Calendar | `calendars.write` |
| GET | `/calendars/{calendarId}` | Get Calendar | `calendars.readonly` |
| DELETE | `/calendars/{calendarId}` | Delete Calendar | `calendars.write` |
| GET | `/calendars/` | Get Calendars | `calendars.readonly` |
| POST | `/calendars/` | Create Calendar | `calendars.write` |

### Campaigns

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/campaigns/` | Get Campaigns | `campaigns.readonly` |
| POST | `/contacts/{contactId}/campaigns/{campaignId}` | Add Contact to Campaign | `contacts.write` |
| DELETE | `/contacts/{contactId}/campaigns/{campaignId}` | Remove Contact From Campaign | `contacts.write` |
| DELETE | `/contacts/{contactId}/campaigns/removeAll` | Remove Contact From Every Campaign | `contacts.write` |
| GET | `/emails/schedule` | Get Campaigns | `emails/schedule.readonly` |

### Category

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/{locationId}/categories` | Get categories by location id | `socialplanner/category.readonly` |
| GET | `/social-media-posting/{locationId}/categories/{id}` | Get categories by id | - |

### Collections

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/products/collections` | Fetch Product Collections | `products/collection.readonly` |
| POST | `/products/collections` | Create Product Collection | `products/collection.write` |
| GET | `/products/collections/{collectionId}` | Get Details about individual product collection | `products/collection.readonly` |
| PUT | `/products/collections/{collectionId}` | Update Product Collection | `products/collection.write` |
| DELETE | `/products/collections/{collectionId}` | Delete Product Collection | `products/collection.write` |

### Companies

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/companies/{companyId}` | Get Company | `companies.readonly` |

### Contacts

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/contacts/{contactId}` | Get Contact | `contacts.readonly` |
| PUT | `/contacts/{contactId}` | Update Contact | `contacts.write` |
| DELETE | `/contacts/{contactId}` | Delete Contact | `contacts.write` |
| POST | `/contacts/upsert` | Upsert Contact | `contacts.write` |
| GET | `/contacts/business/{businessId}` | Get Contacts By BusinessId | `contacts.readonly` |
| POST | `/contacts/` | Create Contact | `contacts.write` |
| GET | `/contacts/` | Get Contacts | `contacts.readonly` |

### Conversations

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/conversations/{conversationId}` | Get Conversation | `conversations.readonly` |
| PUT | `/conversations/{conversationId}` | Update Conversation | `conversations.write` |
| DELETE | `/conversations/{conversationId}` | Delete Conversation | `conversations.write` |
| POST | `/conversations/` | Create Conversation | `conversations.write` |

### Coupons

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/payments/coupon/list` | List Coupons | `payments/coupons.readonly` |
| POST | `/payments/coupon` | Create Coupon | `payments/coupons.write` |
| PUT | `/payments/coupon` | Update Coupon | `payments/coupons.write` |
| DELETE | `/payments/coupon` | Delete Coupon | `payments/coupons.write` |
| GET | `/payments/coupon` | Fetch Coupon | `payments/coupons.readonly` |

### Custom Field

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/locations/{locationId}/customFields` | Get Custom Fields | `locations/customFields.readonly` |
| POST | `/locations/{locationId}/customFields` | Create Custom Field | `locations/customFields.write` |
| GET | `/locations/{locationId}/customFields/{id}` | Get Custom Field | - |
| PUT | `/locations/{locationId}/customFields/{id}` | Update Custom Field | - |
| DELETE | `/locations/{locationId}/customFields/{id}` | Delete Custom Field | - |
| POST | `/locations/{locationId}/customFields/upload` | Uploads File to customFields | `locations/customFields.write` |

### Custom Fields V2

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/custom-fields/{id}` | Get Custom Field / Folder By Id | `locations/customFields.readonly` |
| PUT | `/custom-fields/{id}` | Update Custom Field By Id | `locations/customFields.write` |
| DELETE | `/custom-fields/{id}` | Delete Custom Field By Id | `locations/customFields.write` |
| GET | `/custom-fields/object-key/{objectKey}` | Get Custom Fields By Object Key | `locations/customFields.readonly` |
| POST | `/custom-fields/folder` | Create Custom Field Folder | `locations/customFields.write` |
| PUT | `/custom-fields/folder/{id}` | Update Custom Field Folder Name | `locations/customFields.write` |
| DELETE | `/custom-fields/folder/{id}` | Delete Custom Field Folder | `locations/customFields.write` |
| POST | `/custom-fields/` | Create Custom Field | `locations/customFields.write` |

### Custom Menu Links

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/custom-menus/{customMenuId}` | Get Custom Menu Link | `custom-menu-link.readonly` |
| DELETE | `/custom-menus/{customMenuId}` | Delete Custom Menu Link | `custom-menu-link.write` |
| PUT | `/custom-menus/{customMenuId}` | Update Custom Menu Link | `custom-menu-link.write` |
| GET | `/custom-menus/` | Get Custom Menu Links | `custom-menu-link.readonly` |
| POST | `/custom-menus/` | Create Custom Menu Link | `custom-menu-link.write` |

### Custom Provider

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/payments/custom-provider/provider` | Create new integration | `payments/custom-provider.write` |
| DELETE | `/payments/custom-provider/provider` | Deleting an existing integration | `payments/custom-provider.write` |
| GET | `/payments/custom-provider/connect` | Fetch given provider config | `payments/custom-provider.readonly` |
| POST | `/payments/custom-provider/connect` | Create new provider config | `payments/custom-provider.write` |
| POST | `/payments/custom-provider/disconnect` | Disconnect existing provider config | `payments/custom-provider.write` |
| PUT | `/payments/custom-provider/capabilities` | Custom-provider marketplace app update capabilities | `payments/custom-provider.write` |

### Custom Value

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/locations/{locationId}/customValues` | Get Custom Values | `locations/customValues.readonly` |
| POST | `/locations/{locationId}/customValues` | Create Custom Value | `locations/customValues.write` |
| GET | `/locations/{locationId}/customValues/{id}` | Get Custom Value | - |
| PUT | `/locations/{locationId}/customValues/{id}` | Update Custom Value | - |
| DELETE | `/locations/{locationId}/customValues/{id}` | Delete Custom Value | - |

### Dashboard

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/voice-ai/dashboard/call-logs` | List Call Logs | `voice-ai-dashboard.readonly` |
| GET | `/voice-ai/dashboard/call-logs/{callId}` | Get Call Log | `voice-ai-dashboard.readonly` |

### Documents

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/proposals/document` | List documents | - |
| POST | `/proposals/document/send` | Send document | - |

### Email

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/conversations/messages/email/{id}` | Get email by Id | - |
| DELETE | `/conversations/messages/email/{emailMessageId}/schedule` | Cancel a scheduled email message. | - |

### Email Verification

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/email/verify` | Email Verification | - |

### Estimate

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/invoices/estimate` | Create New Estimate | `invoices/estimate.write` |
| PUT | `/invoices/estimate/{estimateId}` | Update Estimate | `invoices/estimate.write` |
| DELETE | `/invoices/estimate/{estimateId}` | Delete Estimate | `invoices/estimate.write` |
| GET | `/invoices/estimate/number/generate` | Generate Estimate Number | `invoices/estimate.readonly` |
| POST | `/invoices/estimate/{estimateId}/send` | Send Estimate | `invoices/estimate.write` |
| POST | `/invoices/estimate/{estimateId}/invoice` | Create Invoice from Estimate | `invoices/estimate.write` |
| GET | `/invoices/estimate/list` | List Estimates | `invoices/estimate.readonly` |
| PATCH | `/invoices/estimate/stats/last-visited-at` | Update estimate last visited at | - |
| GET | `/invoices/estimate/template` | List Estimate Templates | `invoices/estimate.readonly` |
| POST | `/invoices/estimate/template` | Create Estimate Template | `invoices/estimate.write` |
| PUT | `/invoices/estimate/template/{templateId}` | Update Estimate Template | `invoices/estimate.write` |
| DELETE | `/invoices/estimate/template/{templateId}` | Delete Estimate Template | `invoices/estimate.write` |
| GET | `/invoices/estimate/template/preview` | Preview Estimate Template | `invoices/estimate.readonly` |

### Followers

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/contacts/{contactId}/followers` | Add Followers | `contacts.write` |
| DELETE | `/contacts/{contactId}/followers` | Remove Followers | `contacts.write` |
| POST | `/opportunities/{id}/followers` | Add Followers | `opportunities.write` |
| DELETE | `/opportunities/{id}/followers` | Remove Followers | `opportunities.write` |

### Forms

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/forms/submissions` | Get Forms Submissions | `forms.readonly` |
| POST | `/forms/upload-custom-files` | Upload files to custom fields | `forms.write` |
| GET | `/forms/` | Get Forms | `forms.readonly` |

### Funnel

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/funnels/funnel/list` | Fetch List of Funnels | - |
| GET | `/funnels/page` | Fetch list of funnel pages | - |
| GET | `/funnels/page/count` | Fetch count of funnel pages | - |

### Integrations

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/payments/integrations/provider/whitelabel` | Create White-label Integration Provider | `payments/integration.write` |
| GET | `/payments/integrations/provider/whitelabel` | List White-label Integration Providers | `payments/integration.readonly` |

### Invoice

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/invoices/generate-invoice-number` | Generate Invoice Number | `invoices.readonly` |
| GET | `/invoices/{invoiceId}` | Get invoice | `invoices.readonly` |
| PUT | `/invoices/{invoiceId}` | Update invoice | `invoices.write` |
| DELETE | `/invoices/{invoiceId}` | Delete invoice | `invoices.write` |
| PATCH | `/invoices/{invoiceId}/late-fees-configuration` | Update invoice late fees configuration | - |
| POST | `/invoices/{invoiceId}/void` | Void invoice | `invoices.write` |
| POST | `/invoices/{invoiceId}/send` | Send invoice | `invoices.write` |
| POST | `/invoices/{invoiceId}/record-payment` | Record a manual payment for an invoice | `invoices.write` |
| PATCH | `/invoices/stats/last-visited-at` | Update invoice last visited at | - |
| POST | `/invoices/` | Create Invoice | `invoices.write` |
| GET | `/invoices/` | List invoices | `invoices.readonly` |

### Medias

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/medias/files` | Get List of Files/ Folders | `medias.readonly` |
| POST | `/medias/upload-file` | Upload File into Media Library | `medias.write` |
| DELETE | `/medias/{id}` | Delete File or Folder | `medias.write` |
| POST | `/medias/{id}` | Update File/ Folder | - |
| POST | `/medias/folder` | Create Folder | - |
| PUT | `/medias/update-files` | Bulk Update Files/ Folders | - |
| PUT | `/medias/delete-files` | Bulk Delete / Trash Files or Folders | - |

### Messages

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/conversations/messages/{id}` | Get message by message id | `conversations/message.readonly` |
| GET | `/conversations/{conversationId}/messages` | Get messages by conversation id | `conversations/message.readonly` |
| POST | `/conversations/messages` | Send a new message | `conversations/message.write` |
| POST | `/conversations/messages/inbound` | Add an inbound message | `conversations/message.write` |
| POST | `/conversations/messages/outbound` | Add an external outbound call | `conversations/message.write` |
| DELETE | `/conversations/messages/{messageId}/schedule` | Cancel a scheduled message. | `conversations/message.write` |
| POST | `/conversations/messages/upload` | Upload file attachments | `conversations/message.write` |
| PUT | `/conversations/messages/{messageId}/status` | Update message status | `conversations/message.write` |
| GET | `/conversations/messages/{messageId}/locations/{locationId}/recording` | Get Recording by Message ID | - |
| GET | `/conversations/locations/{locationId}/messages/{messageId}/transcription` | Get transcription by Message ID | - |
| GET | `/conversations/locations/{locationId}/messages/{messageId}/transcription/download` | Download transcription by Message ID | - |

### Notes

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/contacts/{contactId}/notes` | Get All Notes | `contacts.readonly` |
| POST | `/contacts/{contactId}/notes` | Create Note | `contacts.write` |
| GET | `/contacts/{contactId}/notes/{id}` | Get Note | `contacts.readonly` |
| PUT | `/contacts/{contactId}/notes/{id}` | Update Note | `contacts.write` |
| DELETE | `/contacts/{contactId}/notes/{id}` | Delete Note | `contacts.write` |

### Number Pools

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/phone-system/number-pools` | List Number Pools | `numberpools.read` |

### OAuth 2.0

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/oauth/token` | Get Access Token | - |
| POST | `/oauth/locationToken` | Get Location Access Token from Agency Token | `oauth.write` |
| GET | `/oauth/installedLocations` | Get Location where app is installed | `oauth.readonly` |

### Oauth | Facebook

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/facebook/start` | Starts OAuth For Facebook Account | - |
| GET | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Get facebook pages | - |
| POST | `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}` | Attach facebook pages | - |

### Oauth | Google

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/google/start` | Starts OAuth For Google Account | `socialplanner/oauth.readonly` |
| GET | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Get google business locations | - |
| POST | `/social-media-posting/oauth/{locationId}/google/locations/{accountId}` | Set google business locations | - |

### Oauth | Instagram

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/instagram/start` | Starts OAuth For Instagram Account | `socialplanner/oauth.readonly` |
| GET | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Get Instagram Professional Accounts | - |
| POST | `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}` | Attach Instagram Professional Accounts | - |

### Oauth | LinkedIn

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/linkedin/start` | Starts OAuth For LinkedIn Account | - |
| GET | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Get Linkedin pages and profile | - |
| POST | `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}` | Attach linkedin pages and profile | - |

### Oauth | Tiktok

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/tiktok/start` | Starts OAuth For Tiktok Account | `socialplanner/oauth.readonly` |
| GET | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Get Tiktok profile | - |
| POST | `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}` | Attach Tiktok profile | - |
| GET | `/social-media-posting/oauth/tiktok-business/start` | Starts OAuth For Tiktok Business Account | `socialplanner/oauth.readonly` |
| GET | `/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}` | Get Tiktok Business profile | - |

### Oauth | Twitter

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/oauth/twitter/start` | Starts OAuth For Twitter Account | `socialplanner/oauth.readonly` |
| GET | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Get Twitter profile | - |
| POST | `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}` | Attach Twitter profile | - |

### Object Schema

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/objects/{key}` | Get Object Schema by key / id | `objects/schema.readonly` |
| PUT | `/objects/{key}` | Update Object Schema By Key / Id | `objects/schema.write` |
| GET | `/objects/` | Get all objects for a location | `objects/schema.readonly` |
| POST | `/objects/` | Create Custom Object | `objects/schema.write` |

### Opportunities

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/opportunities/{id}` | Get Opportunity | `opportunities.readonly` |
| DELETE | `/opportunities/{id}` | Delete Opportunity | `opportunities.write` |
| PUT | `/opportunities/{id}` | Update Opportunity | `opportunities.write` |
| PUT | `/opportunities/{id}/status` | Update Opportunity Status | `opportunities.write` |
| POST | `/opportunities/upsert` | Upsert Opportunity | `opportunities.write` |
| POST | `/opportunities/` | Create Opportunity | `opportunities.write` |

### Order Notes

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/payments/orders/{orderId}/notes` | List Order Notes | - |

### Order fulfillments

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/payments/orders/{orderId}/fulfillments` | Create order fulfillment | `payments/orders.write` |
| GET | `/payments/orders/{orderId}/fulfillments` | List fulfillment | `payments/orders.readonly` |

### Orders

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/payments/orders` | List Orders | `payments/orders.readonly` |
| GET | `/payments/orders/{orderId}` | Get Order by ID | `payments/orders.readonly` |
| POST | `/payments/orders/{orderId}/record-payment` | Record Order Payment | `payments/orders.collectPayment` |
| POST | `/payments/orders/migrate-order-ps` | migration Endpoint for Order Payment Status | - |

### Phone Numbers

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/phone-system/numbers/location/{locationId}` | List active numbers | `phonenumbers.read` |

### Pipelines

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/opportunities/pipelines` | Get Pipelines | `opportunities.readonly` |

### Post

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/social-media-posting/{locationId}/posts/list` | Get posts | `socialplanner/post.readonly` |
| POST | `/social-media-posting/{locationId}/posts` | Create post | `socialplanner/post.write` |
| GET | `/social-media-posting/{locationId}/posts/{id}` | Get post | - |
| PUT | `/social-media-posting/{locationId}/posts/{id}` | Edit post | - |
| DELETE | `/social-media-posting/{locationId}/posts/{id}` | Delete Post | - |
| POST | `/social-media-posting/{locationId}/posts/bulk-delete` | Bulk Delete Social Planner Posts | - |

### Prices

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/products/{productId}/price` | Create Price for a Product | `products/prices.write` |
| GET | `/products/{productId}/price` | List Prices for a Product | `products/prices.readonly` |
| GET | `/products/inventory` | List Inventory | `products/prices.readonly` |
| POST | `/products/inventory` | Update Inventory | `products/prices.write` |
| GET | `/products/{productId}/price/{priceId}` | Get Price by ID for a Product | `products/prices.readonly` |
| PUT | `/products/{productId}/price/{priceId}` | Update Price by ID for a Product | `products/prices.write` |
| DELETE | `/products/{productId}/price/{priceId}` | Delete Price by ID for a Product | `products/prices.write` |

### Products

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/products/bulk-update` | Bulk Update Products | `products.write` |
| POST | `/products/bulk-update/edit` | Bulk Edit Products and Prices | - |
| GET | `/products/{productId}` | Get Product by ID | `products.readonly` |
| DELETE | `/products/{productId}` | Delete Product by ID | `products.write` |
| PUT | `/products/{productId}` | Update Product by ID | `products.write` |
| POST | `/products/` | Create Product | `products.write` |
| GET | `/products/` | List Products | `products.readonly` |

### Providers

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/conversations/providers/live-chat/typing` | Agent/Ai-Bot is typing a message indicator for live chat | `conversations/livechat.write` |

### Records

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/objects/{schemaKey}/records/{id}` | Get Record By Id | - |
| PUT | `/objects/{schemaKey}/records/{id}` | Update Record | - |
| DELETE | `/objects/{schemaKey}/records/{id}` | Delete Record | - |
| POST | `/objects/{schemaKey}/records` | Create Record | `objects/record.write` |

### Recurring Tasks

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/locations/{locationId}/recurring-tasks/{id}` | Get Recurring Task By Id | - |
| PUT | `/locations/{locationId}/recurring-tasks/{id}` | Update Recurring Task | - |
| DELETE | `/locations/{locationId}/recurring-tasks/{id}` | Delete Recurring Task | - |
| POST | `/locations/{locationId}/recurring-tasks` | Create Recurring Task | - |

### Redirect

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/funnels/lookup/redirect` | Create Redirect | `funnels/redirect.write` |
| PATCH | `/funnels/lookup/redirect/{id}` | Update Redirect By Id | `funnels/redirect.write` |
| DELETE | `/funnels/lookup/redirect/{id}` | Delete Redirect By Id | `funnels/redirect.write` |
| GET | `/funnels/lookup/redirect/list` | Fetch List of Redirects | `funnels/redirect.readonly` |

### Relations

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/associations/relations` | Create Relation for you associated entities. | `associations/relation.write` |
| GET | `/associations/relations/{recordId}` | Get all relations By record Id | `associations/relation.readonly` |
| DELETE | `/associations/relations/{relationId}` | Delete Relation | `associations/relation.write` |

### Reviews

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/products/reviews` | Fetch Product Reviews | `products.readonly` |
| GET | `/products/reviews/count` | Fetch Review Count as per status | `products.readonly` |
| PUT | `/products/reviews/{reviewId}` | Update Product Reviews | `products.write` |
| DELETE | `/products/reviews/{reviewId}` | Delete Product Review | `products.write` |
| POST | `/products/reviews/bulk-update` | Update Product Reviews | `products.write` |

### Saas

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/saas-api/public-api/locations` | Get locations by stripeId with companyId | - |
| PUT | `/saas-api/public-api/update-saas-subscription/{locationId}` | Update SaaS subscription | - |
| POST | `/saas-api/public-api/bulk-disable-saas/{companyId}` | Disable SaaS for locations | - |
| POST | `/saas-api/public-api/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | - |
| POST | `/saas-api/public-api/pause/{locationId}` | Pause location | - |
| POST | `/saas-api/public-api/update-rebilling/{companyId}` | Update Rebilling | - |
| GET | `/saas-api/public-api/agency-plans/{companyId}` | Get Agency Plans | - |
| GET | `/saas-api/public-api/get-saas-subscription/{locationId}` | Get Location Subscription Details | - |
| POST | `/saas-api/public-api/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | - |
| GET | `/saas-api/public-api/saas-locations/{companyId}` | Get SaaS Locations | - |
| GET | `/saas-api/public-api/saas-plan/{planId}` | Get SaaS Plan | - |
| GET | `/saas/locations` | Get locations by stripeId with companyId | - |
| PUT | `/saas/update-saas-subscription/{locationId}` | Update SaaS subscription | - |
| POST | `/saas/bulk-disable-saas/{companyId}` | Disable SaaS for locations | - |
| POST | `/saas/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | - |
| POST | `/saas/pause/{locationId}` | Pause location | - |
| POST | `/saas/update-rebilling/{companyId}` | Update Rebilling | - |
| GET | `/saas/agency-plans/{companyId}` | Get Agency Plans | - |
| GET | `/saas/get-saas-subscription/{locationId}` | Get Location Subscription Details | - |
| POST | `/saas/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | - |
| GET | `/saas/saas-locations/{companyId}` | Get SaaS Locations | - |
| GET | `/saas/saas-plan/{planId}` | Get SaaS Plan | - |

### Schedule

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/invoices/schedule` | Create Invoice Schedule | `invoices/schedule.write` |
| GET | `/invoices/schedule` | List schedules | `invoices/schedule.readonly` |
| GET | `/invoices/schedule/{scheduleId}` | Get an schedule | `invoices/schedule.readonly` |
| PUT | `/invoices/schedule/{scheduleId}` | Update schedule | `invoices/schedule.write` |
| DELETE | `/invoices/schedule/{scheduleId}` | Delete schedule | `invoices/schedule.write` |
| POST | `/invoices/schedule/{scheduleId}/updateAndSchedule` | Update scheduled recurring invoice | `invoices/schedule.write` |
| POST | `/invoices/schedule/{scheduleId}/schedule` | Schedule an schedule invoice | `invoices/schedule.write` |
| POST | `/invoices/schedule/{scheduleId}/auto-payment` | Manage Auto payment for an schedule invoice | `invoices/schedule.write` |
| POST | `/invoices/schedule/{scheduleId}/cancel` | Cancel an scheduled invoice | `invoices/schedule.write` |

### Search

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/contacts/search` | Search Contacts | `contacts.readonly` |
| GET | `/contacts/search/duplicate` | Get Duplicate Contact | `contacts.readonly` |
| GET | `/conversations/search` | Search Conversations | `conversations.readonly` |
| GET | `/locations/search` | Search | `locations.readonly` |
| GET | `/opportunities/search` | Search Opportunity | `opportunities.readonly` |
| GET | `/users/search` | Search Users | `users.readonly` |
| POST | `/users/search/filter-by-email` | Filter Users by Email | `users.readonly` |

### Search Object Records

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/objects/{schemaKey}/records/search` | Search Object Records | `objects/record.readonly` |

### Shipping Carrier

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/store/shipping-carrier` | Create Shipping Carrier | - |
| GET | `/store/shipping-carrier` | List Shipping Carriers | - |
| GET | `/store/shipping-carrier/{shippingCarrierId}` | Get Shipping Carrier | - |
| PUT | `/store/shipping-carrier/{shippingCarrierId}` | Update Shipping Carrier | - |
| DELETE | `/store/shipping-carrier/{shippingCarrierId}` | Delete shipping carrier | - |

### Shipping Zone

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/store/shipping-zone` | Create Shipping Zone | - |
| GET | `/store/shipping-zone` | List Shipping Zones | - |
| GET | `/store/shipping-zone/{shippingZoneId}` | Get Shipping Zone | - |
| PUT | `/store/shipping-zone/{shippingZoneId}` | Update Shipping Zone | - |
| DELETE | `/store/shipping-zone/{shippingZoneId}` | Delete shipping zone | - |
| POST | `/store/shipping-zone/shipping-rates` | Get available shipping rates | - |

### Shipping Zone Rates

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | Create Shipping Rate | - |
| GET | `/store/shipping-zone/{shippingZoneId}/shipping-rate` | List Shipping Rates | - |
| GET | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Get Shipping Rate | - |
| PUT | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Update Shipping Rate | - |
| DELETE | `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}` | Delete shipping rate | - |

### Snapshots

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/snapshots/` | Get Snapshots | - |
| POST | `/snapshots/share/link` | Create Snapshot Share Link | - |
| GET | `/snapshots/snapshot-status/{snapshotId}` | Get Snapshot Push between Dates | - |
| GET | `/snapshots/snapshot-status/{snapshotId}/location/{locationId}` | Get Last Snapshot Push | - |

### Statistics

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/social-media-posting/statistics` | Get Social Media Statistics | - |

### Store

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/products/store/{storeId}/stats` | Fetch Product Store Stats | `products.readonly` |
| POST | `/products/store/{storeId}` | Action to include/exclude the product in store | `products.write` |
| POST | `/products/store/{storeId}/priority` | Update product display priorities in store | - |

### Store Setting

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/store/store-setting` | Create/Update Store Settings | - |
| GET | `/store/store-setting` | Get Store Settings | - |

### Sub-Account (Formerly Location)

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/locations/{locationId}` | Get Sub-Account (Formerly Location) | `locations.readonly` |
| PUT | `/locations/{locationId}` | Put Sub-Account (Formerly Location) | `locations.write` |
| DELETE | `/locations/{locationId}` | Delete Sub-Account (Formerly Location) | `locations.internal-access-only` |
| POST | `/locations/` | Create Sub-Account (Formerly Location) | `locations.write` |

### Subscriptions

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/payments/subscriptions` | List Subscriptions | `payments/subscriptions.readonly` |
| GET | `/payments/subscriptions/{subscriptionId}` | Get Subscription by ID | `payments/subscriptions.readonly` |

### Surveys

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/surveys/submissions` | Get Surveys Submissions | `surveys.readonly` |
| GET | `/surveys/` | Get Surveys | `surveys.readonly` |

### Tag

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/social-media-posting/{locationId}/tags` | Get tags by location id | - |
| POST | `/social-media-posting/{locationId}/tags/details` | Get tags by ids | - |

### Tags

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/contacts/{contactId}/tags` | Add Tags | `contacts.write` |
| DELETE | `/contacts/{contactId}/tags` | Remove Tags | `contacts.write` |
| GET | `/locations/{locationId}/tags` | Get Tags | `locations/tags.readonly` |
| POST | `/locations/{locationId}/tags` | Create Tag | `locations/tags.write` |
| GET | `/locations/{locationId}/tags/{tagId}` | Get tag by id | - |
| PUT | `/locations/{locationId}/tags/{tagId}` | Update tag | - |
| DELETE | `/locations/{locationId}/tags/{tagId}` | Delete tag | - |

### Tasks

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/contacts/{contactId}/tasks` | Get all Tasks | `contacts.readonly` |
| POST | `/contacts/{contactId}/tasks` | Create Task | `contacts.write` |
| GET | `/contacts/{contactId}/tasks/{taskId}` | Get Task | `contacts.readonly` |
| PUT | `/contacts/{contactId}/tasks/{taskId}` | Update Task | `contacts.write` |
| DELETE | `/contacts/{contactId}/tasks/{taskId}` | Delete Task | `contacts.write` |
| PUT | `/contacts/{contactId}/tasks/{taskId}/completed` | Update Task Completed | `contacts.write` |

### Tasks Search

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/locations/{locationId}/tasks/search` | Task Search Filter | `locations/tasks.readonly` |

### Template

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/invoices/template` | Create template | `invoices/template.write` |
| GET | `/invoices/template` | List templates | `invoices/template.readonly` |
| GET | `/invoices/template/{templateId}` | Get an template | `invoices/template.readonly` |
| PUT | `/invoices/template/{templateId}` | Update template | `invoices/template.write` |
| DELETE | `/invoices/template/{templateId}` | Delete template | `invoices/template.write` |
| PATCH | `/invoices/template/{templateId}/late-fees-configuration` | Update template late fees configuration | - |
| PATCH | `/invoices/template/{templateId}/payment-methods-configuration` | Update template late fees configuration | - |
| GET | `/locations/{locationId}/templates` | GET all or email/sms templates | `locations/templates.readonly` |
| DELETE | `/locations/{locationId}/templates/{id}` | DELETE an email/sms template | - |

### Templates

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/emails/builder` | Create a new template | `emails/builder.write` |
| GET | `/emails/builder` | Fetch email templates | `emails/builder.readonly` |
| DELETE | `/emails/builder/{locationId}/{templateId}` | Delete a template | - |
| POST | `/emails/builder/data` | Update a template | `emails/builder.write` |
| GET | `/proposals/templates` | List templates | - |
| POST | `/proposals/templates/send` | Send template | - |

### Text2Pay

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/invoices/text2pay` | Create & Send | `invoices.write` |

### Timezone

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/locations/{locationId}/timezones` | Fetch Timezones | `locations.readonly` |

### Transactions

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/payments/transactions` | List Transactions | `payments/transactions.readonly` |
| GET | `/payments/transactions/{transactionId}` | Get Transaction by ID | `payments/transactions.readonly` |

### Trigger Links

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/links/id/{linkId}` | Get Link by ID | - |
| PUT | `/links/{linkId}` | Update Link | `links.write` |
| DELETE | `/links/{linkId}` | Delete Link | `links.write` |
| GET | `/links/` | Get Links | `links.readonly` |
| POST | `/links/` | Create Link | `links.write` |

### Trigger Links Search

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/links/search` | Search Trigger Links | - |

### Untagged

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/courses/courses-exporter/public/import` | Import Courses | - |

### Users

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/users/{userId}` | Get User | `users.readonly` |
| PUT | `/users/{userId}` | Update User | `users.write` |
| DELETE | `/users/{userId}` | Delete User | `users.write` |
| GET | `/users/` | Get User by Location | `users.readonly` |
| POST | `/users/` | Create User | `users.write` |

### Wallet Charges

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/marketplace/billing/charges` | Create a new wallet charge | `charges.write` |
| GET | `/marketplace/billing/charges` | Get all wallet charges | `charges.readonly` |
| DELETE | `/marketplace/billing/charges/{chargeId}` | Delete a wallet charge | `charges.write` |
| GET | `/marketplace/billing/charges/{chargeId}` | Get specific wallet charge details | `charges.readonly` |
| GET | `/marketplace/billing/charges/has-funds` | Check if account has sufficient funds | `charges.readonly` |

### Workflow

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| POST | `/contacts/{contactId}/workflow/{workflowId}` | Add Contact to Workflow | `contacts.write` |
| DELETE | `/contacts/{contactId}/workflow/{workflowId}` | Delete Contact from Workflow | `contacts.write` |

### Workflows

| Method | Path | Summary | Scopes |
|--------|------|---------|--------|
| GET | `/workflows/` | Get Workflow | `workflows.readonly` |

## MCP Server

Endpoint: `https://services.leadconnectorhq.com/mcp/`
Transport: HTTP (Streamable)

### MCP Tools

**calendar**: get_calendar_events, get_appointment_notes
**contacts**: search_contacts, get_contact, create_contact, update_contact, delete_contact, add_contact_tags, remove_contact_tags, get_contact_tasks, create_contact_task
**conversations**: search_conversations, get_conversation, send_message
**opportunities**: search_opportunities, get_opportunity, create_opportunity, update_opportunity
**payments**: get_orders, get_transactions
**content**: get_blogs, get_email_templates, create_social_post

### Client Configuration (Claude Desktop)

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
