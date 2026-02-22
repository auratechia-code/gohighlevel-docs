# GoHighLevel API v2 - Complete Reference

Base URL: `https://services.leadconnectorhq.com`
Source: https://github.com/GoHighLevel/highlevel-api-docs
Generated: 2026-02-22T13:20:30.027Z

## Operations

### GET /associations/
Summary: Get all associations for a sub-account / location
OperationId: `find-associations`
Scopes: `associations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `skip` (query, required, number)
- `limit` (query, required, number)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /associations/
Summary: Create Association
OperationId: `create-association`
Scopes: `associations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `createAssociationReqDto`
  - Required: `locationId` (string), `key` (string), `firstObjectLabel` (object), `firstObjectKey` (object), `secondObjectLabel` (object), `secondObjectKey` (object)
  - Optional: none

#### Responses
- 201: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /associations/{associationId}
Summary: Get association by ID
OperationId: `get-association-by-ID`
Scopes: `associations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `associationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /associations/{associationId}
Summary: Update Association By Id
OperationId: `update-association`
Scopes: `associations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `associationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateAssociationReqDto`
  - Required: `firstObjectLabel` (object), `secondObjectLabel` (object)
  - Optional: none

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /associations/{associationId}
Summary: Delete Association
OperationId: `delete-association`
Scopes: `associations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `associationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteAssociationsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /associations/key/{key_name}
Summary: Get association key by key name
OperationId: `get-association-key-by-key-name`
Scopes: `associations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `key_name` (path, required, string)

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /associations/objectKey/{objectKey}
Summary: Get association by object keys
OperationId: `get-association-by-object-keys`
Scopes: `associations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `objectKey` (path, optional, string)

#### Query Parameters
- `locationId` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /associations/relations
Summary: Create Relation for you associated entities.
OperationId: `create-relation`
Scopes: `associations/relation.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `createRelationReqDto`
  - Required: `locationId` (string), `associationId` (string), `firstRecordId` (string), `secondRecordId` (string)
  - Optional: none

#### Responses
- 201: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /associations/relations/{recordId}
Summary: Get all relations By record Id
OperationId: `get-relations-by-record-id`
Scopes: `associations/relation.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `recordId` (path, required, string)

#### Query Parameters
- `locationId` (query, required, string): Your Sub Account's ID
- `skip` (query, required, number)
- `limit` (query, required, number)
- `associationIds` (query, optional, array<string>): Association Ids

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /associations/relations/{relationId}
Summary: Delete Relation
OperationId: `delete-relation`
Scopes: `associations/relation.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `relationId` (path, required, string)

#### Query Parameters
- `locationId` (query, required, string): Your Sub Account's ID

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /blogs/authors
Summary: Get all authors
OperationId: `get-all-blog-authors-by-location`
Scopes: `blogs/author.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `limit` (query, required, number): Number of authors to show in the listing
- `offset` (query, required, number): Number of authors to skip in listing

#### Request Body
- None

#### Responses
- 200: application/json -> `AuthorsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /blogs/categories
Summary: Get all categories
OperationId: `get-all-categories-by-location`
Scopes: `blogs/category.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `limit` (query, required, number): Number of categories to show in the listing
- `offset` (query, required, number): Number of categories to skip in listing

#### Request Body
- None

#### Responses
- 200: application/json -> `CategoriesResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /blogs/posts
Summary: Create Blog Post
OperationId: `create-blog-post`
Scopes: `blogs/post.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateBlogPostParams`
  - Required: `title` (string), `locationId` (string), `blogId` (string), `imageUrl` (string), `description` (string), `rawHTML` (string), `status` (enum), `imageAltText` (string), `categories` (array<string>), `author` (string), `urlSlug` (string), `publishedAt` (string)
  - Optional: `tags` (array<string>), `canonicalLink` (string)

#### Responses
- 200: application/json -> `BlogPostCreateResponseWrapperDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /blogs/posts/{postId}
Summary: Update Blog Post
OperationId: `update-blog-post`
Scopes: `blogs/post-update.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateBlogPostParams`
  - Required: `title` (string), `locationId` (string), `blogId` (string), `imageUrl` (string), `description` (string), `rawHTML` (string), `status` (enum), `imageAltText` (string), `categories` (array<string>), `author` (string), `urlSlug` (string), `publishedAt` (string)
  - Optional: `tags` (array<string>), `canonicalLink` (string)

#### Responses
- 200: application/json -> `BlogPostUpdateResponseWrapperDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /blogs/posts/all
Summary: Get Blog posts by Blog ID
OperationId: `get-blog-post`
Scopes: `blogs/posts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `blogId` (query, required, string)
- `limit` (query, required, number)
- `offset` (query, required, number)
- `searchTerm` (query, optional, string): search for any post by name
- `status` (query, optional, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `BlogPostGetResponseWrapperDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /blogs/posts/url-slug-exists
Summary: Check url slug
OperationId: `check-url-slug-exists`
Scopes: `blogs/check-slug.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `urlSlug` (query, required, string)
- `locationId` (query, required, string)
- `postId` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `UrlSlugCheckResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /blogs/site/all
Summary: Get Blogs by Location ID
OperationId: `get-blogs`
Scopes: `blogs/list.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `skip` (query, required, number)
- `limit` (query, required, number)
- `searchTerm` (query, optional, string): search for any post by name

#### Request Body
- None

#### Responses
- 200: application/json -> `BlogGetResponseWrapperDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /businesses/
Summary: Get Businesses by Location
OperationId: `get-businesses-by-location`
Scopes: `businesses.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetBusinessByLocationResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /businesses/
Summary: Create Business
OperationId: `create-business`
Scopes: `businesses.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateBusinessDto`
  - Required: `name` (string), `locationId` (string)
  - Optional: `phone` (string), `email` (string), `website` (string), `address` (string), `city` (string), `postalCode` (string), `state` (string), `country` (string), `description` (string)

#### Responses
- 201: application/json -> `UpdateBusinessResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /businesses/{businessId}
Summary: Get Business
OperationId: `get-business`
Scopes: `businesses.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `businessId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetBusinessByIdResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /businesses/{businessId}
Summary: Update Business
OperationId: `update-business`
Scopes: `businesses.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `businessId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateBusinessDto`
  - Required: none
  - Optional: `name` (string), `phone` (string), `email` (string), `postalCode` (string), `website` (string), `address` (string), `state` (string), `city` (string), `country` (string), `description` (string)

#### Responses
- 200: application/json -> `UpdateBusinessResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /businesses/{businessId}
Summary: Delete Business
OperationId: `delete-Business`
Scopes: `businesses.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `businessId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteBusinessResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /calendars/
Summary: Get Calendars
OperationId: `get-calendars`
Scopes: `calendars.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `groupId` (query, optional, string): Group Id
- `showDrafted` (query, optional, boolean): Show drafted

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarsGetSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/
Summary: Create Calendar
OperationId: `create-calendar`
Scopes: `calendars.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CalendarCreateDTO`
  - Required: `locationId` (string), `name` (string)
  - Optional: `isActive` (boolean), `notifications` (array<object>), `groupId` (string), `teamMembers` (array<object>), `eventType` (enum), `description` (string), `slug` (string), `widgetSlug` (string), `calendarType` (enum), `widgetType` (enum), `eventTitle` (string), `eventColor` (string), `meetingLocation` (string), `locationConfigurations` (array<object>), `slotDuration` (number), `slotDurationUnit` (enum), `slotInterval` (number), `slotIntervalUnit` (enum), `slotBuffer` (number), `slotBufferUnit` (enum), `preBuffer` (number), `preBufferUnit` (enum), `appoinmentPerSlot` (number), `appoinmentPerDay` (number), `allowBookingAfter` (number), `allowBookingAfterUnit` (enum), `allowBookingFor` (number), `allowBookingForUnit` (enum)

#### Responses
- 200: application/json -> `CalendarByIdSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/{calendarId}
Summary: Get Calendar
OperationId: `get-calendar`
Scopes: `calendars.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string): Calendar Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarByIdSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/{calendarId}
Summary: Update Calendar
OperationId: `update-calendar`
Scopes: `calendars.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string): Calendar Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CalendarUpdateDTO`
  - Required: none
  - Optional: `notifications` (array<object>), `groupId` (string), `teamMembers` (array<object>), `eventType` (enum), `name` (string), `description` (string), `slug` (string), `widgetSlug` (string), `widgetType` (enum), `eventTitle` (string), `eventColor` (string), `locationConfigurations` (array<object>), `meetingLocation` (string), `slotDuration` (number), `slotDurationUnit` (enum), `preBufferUnit` (enum), `slotInterval` (number), `slotIntervalUnit` (enum), `slotBuffer` (number), `preBuffer` (number), `appoinmentPerSlot` (number), `appoinmentPerDay` (number), `allowBookingAfter` (number), `allowBookingAfterUnit` (enum), `allowBookingFor` (number), `allowBookingForUnit` (enum), `openHours` (array<object>), `enableRecurring` (boolean), `recurring` (object), `formId` (string)

#### Responses
- 200: application/json -> `CalendarByIdSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/{calendarId}
Summary: Delete Calendar
OperationId: `delete-calendar`
Scopes: `calendars.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string): Calendar Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarDeleteSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/{calendarId}/free-slots
Summary: Get Free Slots
OperationId: `get-slots`
Scopes: `calendars.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string): Calendar Id

#### Query Parameters
- `startDate` (query, required, number): Start Date (**⚠️ Important:** Date range cannot be more than 31 days)
- `endDate` (query, required, number): End Date (**⚠️ Important:** Date range cannot be more than 31 days)
- `timezone` (query, optional, string): The timezone in which the free slots are returned
- `userId` (query, optional, string): The user for whom the free slots are returned
- `userIds` (query, optional, array<string>): The users for whom the free slots are returned

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/{calendarId}/notifications
Summary: Get notifications
OperationId: `get-event-notification`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string)

#### Query Parameters
- `isActive` (query, optional, boolean)
- `deleted` (query, optional, boolean)
- `limit` (query, optional, number): Number of records to return
- `skip` (query, optional, number): Number of records to skip

#### Request Body
- None

#### Responses
- 200: application/json -> array<`CalendarNotificationResponseDTO`>
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/{calendarId}/notifications
Summary: Create notification
OperationId: `create-event-notification`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema array<`CreateCalendarNotificationDTO`>
  - Required: none
  - Optional: none

#### Responses
- 200: application/json -> array<`CalendarNotificationResponseDTO`>
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/{calendarId}/notifications/{notificationId}
Summary: Get notification
OperationId: `find-event-notification`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string)
- `notificationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarNotificationResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/{calendarId}/notifications/{notificationId}
Summary: Update notification
OperationId: `update-event-notification`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string)
- `notificationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCalendarNotificationsDTO`
  - Required: none
  - Optional: `receiverType` (enum), `additionalEmailIds` (array<string>), `additionalPhoneNumbers` (array<string>), `selectedUsers` (array<string>), `channel` (enum), `notificationType` (enum), `isActive` (boolean), `deleted` (boolean), `templateId` (string), `body` (string), `subject` (string), `afterTime` (array<object>), `beforeTime` (array<object>), `fromAddress` (string), `fromNumber` (string), `fromName` (string)

#### Responses
- 200: application/json -> `CalendarNotificationDeleteResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/{calendarId}/notifications/{notificationId}
Summary: Delete Notification
OperationId: `delete-event-notification`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `calendarId` (path, required, string)
- `notificationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarNotificationDeleteResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/appointments/{appointmentId}/notes
Summary: Get Notes
OperationId: `get-appointment-notes`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appointmentId` (path, required, string): Appointment ID

#### Query Parameters
- `limit` (query, required, number): Limit of notes to fetch
- `offset` (query, required, number): Offset of notes to fetch

#### Request Body
- None

#### Responses
- 200: application/json -> `GetNotesListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/appointments/{appointmentId}/notes
Summary: Create Note
OperationId: `create-appointment-note`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appointmentId` (path, required, string): Appointment ID

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `NotesDTO`
  - Required: `body` (string)
  - Optional: `userId` (string)

#### Responses
- 201: application/json -> `GetCreateUpdateNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/appointments/{appointmentId}/notes/{noteId}
Summary: Update Note
OperationId: `update-appointment-note`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appointmentId` (path, required, string): Appointment ID

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `NotesDTO`
  - Required: `body` (string)
  - Optional: `userId` (string)

#### Responses
- 200: application/json -> `GetCreateUpdateNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/appointments/{appointmentId}/notes/{noteId}
Summary: Delete Note
OperationId: `delete-appointment-note`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appointmentId` (path, required, string): Appointment ID

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/blocked-slots
Summary: Get Blocked Slots
OperationId: `get-blocked-slots`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, optional, string): User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
- `calendarId` (query, optional, string): Either of calendarId, userId or groupId is required
- `groupId` (query, optional, string): Either of groupId, calendarId or userId is required
- `startTime` (query, required, string): Start Time (in millis)
- `endTime` (query, required, string): End Time (in millis)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCalendarEventsSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/events
Summary: Get Calendar Events
OperationId: `get-calendar-events`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, optional, string): User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
- `calendarId` (query, optional, string): Either of calendarId, userId or groupId is required
- `groupId` (query, optional, string): Either of groupId, calendarId or userId is required
- `startTime` (query, required, string): Start Time (in millis)
- `endTime` (query, required, string): End Time (in millis)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCalendarEventsSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/events/{eventId}
Summary: Delete Event
OperationId: `delete-event`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `eventId` (path, required, string): Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `DeleteAppointmentSchema`
  - Required: none
  - Optional: none

#### Responses
- 201: application/json -> `DeleteEventSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/events/appointments
Summary: Create appointment
OperationId: `create-appointment`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AppointmentCreateSchema`
  - Required: `calendarId` (string), `locationId` (string), `contactId` (string), `startTime` (string)
  - Optional: `title` (string), `meetingLocationType` (enum), `meetingLocationId` (string), `overrideLocationConfig` (boolean), `appointmentStatus` (enum), `assignedUserId` (string), `description` (string), `address` (string), `ignoreDateRange` (boolean), `toNotify` (boolean), `ignoreFreeSlotValidation` (boolean), `rrule` (string), `endTime` (string)

#### Responses
- 200: application/json -> `AppointmentSchemaResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/events/appointments/{eventId}
Summary: Get Appointment
OperationId: `get-appointment`
Scopes: `calendars/events.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `eventId` (path, required, string): Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCalendarEventSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/events/appointments/{eventId}
Summary: Update Appointment
OperationId: `edit-appointment`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `eventId` (path, required, string): Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AppointmentEditSchema`
  - Required: none
  - Optional: `title` (string), `meetingLocationType` (enum), `meetingLocationId` (string), `overrideLocationConfig` (boolean), `appointmentStatus` (enum), `assignedUserId` (string), `description` (string), `address` (string), `ignoreDateRange` (boolean), `toNotify` (boolean), `ignoreFreeSlotValidation` (boolean), `rrule` (string), `calendarId` (string), `startTime` (string), `endTime` (string)

#### Responses
- 200: application/json -> `AppointmentSchemaResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/events/block-slots
Summary: Create Block Slot
OperationId: `create-block-slot`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BlockSlotCreateRequestDTO`
  - Required: `calendarId` (string), `locationId` (string)
  - Optional: `title` (string), `assignedUserId` (string), `startTime` (string), `endTime` (string)

#### Responses
- 201: application/json -> `BlockedSlotSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/events/block-slots/{eventId}
Summary: Update Block Slot
OperationId: `edit-block-slot`
Scopes: `calendars/events.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `eventId` (path, required, string): Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BlockSlotEditRequestDTO`
  - Required: `calendarId` (string), `locationId` (string)
  - Optional: `title` (string), `assignedUserId` (string), `startTime` (string), `endTime` (string)

#### Responses
- 201: application/json -> `BlockedSlotSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/groups
Summary: Get Groups
OperationId: `get-groups`
Scopes: `calendars/groups.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `AllGroupsSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/groups
Summary: Create Calendar Group
OperationId: `create-calendar-group`
Scopes: `calendars/groups.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `GroupCreateDTO`
  - Required: `locationId` (string), `name` (string), `description` (string), `slug` (string)
  - Optional: `isActive` (boolean)

#### Responses
- 201: application/json -> `GroupCreateSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/groups/{groupId}
Summary: Update Group
OperationId: `edit-group`
Scopes: `calendars/groups.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `groupId` (path, required, string): Group Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `GroupUpdateDTO`
  - Required: `name` (string), `description` (string), `slug` (string)
  - Optional: none

#### Responses
- 200: application/json -> `GroupCreateSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/groups/{groupId}
Summary: Delete Group
OperationId: `delete-group`
Scopes: `calendars/groups.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `groupId` (path, required, string): Group Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GroupSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/groups/{groupId}/status
Summary: Disable Group
OperationId: `disable-group`
Scopes: `calendars/groups.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `groupId` (path, required, string): Group Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `GroupStatusUpdateParams`
  - Required: `isActive` (boolean)
  - Optional: none

#### Responses
- 200: application/json -> `GroupSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/groups/validate-slug
Summary: Validate group slug
OperationId: `validate-groups-slug`
Scopes: `calendars/groups.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `ValidateGroupSlugPostBody`
  - Required: `locationId` (string), `slug` (string)
  - Optional: none

#### Responses
- 200: application/json -> `ValidateGroupSlugSuccessResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/resources/{resourceType}
Summary: List Calendar Resources
OperationId: `fetch-calendar-resources`
Scopes: `calendars/resources.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `resourceType` (path, required, enum): Calendar Resource Type

#### Query Parameters
- `locationId` (query, required, string)
- `limit` (query, required, number)
- `skip` (query, required, number)

#### Request Body
- None

#### Responses
- 200: application/json -> array<`CalendarResourceByIdResponseDTO`>
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /calendars/resources/{resourceType}
Summary: Create Calendar Resource
OperationId: `create-calendar-resource`
Scopes: `calendars/resources.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `resourceType` (path, required, enum): Calendar Resource Type

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCalendarResourceDTO`
  - Required: `locationId` (string), `name` (string), `description` (string), `quantity` (number), `outOfService` (number), `capacity` (number), `calendarIds` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `CalendarResourceByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /calendars/resources/{resourceType}/{id}
Summary: Get Calendar Resource
OperationId: `get-calendar-resource`
Scopes: `calendars/resources.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `resourceType` (path, required, enum): Calendar Resource Type
- `id` (path, required, string): Calendar Resource ID

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CalendarResourceByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /calendars/resources/{resourceType}/{id}
Summary: Update Calendar Resource
OperationId: `update-calendar-resource`
Scopes: `calendars/resources.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `resourceType` (path, required, enum): Calendar Resource Type
- `id` (path, required, string): Calendar Resource ID

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCalendarResourceDTO`
  - Required: none
  - Optional: `locationId` (string), `name` (string), `description` (string), `quantity` (number), `outOfService` (number), `capacity` (number), `calendarIds` (array<string>), `isActive` (boolean)

#### Responses
- 200: application/json -> `CalendarResourceResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /calendars/resources/{resourceType}/{id}
Summary: Delete Calendar Resource
OperationId: `delete-calendar-resource`
Scopes: `calendars/resources.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `resourceType` (path, required, enum): Calendar Resource Type
- `id` (path, required, string): Calendar Resource ID

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `ResourceDeleteResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /campaigns/
Summary: Get Campaigns
OperationId: `get-campaigns`
Scopes: `campaigns.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `status` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `CampaignsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /companies/{companyId}
Summary: Get Company
OperationId: `get-company`
Scopes: `companies.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCompanyByIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/
Summary: Get Contacts
OperationId: `get-contacts`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `startAfterId` (query, optional, string): Start After Id
- `startAfter` (query, optional, number): Start Afte
- `query` (query, optional, string): Contact Query
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 100 and default will be 20

#### Request Body
- None

#### Responses
- 200: application/json -> `ContactsSearchSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/
Summary: Create Contact
OperationId: `create-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateContactDto`
  - Required: `locationId` (string)
  - Optional: `firstName` (string), `lastName` (string), `name` (string), `email` (string), `gender` (string), `phone` (string), `address1` (string), `city` (string), `state` (string), `postalCode` (string), `website` (string), `timezone` (string), `dnd` (boolean), `dndSettings` (object), `inboundDndSettings` (object), `tags` (array<string>), `customFields` (array<anyOf>), `source` (string), `country` (string), `companyName` (string), `assignedTo` (string)

#### Responses
- 201: application/json -> `CreateContactsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}
Summary: Get Contact
OperationId: `get-contact`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `ContactsByIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /contacts/{contactId}
Summary: Update Contact
OperationId: `update-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateContactDto`
  - Required: none
  - Optional: `firstName` (string), `lastName` (string), `name` (string), `email` (string), `phone` (string), `address1` (string), `city` (string), `state` (string), `postalCode` (string), `website` (string), `timezone` (string), `dnd` (boolean), `dndSettings` (object), `inboundDndSettings` (object), `tags` (array<string>), `customFields` (array<anyOf>), `source` (string), `country` (string), `assignedTo` (string)

#### Responses
- 200: application/json -> `UpdateContactsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}
Summary: Delete Contact
OperationId: `delete-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteContactsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}/appointments
Summary: Get Appointments for Contact
OperationId: `get-appointments-for-contact`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetEventsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/{contactId}/campaigns/{campaignId}
Summary: Add Contact to Campaign
OperationId: `add-contact-to-campaign`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `campaignId` (path, required, string): Campaigns Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AddContactToCampaignDto`
  - Required: none
  - Optional: none

#### Responses
- 201: application/json -> `CreateDeleteCantactsCampaignsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/campaigns/{campaignId}
Summary: Remove Contact From Campaign
OperationId: `remove-contact-from-campaign`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `campaignId` (path, required, string): Campaigns Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CreateDeleteCantactsCampaignsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/campaigns/removeAll
Summary: Remove Contact From Every Campaign
OperationId: `remove-contact-from-every-campaign`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CreateDeleteCantactsCampaignsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/{contactId}/followers
Summary: Add Followers
OperationId: `add-followers-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `FollowersDTO`
  - Required: `followers` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `CreateAddFollowersSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/followers
Summary: Remove Followers
OperationId: `remove-followers-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `FollowersDTO`
  - Required: `followers` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `DeleteFollowersSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}/notes
Summary: Get All Notes
OperationId: `get-all-notes`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetNotesListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /contacts/{contactId}/notes
Summary: Create Note
OperationId: `create-note`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `NotesDTO`
  - Required: `body` (string)
  - Optional: `userId` (string)

#### Responses
- 201: application/json -> `GetCreateUpdateNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}/notes/{id}
Summary: Get Note
OperationId: `get-note`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `id` (path, required, string): Note Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCreateUpdateNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /contacts/{contactId}/notes/{id}
Summary: Update Note
OperationId: `update-note`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `id` (path, required, string): Note Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `NotesDTO`
  - Required: `body` (string)
  - Optional: `userId` (string)

#### Responses
- 200: application/json -> `GetCreateUpdateNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/notes/{id}
Summary: Delete Note
OperationId: `delete-note`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `id` (path, required, string): Note Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteNoteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/{contactId}/tags
Summary: Add Tags
OperationId: `add-tags`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `TagsDTO`
  - Required: `tags` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `CreateAddTagSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/tags
Summary: Remove Tags
OperationId: `remove-tags`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `TagsDTO`
  - Required: `tags` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `CreateDeleteTagSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}/tasks
Summary: Get all Tasks
OperationId: `get-all-tasks`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `TasksListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /contacts/{contactId}/tasks
Summary: Create Task
OperationId: `create-task`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateTaskParams`
  - Required: `title` (string), `dueDate` (string), `completed` (boolean)
  - Optional: `body` (string), `assignedTo` (string)

#### Responses
- 201: application/json -> `TaskByIsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/{contactId}/tasks/{taskId}
Summary: Get Task
OperationId: `get-task`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `taskId` (path, required, string): Task Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `TaskByIsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /contacts/{contactId}/tasks/{taskId}
Summary: Update Task
OperationId: `update-task`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `taskId` (path, required, string): Task Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateTaskBody`
  - Required: none
  - Optional: `title` (string), `body` (string), `dueDate` (string), `completed` (boolean), `assignedTo` (string)

#### Responses
- 200: application/json -> `TaskByIsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/tasks/{taskId}
Summary: Delete Task
OperationId: `delete-task`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `taskId` (path, required, string): Task Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteTaskSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /contacts/{contactId}/tasks/{taskId}/completed
Summary: Update Task Completed
OperationId: `update-task-completed`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `taskId` (path, required, string): Task Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateTaskStatusParams`
  - Required: `completed` (boolean)
  - Optional: none

#### Responses
- 200: application/json -> `TaskByIsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/{contactId}/workflow/{workflowId}
Summary: Add Contact to Workflow
OperationId: `add-contact-to-workflow`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `workflowId` (path, required, string): Workflow Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateWorkflowDto`
  - Required: none
  - Optional: `eventStartTime` (string)

#### Responses
- 200: application/json -> `ContactsWorkflowSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /contacts/{contactId}/workflow/{workflowId}
Summary: Delete Contact from Workflow
OperationId: `delete-contact-from-workflow`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `contactId` (path, required, string): Contact Id
- `workflowId` (path, required, string): Workflow Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateWorkflowDto`
  - Required: none
  - Optional: `eventStartTime` (string)

#### Responses
- 200: application/json -> `ContactsWorkflowSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/bulk/business
Summary: Add/Remove Contacts From Business
OperationId: `add-remove-contact-from-business`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `ContactsBusinessUpdate`
  - Required: `locationId` (string), `ids` (array<string>), `businessId` (string)
  - Optional: none

#### Responses
- 200: application/json -> `ContactsBulkUpateResponse`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/bulk/tags/update/{type}
Summary: Update Contacts Tags
OperationId: `create-association`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `type` (path, required, enum): Tags operation type

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateTagsDTO`
  - Required: `contacts` (array<string>), `tags` (array<string>), `locationId` (string)
  - Optional: `removeAllTags` (boolean)

#### Responses
- 201: application/json -> `UpdateTagsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /contacts/business/{businessId}
Summary: Get Contacts By BusinessId
OperationId: `get-contacts-by-businessId`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `businessId` (path, required, string)

#### Query Parameters
- `limit` (query, optional, string)
- `locationId` (query, required, string)
- `skip` (query, optional, string)
- `query` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `ContactsSearchSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /contacts/search
Summary: Search Contacts
OperationId: `search-contacts-advanced`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SearchBodyV2DTO`
  - Required: none
  - Optional: none

#### Responses
- 200: no content
- 400: no content
- 401: no content

### GET /contacts/search/duplicate
Summary: Get Duplicate Contact
OperationId: `get-duplicate-contact`
Scopes: `contacts.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `number` (query, optional, string): Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`
- `email` (query, optional, string): Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /contacts/upsert
Summary: Upsert Contact
OperationId: `upsert-contact`
Scopes: `contacts.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpsertContactDto`
  - Required: `locationId` (string)
  - Optional: `firstName` (string), `lastName` (string), `name` (string), `email` (string), `gender` (string), `phone` (string), `address1` (string), `city` (string), `state` (string), `postalCode` (string), `website` (string), `timezone` (string), `dnd` (boolean), `dndSettings` (object), `inboundDndSettings` (object), `tags` (array<string>), `customFields` (array<anyOf>), `source` (string), `country` (string), `companyName` (string), `assignedTo` (string)

#### Responses
- 200: application/json -> `UpsertContactsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /conversations/
Summary: Create Conversation
OperationId: `create-conversation`
Scopes: `conversations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateConversationDto`
  - Required: `locationId` (string), `contactId` (string)
  - Optional: none

#### Responses
- 201: application/json -> `CreateConversationSuccessResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/{conversationId}
Summary: Get Conversation
OperationId: `get-conversation`
Scopes: `conversations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `conversationId` (path, required, string): Conversation ID as string

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetConversationByIdResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /conversations/{conversationId}
Summary: Update Conversation
OperationId: `update-conversation`
Scopes: `conversations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `conversationId` (path, required, string): Conversation ID as string

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateConversationDto`
  - Required: `locationId` (string)
  - Optional: `unreadCount` (number), `starred` (boolean), `feedback` (object)

#### Responses
- 200: application/json -> `GetConversationSuccessfulResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /conversations/{conversationId}
Summary: Delete Conversation
OperationId: `delete-conversation`
Scopes: `conversations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `conversationId` (path, required, string): Conversation ID as string

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteConversationSuccessfulResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/{conversationId}/messages
Summary: Get messages by conversation id
OperationId: `get-messages`
Scopes: `conversations/message.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `conversationId` (path, required, string): Conversation ID as string

#### Query Parameters
- `lastMessageId` (query, optional, string): Message ID of the last message in the list as a string
- `limit` (query, optional, number): Number of messages to be fetched from the conversation. Default limit is 20
- `type` (query, optional, enum): Types of message to fetched separated with comma

#### Request Body
- None

#### Responses
- 200: application/json -> `GetMessagesByConversationResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/locations/{locationId}/messages/{messageId}/transcription
Summary: Get transcription by Message ID
OperationId: `get-message-transcription`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID as string
- `messageId` (path, required, string): Message ID as string

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetMessageTranscriptionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/locations/{locationId}/messages/{messageId}/transcription/download
Summary: Download transcription by Message ID
OperationId: `download-message-transcription`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID as string
- `messageId` (path, required, string): Message ID as string

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /conversations/messages
Summary: Send a new message
OperationId: `send-a-new-message`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SendMessageBodyDto`
  - Required: `type` (enum), `contactId` (string)
  - Optional: `appointmentId` (string), `attachments` (array<string>), `emailFrom` (string), `emailCc` (array<string>), `emailBcc` (array<string>), `html` (string), `message` (string), `subject` (string), `replyMessageId` (string), `templateId` (string), `threadId` (string), `scheduledTimestamp` (number), `conversationProviderId` (string), `emailTo` (string), `emailReplyMode` (enum), `fromNumber` (string), `toNumber` (string)

#### Responses
- 200: application/json -> `SendMessageResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/messages/{id}
Summary: Get message by message id
OperationId: `get-message`
Scopes: `conversations/message.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetMessageResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /conversations/messages/{messageId}/locations/{locationId}/recording
Summary: Get Recording by Message ID
OperationId: `get-message-recording`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID as string
- `messageId` (path, required, string): Message ID as string

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /conversations/messages/{messageId}/schedule
Summary: Cancel a scheduled message.
OperationId: `cancel-scheduled-message`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `messageId` (path, required, string): Message Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CancelScheduledResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /conversations/messages/{messageId}/status
Summary: Update message status
OperationId: `update-message-status`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `messageId` (path, required, string): Message Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateMessageStatusDto`
  - Required: `status` (enum)
  - Optional: `error` (object), `emailMessageId` (string), `recipients` (array<string>)

#### Responses
- 200: application/json -> `SendMessageResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 403: application/json -> `ForbiddenDTO`

### DELETE /conversations/messages/email/{emailMessageId}/schedule
Summary: Cancel a scheduled email message.
OperationId: `cancel-scheduled-email-message`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `emailMessageId` (path, required, string): Email Message Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CancelScheduledResponseDto`

### GET /conversations/messages/email/{id}
Summary: Get email by Id
OperationId: `get-email-by-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetEmailMessageResponseDto`

### POST /conversations/messages/inbound
Summary: Add an inbound message
OperationId: `add-an-inbound-message`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `ProcessMessageBodyDto`
  - Required: `type` (enum), `conversationId` (string), `conversationProviderId` (string)
  - Optional: `attachments` (array<string>), `message` (string), `html` (string), `subject` (string), `emailFrom` (string), `emailTo` (string), `emailCc` (array<string>), `emailBcc` (array<string>), `emailMessageId` (string), `altId` (string), `direction` (object), `date` (string), `call` (object)

#### Responses
- 200: application/json -> `ProcessMessageResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /conversations/messages/outbound
Summary: Add an external outbound call
OperationId: `add-an-outbound-message`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `ProcessOutboundMessageBodyDto`
  - Required: `type` (enum), `conversationId` (string), `conversationProviderId` (string)
  - Optional: `attachments` (array<string>), `altId` (string), `date` (string), `call` (object)

#### Responses
- 200: application/json -> `ProcessMessageResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /conversations/messages/upload
Summary: Upload file attachments
OperationId: `upload-file-attachments`
Scopes: `conversations/message.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- multipart/form-data: required; schema `UploadFilesDto`
  - Required: `conversationId` (string), `locationId` (string), `attachmentUrls` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `UploadFilesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 413: application/json -> `UploadFilesErrorResponseDto`
- 415: application/json -> `UploadFilesErrorResponseDto`

### POST /conversations/providers/live-chat/typing
Summary: Agent/Ai-Bot is typing a message indicator for live chat
OperationId: `live-chat-agent-typing`
Scopes: `conversations/livechat.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UserTypingBody`
  - Required: `locationId` (string), `isTyping` (string), `visitorId` (string), `conversationId` (string)
  - Optional: none

#### Responses
- 201: application/json -> `CreateLiveChatMessageFeedbackResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /conversations/search
Summary: Search Conversations
OperationId: `search-conversation`
Scopes: `conversations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `contactId` (query, optional, string): Contact Id
- `assignedTo` (query, optional, string): User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. Use "unassigned" to fetch conversations not assigned to any user.
- `followers` (query, optional, string): User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated values.
- `mentions` (query, optional, string): User Id of the mention. Multiple values are comma separated.
- `query` (query, optional, string): Search paramater as a string
- `sort` (query, optional, enum): Sort paramater - asc or desc
- `startAfterDate` (query, optional, any): Search to begin after the specified date - should contain the sort value of the last document
- `id` (query, optional, string): Id of the conversation
- `limit` (query, optional, number): Limit of conversations - Default is 20
- `lastMessageType` (query, optional, enum): Type of the last message in the conversation as a string
- `lastMessageAction` (query, optional, enum): Action of the last outbound message in the conversation as string.
- `lastMessageDirection` (query, optional, enum): Direction of the last message in the conversation as string.
- `status` (query, optional, enum): The status of the conversation to be filtered - all, read, unread, starred
- `sortBy` (query, optional, enum): The sorting of the conversation to be filtered as - manual messages or all messages
- `sortScoreProfile` (query, optional, string): Id of score profile on which sortBy.ScoreProfile should sort on
- `scoreProfile` (query, optional, string): Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax
- `scoreProfileMin` (query, optional, number): Minimum value for score
- `scoreProfileMax` (query, optional, number): Maximum value for score

#### Request Body
- None

#### Responses
- 200: application/json -> `SendConversationResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /courses/courses-exporter/public/import
Summary: Import Courses
OperationId: `import-courses`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PublicExporterPayload`
  - Required: `locationId` (string), `products` (array<object>)
  - Optional: `userId` (string)

#### Responses
- 201: no content

### POST /custom-fields/
Summary: Create Custom Field
OperationId: `create-custom-field`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCustomFieldsDTO`
  - Required: `locationId` (string), `showInForms` (boolean), `dataType` (enum), `fieldKey` (string), `objectKey` (string), `parentId` (string)
  - Optional: `name` (string), `description` (string), `placeholder` (string), `options` (array<object>), `acceptedFormats` (enum), `maxFileLimit` (number), `allowCustomOption` (boolean)

#### Responses
- 201: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /custom-fields/{id}
Summary: Get Custom Field / Folder By Id
OperationId: `get-custom-field-by-id`
Scopes: `locations/customFields.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /custom-fields/{id}
Summary: Update Custom Field By Id
OperationId: `update-custom-field`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCustomFieldsDTO`
  - Required: `locationId` (string), `showInForms` (boolean)
  - Optional: `name` (string), `description` (string), `placeholder` (string), `options` (array<object>), `acceptedFormats` (enum), `maxFileLimit` (number)

#### Responses
- 200: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /custom-fields/{id}
Summary: Delete Custom Field By Id
OperationId: `delete-custom-field`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFolderDeleteResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /custom-fields/folder
Summary: Create Custom Field Folder
OperationId: `create-custom-field-folder`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateFolder`
  - Required: `objectKey` (string), `name` (string), `locationId` (string)
  - Optional: none

#### Responses
- 201: application/json -> `ICustomFieldFolder`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /custom-fields/folder/{id}
Summary: Update Custom Field Folder Name
OperationId: `update-custom-field-folder`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateFolder`
  - Required: `name` (string), `locationId` (string)
  - Optional: none

#### Responses
- 200: application/json -> `ICustomFieldFolder`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /custom-fields/folder/{id}
Summary: Delete Custom Field Folder
OperationId: `delete-custom-field-folder`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- `locationId` (query, required, string): Location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFolderDeleteResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /custom-fields/object-key/{objectKey}
Summary: Get Custom Fields By Object Key
OperationId: `get-custom-fields-by-object-key`
Scopes: `locations/customFields.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `objectKey` (path, required, string): key of the Object. Must include "custom_objects." prefix for custom objects. Available on the Custom Objects details Page under settings

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFieldsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /custom-menus/
Summary: Get Custom Menu Links
OperationId: `get-custom-menus`
Scopes: `custom-menu-link.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, optional, string): Unique identifier of the location
- `skip` (query, optional, number): Number of items to skip for pagination
- `limit` (query, optional, number): Maximum number of items to return
- `query` (query, optional, string): Search query to filter custom menus by name, supports partial || full names
- `showOnCompany` (query, optional, boolean): Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCustomMenusResponseDTO`
- 400: no content
- 401: application/json -> `UnauthorizedDTO`
- 403: no content
- 422: application/json -> `UnprocessableDTO`

### POST /custom-menus/
Summary: Create Custom Menu Link
OperationId: `create-custom-menu`
Scopes: `custom-menu-link.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCustomMenuDTO`
  - Required: `title` (string), `url` (string), `icon` (object), `showOnCompany` (boolean), `showOnLocation` (boolean), `showToAllLocations` (boolean), `openMode` (enum), `locations` (array<string>), `userRole` (enum)
  - Optional: `allowCamera` (boolean), `allowMicrophone` (boolean)

#### Responses
- 201: application/json -> `GetSingleCustomMenusSuccessfulResponseDTO`
- 400: no content
- 401: application/json -> `UnauthorizedDTO`
- 403: no content
- 422: application/json -> `UnprocessableDTO`

### GET /custom-menus/{customMenuId}
Summary: Get Custom Menu Link
OperationId: `get-custom-menu-by-id`
Scopes: `custom-menu-link.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `customMenuId` (path, required, string): Unique identifier of the custom menu

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSingleCustomMenusSuccessfulResponseDTO`
- 400: no content
- 401: application/json -> `UnauthorizedDTO`
- 403: no content
- 422: application/json -> `UnprocessableDTO`

### PUT /custom-menus/{customMenuId}
Summary: Update Custom Menu Link
OperationId: `update-custom-menu`
Scopes: `custom-menu-link.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `customMenuId` (path, required, string): ID of the custom menu to update

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCustomMenuDTO`
  - Required: none
  - Optional: `title` (string), `url` (string), `icon` (object), `showOnCompany` (boolean), `showOnLocation` (boolean), `showToAllLocations` (boolean), `openMode` (enum), `locations` (array<string>), `userRole` (enum), `allowCamera` (boolean), `allowMicrophone` (boolean)

#### Responses
- 200: application/json -> `UpdateCustomMenuLinkResponseDTO`
- 400: no content
- 401: application/json -> `UnauthorizedDTO`
- 403: no content
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### DELETE /custom-menus/{customMenuId}
Summary: Delete Custom Menu Link
OperationId: `delete-custom-menu`
Scopes: `custom-menu-link.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `customMenuId` (path, required, string): ID of the custom menu to delete

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteCustomMenuSuccessfulResponseDTO`
- 400: no content
- 401: application/json -> `UnauthorizedDTO`
- 403: no content
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### POST /email/verify
Summary: Email Verification
OperationId: `verify-email`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet

#### Request Body
- application/json: required; schema `VerificationBodyDto`
  - Required: `type` (enum), `verify` (string)
  - Optional: none

#### Responses
- 201: application/json -> oneOf
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /emails/builder
Summary: Fetch email templates
OperationId: `fetch-template`
Scopes: `emails/builder.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `limit` (query, optional, string)
- `offset` (query, optional, string)
- `search` (query, optional, string)
- `sortByDate` (query, optional, string)
- `archived` (query, optional, string)
- `builderVersion` (query, optional, enum)
- `name` (query, optional, string)
- `parentId` (query, optional, string)
- `originId` (query, optional, string)
- `templatesOnly` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `FetchBuilderSuccesfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### POST /emails/builder
Summary: Create a new template
OperationId: `create-template`
Scopes: `emails/builder.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateBuilderDto`
  - Required: `locationId` (string), `type` (enum), `importProvider` (enum)
  - Optional: `title` (string), `updatedBy` (string), `builderVersion` (enum), `name` (string), `parentId` (string), `templateDataUrl` (string), `importURL` (string), `templateSource` (string), `isPlainText` (boolean)

#### Responses
- 201: application/json -> `CreateBuilderSuccesfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### DELETE /emails/builder/{locationId}/{templateId}
Summary: Delete a template
OperationId: `delete-template`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)
- `templateId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteBuilderSuccesfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### POST /emails/builder/data
Summary: Update a template
OperationId: `update-template`
Scopes: `emails/builder.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SaveBuilderDataDto`
  - Required: `locationId` (string), `templateId` (string), `updatedBy` (string), `dnd` (object), `html` (string), `editorType` (enum)
  - Optional: `previewText` (string), `isPlainText` (boolean)

#### Responses
- 201: application/json -> `BuilderUpdateSuccessfulDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: no content
- 422: application/json -> `UnprocessableDTO`

### GET /emails/schedule
Summary: Get Campaigns
OperationId: `fetch-campaigns`
Scopes: `emails/schedule.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location ID to fetch campaigns from
- `limit` (query, optional, number): Maximum number of campaigns to return. Defaults to 10, maximum is 100
- `offset` (query, optional, number): Number of campaigns to skip for pagination
- `status` (query, optional, enum): Filter by schedule status
- `emailStatus` (query, optional, enum): Filter by email delivery status
- `name` (query, optional, string): Filter campaigns by name
- `parentId` (query, optional, string): Filter campaigns by parent folder ID
- `limitedFields` (query, optional, boolean): When true, returns only essential campaign fields like id, templateDataDownloadUrl, updatedAt, type, templateType, templateId, downloadUrl and isPlainText. When false, returns complete campaign data including meta information, bulkRequestStatusInfo, ABTestInfo, resendScheduleInfo and all other campaign properties
- `archived` (query, optional, boolean): Filter archived campaigns
- `campaignsOnly` (query, optional, boolean): Return only campaigns, excluding folders
- `showStats` (query, optional, boolean): When true, returns campaign statistics including delivered count, opened count, clicked count and revenue if available for the campaign. When false, returns campaign data without statistics.

#### Request Body
- None

#### Responses
- 200: application/json -> `ScheduleFetchSuccessfulDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 403: application/json -> `InvalidLocationDTO`
- 404: application/json -> `NotFoundDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /forms/
Summary: Get Forms
OperationId: `get-forms`
Scopes: `forms.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `skip` (query, optional, number)
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 50 and default will be 10
- `type` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `FormsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /forms/submissions
Summary: Get Forms Submissions
OperationId: `get-forms-submissions`
Scopes: `forms.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `page` (query, optional, number): Page No. By default it will be 1
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `formId` (query, optional, string): Filter submission by form id
- `q` (query, optional, string): Filter by contactId, name, email or phone no.
- `startAt` (query, optional, string): Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
- `endAt` (query, optional, string): Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

#### Request Body
- None

#### Responses
- 200: application/json -> `FormsSubmissionsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /forms/upload-custom-files
Summary: Upload files to custom fields
OperationId: `upload-to-custom-fields`
Scopes: `forms.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `contactId` (query, required, string): Contact ID to upload the file to.
- `locationId` (query, required, string): Location ID of the contact.

#### Request Body
- multipart/form-data: required; schema object
  - Required: none
  - Optional: none

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /funnels/funnel/list
Summary: Fetch List of Funnels
OperationId: `getFunnels`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `type` (query, optional, string)
- `category` (query, optional, string)
- `offset` (query, optional, string)
- `limit` (query, optional, string)
- `parentId` (query, optional, string)
- `name` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `FunnelListResponseDTO`

### POST /funnels/lookup/redirect
Summary: Create Redirect
OperationId: `create-redirect`
Scopes: `funnels/redirect.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateRedirectParams`
  - Required: `locationId` (string), `domain` (string), `path` (string), `target` (string), `action` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `CreateRedirectResponseDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /funnels/lookup/redirect/{id}
Summary: Update Redirect By Id
OperationId: `update-redirect-by-id`
Scopes: `funnels/redirect.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateRedirectParams`
  - Required: `target` (string), `action` (enum), `locationId` (string)
  - Optional: none

#### Responses
- 200: application/json -> `UpdateRedirectResponseDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /funnels/lookup/redirect/{id}
Summary: Delete Redirect By Id
OperationId: `delete-redirect-by-id`
Scopes: `funnels/redirect.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteRedirectResponseDTO`
- 422: no content

### GET /funnels/lookup/redirect/list
Summary: Fetch List of Redirects
OperationId: `fetch-redirects-list`
Scopes: `funnels/redirect.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `limit` (query, required, number)
- `offset` (query, required, number)
- `search` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `RedirectListResponseDTO`
- 422: no content

### GET /funnels/page
Summary: Fetch list of funnel pages
OperationId: `getPagesByFunnelId`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `funnelId` (query, required, string)
- `name` (query, optional, string)
- `limit` (query, required, number)
- `offset` (query, required, number)

#### Request Body
- None

#### Responses
- 200: application/json -> `FunnelPageResponseDTO`

### GET /funnels/page/count
Summary: Fetch count of funnel pages
OperationId: `getPagesCountByFunnelId`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `funnelId` (query, required, string)
- `name` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `FunnelPageCountResponseDTO`

### GET /invoices/
Summary: List invoices
OperationId: `list-invoices`
Scopes: `invoices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type
- `status` (query, optional, string): status to be filtered
- `startAt` (query, optional, string): startAt in YYYY-MM-DD format
- `endAt` (query, optional, string): endAt in YYYY-MM-DD format
- `search` (query, optional, string): To search for an invoice by id / name / email / phoneNo
- `paymentMode` (query, optional, enum): payment mode
- `contactId` (query, optional, string): Contact ID for the invoice
- `limit` (query, required, string): Limit the number of items to return
- `offset` (query, required, string): Number of items to skip
- `sortField` (query, optional, enum): The field on which sorting should be applied
- `sortOrder` (query, optional, enum): The order of sort which should be applied for the sortField

#### Request Body
- None

#### Responses
- 200: application/json -> `ListInvoicesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/
Summary: Create Invoice
OperationId: `create-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateInvoiceDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<object>), `discount` (object), `contactDetails` (object), `issueDate` (string), `sentTo` (object), `liveMode` (boolean)
  - Optional: `termsNotes` (string), `title` (string), `invoiceNumber` (string), `dueDate` (string), `automaticTaxesEnabled` (boolean), `paymentSchedule` (object), `lateFeesConfiguration` (object), `tipsConfiguration` (object), `invoiceNumberPrefix` (string), `paymentMethods` (object), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `CreateInvoiceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/{invoiceId}
Summary: Get invoice
OperationId: `get-invoice`
Scopes: `invoices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `GetInvoiceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /invoices/{invoiceId}
Summary: Update invoice
OperationId: `update-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInvoiceDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `currency` (string), `invoiceItems` (array<object>), `issueDate` (string), `dueDate` (string)
  - Optional: `title` (string), `description` (string), `businessDetails` (object), `invoiceNumber` (string), `contactId` (string), `contactDetails` (object), `termsNotes` (string), `discount` (object), `automaticTaxesEnabled` (boolean), `liveMode` (boolean), `paymentSchedule` (object), `tipsConfiguration` (object), `xeroDetails` (object), `invoiceNumberPrefix` (string), `paymentMethods` (object), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `UpdateInvoiceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /invoices/{invoiceId}
Summary: Delete invoice
OperationId: `delete-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteInvoiceResponseDto`
- 400: application/json -> object
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /invoices/{invoiceId}/late-fees-configuration
Summary: Update invoice late fees configuration
OperationId: `update-invoice-late-fees-configuration`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInvoiceLateFeesConfigurationDto`
  - Required: `altId` (string), `altType` (enum), `lateFeesConfiguration` (object)
  - Optional: none

#### Responses
- 200: application/json -> `UpdateInvoiceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/{invoiceId}/record-payment
Summary: Record a manual payment for an invoice
OperationId: `record-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `RecordPaymentDto`
  - Required: `altId` (string), `altType` (enum), `mode` (enum), `card` (object), `cheque` (object), `notes` (string)
  - Optional: `amount` (number), `meta` (object), `paymentScheduleIds` (array<string>), `fulfilledAt` (string)

#### Responses
- 200: application/json -> `RecordPaymentResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/{invoiceId}/send
Summary: Send invoice
OperationId: `send-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SendInvoiceDto`
  - Required: `altId` (string), `altType` (enum), `userId` (string), `action` (enum), `liveMode` (boolean)
  - Optional: `sentFrom` (object), `autoPayment` (object)

#### Responses
- 200: application/json -> `SendInvoicesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/{invoiceId}/void
Summary: Void invoice
OperationId: `void-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `invoiceId` (path, required, string): Invoice Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `VoidInvoiceDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `VoidInvoiceResponseDto`
- 400: application/json -> object
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/estimate
Summary: Create New Estimate
OperationId: `create-new-estimate`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateEstimatesDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<object>), `discount` (object), `contactDetails` (object), `frequencySettings` (object)
  - Optional: `liveMode` (boolean), `termsNotes` (string), `title` (string), `estimateNumber` (number), `issueDate` (string), `expiryDate` (string), `sentTo` (object), `automaticTaxesEnabled` (boolean), `meta` (object), `sendEstimateDetails` (object), `estimateNumberPrefix` (string), `userId` (string), `attachments` (array<object>), `autoInvoice` (object), `miscellaneousCharges` (object), `paymentScheduleConfig` (object)

#### Responses
- 201: application/json -> `EstimateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /invoices/estimate/{estimateId}
Summary: Update Estimate
OperationId: `update-estimate`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `estimateId` (path, required, string): Estimate Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateEstimateDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<object>), `discount` (object), `contactDetails` (object), `frequencySettings` (object)
  - Optional: `liveMode` (boolean), `termsNotes` (string), `title` (string), `estimateNumber` (number), `issueDate` (string), `expiryDate` (string), `sentTo` (object), `automaticTaxesEnabled` (boolean), `meta` (object), `sendEstimateDetails` (object), `estimateNumberPrefix` (string), `userId` (string), `attachments` (array<object>), `autoInvoice` (object), `miscellaneousCharges` (object), `paymentScheduleConfig` (object), `estimateStatus` (enum)

#### Responses
- 200: application/json -> `EstimateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /invoices/estimate/{estimateId}
Summary: Delete Estimate
OperationId: `delete-estimate`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `estimateId` (path, required, string): Estimate Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AltDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `EstimateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/estimate/{estimateId}/invoice
Summary: Create Invoice from Estimate
OperationId: `create-invoice-from-estimate`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `estimateId` (path, required, string): Estimate Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateInvoiceFromEstimateDto`
  - Required: `altId` (string), `altType` (enum), `markAsInvoiced` (boolean)
  - Optional: `version` (enum)

#### Responses
- 200: application/json -> `CreateInvoiceFromEstimateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/estimate/{estimateId}/send
Summary: Send Estimate
OperationId: `send-estimate`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `estimateId` (path, required, string): Estimate Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SendEstimateDto`
  - Required: `altId` (string), `altType` (enum), `action` (enum), `liveMode` (boolean), `userId` (string)
  - Optional: `sentFrom` (object), `estimateName` (string)

#### Responses
- 201: application/json -> `EstimateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/estimate/list
Summary: List Estimates
OperationId: `list-estimates`
Scopes: `invoices/estimate.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `startAt` (query, optional, string): startAt in YYYY-MM-DD format
- `endAt` (query, optional, string): endAt in YYYY-MM-DD format
- `search` (query, optional, string): search text for estimates name
- `status` (query, optional, enum): estimate status
- `contactId` (query, optional, string): Contact ID for the estimate
- `limit` (query, required, string): Limit the number of items to return
- `offset` (query, required, string): Number of items to skip

#### Request Body
- None

#### Responses
- 200: application/json -> `ListEstimatesResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/estimate/number/generate
Summary: Generate Estimate Number
OperationId: `generate-estimate-number`
Scopes: `invoices/estimate.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `GenerateEstimateNumberResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /invoices/estimate/stats/last-visited-at
Summary: Update estimate last visited at
OperationId: `update-estimate-last-visited-at`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `EstimateIdParam`
  - Required: `estimateId` (string)
  - Optional: none

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /invoices/estimate/template
Summary: List Estimate Templates
OperationId: `list-estimate-templates`
Scopes: `invoices/estimate.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `search` (query, optional, string): To search for an estimate template by id / name
- `limit` (query, required, string): Limit the number of items to return
- `offset` (query, required, string): Number of items to skip

#### Request Body
- None

#### Responses
- 200: application/json -> `ListEstimateTemplateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/estimate/template
Summary: Create Estimate Template
OperationId: `create-estimate-template`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `EstimateTemplatesDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<array<unknown>>), `discount` (object)
  - Optional: `liveMode` (boolean), `termsNotes` (string), `title` (string), `automaticTaxesEnabled` (boolean), `meta` (object), `sendEstimateDetails` (object), `estimateNumberPrefix` (string), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 201: application/json -> `EstimateTemplateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /invoices/estimate/template/{templateId}
Summary: Update Estimate Template
OperationId: `update-estimate-template`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `EstimateTemplatesDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<array<unknown>>), `discount` (object)
  - Optional: `liveMode` (boolean), `termsNotes` (string), `title` (string), `automaticTaxesEnabled` (boolean), `meta` (object), `sendEstimateDetails` (object), `estimateNumberPrefix` (string), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `EstimateTemplateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /invoices/estimate/template/{templateId}
Summary: Delete Estimate Template
OperationId: `delete-estimate-template`
Scopes: `invoices/estimate.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AltDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `EstimateTemplateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/estimate/template/preview
Summary: Preview Estimate Template
OperationId: `preview-estimate-template`
Scopes: `invoices/estimate.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `templateId` (query, required, string): Template Id

#### Request Body
- None

#### Responses
- 200: application/json -> `EstimateTemplateResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/generate-invoice-number
Summary: Generate Invoice Number
OperationId: `generate-invoice-number`
Scopes: `invoices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `GenerateInvoiceNumberResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/schedule
Summary: List schedules
OperationId: `list-invoice-schedules`
Scopes: `invoices/schedule.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type
- `status` (query, optional, string): status to be filtered
- `startAt` (query, optional, string): startAt in YYYY-MM-DD format
- `endAt` (query, optional, string): endAt in YYYY-MM-DD format
- `search` (query, optional, string): To search for an invoice by id / name / email / phoneNo
- `paymentMode` (query, optional, enum): payment mode
- `limit` (query, required, string): Limit the number of items to return
- `offset` (query, required, string): Number of items to skip

#### Request Body
- None

#### Responses
- 200: application/json -> `ListSchedulesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/schedule
Summary: Create Invoice Schedule
OperationId: `create-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateInvoiceScheduleDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `contactDetails` (object), `schedule` (object), `liveMode` (boolean), `businessDetails` (object), `currency` (string), `items` (array<object>), `discount` (object)
  - Optional: `automaticTaxesEnabled` (boolean), `termsNotes` (string), `title` (string), `tipsConfiguration` (object), `lateFeesConfiguration` (object), `invoiceNumberPrefix` (string), `paymentMethods` (object), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `CreateInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/schedule/{scheduleId}
Summary: Get an schedule
OperationId: `get-invoice-schedule`
Scopes: `invoices/schedule.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `GetScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /invoices/schedule/{scheduleId}
Summary: Update schedule
OperationId: `update-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInvoiceScheduleDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `contactDetails` (object), `schedule` (object), `liveMode` (boolean), `businessDetails` (object), `currency` (string), `items` (array<object>), `discount` (object)
  - Optional: `termsNotes` (string), `title` (string), `attachments` (array<object>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `UpdateInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /invoices/schedule/{scheduleId}
Summary: Delete schedule
OperationId: `delete-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/schedule/{scheduleId}/auto-payment
Summary: Manage Auto payment for an schedule invoice
OperationId: `auto-payment-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AutoPaymentScheduleDto`
  - Required: `altId` (string), `altType` (enum), `id` (string), `autoPayment` (object)
  - Optional: none

#### Responses
- 200: application/json -> `AutoPaymentInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/schedule/{scheduleId}/cancel
Summary: Cancel an scheduled invoice
OperationId: `cancel-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CancelInvoiceScheduleDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `CancelInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/schedule/{scheduleId}/schedule
Summary: Schedule an schedule invoice
OperationId: `schedule-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `ScheduleInvoiceScheduleDto`
  - Required: `altId` (string), `altType` (enum), `liveMode` (boolean)
  - Optional: `autoPayment` (object)

#### Responses
- 200: application/json -> `ScheduleInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/schedule/{scheduleId}/updateAndSchedule
Summary: Update scheduled recurring invoice
OperationId: `update-and-schedule-invoice-schedule`
Scopes: `invoices/schedule.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `scheduleId` (path, required, string): Schedule Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `UpdateAndScheduleInvoiceScheduleResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /invoices/stats/last-visited-at
Summary: Update invoice last visited at
OperationId: `update-invoice-last-visited-at`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PatchInvoiceStatsLastViewedDto`
  - Required: `invoiceId` (string)
  - Optional: none

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /invoices/template
Summary: List templates
OperationId: `list-invoice-templates`
Scopes: `invoices/template.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type
- `status` (query, optional, string): status to be filtered
- `startAt` (query, optional, string): startAt in YYYY-MM-DD format
- `endAt` (query, optional, string): endAt in YYYY-MM-DD format
- `search` (query, optional, string): To search for an invoice by id / name / email / phoneNo
- `paymentMode` (query, optional, enum): payment mode
- `limit` (query, required, string): Limit the number of items to return
- `offset` (query, required, string): Number of items to skip

#### Request Body
- None

#### Responses
- 200: application/json -> `ListTemplatesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/template
Summary: Create template
OperationId: `create-invoice-template`
Scopes: `invoices/template.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateInvoiceTemplateDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<object>)
  - Optional: `internal` (boolean), `automaticTaxesEnabled` (boolean), `discount` (object), `termsNotes` (string), `title` (string), `tipsConfiguration` (object), `lateFeesConfiguration` (object), `invoiceNumberPrefix` (string), `paymentMethods` (object), `attachments` (array<string>), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `CreateInvoiceTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /invoices/template/{templateId}
Summary: Get an template
OperationId: `get-invoice-template`
Scopes: `invoices/template.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /invoices/template/{templateId}
Summary: Update template
OperationId: `update-invoice-template`
Scopes: `invoices/template.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInvoiceTemplateDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `businessDetails` (object), `currency` (string), `items` (array<object>)
  - Optional: `internal` (boolean), `discount` (object), `termsNotes` (string), `title` (string), `miscellaneousCharges` (object)

#### Responses
- 200: application/json -> `UpdateInvoiceTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /invoices/template/{templateId}
Summary: Delete template
OperationId: `delete-invoice-template`
Scopes: `invoices/template.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteInvoiceTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /invoices/template/{templateId}/late-fees-configuration
Summary: Update template late fees configuration
OperationId: `update-invoice-template-late-fees-configuration`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInvoiceLateFeesConfigurationDto`
  - Required: `altId` (string), `altType` (enum), `lateFeesConfiguration` (object)
  - Optional: none

#### Responses
- 200: application/json -> `UpdateInvoiceTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /invoices/template/{templateId}/payment-methods-configuration
Summary: Update template late fees configuration
OperationId: `update-invoice-payment-methods-configuration`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `templateId` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdatePaymentMethodsConfigurationDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: `paymentMethods` (object)

#### Responses
- 200: application/json -> `UpdateInvoiceTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /invoices/text2pay
Summary: Create & Send
OperationId: `text2pay-invoice`
Scopes: `invoices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `Text2PayDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `currency` (string), `items` (array<object>), `contactDetails` (object), `issueDate` (string), `sentTo` (object), `liveMode` (boolean), `action` (enum), `userId` (string)
  - Optional: `termsNotes` (string), `title` (string), `invoiceNumber` (string), `dueDate` (string), `automaticTaxesEnabled` (boolean), `paymentSchedule` (object), `lateFeesConfiguration` (object), `tipsConfiguration` (object), `invoiceNumberPrefix` (string), `paymentMethods` (object), `attachments` (array<object>), `miscellaneousCharges` (object), `id` (string), `includeTermsNote` (boolean), `discount` (object), `businessDetails` (object)

#### Responses
- 200: application/json -> `Text2PayInvoiceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /links/
Summary: Get Links
OperationId: `get-links`
Scopes: `links.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLinksSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /links/
Summary: Create Link
OperationId: `create-link`
Scopes: `links.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `LinksDto`
  - Required: `locationId` (string), `name` (string), `redirectTo` (string)
  - Optional: none

#### Responses
- 201: application/json -> `GetLinkSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /links/{linkId}
Summary: Update Link
OperationId: `update-link`
Scopes: `links.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `linkId` (path, required, string): Link Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `LinkUpdateDto`
  - Required: `name` (string), `redirectTo` (string)
  - Optional: none

#### Responses
- 201: application/json -> `GetLinkSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /links/{linkId}
Summary: Delete Link
OperationId: `delete-link`
Scopes: `links.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `linkId` (path, required, string): Link Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 201: application/json -> `DeleteLinksSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /links/id/{linkId}
Summary: Get Link by ID
OperationId: `get-link-by-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `linkId` (path, required, string): Link Id

#### Query Parameters
- `locationId` (query, required, string): Location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLinkSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /links/search
Summary: Search Trigger Links
OperationId: `search-trigger-links`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `query` (query, optional, string): Search query as a string
- `skip` (query, optional, number): Numbers of query results to skip
- `limit` (query, optional, number): Limit on number of search results

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLinksSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /locations/
Summary: Create Sub-Account (Formerly Location)
OperationId: `create-location`
Scopes: `locations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateLocationDto`
  - Required: `name` (string), `companyId` (string)
  - Optional: `phone` (string), `address` (string), `city` (string), `state` (string), `country` (enum), `postalCode` (string), `website` (string), `timezone` (string), `prospectInfo` (object), `settings` (object), `social` (object), `twilio` (object), `mailgun` (object), `snapshotId` (string)

#### Responses
- 200: application/json -> `CreateLocationSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /locations/{locationId}
Summary: Get Sub-Account (Formerly Location)
OperationId: `get-location`
Scopes: `locations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLocationByIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /locations/{locationId}
Summary: Put Sub-Account (Formerly Location)
OperationId: `put-location`
Scopes: `locations.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateLocationDto`
  - Required: `companyId` (string)
  - Optional: `name` (string), `phone` (string), `address` (string), `city` (string), `state` (string), `country` (enum), `postalCode` (string), `website` (string), `timezone` (string), `prospectInfo` (object), `settings` (object), `social` (object), `twilio` (object), `mailgun` (object), `snapshot` (object)

#### Responses
- 200: application/json -> `CreateLocationSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /locations/{locationId}
Summary: Delete Sub-Account (Formerly Location)
OperationId: `delete-location`
Scopes: `locations.internal-access-only`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `deleteTwilioAccount` (query, required, boolean): Boolean value to indicate whether to delete Twilio Account or not

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationDeletedSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /locations/{locationId}/customFields
Summary: Get Custom Fields
OperationId: `get-custom-fields`
Scopes: `locations/customFields.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `model` (query, optional, enum): Model of the custom field you want to retrieve

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFieldsListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /locations/{locationId}/customFields
Summary: Create Custom Field
OperationId: `create-custom-field`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCustomFieldsDTO`
  - Required: `locationId` (string), `showInForms` (boolean), `dataType` (enum), `fieldKey` (string), `objectKey` (string), `parentId` (string)
  - Optional: `name` (string), `description` (string), `placeholder` (string), `options` (array<object>), `acceptedFormats` (enum), `maxFileLimit` (number), `allowCustomOption` (boolean)

#### Responses
- 201: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/customFields/{id}
Summary: Get Custom Field
OperationId: `get-custom-field`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id")

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /locations/{locationId}/customFields/{id}
Summary: Update Custom Field
OperationId: `update-custom-field`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Field Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCustomFieldsDTO`
  - Required: `locationId` (string), `showInForms` (boolean)
  - Optional: `name` (string), `description` (string), `placeholder` (string), `options` (array<object>), `acceptedFormats` (enum), `maxFileLimit` (number)

#### Responses
- 200: application/json -> `CustomFieldSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /locations/{locationId}/customFields/{id}
Summary: Delete Custom Field
OperationId: `delete-custom-field`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Field Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomFieldDeleteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /locations/{locationId}/customFields/upload
Summary: Uploads File to customFields
OperationId: `upload-file-customFields`
Scopes: `locations/customFields.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- multipart/form-data: required; schema `FileUploadBody`
  - Required: none
  - Optional: `id` (string), `maxFiles` (string)

#### Responses
- 200: application/json -> `FileUploadResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/customValues
Summary: Get Custom Values
OperationId: `get-custom-values`
Scopes: `locations/customValues.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomValuesListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /locations/{locationId}/customValues
Summary: Create Custom Value
OperationId: `create-custom-value`
Scopes: `locations/customValues.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `customValuesDTO`
  - Required: `name` (string), `value` (string)
  - Optional: none

#### Responses
- 201: application/json -> `CustomValueIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/customValues/{id}
Summary: Get Custom Value
OperationId: `get-custom-value`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Value Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomValueIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /locations/{locationId}/customValues/{id}
Summary: Update Custom Value
OperationId: `update-custom-value`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Value Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `customValuesDTO`
  - Required: `name` (string), `value` (string)
  - Optional: none

#### Responses
- 200: application/json -> `CustomValueIdSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /locations/{locationId}/customValues/{id}
Summary: Delete Custom Value
OperationId: `delete-custom-value`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Custom Value Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomValueDeleteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /locations/{locationId}/recurring-tasks
Summary: Create Recurring Task
OperationId: `create-recurring-task`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `RecurringTaskCreateDTO`
  - Required: `title` (string), `rruleOptions` (object)
  - Optional: `description` (string), `contactIds` (array<string>), `owners` (array<string>), `ignoreTaskCreation` (boolean)

#### Responses
- 201: application/json -> `RecurringTaskSingleResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /locations/{locationId}/recurring-tasks/{id}
Summary: Get Recurring Task By Id
OperationId: `get-recurring-task-by-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Recurring Task Id
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `RecurringTaskSingleResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /locations/{locationId}/recurring-tasks/{id}
Summary: Update Recurring Task
OperationId: `update-recurring-task`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Recurring Task Id
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `RecurringTaskUpdateDTO`
  - Required: none
  - Optional: `title` (string), `description` (string), `contactIds` (array<string>), `owners` (array<string>), `rruleOptions` (object), `ignoreTaskCreation` (boolean)

#### Responses
- 200: application/json -> `RecurringTaskSingleResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /locations/{locationId}/recurring-tasks/{id}
Summary: Delete Recurring Task
OperationId: `delete-recurring-task`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Recurring Task Id
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteRecurringTaskResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /locations/{locationId}/tags
Summary: Get Tags
OperationId: `get-location-tags`
Scopes: `locations/tags.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationTagsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /locations/{locationId}/tags
Summary: Create Tag
OperationId: `create-tag`
Scopes: `locations/tags.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `tagBody`
  - Required: `name` (string)
  - Optional: none

#### Responses
- 200: application/json -> `LocationTagSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/tags/{tagId}
Summary: Get tag by id
OperationId: `get-tag-by-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `tagId` (path, required, string): Tag Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationTagSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /locations/{locationId}/tags/{tagId}
Summary: Update tag
OperationId: `update-tag`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `tagId` (path, required, string): Tag Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `tagBody`
  - Required: `name` (string)
  - Optional: none

#### Responses
- 200: application/json -> `LocationTagSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /locations/{locationId}/tags/{tagId}
Summary: Delete tag
OperationId: `delete-tag`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `tagId` (path, required, string): Tag Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationTagDeleteSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /locations/{locationId}/tasks/search
Summary: Task Search Filter
OperationId: `task-search`
Scopes: `locations/tasks.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `TaskSearchParamsDto`
  - Required: none
  - Optional: `contactId` (array<string>), `completed` (boolean), `assignedTo` (array<string>), `query` (string), `limit` (number), `skip` (number), `businessId` (string)

#### Responses
- 200: application/json -> `LocationTaskListSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/templates
Summary: GET all or email/sms templates
OperationId: `GET-all-or-email-sms-templates`
Scopes: `locations/templates.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `deleted` (query, optional, boolean)
- `skip` (query, optional, string)
- `limit` (query, optional, string)
- `type` (query, optional, enum)
- `originId` (query, required, string): Origin Id

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTemplatesSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /locations/{locationId}/templates/{id}
Summary: DELETE an email/sms template
OperationId: `DELETE-an-email-sms-template`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Template Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/{locationId}/timezones
Summary: Fetch Timezones
OperationId: `get-timezones`
Scopes: `locations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /locations/search
Summary: Search
OperationId: `search-locations`
Scopes: `locations.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `companyId` (query, optional, string): The company/agency id on which you want to perform the search
- `skip` (query, optional, string): The value by which the results should be skipped. Default will be 0
- `limit` (query, optional, string): The value by which the results should be limited. Default will be 10
- `order` (query, optional, string): The order in which the results should be returned - Allowed values asc, desc. Default will be asc
- `email` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `SearchSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /marketplace/app/{appId}/installations
Summary: Get Installer Details
OperationId: `get-installer-details`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appId` (path, required, string): ID of the app to get installer details

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetInstallerDetailsResponseDTO`
- 400: no content
- 403: no content

### DELETE /marketplace/app/{appId}/installations
Summary: Uninstall an application
OperationId: `uninstall-application`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `appId` (path, required, string): The application id which is to be uninstalled.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `DeleteIntegrationBodyDto`
  - Required: none
  - Optional: `companyId` (string), `locationId` (string), `reason` (string)

#### Responses
- 200: application/json -> `DeleteIntegrationResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /marketplace/billing/charges
Summary: Get all wallet charges
OperationId: `getCharges`
Scopes: `charges.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `meterId` (query, optional, string): Billing Meter ID (you can find this on your app's pricing page on the developer portal)
- `eventId` (query, optional, string): Event ID / Transaction ID
- `userId` (query, optional, string): Filter results by User ID that your server passed via API when the charge was created
- `startDate` (query, optional, string): Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window.
- `endDate` (query, optional, string): Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window.
- `skip` (query, optional, number): Number of records to skip
- `limit` (query, optional, number): Maximum number of records to return

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 422: application/json -> `UnprocessableDTO`

### POST /marketplace/billing/charges
Summary: Create a new wallet charge
OperationId: `charge`
Scopes: `charges.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `RaiseChargeBodyDTO`
  - Required: `appId` (string), `meterId` (string), `eventId` (string), `locationId` (string), `companyId` (string), `description` (string), `units` (string)
  - Optional: `userId` (string), `price` (number), `eventTime` (string)

#### Responses
- 201: application/json -> object
- 400: application/json -> object
- 422: application/json -> `UnprocessableDTO`

### GET /marketplace/billing/charges/{chargeId}
Summary: Get specific wallet charge details
OperationId: `getSpecificCharge`
Scopes: `charges.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `chargeId` (path, required, string): ID of the charge to retrieve

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 404: application/json -> object
- 422: application/json -> `UnprocessableDTO`

### DELETE /marketplace/billing/charges/{chargeId}
Summary: Delete a wallet charge
OperationId: `deleteCharge`
Scopes: `charges.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `chargeId` (path, required, string): ID of the charge to delete

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 404: application/json -> object
- 422: application/json -> `UnprocessableDTO`

### GET /marketplace/billing/charges/has-funds
Summary: Check if account has sufficient funds
OperationId: `hasFunds`
Scopes: `charges.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 422: application/json -> `UnprocessableDTO`

### POST /medias/{id}
Summary: Update File/ Folder
OperationId: `update-media-object`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Unique identifier of the file or folder to update

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateObject`
  - Required: `name` (string), `altType` (enum), `altId` (string)
  - Optional: none

#### Responses
- 200: application/json -> object

### DELETE /medias/{id}
Summary: Delete File or Folder
OperationId: `delete-media-content`
Scopes: `medias.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string)

#### Query Parameters
- `altType` (query, required, enum): AltType
- `altId` (query, required, string): location Id

#### Request Body
- None

#### Responses
- 200: no content

### PUT /medias/delete-files
Summary: Bulk Delete / Trash Files or Folders
OperationId: `bulk-delete-media-objects`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `DeleteMediaObjectsBodyParams`
  - Required: `filesToBeDeleted` (array<object>), `altType` (enum), `altId` (string), `status` (enum)
  - Optional: none

#### Responses
- 200: application/json -> object

### GET /medias/files
Summary: Get List of Files/ Folders
OperationId: `fetch-media-content`
Scopes: `medias.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `offset` (query, optional, string): Number of files to skip in listing
- `limit` (query, optional, string): Number of files to show in the listing
- `sortBy` (query, required, string): Field to sorting the file listing by
- `sortOrder` (query, required, string): Direction in which file needs to be sorted
- `type` (query, required, string): Type
- `query` (query, optional, string): Query text
- `altType` (query, required, enum): AltType
- `altId` (query, required, string): location Id
- `parentId` (query, optional, string): parent id or folder id
- `fetchAll` (query, optional, string): Fetch all files or folders

#### Request Body
- None

#### Responses
- 200: application/json -> `GetFilesResponseDTO`

### POST /medias/folder
Summary: Create Folder
OperationId: `create-media-folder`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateFolderParams`
  - Required: `altId` (string), `altType` (enum), `name` (string)
  - Optional: `parentId` (string)

#### Responses
- 200: application/json -> `FolderDTO`

### PUT /medias/update-files
Summary: Bulk Update Files/ Folders
OperationId: `bulk-update-media-objects`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateMediaObjects`
  - Required: `altId` (string), `altType` (enum), `filesToBeUpdated` (array<object>)
  - Optional: none

#### Responses
- 200: application/json -> object

### POST /medias/upload-file
Summary: Upload File into Media Library
OperationId: `upload-media-content`
Scopes: `medias.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- multipart/form-data: required; schema object
  - Required: none
  - Optional: `file` (string), `hosted` (boolean), `fileUrl` (string), `name` (string), `parentId` (string)

#### Responses
- 200: application/json -> `UploadFileResponseDTO`

### GET /oauth/installedLocations
Summary: Get Location where app is installed
OperationId: `get-installed-location`
Scopes: `oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `skip` (query, optional, string): Parameter to skip the number installed locations
- `limit` (query, optional, string): Parameter to limit the number installed locations
- `query` (query, optional, string): Parameter to search for the installed location by name
- `isInstalled` (query, optional, boolean): Filters out location which are installed for specified app under the specified company
- `companyId` (query, required, string): Parameter to search by the companyId
- `appId` (query, required, string): Parameter to search by the appId
- `versionId` (query, optional, string): VersionId of the app
- `onTrial` (query, optional, boolean): Filters out locations which are installed for specified app in trial mode
- `planId` (query, optional, string): Filters out location which are installed for specified app under the specified planId

#### Request Body
- None

#### Responses
- 200: application/json -> `GetInstalledLocationsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /oauth/locationToken
Summary: Get Location Access Token from Agency Token
OperationId: `get-location-access-token`
Scopes: `oauth.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/x-www-form-urlencoded: required; schema `GetLocationAccessCodeBodyDto`
  - Required: `companyId` (string), `locationId` (string)
  - Optional: none

#### Responses
- 200: application/json -> `GetLocationAccessTokenSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /oauth/token
Summary: Get Access Token
OperationId: `get-access-token`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/x-www-form-urlencoded: required; schema `GetAccessCodebodyDto`
  - Required: `client_id` (string), `client_secret` (string), `grant_type` (enum)
  - Optional: `code` (string), `refresh_token` (string), `user_type` (enum), `redirect_uri` (string)

#### Responses
- 200: application/json -> `GetAccessCodeSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /objects/
Summary: Get all objects for a location
OperationId: `get-object-by-location-id`
Scopes: `objects/schema.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): location id

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomObjectListResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /objects/
Summary: Create Custom Object
OperationId: `create-custom-object-schema`
Scopes: `objects/schema.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCustomObjectSchemaDTO`
  - Required: `labels` (object), `key` (string), `locationId` (string), `primaryDisplayPropertyDetails` (object)
  - Optional: `description` (string)

#### Responses
- 201: application/json -> `CustomObjectResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /objects/{key}
Summary: Get Object Schema by key / id
OperationId: `get-object-schema-by-key`
Scopes: `objects/schema.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `key` (path, required, string): key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

#### Query Parameters
- `locationId` (query, required, string): location id of the sub account
- `fetchProperties` (query, optional, string): Fetch Properties , Fetches all the standard / custom fields of the object when set to true

#### Request Body
- None

#### Responses
- 200: application/json -> `CustomObjectByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /objects/{key}
Summary: Update Object Schema By Key / Id
OperationId: `update-custom-object`
Scopes: `objects/schema.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `key` (path, required, string): key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCustomObjectSchemaDTO`
  - Required: `locationId` (string), `searchableProperties` (array<string>)
  - Optional: `labels` (object), `description` (string)

#### Responses
- 200: application/json -> `CustomObjectResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /objects/{schemaKey}/records
Summary: Create Record
OperationId: `create-object-record`
Scopes: `objects/record.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `schemaKey` (path, required, string): The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCustomObjectRecordDto`
  - Required: none
  - Optional: none

#### Responses
- 201: application/json -> `RecordByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /objects/{schemaKey}/records/{id}
Summary: Get Record By Id
OperationId: `get-record-by-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `schemaKey` (path, required, string): The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` (path, required, string): id of the record to be updated. Available on the Record details page under the 3 dots or in the url

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `RecordByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### PUT /objects/{schemaKey}/records/{id}
Summary: Update Record
OperationId: `update-object-record`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `schemaKey` (path, required, string): The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` (path, required, string): id of the record to be updated. Available on the Record details page under the 3 dots or in the url

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- application/json: required; schema `UpdateCustomObjectRecordDto`
  - Required: none
  - Optional: none

#### Responses
- 200: application/json -> `RecordByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### DELETE /objects/{schemaKey}/records/{id}
Summary: Delete Record
OperationId: `delete-object-record`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `schemaKey` (path, required, string): The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` (path, required, string): id of the record to be updated. Available on the Record details page under the 3 dots or in the url

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `ObjectRecordDeleteResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /objects/{schemaKey}/records/search
Summary: Search Object Records
OperationId: `search-object-records`
Scopes: `objects/record.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `schemaKey` (path, optional, string): custom object key

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SearchRecordsBody`
  - Required: `locationId` (string), `page` (number), `pageLimit` (number), `query` (string), `searchAfter` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `SearchRecordResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /opportunities/
Summary: Create Opportunity
OperationId: `create-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateDto`
  - Required: `pipelineId` (string), `locationId` (string), `name` (string), `status` (enum), `contactId` (string)
  - Optional: `pipelineStageId` (string), `monetaryValue` (number), `assignedTo` (string), `customFields` (array<anyOf>)

#### Responses
- 201: application/json -> `GetPostOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /opportunities/{id}
Summary: Get Opportunity
OperationId: `get-opportunity`
Scopes: `opportunities.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /opportunities/{id}
Summary: Update Opportunity
OperationId: `update-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateOpportunityDto`
  - Required: none
  - Optional: `pipelineId` (string), `name` (string), `pipelineStageId` (string), `status` (enum), `monetaryValue` (number), `assignedTo` (string), `customFields` (array<anyOf>)

#### Responses
- 200: application/json -> `GetPostOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /opportunities/{id}
Summary: Delete Opportunity
OperationId: `delete-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteUpdateOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /opportunities/{id}/followers
Summary: Add Followers
OperationId: `add-followers-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `FollowersDTO`
  - Required: `followers` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `CreateAddFollowersSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /opportunities/{id}/followers
Summary: Remove Followers
OperationId: `remove-followers-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `FollowersDTO`
  - Required: `followers` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `DeleteFollowersSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /opportunities/{id}/status
Summary: Update Opportunity Status
OperationId: `update-opportunity-status`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Opportunity Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateStatusDto`
  - Required: `status` (enum)
  - Optional: none

#### Responses
- 200: application/json -> `DeleteUpdateOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /opportunities/pipelines
Summary: Get Pipelines
OperationId: `get-pipelines`
Scopes: `opportunities.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPipelinesSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /opportunities/search
Summary: Search Opportunity
OperationId: `search-opportunity`
Scopes: `opportunities.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `q` (query, optional, string)
- `location_id` (query, required, string): Location Id
- `pipeline_id` (query, optional, string): Pipeline Id
- `pipeline_stage_id` (query, optional, string): stage Id
- `contact_id` (query, optional, string): Contact Id
- `status` (query, optional, enum)
- `assigned_to` (query, optional, string)
- `campaignId` (query, optional, string): Campaign Id
- `id` (query, optional, string): Opportunity Id
- `order` (query, optional, string)
- `endDate` (query, optional, string): End date
- `startAfter` (query, optional, string): Start After
- `startAfterId` (query, optional, string): Start After Id
- `date` (query, optional, string): Start date
- `country` (query, optional, string)
- `page` (query, optional, number)
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `getTasks` (query, optional, boolean): get Tasks in contact
- `getNotes` (query, optional, boolean): get Notes in contact
- `getCalendarEvents` (query, optional, boolean): get Calender event in contact

#### Request Body
- None

#### Responses
- 200: application/json -> `SearchSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /opportunities/upsert
Summary: Upsert Opportunity
OperationId: `Upsert-opportunity`
Scopes: `opportunities.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpsertOpportunityDto`
  - Required: `pipelineId` (string), `locationId` (string), `contactId` (string)
  - Optional: `name` (string), `status` (enum), `pipelineStageId` (string), `monetaryValue` (number), `assignedTo` (string)

#### Responses
- 200: application/json -> `UpsertOpportunitySuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/coupon
Summary: Fetch Coupon
OperationId: `get-coupon`
Scopes: `payments/coupons.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id
- `altType` (query, required, enum): Alt Type
- `id` (query, required, string): Coupon id
- `code` (query, required, string): Coupon code

#### Request Body
- None

#### Responses
- 200: application/json -> `CreateCouponResponseDto`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/coupon
Summary: Create Coupon
OperationId: `create-coupon`
Scopes: `payments/coupons.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateCouponParams`
  - Required: `altId` (string), `altType` (enum), `name` (string), `code` (string), `discountType` (enum), `discountValue` (number), `startDate` (string)
  - Optional: `endDate` (string), `usageLimit` (number), `productIds` (array<string>), `applyToFuturePayments` (boolean), `applyToFuturePaymentsConfig` (object), `limitPerCustomer` (boolean)

#### Responses
- 201: application/json -> `CreateCouponResponseDto`
- 422: application/json -> `UnprocessableDTO`

### PUT /payments/coupon
Summary: Update Coupon
OperationId: `update-coupon`
Scopes: `payments/coupons.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCouponParams`
  - Required: `altId` (string), `altType` (enum), `name` (string), `code` (string), `discountType` (enum), `discountValue` (number), `startDate` (string), `id` (string)
  - Optional: `endDate` (string), `usageLimit` (number), `productIds` (array<string>), `applyToFuturePayments` (boolean), `applyToFuturePaymentsConfig` (object), `limitPerCustomer` (boolean)

#### Responses
- 200: application/json -> `CreateCouponResponseDto`
- 422: application/json -> `UnprocessableDTO`

### DELETE /payments/coupon
Summary: Delete Coupon
OperationId: `delete-coupon`
Scopes: `payments/coupons.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `DeleteCouponParams`
  - Required: `altId` (string), `altType` (enum), `id` (string)
  - Optional: none

#### Responses
- 200: application/json -> `DeleteCouponResponseDto`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/coupon/list
Summary: List Coupons
OperationId: `list-coupons`
Scopes: `payments/coupons.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id
- `altType` (query, required, enum): Alt Type
- `limit` (query, optional, number): Maximum number of coupons to return
- `offset` (query, optional, number): Number of coupons to skip for pagination
- `status` (query, optional, enum): Filter coupons by status
- `search` (query, optional, string): Search term to filter coupons by name or code

#### Request Body
- None

#### Responses
- 200: application/json -> `ListCouponsResponseDto`
- 422: application/json -> `UnprocessableDTO`

### PUT /payments/custom-provider/capabilities
Summary: Custom-provider marketplace app update capabilities
OperationId: `custom-provider-marketplace-app-update-capabilities`
Scopes: `payments/custom-provider.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateCustomProviderCapabilitiesDto`
  - Required: `supportsSubscriptionSchedules` (boolean)
  - Optional: `companyId` (string), `locationId` (string)

#### Responses
- 200: application/json -> `UpdateCustomProviderCapabilitiesResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/custom-provider/connect
Summary: Fetch given provider config
OperationId: `fetch-config`
Scopes: `payments/custom-provider.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location id

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCustomProvidersResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/custom-provider/connect
Summary: Create new provider config
OperationId: `create-config`
Scopes: `payments/custom-provider.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location id

#### Request Body
- application/json: required; schema `ConnectCustomProvidersConfigDto`
  - Required: `live` (object), `test` (object)
  - Optional: none

#### Responses
- 200: application/json -> `ConnectCustomProvidersResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/custom-provider/disconnect
Summary: Disconnect existing provider config
OperationId: `disconnect-config`
Scopes: `payments/custom-provider.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location id

#### Request Body
- application/json: required; schema `DeleteCustomProvidersConfigDto`
  - Required: `liveMode` (boolean)
  - Optional: none

#### Responses
- 200: application/json -> `DisconnectCustomProvidersResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/custom-provider/provider
Summary: Create new integration
OperationId: `create-integration`
Scopes: `payments/custom-provider.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location id

#### Request Body
- application/json: required; schema `CreateCustomProvidersDto`
  - Required: `name` (string), `description` (string), `paymentsUrl` (string), `queryUrl` (string), `imageUrl` (string), `supportsSubscriptionSchedule` (boolean)
  - Optional: none

#### Responses
- 200: application/json -> `CreateCustomProvidersResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /payments/custom-provider/provider
Summary: Deleting an existing integration
OperationId: `delete-integration`
Scopes: `payments/custom-provider.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location id

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteCustomProvidersResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/integrations/provider/whitelabel
Summary: List White-label Integration Providers
OperationId: `list-integration-providers`
Scopes: `payments/integration.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): location Id / company Id based on altType
- `altType` (query, required, enum): Alt Type
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.

#### Request Body
- None

#### Responses
- 200: application/json -> `ListWhitelabelIntegrationProviderResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/integrations/provider/whitelabel
Summary: Create White-label Integration Provider
OperationId: `create-integration provider`
Scopes: `payments/integration.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateWhiteLabelIntegrationProviderDto`
  - Required: `altId` (string), `altType` (enum), `uniqueName` (string), `title` (string), `provider` (enum), `description` (string), `imageUrl` (string)
  - Optional: none

#### Responses
- 200: application/json -> `CreateWhitelabelIntegrationResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/orders
Summary: List Orders
OperationId: `list-orders`
Scopes: `payments/orders.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, optional, string): LocationId is the id of the sub-account.
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.
- `altType` (query, required, string): AltType is the type of identifier.
- `status` (query, optional, string): Order status.
- `paymentMode` (query, optional, string): Mode of payment.
- `startAt` (query, optional, string): Starting interval of orders.
- `endAt` (query, optional, string): Closing interval of orders.
- `search` (query, optional, string): The name of the order for searching.
- `contactId` (query, optional, string): Contact id for filtering of orders.
- `funnelProductIds` (query, optional, string): Funnel product ids separated by comma.
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.

#### Request Body
- None

#### Responses
- 200: application/json -> `ListOrdersResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/orders/{orderId}
Summary: Get Order by ID
OperationId: `get-order-by-id`
Scopes: `payments/orders.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `orderId` (path, required, string): ID of the order that needs to be returned

#### Query Parameters
- `locationId` (query, optional, string): LocationId is the id of the sub-account.
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.

#### Request Body
- None

#### Responses
- 200: application/json -> `GetOrderResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/orders/{orderId}/fulfillments
Summary: List fulfillment
OperationId: `list-order-fulfillment`
Scopes: `payments/orders.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `orderId` (path, required, string): ID of the order that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `ListFulfillmentResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/orders/{orderId}/fulfillments
Summary: Create order fulfillment
OperationId: `create-order-fulfillment`
Scopes: `payments/orders.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `orderId` (path, required, string): ID of the order that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateFulfillmentDto`
  - Required: `altId` (string), `altType` (enum), `trackings` (array<object>), `items` (array<object>), `notifyCustomer` (boolean)
  - Optional: none

#### Responses
- 200: application/json -> `CreateFulfillmentResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/orders/{orderId}/notes
Summary: List Order Notes
OperationId: `list-order-notes`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `orderId` (path, required, string): ID of the order that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/orders/{orderId}/record-payment
Summary: Record Order Payment
OperationId: `record-order-payment`
Scopes: `payments/orders.collectPayment`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `orderId` (path, required, string): MongoDB Order ID

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PostRecordOrderPaymentBody`
  - Required: `altId` (string), `altType` (enum), `mode` (enum)
  - Optional: `card` (object), `cheque` (object), `notes` (string), `amount` (number), `meta` (object), `isPartialPayment` (boolean)

#### Responses
- 200: application/json -> `PostRecordOrderPaymentResponse`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /payments/orders/migrate-order-ps
Summary: migration Endpoint for Order Payment Status
OperationId: `post-migrate-order-payment-status`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, optional, string): LocationId is the id of the sub-account.
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.

#### Request Body
- None

#### Responses
- 201: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /payments/subscriptions
Summary: List Subscriptions
OperationId: `list-subscriptions`
Scopes: `payments/subscriptions.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.
- `altType` (query, required, enum): AltType is the type of identifier.
- `entityId` (query, optional, string): Entity id for filtering of subscriptions.
- `paymentMode` (query, optional, string): Mode of payment.
- `startAt` (query, optional, string): Starting interval of subscriptions.
- `endAt` (query, optional, string): Closing interval of subscriptions.
- `entitySourceType` (query, optional, string): Source of the subscriptions.
- `search` (query, optional, string): The name of the subscription for searching.
- `contactId` (query, optional, string): Contact ID for the subscription
- `id` (query, optional, string): Subscription id for filtering of subscriptions.
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.

#### Request Body
- None

#### Responses
- 200: application/json -> `ListSubscriptionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/subscriptions/{subscriptionId}
Summary: Get Subscription by ID
OperationId: `get-subscription-by-id`
Scopes: `payments/subscriptions.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `subscriptionId` (path, required, string): ID of the subscription that needs to be returned

#### Query Parameters
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.
- `altType` (query, required, enum): AltType is the type of identifier.

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSubscriptionResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/transactions
Summary: List Transactions
OperationId: `list-transactions`
Scopes: `payments/transactions.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, optional, string): LocationId is the id of the sub-account.
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.
- `altType` (query, required, string): AltType is the type of identifier.
- `paymentMode` (query, optional, string): Mode of payment.
- `startAt` (query, optional, string): Starting interval of transactions.
- `endAt` (query, optional, string): Closing interval of transactions.
- `entitySourceType` (query, optional, string): Source of the transactions.
- `entitySourceSubType` (query, optional, string): Source sub-type of the transactions.
- `search` (query, optional, string): The name of the transaction for searching.
- `subscriptionId` (query, optional, string): Subscription id for filtering of transactions.
- `entityId` (query, optional, string): Entity id for filtering of transactions.
- `contactId` (query, optional, string): Contact id for filtering of transactions.
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.

#### Request Body
- None

#### Responses
- 200: application/json -> `ListTxnsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /payments/transactions/{transactionId}
Summary: Get Transaction by ID
OperationId: `get-transaction-by-id`
Scopes: `payments/transactions.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `transactionId` (path, required, string): ID of the transaction that needs to be returned

#### Query Parameters
- `locationId` (query, optional, string): LocationId is the id of the sub-account.
- `altId` (query, required, string): AltId is the unique identifier e.g: location id.
- `altType` (query, required, string): AltType is the type of identifier.

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTxnResponseSchema`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /phone-system/number-pools
Summary: List Number Pools
OperationId: `getNumberPoolList`
Scopes: `numberpools.read`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, optional, string): Location ID to filter pools

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 400: application/json -> object
- 401: no content
- 403: no content

### GET /phone-system/numbers/location/{locationId}
Summary: List active numbers
OperationId: `active-numbers`
Scopes: `phonenumbers.read`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): The unique identifier of the location

#### Query Parameters
- `pageSize` (query, optional, number): How many resources to return in each list page. The default is 50, and the maximum is 1000.
- `page` (query, optional, number): The page index for pagination. The default is 0.
- `searchFilter` (query, optional, string): Filter numbers by phone number pattern. Supports partial matching (e.g., "+91" to find all Indian numbers).
- `skipNumberPool` (query, optional, boolean): Whether to exclude numbers that are assigned to number pools. Default is true.

#### Request Body
- None

#### Responses
- 200: application/json -> object
- 400: application/json -> object
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> object
- 500: application/json -> object

### GET /products/
Summary: List Products
OperationId: `list-invoices`
Scopes: `products.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `locationId` (query, required, string): LocationId is the id of the sub-account
- `search` (query, optional, string): The name of the product for searching.
- `collectionIds` (query, optional, string): Filter by product category Ids. Supports comma separated values
- `collectionSlug` (query, optional, string): The slug value of the collection by which the collection would be searched
- `expand` (query, optional, array<string>): Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes
- `productIds` (query, optional, array<string>): List of product ids to be fetched.
- `storeId` (query, optional, string): fetch and project products based on the storeId
- `includedInStore` (query, optional, boolean): Separate products by which are included in the store and which are not
- `availableInStore` (query, optional, boolean): If the product is included in the online store
- `sortOrder` (query, optional, enum): The order of sort which should be applied for the date

#### Request Body
- None

#### Responses
- 200: application/json -> `ListProductsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/
Summary: Create Product
OperationId: `create-product`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateProductDto`
  - Required: `name` (string), `locationId` (string), `productType` (enum)
  - Optional: `description` (string), `image` (string), `statementDescriptor` (string), `availableInStore` (boolean), `medias` (array<object>), `variants` (array<object>), `collectionIds` (array<string>), `isTaxesEnabled` (boolean), `taxes` (array<string>), `automaticTaxCategoryId` (string), `isLabelEnabled` (boolean), `label` (object), `slug` (string), `seo` (object), `taxInclusive` (boolean)

#### Responses
- 201: application/json -> `CreateProductResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/{productId}
Summary: Get Product by ID
OperationId: `get-product-by-id`
Scopes: `products.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID or the slug of the product that needs to be returned

#### Query Parameters
- `locationId` (query, required, string): location Id
- `sendWishlistStatus` (query, optional, boolean): Parameter which will decide whether to show the wishlisting status of products

#### Request Body
- None

#### Responses
- 200: application/json -> `GetProductResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /products/{productId}
Summary: Update Product by ID
OperationId: `update-product-by-id`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID or the slug of the product that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateProductDto`
  - Required: `name` (string), `locationId` (string), `productType` (enum)
  - Optional: `description` (string), `image` (string), `statementDescriptor` (string), `availableInStore` (boolean), `medias` (array<object>), `variants` (array<object>), `collectionIds` (array<string>), `isTaxesEnabled` (boolean), `taxes` (array<string>), `automaticTaxCategoryId` (string), `isLabelEnabled` (boolean), `label` (object), `slug` (string), `seo` (object), `taxInclusive` (boolean), `prices` (array<string>)

#### Responses
- 200: application/json -> `UpdateProductResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /products/{productId}
Summary: Delete Product by ID
OperationId: `delete-product-by-id`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID or the slug of the product that needs to be returned

#### Query Parameters
- `locationId` (query, required, string): location Id
- `sendWishlistStatus` (query, optional, boolean): Parameter which will decide whether to show the wishlisting status of products

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteProductResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/{productId}/price
Summary: List Prices for a Product
OperationId: `list-prices-for-product`
Scopes: `products/prices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID of the product that needs to be used

#### Query Parameters
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `locationId` (query, required, string): The unique identifier for the location.
- `ids` (query, optional, string): To filter the response only with the given price ids, Please provide with comma separated

#### Request Body
- None

#### Responses
- 200: application/json -> `ListPricesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/{productId}/price
Summary: Create Price for a Product
OperationId: `create-price-for-product`
Scopes: `products/prices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID of the product that needs to be used

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreatePriceDto`
  - Required: `name` (string), `type` (enum), `currency` (string), `amount` (number), `locationId` (string)
  - Optional: `recurring` (object), `description` (string), `membershipOffers` (array<object>), `trialPeriod` (number), `totalCycles` (number), `setupFee` (number), `variantOptionIds` (array<string>), `compareAtPrice` (number), `userId` (string), `meta` (object), `trackInventory` (boolean), `availableQuantity` (number), `allowOutOfStockPurchases` (boolean), `sku` (string), `shippingOptions` (object), `isDigitalProduct` (boolean), `digitalDelivery` (array<string>)

#### Responses
- 201: application/json -> `CreatePriceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/{productId}/price/{priceId}
Summary: Get Price by ID for a Product
OperationId: `get-price-by-id-for-product`
Scopes: `products/prices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID of the product that needs to be used
- `priceId` (path, required, string): ID of the price that needs to be returned

#### Query Parameters
- `locationId` (query, required, string): location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPriceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /products/{productId}/price/{priceId}
Summary: Update Price by ID for a Product
OperationId: `update-price-by-id-for-product`
Scopes: `products/prices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID of the product that needs to be used
- `priceId` (path, required, string): ID of the price that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdatePriceDto`
  - Required: `name` (string), `type` (enum), `currency` (string), `amount` (number), `locationId` (string)
  - Optional: `recurring` (object), `description` (string), `membershipOffers` (array<object>), `trialPeriod` (number), `totalCycles` (number), `setupFee` (number), `variantOptionIds` (array<string>), `compareAtPrice` (number), `userId` (string), `meta` (object), `trackInventory` (boolean), `availableQuantity` (number), `allowOutOfStockPurchases` (boolean), `sku` (string), `shippingOptions` (object), `isDigitalProduct` (boolean), `digitalDelivery` (array<string>)

#### Responses
- 200: application/json -> `UpdatePriceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /products/{productId}/price/{priceId}
Summary: Delete Price by ID for a Product
OperationId: `delete-price-by-id-for-product`
Scopes: `products/prices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `productId` (path, required, string): ID of the product that needs to be used
- `priceId` (path, required, string): ID of the price that needs to be returned

#### Query Parameters
- `locationId` (query, required, string): location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `DeletePriceResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/bulk-update
Summary: Bulk Update Products
OperationId: `bulkUpdate`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkUpdateDto`
  - Required: `altId` (string), `altType` (enum), `type` (enum), `productIds` (array<string>)
  - Optional: `filters` (object), `price` (object), `compareAtPrice` (object), `availability` (boolean), `collectionIds` (array<string>), `currency` (string)

#### Responses
- 201: application/json -> `BulkUpdateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/bulk-update/edit
Summary: Bulk Edit Products and Prices
OperationId: `bulkEdit`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkEditRequestDto`
  - Required: `altId` (string), `altType` (enum), `products` (array<object>)
  - Optional: none

#### Responses
- 201: application/json -> `BulkEditResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/collections
Summary: Fetch Product Collections
OperationId: `get-product-collection`
Scopes: `products/collection.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `altId` (query, required, string): Location Id
- `altType` (query, required, enum): The type of alt. For now it is only LOCATION
- `collectionIds` (query, optional, string): Ids of the collections separated by comma(,) for search purposes
- `name` (query, optional, string): Query to search collection based on names

#### Request Body
- None

#### Responses
- 200: application/json -> `ListCollectionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/collections
Summary: Create Product Collection
OperationId: `create-product-collection`
Scopes: `products/collection.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateProductCollectionsDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `slug` (string)
  - Optional: `collectionId` (string), `image` (string), `seo` (object)

#### Responses
- 201: application/json -> `CreateCollectionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/collections/{collectionId}
Summary: Get Details about individual product collection
OperationId: `get-product-collection-id`
Scopes: `products/collection.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `collectionId` (path, required, string): Collection Id

#### Query Parameters
- `altId` (query, required, string): Location Id

#### Request Body
- None

#### Responses
- 200: application/json -> `DefaultCollectionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /products/collections/{collectionId}
Summary: Update Product Collection
OperationId: `update-product-collection`
Scopes: `products/collection.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `collectionId` (path, required, string): MongoId of the collection

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateProductCollectionsDto`
  - Required: `altId` (string), `altType` (enum)
  - Optional: `name` (string), `slug` (string), `image` (string), `seo` (object)

#### Responses
- 200: application/json -> `UpdateProductCollectionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /products/collections/{collectionId}
Summary: Delete Product Collection
OperationId: `delete-product-collection`
Scopes: `products/collection.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `collectionId` (path, required, string): MongoId of the collection

#### Query Parameters
- `altId` (query, required, string): Location Id
- `altType` (query, required, enum): The type of alt. For now it is only LOCATION

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteProductCollectionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/inventory
Summary: List Inventory
OperationId: `get-list-inventory`
Scopes: `products/prices.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `search` (query, optional, string): Search string for Variant Search

#### Request Body
- None

#### Responses
- 200: application/json -> `GetInventoryResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/inventory
Summary: Update Inventory
OperationId: `update-inventory`
Scopes: `products/prices.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateInventoryDto`
  - Required: `altId` (string), `altType` (enum), `items` (array<object>)
  - Optional: none

#### Responses
- 201: application/json -> `UpdateInventoryResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/reviews
Summary: Fetch Product Reviews
OperationId: `get-product-reviews`
Scopes: `products.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `sortField` (query, optional, enum): The field upon which the sort should be applied
- `sortOrder` (query, optional, enum): The order of sort which should be applied for the sortField
- `rating` (query, optional, number): Key to filter the ratings
- `startDate` (query, optional, string): The start date for filtering reviews
- `endDate` (query, optional, string): The end date for filtering reviews
- `productId` (query, optional, string): Comma-separated list of product IDs
- `storeId` (query, optional, string): Comma-separated list of store IDs

#### Request Body
- None

#### Responses
- 200: application/json -> `ListProductReviewsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /products/reviews/{reviewId}
Summary: Update Product Reviews
OperationId: `update-product-review`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `reviewId` (path, required, string): Review Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateProductReviewDto`
  - Required: `altId` (string), `altType` (enum), `productId` (string), `status` (string)
  - Optional: `reply` (array<object>), `rating` (number), `headline` (string), `detail` (string)

#### Responses
- 200: application/json -> `UpdateProductReviewsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /products/reviews/{reviewId}
Summary: Delete Product Review
OperationId: `delete-product-review`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `reviewId` (path, required, string): Review Id

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `productId` (query, required, string): Product Id of the product

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteProductReviewResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/reviews/bulk-update
Summary: Update Product Reviews
OperationId: `bulk-update-product-review`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateProductReviewsDto`
  - Required: `altId` (string), `altType` (enum), `reviews` (array<object>), `status` (object)
  - Optional: none

#### Responses
- 201: application/json -> `UpdateProductReviewsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /products/reviews/count
Summary: Fetch Review Count as per status
OperationId: `get-reviews-count`
Scopes: `products.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `rating` (query, optional, number): Key to filter the ratings
- `startDate` (query, optional, string): The start date for filtering reviews
- `endDate` (query, optional, string): The end date for filtering reviews
- `productId` (query, optional, string): Comma-separated list of product IDs
- `storeId` (query, optional, string): Comma-separated list of store IDs

#### Request Body
- None

#### Responses
- 200: application/json -> `CountReviewsByStatusResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/store/{storeId}
Summary: Action to include/exclude the product in store
OperationId: `update-store-status`
Scopes: `products.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `storeId` (path, required, string): Products related to the store

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateProductStoreDto`
  - Required: `altId` (string), `altType` (enum), `action` (enum), `productIds` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `UpdateProductStoreResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /products/store/{storeId}/priority
Summary: Update product display priorities in store
OperationId: `update-display-priority`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `storeId` (path, required, string): Products related to the store

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateDisplayPriorityBodyDto`
  - Required: `altId` (string), `altType` (enum), `products` (array<array<unknown>>)
  - Optional: none

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /products/store/{storeId}/stats
Summary: Fetch Product Store Stats
OperationId: `get-product-store-stats`
Scopes: `products.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `storeId` (path, required, string): Products related to the store

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `search` (query, optional, string): The name of the product for searching.
- `collectionIds` (query, optional, string): Filter by product collection Ids. Supports comma separated values

#### Request Body
- None

#### Responses
- 200: application/json -> `GetProductStatsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /proposals/document
Summary: List documents
OperationId: `list-documents-contracts`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `status` (query, optional, enum): Document status, pass as comma separated values
- `paymentStatus` (query, optional, enum): Payment status, pass as comma separated values
- `limit` (query, optional, number): Limit to fetch number of records
- `skip` (query, optional, number): Skip number of records
- `query` (query, optional, string): Search string
- `dateFrom` (query, optional, string): Date start from (ISO 8601), dateFrom & DateTo must be provided together
- `dateTo` (query, optional, string): Date to (ISO 8601), dateFrom & DateTo must be provided together

#### Request Body
- None

#### Responses
- 200: application/json -> `DocumentListResponseDto`
- 400: application/json -> `BadRequestDTO`

### POST /proposals/document/send
Summary: Send document
OperationId: `send-documents-contracts`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SendDocumentDto`
  - Required: `locationId` (string), `documentId` (string), `sentBy` (string)
  - Optional: `documentName` (string), `medium` (enum), `ccRecipients` (array<object>), `notificationSettings` (object)

#### Responses
- 200: application/json -> `SendDocumentResponseDto`
- 400: application/json -> `BadRequestDTO`

### GET /proposals/templates
Summary: List templates
OperationId: `list-documents-contracts-templates`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `dateFrom` (query, optional, string): Date start from (ISO 8601)
- `dateTo` (query, optional, string): Date to (ISO 8601)
- `type` (query, optional, string): Comma-separated template types. Valid values: proposal, estimate, contentLibrary
- `name` (query, optional, string): Template Name
- `isPublicDocument` (query, optional, boolean): If the docForm is a DocForm
- `userId` (query, optional, string): User Id, required when isPublicDocument is true
- `limit` (query, optional, string): Limit
- `skip` (query, optional, string): Skip

#### Request Body
- None

#### Responses
- 200: application/json -> `TemplateListPaginationResponseDTO`
- 400: application/json -> `BadRequestDTO`

### POST /proposals/templates/send
Summary: Send template
OperationId: `send-documents-contracts-template`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SendDocumentFromPublicApiBodyDto`
  - Required: `templateId` (string), `userId` (string), `locationId` (string), `contactId` (string)
  - Optional: `sendDocument` (boolean), `opportunityId` (string)

#### Responses
- 200: application/json -> `SendTemplateResponseDto`
- 400: application/json -> `BadRequestDTO`

### GET /saas-api/public-api/agency-plans/{companyId}
Summary: Get Agency Plans
OperationId: `get-agency-plans-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string): Company ID to get agency plans for

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> array<`AgencyPlanResponseDto`>
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### POST /saas-api/public-api/bulk-disable-saas/{companyId}
Summary: Disable SaaS for locations
OperationId: `bulk-disable-saas-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string): Company ID to disable SaaS for

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkDisableSaasDto`
  - Required: `locationIds` (array<string>)
  - Optional: none

#### Responses
- 200: application/json -> `BulkDisableSaasResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### POST /saas-api/public-api/bulk-enable-saas/{companyId}
Summary: Bulk Enable SaaS
OperationId: `bulk-enable-saas-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string): Company ID to enable SaaS for

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkEnableSaasRequestDto`
  - Required: `locationIds` (array<string>), `isSaaSV2` (boolean), `actionPayload` (object)
  - Optional: none

#### Responses
- 200: application/json -> `BulkEnableSaasResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### POST /saas-api/public-api/enable-saas/{locationId}
Summary: Enable SaaS for Sub-Account (Formerly Location)
OperationId: `enable-saas-location-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID to enable SaaS for

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `EnableSaasDto`
  - Required: `companyId` (string), `isSaaSV2` (boolean)
  - Optional: `stripeAccountId` (string), `name` (string), `email` (string), `stripeCustomerId` (string), `contactId` (string), `providerLocationId` (string), `description` (string), `saasPlanId` (string), `priceId` (string)

#### Responses
- 200: application/json -> `EnableSaasResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### GET /saas-api/public-api/get-saas-subscription/{locationId}
Summary: Get Location Subscription Details
OperationId: `get-location-subscription-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID to get subscription details for

#### Query Parameters
- `companyId` (query, required, string): Company ID to filter subscription details

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationSubscriptionResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### GET /saas-api/public-api/locations
Summary: Get locations by stripeId with companyId
OperationId: `locations-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `customerId` (query, optional, string): Stripe customer ID to find locations for
- `subscriptionId` (query, optional, string): Stripe subscription ID to find locations for
- `companyId` (query, required, string): Company ID to filter locations

#### Request Body
- None

#### Responses
- 200: application/json -> array<string>
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### POST /saas-api/public-api/pause/{locationId}
Summary: Pause location
OperationId: `pause-location-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID to pause/unpause

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PauseLocationDto`
  - Required: `paused` (boolean), `companyId` (string)
  - Optional: none

#### Responses
- 200: application/json -> boolean
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### GET /saas-api/public-api/saas-locations/{companyId}
Summary: Get SaaS Locations
OperationId: `get-saas-locations-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string): Company ID to get SaaS locations for

#### Query Parameters
- `page` (query, optional, number): Page number for pagination

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSaasLocationsResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### GET /saas-api/public-api/saas-plan/{planId}
Summary: Get SaaS Plan
OperationId: `get-saas-plan-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `planId` (path, required, string): Plan ID to get SaaS plan details for

#### Query Parameters
- `companyId` (query, required, string): Company ID to filter SaaS plan

#### Request Body
- None

#### Responses
- 200: application/json -> `SaasPlanResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### POST /saas-api/public-api/update-rebilling/{companyId}
Summary: Update Rebilling
OperationId: `update-rebilling-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string): Company ID to update rebilling for

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateRebillingDto`
  - Required: `product` (enum), `locationIds` (array<string>), `config` (object)
  - Optional: none

#### Responses
- 200: application/json -> `UpdateRebillingResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### PUT /saas-api/public-api/update-saas-subscription/{locationId}
Summary: Update SaaS subscription
OperationId: `update-saas-subscription-deprecated`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location ID to update subscription for

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateSubscriptionDto`
  - Required: `subscriptionId` (string), `customerId` (string), `companyId` (string)
  - Optional: none

#### Responses
- 200: application/json -> string
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: application/json -> `ResourceNotFoundDTO`
- 500: application/json -> `InternalServerErrorDTO`

### GET /saas/agency-plans/{companyId}
Summary: Get Agency Plans
OperationId: `get-agency-plans`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: no content

### POST /saas/bulk-disable-saas/{companyId}
Summary: Disable SaaS for locations
OperationId: `bulk-disable-saas`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkDisableSaasDto`
  - Required: `locationIds` (array<string>)
  - Optional: none

#### Responses
- 201: no content

### POST /saas/bulk-enable-saas/{companyId}
Summary: Bulk Enable SaaS
OperationId: `bulk-enable-saas`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `BulkEnableSaasRequestDto`
  - Required: `locationIds` (array<string>), `isSaaSV2` (boolean), `actionPayload` (object)
  - Optional: none

#### Responses
- 201: no content

### POST /saas/enable-saas/{locationId}
Summary: Enable SaaS for Sub-Account (Formerly Location)
OperationId: `enable-saas-location`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `EnableSaasDto`
  - Required: `companyId` (string), `isSaaSV2` (boolean)
  - Optional: `stripeAccountId` (string), `name` (string), `email` (string), `stripeCustomerId` (string), `contactId` (string), `providerLocationId` (string), `description` (string), `saasPlanId` (string), `priceId` (string)

#### Responses
- 201: no content

### GET /saas/get-saas-subscription/{locationId}
Summary: Get Location Subscription Details
OperationId: `get-location-subscription`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- `companyId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: no content

### GET /saas/locations
Summary: Get locations by stripeId with companyId
OperationId: `locations`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `customerId` (query, required, string)
- `subscriptionId` (query, required, string)
- `companyId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: no content

### POST /saas/pause/{locationId}
Summary: Pause location
OperationId: `pause-location`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PauseLocationDto`
  - Required: `paused` (boolean), `companyId` (string)
  - Optional: none

#### Responses
- 201: no content

### GET /saas/saas-locations/{companyId}
Summary: Get SaaS Locations
OperationId: `get-saas-locations`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- `page` (query, required, number)

#### Request Body
- None

#### Responses
- 200: no content

### GET /saas/saas-plan/{planId}
Summary: Get SaaS Plan
OperationId: `get-saas-plan`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `planId` (path, required, string)

#### Query Parameters
- `companyId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: no content

### POST /saas/update-rebilling/{companyId}
Summary: Update Rebilling
OperationId: `update-rebilling`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `companyId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateRebillingDto`
  - Required: `product` (enum), `locationIds` (array<string>), `config` (object)
  - Optional: none

#### Responses
- 201: no content

### PUT /saas/update-saas-subscription/{locationId}
Summary: Update SaaS subscription
OperationId: `generate-payment-link`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateSubscriptionDto`
  - Required: `subscriptionId` (string), `customerId` (string), `companyId` (string)
  - Optional: none

#### Responses
- 200: no content

### GET /snapshots/
Summary: Get Snapshots
OperationId: `get-custom-snapshots`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `companyId` (query, required, string): Company Id

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSnapshotsSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /snapshots/share/link
Summary: Create Snapshot Share Link
OperationId: `create-snapshot-share-link`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `companyId` (query, required, string)

#### Request Body
- application/json: required; schema `CreateSnapshotShareLinkRequestDTO`
  - Required: `snapshot_id` (string), `share_type` (enum)
  - Optional: `relationship_number` (string), `share_location_id` (string)

#### Responses
- 201: application/json -> `CreateSnapshotShareLinkSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /snapshots/snapshot-status/{snapshotId}
Summary: Get Snapshot Push between Dates
OperationId: `get-snapshot-push`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `snapshotId` (path, required, string)

#### Query Parameters
- `companyId` (query, required, string)
- `from` (query, required, string)
- `to` (query, required, string)
- `lastDoc` (query, required, string): Id for last document till what you want to skip
- `limit` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSnapshotPushStatusSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /snapshots/snapshot-status/{snapshotId}/location/{locationId}
Summary: Get Last Snapshot Push
OperationId: `get-latest-snapshot-push`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `snapshotId` (path, required, string)
- `locationId` (path, required, string)

#### Query Parameters
- `companyId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLatestSnapshotPushStatusSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /social-media-posting/{locationId}/accounts
Summary: Get Accounts
OperationId: `get-account`
Scopes: `socialplanner/account.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `AccountsListResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /social-media-posting/{locationId}/accounts/{id}
Summary: Delete Account
OperationId: `delete-account`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Id

#### Query Parameters
- `companyId` (query, optional, string): Company ID
- `userId` (query, optional, string): User ID

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationAndAccountDeleteResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/categories
Summary: Get categories by location id
OperationId: `get-categories-location-id`
Scopes: `socialplanner/category.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `searchText` (query, optional, string): Search text string
- `limit` (query, optional, string): Limit
- `skip` (query, optional, string): Skip

#### Request Body
- None

#### Responses
- 200: application/json -> `GetByLocationIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/categories/{id}
Summary: Get categories by id
OperationId: `get-categories-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `id` (path, required, string): Category Id
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/csv
Summary: Get Upload Status
OperationId: `get-upload-status`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `skip` (query, optional, string)
- `limit` (query, optional, string)
- `includeUsers` (query, optional, string)
- `userId` (query, optional, string): User ID

#### Request Body
- None

#### Responses
- 200: application/json -> `GetUploadStatusResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/{locationId}/csv
Summary: Upload CSV
OperationId: `upload-csv`
Scopes: `socialplanner/csv.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- multipart/form-data: required; schema `UploadCSVDTO`
  - Required: none
  - Optional: `file` (string)

#### Responses
- 201: application/json -> `UploadFileResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /social-media-posting/{locationId}/csv/{csvId}/post/{postId}
Summary: Delete CSV Post
OperationId: `delete-csv-post`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)
- `postId` (path, required, string): CSV Post Id
- `csvId` (path, required, string): CSV Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeletePostResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/csv/{id}
Summary: Get CSV Post
OperationId: `get-csv-post`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)
- `id` (path, required, string): CSV Id

#### Query Parameters
- `skip` (query, optional, string)
- `limit` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetCsvPostResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /social-media-posting/{locationId}/csv/{id}
Summary: Start CSV Finalize
OperationId: `start-csv-finalize`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)
- `id` (path, required, string): CSV Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CSVDefaultDTO`
  - Required: none
  - Optional: `userId` (string)

#### Responses
- 200: application/json -> `CsvPostStatusResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /social-media-posting/{locationId}/csv/{id}
Summary: Delete CSV
OperationId: `delete-csv`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string)
- `id` (path, required, string): CSV Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteCsvResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/{locationId}/posts
Summary: Create post
OperationId: `create-post`
Scopes: `socialplanner/post.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreatePostDTO`
  - Required: `accountIds` (array<string>), `type` (object), `userId` (string)
  - Optional: `summary` (string), `media` (array<object>), `status` (object), `scheduleDate` (string), `createdBy` (string), `followUpComment` (string), `ogTagsDetails` (object), `postApprovalDetails` (object), `scheduleTimeUpdated` (boolean), `tags` (array<string>), `categoryId` (string), `tiktokPostDetails` (object), `gmbPostDetails` (object)

#### Responses
- 201: application/json -> `CreatePostSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/posts/{id}
Summary: Get post
OperationId: `get-post`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Post Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetPostSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /social-media-posting/{locationId}/posts/{id}
Summary: Edit post
OperationId: `edit-post`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Post Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `PostCreateRequest`
  - Required: `type` (object)
  - Optional: `accountIds` (array<string>), `summary` (string), `media` (array<object>), `status` (object), `scheduleDate` (string), `createdBy` (string), `followUpComment` (string), `ogTagsDetails` (object), `postApprovalDetails` (object), `scheduleTimeUpdated` (boolean), `tags` (array<string>), `categoryId` (string), `tiktokPostDetails` (object), `gmbPostDetails` (object), `userId` (string)

#### Responses
- 200: application/json -> `UpdatePostSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /social-media-posting/{locationId}/posts/{id}
Summary: Delete Post
OperationId: `delete-post`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id
- `id` (path, required, string): Post Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeletePostSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/{locationId}/posts/bulk-delete
Summary: Bulk Delete Social Planner Posts
OperationId: `bulk-delete-social-planner-posts`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `DeletePostsDto`
  - Required: none
  - Optional: `postIds` (array<string>)

#### Responses
- 201: application/json -> `BulkDeleteResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 404: no content
- 422: application/json -> `UnprocessableDTO`
- 500: no content

### POST /social-media-posting/{locationId}/posts/list
Summary: Get posts
OperationId: `get-posts`
Scopes: `socialplanner/post.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SearchPostDTO`
  - Required: `skip` (string), `limit` (string), `fromDate` (string), `toDate` (string), `includeUsers` (string)
  - Optional: `type` (string), `accounts` (string), `postType` (object)

#### Responses
- 201: application/json -> `PostSuccessfulResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/{locationId}/set-accounts
Summary: Set Accounts
OperationId: `set-accounts`
Scopes: `socialplanner/csv.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `SetAccountsDTO`
  - Required: `accountIds` (array<string>), `filePath` (string), `rowsCount` (number), `fileName` (string)
  - Optional: `approver` (string), `userId` (string)

#### Responses
- 201: application/json -> `SetAccountsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/{locationId}/tags
Summary: Get tags by location id
OperationId: `get-tags-location-id`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- `searchText` (query, optional, string): Search text string
- `limit` (query, optional, string): Limit
- `skip` (query, optional, string): Skip

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTagsByLocationIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/{locationId}/tags/details
Summary: Get tags by ids
OperationId: `get-tags-by-ids`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Location Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateTagDTO`
  - Required: `tagIds` (array<string>)
  - Optional: none

#### Responses
- 201: application/json -> `GetTagsByIdResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}
Summary: Get facebook pages
OperationId: `get-facebook-page-group`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetFacebookAccountsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}
Summary: Attach facebook pages
OperationId: `attach-facebook-page-group`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachFBAccountDTO`
  - Required: none
  - Optional: `type` (object), `originId` (string), `name` (string), `avatar` (string), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaFBAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/google/locations/{accountId}
Summary: Get google business locations
OperationId: `get-google-locations`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetGoogleLocationResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/google/locations/{accountId}
Summary: Set google business locations
OperationId: `set-google-locations`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachGMBLocationDTO`
  - Required: none
  - Optional: `location` (object), `account` (object), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaGmbAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}
Summary: Get Instagram Professional Accounts
OperationId: `get-instagram-page-group`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetInstagramAccountsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}
Summary: Attach Instagram Professional Accounts
OperationId: `attach-instagram-page-group`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachIGAccountDTO`
  - Required: `pageId` (string)
  - Optional: `originId` (string), `name` (string), `avatar` (string), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaInstagramAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}
Summary: Get Linkedin pages and profile
OperationId: `get-linkedin-page-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetLinkedInAccountsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}
Summary: Attach linkedin pages and profile
OperationId: `attach-linkedin-page-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachLinkedinAccountDTO`
  - Required: none
  - Optional: `type` (enum), `originId` (string), `name` (string), `avatar` (string), `urn` (string), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaLinkedInAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}
Summary: Get Tiktok Business profile
OperationId: `get-tiktok-business-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTiktokBusinessAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}
Summary: Get Tiktok profile
OperationId: `get-tiktok-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTiktokAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}
Summary: Attach Tiktok profile
OperationId: `attach-tiktok-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachTiktokAccountDTO`
  - Required: none
  - Optional: `type` (enum), `originId` (string), `name` (string), `avatar` (string), `verified` (boolean), `username` (string), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaTiktokAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}
Summary: Get Twitter profile
OperationId: `get-twitter-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `GetTwitterAccountsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}
Summary: Attach Twitter profile
OperationId: `attach-twitter-profile`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `locationId` (path, required, string): Account Location Id
- `accountId` (path, required, string): Account Id

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AttachTwitterAccountDTO`
  - Required: none
  - Optional: `originId` (string), `name` (string), `username` (string), `avatar` (string), `protected` (boolean), `verified` (boolean), `companyId` (string)

#### Responses
- 201: application/json -> `SocialMediaTwitterAccountResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/facebook/start
Summary: Starts OAuth For Facebook Account
OperationId: `start-facebook-oauth`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Account Location Id
- `userId` (query, required, string): User ID
- `page` (query, optional, string): Facebook Page
- `reconnect` (query, optional, string): Reconnect boolean as string

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/google/start
Summary: Starts OAuth For Google Account
OperationId: `start-google-oauth`
Scopes: `socialplanner/oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/instagram/start
Summary: Starts OAuth For Instagram Account
OperationId: `start-instagram-oauth`
Scopes: `socialplanner/oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/linkedin/start
Summary: Starts OAuth For LinkedIn Account
OperationId: `start-linkedin-oauth`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/tiktok-business/start
Summary: Starts OAuth For Tiktok Business Account
OperationId: `start-tiktok-business-oauth`
Scopes: `socialplanner/oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/tiktok/start
Summary: Starts OAuth For Tiktok Account
OperationId: `start-tiktok-oauth`
Scopes: `socialplanner/oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /social-media-posting/oauth/twitter/start
Summary: Starts OAuth For Twitter Account
OperationId: `start-twitter-oauth`
Scopes: `socialplanner/oauth.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location Id
- `userId` (query, required, string): User Id
- `page` (query, optional, string): Page
- `reconnect` (query, optional, string): Reconnect

#### Request Body
- None

#### Responses
- 200: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /social-media-posting/statistics
Summary: Get Social Media Statistics
OperationId: `get-social-media-statistics`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- application/json: optional; schema object
  - Required: `profileIds` (array<string>)
  - Optional: `platforms` (array<enum>)

#### Responses
- 201: application/json -> object
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-carrier
Summary: List Shipping Carriers
OperationId: `list-shipping-carriers`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `ListShippingCarrierResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /store/shipping-carrier
Summary: Create Shipping Carrier
OperationId: `create-shipping-carrier`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateShippingCarrierDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `callbackUrl` (string)
  - Optional: `services` (array<object>), `allowsMultipleServiceSelection` (boolean)

#### Responses
- 201: application/json -> `CreateShippingCarrierResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-carrier/{shippingCarrierId}
Summary: Get Shipping Carrier
OperationId: `get-shipping-carriers`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingCarrierId` (path, required, string): ID of the shipping carrier that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetShippingCarrierResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /store/shipping-carrier/{shippingCarrierId}
Summary: Update Shipping Carrier
OperationId: `update-shipping-carrier`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingCarrierId` (path, required, string): ID of the shipping carrier that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateShippingCarrierDto`
  - Required: none
  - Optional: `altId` (string), `altType` (enum), `name` (string), `callbackUrl` (string), `services` (array<object>), `allowsMultipleServiceSelection` (boolean)

#### Responses
- 200: application/json -> `UpdateShippingCarrierResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /store/shipping-carrier/{shippingCarrierId}
Summary: Delete shipping carrier
OperationId: `delete-shipping-carrier`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingCarrierId` (path, required, string): ID of the shipping carrier that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteShippingCarrierResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-zone
Summary: List Shipping Zones
OperationId: `list-shipping-zones`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.
- `withShippingRate` (query, optional, boolean): Include shipping rates array

#### Request Body
- None

#### Responses
- 200: application/json -> `ListShippingZoneResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /store/shipping-zone
Summary: Create Shipping Zone
OperationId: `create-shipping-zone`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateShippingZoneDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `countries` (array<object>)
  - Optional: none

#### Responses
- 201: application/json -> `CreateShippingZoneResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-zone/{shippingZoneId}
Summary: Get Shipping Zone
OperationId: `get-shipping-zones`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the item that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `withShippingRate` (query, optional, boolean): Include shipping rates array

#### Request Body
- None

#### Responses
- 200: application/json -> `GetShippingZoneResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /store/shipping-zone/{shippingZoneId}
Summary: Update Shipping Zone
OperationId: `update-shipping-zone`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the item that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateShippingZoneDto`
  - Required: none
  - Optional: `altId` (string), `altType` (enum), `name` (string), `countries` (array<object>)

#### Responses
- 200: application/json -> `UpdateShippingZoneResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /store/shipping-zone/{shippingZoneId}
Summary: Delete shipping zone
OperationId: `delete-shipping-zone`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the item that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteShippingZoneResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-zone/{shippingZoneId}/shipping-rate
Summary: List Shipping Rates
OperationId: `list-shipping-rates`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the item that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)
- `limit` (query, optional, number): The maximum number of items to be included in a single page of results
- `offset` (query, optional, number): The starting index of the page, indicating the position from which the results should be retrieved.

#### Request Body
- None

#### Responses
- 200: application/json -> `ListShippingRateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /store/shipping-zone/{shippingZoneId}/shipping-rate
Summary: Create Shipping Rate
OperationId: `create-shipping-rate`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the item that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateShippingRateDto`
  - Required: `altId` (string), `altType` (enum), `name` (string), `currency` (string), `amount` (number), `conditionType` (enum), `minCondition` (number), `maxCondition` (number), `shippingCarrierId` (string)
  - Optional: `description` (string), `isCarrierRate` (boolean), `percentageOfRateFee` (number), `shippingCarrierServices` (array<object>)

#### Responses
- 201: application/json -> `CreateShippingRateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}
Summary: Get Shipping Rate
OperationId: `get-shipping-rates`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the shipping zone
- `shippingRateId` (path, required, string): ID of the shipping rate that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetShippingRateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}
Summary: Update Shipping Rate
OperationId: `update-shipping-rate`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the shipping zone
- `shippingRateId` (path, required, string): ID of the shipping rate that needs to be returned

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateShippingRateDto`
  - Required: none
  - Optional: `altId` (string), `altType` (enum), `name` (string), `description` (string), `currency` (string), `amount` (number), `conditionType` (enum), `minCondition` (number), `maxCondition` (number), `isCarrierRate` (boolean), `shippingCarrierId` (string), `percentageOfRateFee` (number), `shippingCarrierServices` (array<object>)

#### Responses
- 200: application/json -> `UpdateShippingRateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}
Summary: Delete shipping rate
OperationId: `delete-shipping-rate`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `shippingZoneId` (path, required, string): ID of the shipping zone
- `shippingRateId` (path, required, string): ID of the shipping rate that needs to be returned

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteShippingRateResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /store/shipping-zone/shipping-rates
Summary: Get available shipping rates
OperationId: `get-available-shipping-zones`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `GetAvailableShippingRates`
  - Required: `altId` (string), `altType` (enum), `country` (enum), `totalOrderAmount` (number), `totalOrderWeight` (number), `source` (object), `products` (array<object>)
  - Optional: `address` (object), `amountAvailable` (enum), `weightAvailable` (boolean), `couponCode` (string)

#### Responses
- 201: application/json -> `GetAvailableShippingRatesResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /store/store-setting
Summary: Get Store Settings
OperationId: `get-store-settings`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `altId` (query, required, string): Location Id or Agency Id
- `altType` (query, required, enum)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetStoreSettingResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /store/store-setting
Summary: Create/Update Store Settings
OperationId: `create-store-setting`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateStoreSettingDto`
  - Required: `altId` (string), `altType` (enum), `shippingOrigin` (object)
  - Optional: `storeOrderNotification` (object), `storeOrderFulfillmentNotification` (object)

#### Responses
- 201: application/json -> `CreateStoreSettingResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /surveys/
Summary: Get Surveys
OperationId: `get-surveys`
Scopes: `surveys.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `skip` (query, optional, number)
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 50 and default will be 10
- `type` (query, optional, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSurveysSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /surveys/submissions
Summary: Get Surveys Submissions
OperationId: `get-surveys-submissions`
Scopes: `surveys.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)
- `page` (query, optional, number): Page No. By default it will be 1
- `limit` (query, optional, number): Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `surveyId` (query, optional, string): Filter submission by survey id
- `q` (query, optional, string): Filter by contactId, name, email or phone no.
- `startAt` (query, optional, string): Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
- `endAt` (query, optional, string): Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

#### Request Body
- None

#### Responses
- 200: application/json -> `GetSurveysSubmissionSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /users/
Summary: Get User by Location
OperationId: `get-user-by-location`
Scopes: `users.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `LocationSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### POST /users/
Summary: Create User
OperationId: `create-user`
Scopes: `users.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateUserDto`
  - Required: `companyId` (string), `firstName` (string), `lastName` (string), `email` (string), `password` (string), `type` (string), `role` (string), `locationIds` (array<string>)
  - Optional: `phone` (string), `permissions` (object), `scopes` (array<enum>), `scopesAssignedToOnly` (array<enum>), `profilePhoto` (string)

#### Responses
- 201: application/json -> `UserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /users/{userId}
Summary: Get User
OperationId: `get-user`
Scopes: `users.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `userId` (path, required, string): User Id

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `UserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /users/{userId}
Summary: Update User
OperationId: `update-user`
Scopes: `users.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateUserDto`
  - Required: none
  - Optional: `firstName` (string), `lastName` (string), `email` (string), `emailChangeOTP` (string), `password` (string), `phone` (string), `type` (string), `role` (string), `companyId` (string), `locationIds` (array<string>), `permissions` (object), `scopes` (array<enum>), `scopesAssignedToOnly` (array<enum>), `profilePhoto` (string)

#### Responses
- 200: application/json -> `UserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /users/{userId}
Summary: Delete User
OperationId: `delete-user`
Scopes: `users.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

#### Responses
- 200: application/json -> `DeleteUserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /users/search
Summary: Search Users
OperationId: `search-users`
Scopes: `users.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `companyId` (query, required, string): Company ID in which the search needs to be performed
- `query` (query, optional, string): The search term for the user is matched based on the user full name, email or phone
- `skip` (query, optional, string): No of results to be skipped before returning the result
- `limit` (query, optional, string): No of results to be limited before returning the result
- `locationId` (query, optional, string): Location ID in which the search needs to be performed
- `type` (query, optional, string): Type of the users to be filtered in the search
- `role` (query, optional, string): Role of the users to be filtered in the search
- `ids` (query, optional, string): List of User IDs to be filtered in the search
- `sort` (query, optional, string): The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name
- `sortDirection` (query, optional, string): The direction in which the results need to be sorted
- `enabled2waySync` (query, optional, boolean)

#### Request Body
- None

#### Responses
- 200: application/json -> `SearchUserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /users/search/filter-by-email
Summary: Filter Users by Email
OperationId: `filter-users-by-email`
Scopes: `users.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `FilterByEmailDto`
  - Required: `companyId` (string), `emails` (array<string>)
  - Optional: `deleted` (boolean), `skip` (string), `limit` (string), `projection` (string)

#### Responses
- 200: application/json -> `SearchUserSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /voice-ai/actions
Summary: Create Agent Action
OperationId: `create-action`
Scopes: `voice-ai-agent-goals.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `CreateSingleActionDTO`
  - Required: `agentId` (string), `locationId` (string), `actionType` (enum), `name` (string), `actionParameters` (oneOf)
  - Optional: none

#### Responses
- 201: application/json -> `CreateActionResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /voice-ai/actions/{actionId}
Summary: Get Agent Action
OperationId: `get-action`
Scopes: `voice-ai-agent-goals.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `actionId` (path, required, string): Unique identifier for the action

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- None

#### Responses
- 200: application/json -> `GetActionResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PUT /voice-ai/actions/{actionId}
Summary: Update Agent Action
OperationId: `update-action`
Scopes: `voice-ai-agent-goals.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `actionId` (path, required, string): Unique identifier for the action

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `UpdateSingleActionDTO`
  - Required: `agentId` (string), `locationId` (string), `actionType` (enum), `name` (string), `actionParameters` (oneOf)
  - Optional: none

#### Responses
- 200: application/json -> `UpdateActionResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /voice-ai/actions/{actionId}
Summary: Delete Agent Action
OperationId: `delete-action`
Scopes: `voice-ai-agent-goals.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `actionId` (path, required, string): Unique identifier for the action

#### Query Parameters
- `locationId` (query, required, string): Location ID
- `agentId` (query, required, string): Agent ID the action is attached to

#### Request Body
- None

#### Responses
- 204: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /voice-ai/agents
Summary: List Agents
OperationId: `get-agents`
Scopes: `voice-ai-agents.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `page` (query, optional, number): Page number starting from 1
- `pageSize` (query, optional, number): Number of items per page
- `locationId` (query, required, string): Location ID
- `query` (query, optional, string): Query

#### Request Body
- None

#### Responses
- 200: application/json -> `GetAgentsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### POST /voice-ai/agents
Summary: Create Agent
OperationId: `create-agent`
Scopes: `voice-ai-agents.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- application/json: required; schema `AgentCreationRequestDTO`
  - Required: none
  - Optional: `locationId` (string), `agentName` (string), `businessName` (string), `welcomeMessage` (string), `agentPrompt` (string), `voiceId` (string), `language` (enum), `patienceLevel` (enum), `maxCallDuration` (number), `sendUserIdleReminders` (boolean), `reminderAfterIdleTimeSeconds` (number), `inboundNumber` (string), `numberPoolId` (string), `callEndWorkflowIds` (array<string>), `sendPostCallNotificationTo` (object), `agentWorkingHours` (array<object>), `timezone` (string), `isAgentAsBackupDisabled` (boolean), `translation` (object)

#### Responses
- 201: application/json -> `CreateAgentResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /voice-ai/agents/{agentId}
Summary: Get Agent
OperationId: `get-agent`
Scopes: `voice-ai-agents.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `agentId` (path, required, string): Unique agent identifier

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- None

#### Responses
- 200: application/json -> `GetAgentResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### PATCH /voice-ai/agents/{agentId}
Summary: Patch Agent
OperationId: `patch-agent`
Scopes: `voice-ai-agents.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `agentId` (path, required, string): Unique agent identifier

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- application/json: required; schema `PatchAgentDTO`
  - Required: none
  - Optional: `agentName` (string), `businessName` (string), `welcomeMessage` (string), `agentPrompt` (string), `voiceId` (string), `language` (enum), `patienceLevel` (enum), `maxCallDuration` (number), `sendUserIdleReminders` (boolean), `reminderAfterIdleTimeSeconds` (number), `inboundNumber` (string), `numberPoolId` (string), `callEndWorkflowIds` (array<string>), `sendPostCallNotificationTo` (object), `agentWorkingHours` (array<object>), `timezone` (string), `isAgentAsBackupDisabled` (boolean), `translation` (object)

#### Responses
- 200: application/json -> `PatchAgentResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### DELETE /voice-ai/agents/{agentId}
Summary: Delete Agent
OperationId: `delete-agent`
Scopes: `voice-ai-agents.write`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `agentId` (path, required, string): Unique agent identifier

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- None

#### Responses
- 204: no content
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

### GET /voice-ai/dashboard/call-logs
Summary: List Call Logs
OperationId: `get-call-logs`
Scopes: `voice-ai-dashboard.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string): Location identifier. Filters results to this location.
- `agentId` (query, optional, string): Agent identifier. When provided, returns logs for this agent only.
- `contactId` (query, optional, string): Contact IDs (comma-separated) to filter by.
- `callType` (query, optional, enum): Call type filter.
- `startDate` (query, optional, number): Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be provided together.
- `endDate` (query, optional, number): End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be provided together.
- `actionType` (query, optional, enum): Action type filter for call logs (comma-separated ACTION_TYPE values)
- `sortBy` (query, optional, enum): Field to sort by. Defaults to newest if omitted.
- `sort` (query, optional, enum): Sort direction. Applies only when sortBy is provided.
- `page` (query, optional, number): Page number (1-based).
- `pageSize` (query, optional, number): Page size (max 50).

#### Request Body
- None

#### Responses
- 200: application/json -> `CallLogsResponseDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /voice-ai/dashboard/call-logs/{callId}
Summary: Get Call Log
OperationId: `getCallLog`
Scopes: `voice-ai-dashboard.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- `callId` (path, required, string): Call ID

#### Query Parameters
- `locationId` (query, required, string): Location ID

#### Request Body
- None

#### Responses
- 200: application/json -> `CallLogDTO`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`

### GET /workflows/
Summary: Get Workflow
OperationId: `get-workflow`
Scopes: `workflows.readonly`

#### Authentication/Headers
- `Authorization` (header, required): `Bearer <token>`
- `Version` (header, usually required): API version date (e.g. `2021-07-28`)

#### Path Parameters
- None

#### Query Parameters
- `locationId` (query, required, string)

#### Request Body
- None

#### Responses
- 200: application/json -> `GetWorkflowSuccessfulResponseDto`
- 400: application/json -> `BadRequestDTO`
- 401: application/json -> `UnauthorizedDTO`
- 422: application/json -> `UnprocessableDTO`

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
