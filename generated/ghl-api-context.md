# GoHighLevel API v2 - Complete Reference

Base URL: `https://services.leadconnectorhq.com`
Source: https://github.com/GoHighLevel/highlevel-api-docs
Generated: 2026-02-22T14:14:03.792Z

## Authentication

All endpoints require a Bearer token (OAuth2 or Private Integration Token).
Header: `Authorization: Bearer <token>`
Most endpoints also require a `Version` header with the API version date.

## API Endpoints (Detailed)

### Account

#### GET `/social-media-posting/{locationId}/accounts`

- **Summary**: Get Accounts
- **Operation ID**: `get-account`
- **Scopes**: `socialplanner/account.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AccountsListResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/social-media-posting/{locationId}/accounts/{id}`

- **Summary**: Delete Account
- **Operation ID**: `delete-account`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Id

**Query Parameters**
- `companyId` [optional] (string) - Company ID
- `userId` [optional] (string) - User ID

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationAndAccountDeleteResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Actions

#### POST `/voice-ai/actions`

- **Summary**: Create Agent Action
- **Operation ID**: `create-action`
- **Scopes**: `voice-ai-agent-goals.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateSingleActionDTO`
  - Type: object
  - Properties:
    - `agentId` [required] (string)
    - `locationId` [required] (string)
    - `actionType` [required] (string) enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`
    - `name` [required] (string)
    - `actionParameters` [required] (any)

**Response Schema**
- **201**: Action created successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateActionResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `actionType` [required] (string) enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`
      - `name` [required] (string)
      - `actionParameters` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/voice-ai/actions/{actionId}`

- **Summary**: Delete Agent Action
- **Operation ID**: `delete-action`
- **Scopes**: `voice-ai-agent-goals.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `actionId` [required] (string) - Unique identifier for the action

**Query Parameters**
- `locationId` [required] (string) - Location ID
- `agentId` [required] (string) - Agent ID the action is attached to

**Request Body**
- None

**Response Schema**
- **204**: Action deleted successfully
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/voice-ai/actions/{actionId}`

- **Summary**: Get Agent Action
- **Operation ID**: `get-action`
- **Scopes**: `voice-ai-agent-goals.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `actionId` [required] (string) - Unique identifier for the action

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- None

**Response Schema**
- **200**: Action details retrieved successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetActionResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `actionType` [required] (string) enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`
      - `name` [required] (string)
      - `actionParameters` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/voice-ai/actions/{actionId}`

- **Summary**: Update Agent Action
- **Operation ID**: `update-action`
- **Scopes**: `voice-ai-agent-goals.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `actionId` [required] (string) - Unique identifier for the action

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateSingleActionDTO`
  - Type: object
  - Properties:
    - `agentId` [required] (string)
    - `locationId` [required] (string)
    - `actionType` [required] (string) enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`
    - `name` [required] (string)
    - `actionParameters` [required] (any)

**Response Schema**
- **200**: Action updated successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateActionResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `actionType` [required] (string) enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`
      - `name` [required] (string)
      - `actionParameters` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Agents

#### GET `/voice-ai/agents`

- **Summary**: List Agents
- **Operation ID**: `get-agents`
- **Scopes**: `voice-ai-agents.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `page` [optional] (number) - Page number starting from 1
- `pageSize` [optional] (number) - Number of items per page
- `locationId` [required] (string) - Location ID
- `query` [optional] (string) - Query

**Request Body**
- None

**Response Schema**
- **200**: Agent list retrieved successfully.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetAgentsResponseDTO`
    - Type: object
    - Properties:
      - `total` [required] (number)
      - `page` [required] (number)
      - `pageSize` [required] (number)
      - `agents` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/voice-ai/agents`

- **Summary**: Create Agent
- **Operation ID**: `create-agent`
- **Scopes**: `voice-ai-agents.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AgentCreationRequestDTO`
  - Type: object
  - Properties:
    - `locationId` [optional] (string)
    - `agentName` [optional] (string)
    - `businessName` [optional] (string)
    - `welcomeMessage` [optional] (string)
    - `agentPrompt` [optional] (string)
    - `voiceId` [optional] (string)
    - `language` [optional] (string) ref: `#/components/schemas/VoiceAILanguage` enum: `en-US`, `pt-BR`, `es`, `fr`, `de`, `it`, `nl-NL`, `multi`
    - `patienceLevel` [optional] (string) ref: `#/components/schemas/PatienceLevel` enum: `low`, `medium`, `high`
    - `maxCallDuration` [optional] (number)
    - `sendUserIdleReminders` [optional] (boolean)
    - `reminderAfterIdleTimeSeconds` [optional] (number)
    - `inboundNumber` [optional] (string)
    - `numberPoolId` [optional] (string)
    - `callEndWorkflowIds` [optional] (array)
    - `sendPostCallNotificationTo` [optional] (any)
    - `agentWorkingHours` [optional] (array)
    - `timezone` [optional] (string)
    - `isAgentAsBackupDisabled` [optional] (boolean)
    - `translation` [optional] (any)

**Response Schema**
- **201**: Agent created successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateAgentResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `locationId` [required] (string)
      - `agentName` [required] (string)
      - `businessName` [required] (string)
      - `welcomeMessage` [required] (string)
      - `agentPrompt` [required] (string)
      - `voiceId` [required] (string)
      - `language` [required] (string)
      - `patienceLevel` [required] (string)
      - `maxCallDuration` [required] (number)
      - `sendUserIdleReminders` [required] (boolean)
      - `reminderAfterIdleTimeSeconds` [required] (number)
      - `inboundNumber` [optional] (string)
      - `numberPoolId` [optional] (string)
      - `callEndWorkflowIds` [optional] (array)
      - `sendPostCallNotificationTo` [optional] (any)
      - `agentWorkingHours` [optional] (array)
      - `timezone` [required] (string)
      - `isAgentAsBackupDisabled` [required] (boolean)
      - `translation` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/voice-ai/agents/{agentId}`

- **Summary**: Delete Agent
- **Operation ID**: `delete-agent`
- **Scopes**: `voice-ai-agents.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `agentId` [required] (string) - Unique agent identifier

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- None

**Response Schema**
- **204**: Agent deleted successfully
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/voice-ai/agents/{agentId}`

- **Summary**: Get Agent
- **Operation ID**: `get-agent`
- **Scopes**: `voice-ai-agents.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `agentId` [required] (string) - Unique agent identifier

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- None

**Response Schema**
- **200**: Agent details retrieved successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetAgentResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `locationId` [required] (string)
      - `agentName` [required] (string)
      - `businessName` [required] (string)
      - `welcomeMessage` [required] (string)
      - `agentPrompt` [required] (string)
      - `voiceId` [required] (string)
      - `language` [required] (string)
      - `patienceLevel` [required] (string)
      - `maxCallDuration` [required] (number)
      - `sendUserIdleReminders` [required] (boolean)
      - `reminderAfterIdleTimeSeconds` [required] (number)
      - `inboundNumber` [optional] (string)
      - `numberPoolId` [optional] (string)
      - `callEndWorkflowIds` [optional] (array)
      - `sendPostCallNotificationTo` [optional] (any)
      - `agentWorkingHours` [optional] (array)
      - `timezone` [required] (string)
      - `isAgentAsBackupDisabled` [required] (boolean)
      - `translation` [optional] (any)
      - ... 1 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/voice-ai/agents/{agentId}`

- **Summary**: Patch Agent
- **Operation ID**: `patch-agent`
- **Scopes**: `voice-ai-agents.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `agentId` [required] (string) - Unique agent identifier

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PatchAgentDTO`
  - Type: object
  - Properties:
    - `agentName` [optional] (string)
    - `businessName` [optional] (string)
    - `welcomeMessage` [optional] (string)
    - `agentPrompt` [optional] (string)
    - `voiceId` [optional] (string)
    - `language` [optional] (string) ref: `#/components/schemas/VoiceAILanguage` enum: `en-US`, `pt-BR`, `es`, `fr`, `de`, `it`, `nl-NL`, `multi`
    - `patienceLevel` [optional] (string) ref: `#/components/schemas/PatienceLevel` enum: `low`, `medium`, `high`
    - `maxCallDuration` [optional] (number)
    - `sendUserIdleReminders` [optional] (boolean)
    - `reminderAfterIdleTimeSeconds` [optional] (number)
    - `inboundNumber` [optional] (string)
    - `numberPoolId` [optional] (string)
    - `callEndWorkflowIds` [optional] (array)
    - `sendPostCallNotificationTo` [optional] (any)
    - `agentWorkingHours` [optional] (array)
    - `timezone` [optional] (string)
    - `isAgentAsBackupDisabled` [optional] (boolean)
    - `translation` [optional] (any)

**Response Schema**
- **200**: Agent updated successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/PatchAgentResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `locationId` [required] (string)
      - `agentName` [required] (string)
      - `businessName` [required] (string)
      - `welcomeMessage` [required] (string)
      - `agentPrompt` [required] (string)
      - `voiceId` [required] (string)
      - `language` [required] (string)
      - `patienceLevel` [required] (string)
      - `maxCallDuration` [required] (number)
      - `sendUserIdleReminders` [required] (boolean)
      - `reminderAfterIdleTimeSeconds` [required] (number)
      - `inboundNumber` [optional] (string)
      - `numberPoolId` [optional] (string)
      - `callEndWorkflowIds` [optional] (array)
      - `sendPostCallNotificationTo` [optional] (any)
      - `agentWorkingHours` [optional] (array)
      - `timezone` [required] (string)
      - `isAgentAsBackupDisabled` [required] (boolean)
      - `translation` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### App Management

#### DELETE `/marketplace/app/{appId}/installations`

- **Summary**: Uninstall an application
- **Operation ID**: `uninstall-application`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `appId` [required] (string) - The application id which is to be uninstalled.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeleteIntegrationBodyDto`
  - Type: object
  - Properties:
    - `companyId` [optional] (string)
    - `locationId` [optional] (string)
    - `reason` [optional] (string)

**Response Schema**
- **200**: Successfully uninstalled the application
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteIntegrationResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/marketplace/app/{appId}/installations`

- **Summary**: Get Installer Details
- **Operation ID**: `get-installer-details`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- `appId` [required] (string) - ID of the app to get installer details

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved installer details. Returns company, location, user, and installation information.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetInstallerDetailsResponseDTO`
    - Type: object
    - Properties:
      - `installationDetails` [required] (any)
- **400**: Bad Request. Invalid request parameters or missing required data.
  - No response body.
- **403**: Forbidden. The client does not have necessary permissions to access installer details.
  - No response body.


### Appointment Notes

#### GET `/calendars/appointments/{appointmentId}/notes`

- **Summary**: Get Notes
- **Operation ID**: `get-appointment-notes`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `appointmentId` [required] (string) - Appointment ID

**Query Parameters**
- `limit` [required] (number) - Limit of notes to fetch
- `offset` [required] (number) - Offset of notes to fetch

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetNotesListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `notes` [optional] (array)
      - `hasMore` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/appointments/{appointmentId}/notes`

- **Summary**: Create Note
- **Operation ID**: `create-appointment-note`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `appointmentId` [required] (string) - Appointment ID

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/NotesDTO`
  - Type: object
  - Properties:
    - `userId` [optional] (string)
    - `body` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCreateUpdateNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `note` [optional] (object) ref: `#/components/schemas/GetNoteSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/appointments/{appointmentId}/notes/{noteId}`

- **Summary**: Delete Note
- **Operation ID**: `delete-appointment-note`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `appointmentId` [required] (string) - Appointment ID

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/appointments/{appointmentId}/notes/{noteId}`

- **Summary**: Update Note
- **Operation ID**: `update-appointment-note`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `appointmentId` [required] (string) - Appointment ID

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/NotesDTO`
  - Type: object
  - Properties:
    - `userId` [optional] (string)
    - `body` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCreateUpdateNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `note` [optional] (object) ref: `#/components/schemas/GetNoteSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Appointments

#### GET `/contacts/{contactId}/appointments`

- **Summary**: Get Appointments for Contact
- **Operation ID**: `get-appointments-for-contact`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetEventsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `events` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Associations

#### GET `/associations/`

- **Summary**: Get all associations for a sub-account / location
- **Operation ID**: `find-associations`
- **Scopes**: `associations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `skip` [required] (number)
- `limit` [required] (number)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/associations/`

- **Summary**: Create Association
- **Operation ID**: `create-association`
- **Scopes**: `associations.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/createAssociationReqDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `key` [required] (string)
    - `firstObjectLabel` [required] (object)
    - `firstObjectKey` [required] (object)
    - `secondObjectLabel` [required] (object)
    - `secondObjectKey` [required] (object)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/associations/{associationId}`

- **Summary**: Delete Association
- **Operation ID**: `delete-association`
- **Scopes**: `associations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `associationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteAssociationsResponseDTO`
    - Type: object
    - Properties:
      - `deleted` [required] (boolean)
      - `id` [required] (string)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/associations/{associationId}`

- **Summary**: Get association by ID
- **Operation ID**: `get-association-by-ID`
- **Scopes**: `associations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `associationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/associations/{associationId}`

- **Summary**: Update Association By Id
- **Operation ID**: `update-association`
- **Scopes**: `associations.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `associationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateAssociationReqDto`
  - Type: object
  - Properties:
    - `firstObjectLabel` [required] (object)
    - `secondObjectLabel` [required] (object)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/associations/key/{key_name}`

- **Summary**: Get association key by key name
- **Operation ID**: `get-association-key-by-key-name`
- **Scopes**: `associations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `key_name` [required] (string)

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/associations/objectKey/{objectKey}`

- **Summary**: Get association by object keys
- **Operation ID**: `get-association-by-object-keys`
- **Scopes**: `associations.readonly`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `objectKey` [optional] (string)

**Query Parameters**
- `locationId` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Blogs

#### GET `/blogs/authors`

- **Summary**: Get all authors
- **Operation ID**: `get-all-blog-authors-by-location`
- **Scopes**: `blogs/author.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `limit` [required] (number) - Number of authors to show in the listing
- `offset` [required] (number) - Number of authors to skip in listing

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AuthorsResponseDTO`
    - Type: object
    - Properties:
      - `authors` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/blogs/categories`

- **Summary**: Get all categories
- **Operation ID**: `get-all-categories-by-location`
- **Scopes**: `blogs/category.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `limit` [required] (number) - Number of categories to show in the listing
- `offset` [required] (number) - Number of categories to skip in listing

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CategoriesResponseDTO`
    - Type: object
    - Properties:
      - `categories` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/blogs/posts`

- **Summary**: Create Blog Post
- **Operation ID**: `create-blog-post`
- **Scopes**: `blogs/post.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateBlogPostParams`
  - Type: object
  - Properties:
    - `title` [required] (string)
    - `locationId` [required] (string)
    - `blogId` [required] (string)
    - `imageUrl` [required] (string)
    - `description` [required] (string)
    - `rawHTML` [required] (string)
    - `status` [required] (string) enum: `DRAFT`, `PUBLISHED`, `SCHEDULED`, `ARCHIVED`
    - `imageAltText` [required] (string)
    - `categories` [required] (array)
    - `tags` [optional] (array)
    - `author` [required] (string)
    - `urlSlug` [required] (string)
    - `canonicalLink` [optional] (string)
    - `publishedAt` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlogPostCreateResponseWrapperDTO`
    - Type: object
    - Properties:
      - `data` [required] (object) ref: `#/components/schemas/BlogPostResponseDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/blogs/posts/{postId}`

- **Summary**: Update Blog Post
- **Operation ID**: `update-blog-post`
- **Scopes**: `blogs/post-update.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateBlogPostParams`
  - Type: object
  - Properties:
    - `title` [required] (string)
    - `locationId` [required] (string)
    - `blogId` [required] (string)
    - `imageUrl` [required] (string)
    - `description` [required] (string)
    - `rawHTML` [required] (string)
    - `status` [required] (string) enum: `DRAFT`, `PUBLISHED`, `SCHEDULED`, `ARCHIVED`
    - `imageAltText` [required] (string)
    - `categories` [required] (array)
    - `tags` [optional] (array)
    - `author` [required] (string)
    - `urlSlug` [required] (string)
    - `canonicalLink` [optional] (string)
    - `publishedAt` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlogPostUpdateResponseWrapperDTO`
    - Type: object
    - Properties:
      - `updatedBlogPost` [required] (object) ref: `#/components/schemas/BlogPostResponseDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/blogs/posts/all`

- **Summary**: Get Blog posts by Blog ID
- **Operation ID**: `get-blog-post`
- **Scopes**: `blogs/posts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `blogId` [required] (string)
- `limit` [required] (number)
- `offset` [required] (number)
- `searchTerm` [optional] (string) - search for any post by name
- `status` [optional] (string) | enum: `PUBLISHED`, `SCHEDULED`, `ARCHIVED`, `DRAFT`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlogPostGetResponseWrapperDTO`
    - Type: object
    - Properties:
      - `blogs` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/blogs/posts/url-slug-exists`

- **Summary**: Check url slug
- **Operation ID**: `check-url-slug-exists`
- **Scopes**: `blogs/check-slug.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `urlSlug` [required] (string)
- `locationId` [required] (string)
- `postId` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UrlSlugCheckResponseDTO`
    - Type: object
    - Properties:
      - `exists` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/blogs/site/all`

- **Summary**: Get Blogs by Location ID
- **Operation ID**: `get-blogs`
- **Scopes**: `blogs/list.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `skip` [required] (number)
- `limit` [required] (number)
- `searchTerm` [optional] (string) - search for any post by name

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlogGetResponseWrapperDTO`
    - Type: object
    - Properties:
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Bulk

#### POST `/contacts/bulk/business`

- **Summary**: Add/Remove Contacts From Business
- **Operation ID**: `add-remove-contact-from-business`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ContactsBusinessUpdate`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `ids` [required] (array)
    - `businessId` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsBulkUpateResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `ids` [required] (array)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/bulk/tags/update/{type}`

- **Summary**: Update Contacts Tags
- **Operation ID**: `create-association`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `type` [required] (string) - Tags operation type | enum: `add`, `remove`

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateTagsDTO`
  - Type: object
  - Properties:
    - `contacts` [required] (array)
    - `tags` [required] (array)
    - `locationId` [required] (string)
    - `removeAllTags` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateTagsResponseDTO`
    - Type: object
    - Properties:
      - `succeded` [required] (boolean)
      - `errorCount` [required] (number)
      - `responses` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Businesses

#### GET `/businesses/`

- **Summary**: Get Businesses by Location
- **Operation ID**: `get-businesses-by-location`
- **Scopes**: `businesses.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetBusinessByLocationResponseDto`
    - Type: object
    - Properties:
      - `businesses` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/businesses/`

- **Summary**: Create Business
- **Operation ID**: `create-business`
- **Scopes**: `businesses.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateBusinessDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `locationId` [required] (string)
    - `phone` [optional] (string)
    - `email` [optional] (string)
    - `website` [optional] (string)
    - `address` [optional] (string)
    - `city` [optional] (string)
    - `postalCode` [optional] (string)
    - `state` [optional] (string)
    - `country` [optional] (string)
    - `description` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateBusinessResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `buiseness` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/businesses/{businessId}`

- **Summary**: Delete Business
- **Operation ID**: `delete-Business`
- **Scopes**: `businesses.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `businessId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteBusinessResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/businesses/{businessId}`

- **Summary**: Get Business
- **Operation ID**: `get-business`
- **Scopes**: `businesses.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `businessId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetBusinessByIdResponseDto`
    - Type: object
    - Properties:
      - `business` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/businesses/{businessId}`

- **Summary**: Update Business
- **Operation ID**: `update-business`
- **Scopes**: `businesses.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `businessId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateBusinessDto`
  - Type: object
  - Properties:
    - `name` [optional] (string)
    - `phone` [optional] (string)
    - `email` [optional] (string)
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `address` [optional] (string)
    - `state` [optional] (string)
    - `city` [optional] (string)
    - `country` [optional] (string)
    - `description` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateBusinessResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `buiseness` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### CSV

#### GET `/social-media-posting/{locationId}/csv`

- **Summary**: Get Upload Status
- **Operation ID**: `get-upload-status`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `skip` [optional] (string)
- `limit` [optional] (string)
- `includeUsers` [optional] (string)
- `userId` [optional] (string) - User ID

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetUploadStatusResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/{locationId}/csv`

- **Summary**: Upload CSV
- **Operation ID**: `upload-csv`
- **Scopes**: `socialplanner/csv.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `multipart/form-data`
  - Schema ref: `#/components/schemas/UploadCSVDTO`
  - Type: object
  - Properties:
    - `file` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UploadFileResponseDTO`
    - Type: object
    - Properties:
      - `fileId` [required] (string)
      - `url` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/social-media-posting/{locationId}/csv/{csvId}/post/{postId}`

- **Summary**: Delete CSV Post
- **Operation ID**: `delete-csv-post`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)
- `postId` [required] (string) - CSV Post Id
- `csvId` [required] (string) - CSV Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeletePostResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/social-media-posting/{locationId}/csv/{id}`

- **Summary**: Delete CSV
- **Operation ID**: `delete-csv`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)
- `id` [required] (string) - CSV Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteCsvResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/{locationId}/csv/{id}`

- **Summary**: Get CSV Post
- **Operation ID**: `get-csv-post`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)
- `id` [required] (string) - CSV Id

**Query Parameters**
- `skip` [optional] (string)
- `limit` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCsvPostResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/social-media-posting/{locationId}/csv/{id}`

- **Summary**: Start CSV Finalize
- **Operation ID**: `start-csv-finalize`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)
- `id` [required] (string) - CSV Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CSVDefaultDTO`
  - Type: object
  - Properties:
    - `userId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CsvPostStatusResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/{locationId}/set-accounts`

- **Summary**: Set Accounts
- **Operation ID**: `set-accounts`
- **Scopes**: `socialplanner/csv.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SetAccountsDTO`
  - Type: object
  - Properties:
    - `accountIds` [required] (array)
    - `filePath` [required] (string)
    - `rowsCount` [required] (number)
    - `fileName` [required] (string)
    - `approver` [optional] (string)
    - `userId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SetAccountsResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Calendar Events

#### GET `/calendars/blocked-slots`

- **Summary**: Get Blocked Slots
- **Operation ID**: `get-blocked-slots`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [optional] (string) - User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
- `calendarId` [optional] (string) - Either of calendarId, userId or groupId is required
- `groupId` [optional] (string) - Either of groupId, calendarId or userId is required
- `startTime` [required] (string) - Start Time (in millis)
- `endTime` [required] (string) - End Time (in millis)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCalendarEventsSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `events` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/events`

- **Summary**: Get Calendar Events
- **Operation ID**: `get-calendar-events`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [optional] (string) - User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
- `calendarId` [optional] (string) - Either of calendarId, userId or groupId is required
- `groupId` [optional] (string) - Either of groupId, calendarId or userId is required
- `startTime` [required] (string) - Start Time (in millis)
- `endTime` [required] (string) - End Time (in millis)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCalendarEventsSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `events` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/events/{eventId}`

- **Summary**: Delete Event
- **Operation ID**: `delete-event`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `eventId` [required] (string) - Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeleteAppointmentSchema`
  - Type: object

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteEventSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/events/appointments`

- **Summary**: Create appointment
- **Operation ID**: `create-appointment`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AppointmentCreateSchema`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `meetingLocationType` [optional] (string) enum: `custom`, `zoom`, `gmeet`, `phone`, `address`, `ms_teams`, `google`
    - `meetingLocationId` [optional] (string)
    - `overrideLocationConfig` [optional] (boolean)
    - `appointmentStatus` [optional] (string) enum: `new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`
    - `assignedUserId` [optional] (string)
    - `description` [optional] (string)
    - `address` [optional] (string)
    - `ignoreDateRange` [optional] (boolean)
    - `toNotify` [optional] (boolean)
    - `ignoreFreeSlotValidation` [optional] (boolean)
    - `rrule` [optional] (string)
    - `calendarId` [required] (string)
    - `locationId` [required] (string)
    - `contactId` [required] (string)
    - `startTime` [required] (string)
    - `endTime` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AppointmentSchemaResponse`
    - Type: object
    - Properties:
      - `calendarId` [required] (string)
      - `locationId` [required] (string)
      - `contactId` [required] (string)
      - `startTime` [optional] (string)
      - `endTime` [optional] (string)
      - `title` [optional] (string)
      - `meetingLocationType` [optional] (string)
      - `appointmentStatus` [optional] (string) enum: `new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`, `active`, `completed`
      - `assignedUserId` [optional] (string)
      - `address` [optional] (string)
      - `isRecurring` [optional] (boolean)
      - `rrule` [optional] (string)
      - `id` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/events/appointments/{eventId}`

- **Summary**: Get Appointment
- **Operation ID**: `get-appointment`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `eventId` [required] (string) - Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCalendarEventSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `event` [optional] (object) ref: `#/components/schemas/CalendarEventDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/events/appointments/{eventId}`

- **Summary**: Update Appointment
- **Operation ID**: `edit-appointment`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `eventId` [required] (string) - Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AppointmentEditSchema`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `meetingLocationType` [optional] (string) enum: `custom`, `zoom`, `gmeet`, `phone`, `address`, `ms_teams`, `google`
    - `meetingLocationId` [optional] (string)
    - `overrideLocationConfig` [optional] (boolean)
    - `appointmentStatus` [optional] (string) enum: `new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`
    - `assignedUserId` [optional] (string)
    - `description` [optional] (string)
    - `address` [optional] (string)
    - `ignoreDateRange` [optional] (boolean)
    - `toNotify` [optional] (boolean)
    - `ignoreFreeSlotValidation` [optional] (boolean)
    - `rrule` [optional] (string)
    - `calendarId` [optional] (string)
    - `startTime` [optional] (string)
    - `endTime` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AppointmentSchemaResponse`
    - Type: object
    - Properties:
      - `calendarId` [required] (string)
      - `locationId` [required] (string)
      - `contactId` [required] (string)
      - `startTime` [optional] (string)
      - `endTime` [optional] (string)
      - `title` [optional] (string)
      - `meetingLocationType` [optional] (string)
      - `appointmentStatus` [optional] (string) enum: `new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`, `active`, `completed`
      - `assignedUserId` [optional] (string)
      - `address` [optional] (string)
      - `isRecurring` [optional] (boolean)
      - `rrule` [optional] (string)
      - `id` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/events/block-slots`

- **Summary**: Create Block Slot
- **Operation ID**: `create-block-slot`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BlockSlotCreateRequestDTO`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `calendarId` [required] (string)
    - `assignedUserId` [optional] (string)
    - `locationId` [required] (string)
    - `startTime` [optional] (string)
    - `endTime` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlockedSlotSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `locationId` [required] (string)
      - `title` [required] (string)
      - `startTime` [required] (object)
      - `endTime` [required] (object)
      - `calendarId` [optional] (string)
      - `assignedUserId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/events/block-slots/{eventId}`

- **Summary**: Update Block Slot
- **Operation ID**: `edit-block-slot`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `eventId` [required] (string) - Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BlockSlotEditRequestDTO`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `calendarId` [required] (string)
    - `assignedUserId` [optional] (string)
    - `locationId` [required] (string)
    - `startTime` [optional] (string)
    - `endTime` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BlockedSlotSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `locationId` [required] (string)
      - `title` [required] (string)
      - `startTime` [required] (object)
      - `endTime` [required] (object)
      - `calendarId` [optional] (string)
      - `assignedUserId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Calendar Groups

#### GET `/calendars/groups`

- **Summary**: Get Groups
- **Operation ID**: `get-groups`
- **Scopes**: `calendars/groups.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AllGroupsSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `groups` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/groups`

- **Summary**: Create Calendar Group
- **Operation ID**: `create-calendar-group`
- **Scopes**: `calendars/groups.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/GroupCreateDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [required] (string)
    - `description` [required] (string)
    - `slug` [required] (string)
    - `isActive` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GroupCreateSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `group` [optional] (object) ref: `#/components/schemas/GroupDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/groups/{groupId}`

- **Summary**: Delete Group
- **Operation ID**: `delete-group`
- **Scopes**: `calendars/groups.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `groupId` [required] (string) - Group Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GroupSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/groups/{groupId}`

- **Summary**: Update Group
- **Operation ID**: `edit-group`
- **Scopes**: `calendars/groups.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `groupId` [required] (string) - Group Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/GroupUpdateDTO`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `description` [required] (string)
    - `slug` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GroupCreateSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `group` [optional] (object) ref: `#/components/schemas/GroupDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/groups/{groupId}/status`

- **Summary**: Disable Group
- **Operation ID**: `disable-group`
- **Scopes**: `calendars/groups.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `groupId` [required] (string) - Group Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/GroupStatusUpdateParams`
  - Type: object
  - Properties:
    - `isActive` [required] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GroupSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/groups/validate-slug`

- **Summary**: Validate group slug
- **Operation ID**: `validate-groups-slug`
- **Scopes**: `calendars/groups.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ValidateGroupSlugPostBody`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `slug` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ValidateGroupSlugSuccessResponseDTO`
    - Type: object
    - Properties:
      - `available` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Calendar Notifications

#### GET `/calendars/{calendarId}/notifications`

- **Summary**: Get notifications
- **Operation ID**: `get-event-notification`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string)

**Query Parameters**
- `isActive` [optional] (boolean)
- `deleted` [optional] (boolean)
- `limit` [optional] (number) - Number of records to return
- `skip` [optional] (number) - Number of records to skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Type: array
    - Items ref: `#/components/schemas/CalendarNotificationResponseDTO`
    - Item type: object
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/{calendarId}/notifications`

- **Summary**: Create notification
- **Operation ID**: `create-event-notification`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Type: array
  - Items ref: `#/components/schemas/CreateCalendarNotificationDTO`
  - Item type: object

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Type: array
    - Items ref: `#/components/schemas/CalendarNotificationResponseDTO`
    - Item type: object
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/{calendarId}/notifications/{notificationId}`

- **Summary**: Delete Notification
- **Operation ID**: `delete-event-notification`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string)
- `notificationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarNotificationDeleteResponseDTO`
    - Type: object
    - Properties:
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/{calendarId}/notifications/{notificationId}`

- **Summary**: Get notification
- **Operation ID**: `find-event-notification`
- **Scopes**: `calendars/events.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string)
- `notificationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarNotificationResponseDTO`
    - Type: object
    - Properties:
      - `_id` [optional] (string)
      - `receiverType` [optional] (string) enum: `contact`, `guest`, `assignedUser`, `emails`, `phoneNumbers`
      - `additionalEmailIds` [optional] (array)
      - `additionalPhoneNumbers` [optional] (array)
      - `channel` [optional] (string) enum: `email`, `inApp`, `sms`, `whatsapp`
      - `notificationType` [optional] (string) enum: `booked`, `confirmation`, `cancellation`, `reminder`, `followup`, `reschedule`
      - `isActive` [optional] (boolean)
      - `additionalWhatsappNumbers` [optional] (array)
      - `templateId` [optional] (string)
      - `body` [optional] (string)
      - `subject` [optional] (string)
      - `afterTime` [optional] (array)
      - `beforeTime` [optional] (array)
      - `selectedUsers` [optional] (array)
      - `deleted` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/{calendarId}/notifications/{notificationId}`

- **Summary**: Update notification
- **Operation ID**: `update-event-notification`
- **Scopes**: `calendars/events.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string)
- `notificationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCalendarNotificationsDTO`
  - Type: object
  - Properties:
    - `receiverType` [optional] (string) enum: `contact`, `guest`, `assignedUser`, `emails`, `phoneNumbers`
    - `additionalEmailIds` [optional] (array)
    - `additionalPhoneNumbers` [optional] (array)
    - `selectedUsers` [optional] (array)
    - `channel` [optional] (string) enum: `email`, `inApp`, `sms`, `whatsapp`
    - `notificationType` [optional] (string) enum: `booked`, `confirmation`, `cancellation`, `reminder`, `followup`, `reschedule`
    - `isActive` [optional] (boolean)
    - `deleted` [optional] (boolean)
    - `templateId` [optional] (string)
    - `body` [optional] (string)
    - `subject` [optional] (string)
    - `afterTime` [optional] (array)
    - `beforeTime` [optional] (array)
    - `fromAddress` [optional] (string)
    - `fromNumber` [optional] (string)
    - `fromName` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarNotificationDeleteResponseDTO`
    - Type: object
    - Properties:
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Calendar Resources: Rooms & Equipments

#### GET `/calendars/resources/{resourceType}`

- **Summary**: List Calendar Resources
- **Operation ID**: `fetch-calendar-resources`
- **Scopes**: `calendars/resources.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `resourceType` [required] (string) - Calendar Resource Type | enum: `equipments`, `rooms`

**Query Parameters**
- `locationId` [required] (string)
- `limit` [required] (number)
- `skip` [required] (number)

**Request Body**
- None

**Response Schema**
- **200**: Calendar resources listed
  - Content-Type: `application/json`
    - Type: array
    - Items ref: `#/components/schemas/CalendarResourceByIdResponseDTO`
    - Item type: object
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/resources/{resourceType}`

- **Summary**: Create Calendar Resource
- **Operation ID**: `create-calendar-resource`
- **Scopes**: `calendars/resources.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `resourceType` [required] (string) - Calendar Resource Type | enum: `equipments`, `rooms`

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCalendarResourceDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [required] (string)
    - `description` [required] (string)
    - `quantity` [required] (number)
    - `outOfService` [required] (number)
    - `capacity` [required] (number)
    - `calendarIds` [required] (array)

**Response Schema**
- **201**: Calendar resource created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarResourceByIdResponseDTO`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `resourceType` [required] (string) enum: `equipments`, `rooms`
      - `isActive` [required] (boolean)
      - `description` [optional] (string)
      - `quantity` [optional] (number)
      - `outOfService` [optional] (number)
      - `capacity` [optional] (number)
      - `calendarIds` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/resources/{resourceType}/{id}`

- **Summary**: Delete Calendar Resource
- **Operation ID**: `delete-calendar-resource`
- **Scopes**: `calendars/resources.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `resourceType` [required] (string) - Calendar Resource Type | enum: `equipments`, `rooms`
- `id` [required] (string) - Calendar Resource ID

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Calendar resource deleted
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceDeleteResponseDTO`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/resources/{resourceType}/{id}`

- **Summary**: Get Calendar Resource
- **Operation ID**: `get-calendar-resource`
- **Scopes**: `calendars/resources.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `resourceType` [required] (string) - Calendar Resource Type | enum: `equipments`, `rooms`
- `id` [required] (string) - Calendar Resource ID

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Calendar resource fetched
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarResourceByIdResponseDTO`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `resourceType` [required] (string) enum: `equipments`, `rooms`
      - `isActive` [required] (boolean)
      - `description` [optional] (string)
      - `quantity` [optional] (number)
      - `outOfService` [optional] (number)
      - `capacity` [optional] (number)
      - `calendarIds` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/resources/{resourceType}/{id}`

- **Summary**: Update Calendar Resource
- **Operation ID**: `update-calendar-resource`
- **Scopes**: `calendars/resources.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `resourceType` [required] (string) - Calendar Resource Type | enum: `equipments`, `rooms`
- `id` [required] (string) - Calendar Resource ID

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCalendarResourceDTO`
  - Type: object
  - Properties:
    - `locationId` [optional] (string)
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `quantity` [optional] (number)
    - `outOfService` [optional] (number)
    - `capacity` [optional] (number)
    - `calendarIds` [optional] (array)
    - `isActive` [optional] (boolean)

**Response Schema**
- **200**: Calendar resource updated
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarResourceResponseDTO`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `resourceType` [required] (string) enum: `equipments`, `rooms`
      - `isActive` [required] (boolean)
      - `description` [optional] (string)
      - `quantity` [optional] (number)
      - `outOfService` [optional] (number)
      - `capacity` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Calendars

#### GET `/calendars/`

- **Summary**: Get Calendars
- **Operation ID**: `get-calendars`
- **Scopes**: `calendars.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `groupId` [optional] (string) - Group Id
- `showDrafted` [optional] (boolean) - Show drafted

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarsGetSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `calendars` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/calendars/`

- **Summary**: Create Calendar
- **Operation ID**: `create-calendar`
- **Scopes**: `calendars.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CalendarCreateDTO`
  - Type: object
  - Properties:
    - `isActive` [optional] (boolean)
    - `notifications` [optional] (array)
    - `locationId` [required] (string)
    - `groupId` [optional] (string)
    - `teamMembers` [optional] (array)
    - `eventType` [optional] (string) enum: `RoundRobin_OptimizeForAvailability`, `RoundRobin_OptimizeForEqualDistribution`
    - `name` [required] (string)
    - `description` [optional] (string)
    - `slug` [optional] (string)
    - `widgetSlug` [optional] (string)
    - `calendarType` [optional] (string) enum: `round_robin`, `event`, `class_booking`, `collective`, `service_booking`, `personal`
    - `widgetType` [optional] (string) enum: `default`, `classic`
    - `eventTitle` [optional] (string)
    - `eventColor` [optional] (string)
    - `meetingLocation` [optional] (string)
    - `locationConfigurations` [optional] (array)
    - `slotDuration` [optional] (number)
    - `slotDurationUnit` [optional] (string) enum: `mins`, `hours`
    - `slotInterval` [optional] (number)
    - `slotIntervalUnit` [optional] (string) enum: `mins`, `hours`
    - ... 35 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarByIdSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `calendar` [required] (object) ref: `#/components/schemas/CalendarDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/calendars/{calendarId}`

- **Summary**: Delete Calendar
- **Operation ID**: `delete-calendar`
- **Scopes**: `calendars.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string) - Calendar Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarDeleteSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/{calendarId}`

- **Summary**: Get Calendar
- **Operation ID**: `get-calendar`
- **Scopes**: `calendars.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string) - Calendar Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarByIdSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `calendar` [required] (object) ref: `#/components/schemas/CalendarDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/calendars/{calendarId}`

- **Summary**: Update Calendar
- **Operation ID**: `update-calendar`
- **Scopes**: `calendars.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string) - Calendar Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CalendarUpdateDTO`
  - Type: object
  - Properties:
    - `notifications` [optional] (array)
    - `groupId` [optional] (string)
    - `teamMembers` [optional] (array)
    - `eventType` [optional] (string) enum: `RoundRobin_OptimizeForAvailability`, `RoundRobin_OptimizeForEqualDistribution`
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `slug` [optional] (string)
    - `widgetSlug` [optional] (string)
    - `widgetType` [optional] (string) enum: `default`, `classic`
    - `eventTitle` [optional] (string)
    - `eventColor` [optional] (string)
    - `locationConfigurations` [optional] (array)
    - `meetingLocation` [optional] (string)
    - `slotDuration` [optional] (number)
    - `slotDurationUnit` [optional] (string) enum: `mins`, `hours`
    - `preBufferUnit` [optional] (string) enum: `mins`, `hours`
    - `slotInterval` [optional] (number)
    - `slotIntervalUnit` [optional] (string) enum: `mins`, `hours`
    - `slotBuffer` [optional] (number)
    - `preBuffer` [optional] (number)
    - ... 32 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CalendarByIdSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `calendar` [required] (object) ref: `#/components/schemas/CalendarDTO`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/calendars/{calendarId}/free-slots`

- **Summary**: Get Free Slots
- **Operation ID**: `get-slots`
- **Scopes**: `calendars.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `calendarId` [required] (string) - Calendar Id

**Query Parameters**
- `startDate` [required] (number) - Start Date (**⚠️ Important:** Date range cannot be more than 31 days)
- `endDate` [required] (number) - End Date (**⚠️ Important:** Date range cannot be more than 31 days)
- `timezone` [optional] (string) - The timezone in which the free slots are returned
- `userId` [optional] (string) - The user for whom the free slots are returned
- `userIds` [optional] (array) - The users for whom the free slots are returned

**Request Body**
- None

**Response Schema**
- **200**: Availability map keyed by date (YYYY-MM-DD)
  - Content-Type: `application/json`
    - Type: object
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Campaigns

#### GET `/campaigns/`

- **Summary**: Get Campaigns
- **Operation ID**: `get-campaigns`
- **Scopes**: `campaigns.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `status` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CampaignsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `campaigns` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/contacts/{contactId}/campaigns/{campaignId}`

- **Summary**: Remove Contact From Campaign
- **Operation ID**: `remove-contact-from-campaign`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `campaignId` [required] (string) - Campaigns Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateDeleteCantactsCampaignsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/campaigns/{campaignId}`

- **Summary**: Add Contact to Campaign
- **Operation ID**: `add-contact-to-campaign`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `campaignId` [required] (string) - Campaigns Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AddContactToCampaignDto`
  - Type: object

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateDeleteCantactsCampaignsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/contacts/{contactId}/campaigns/removeAll`

- **Summary**: Remove Contact From Every Campaign
- **Operation ID**: `remove-contact-from-every-campaign`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateDeleteCantactsCampaignsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/emails/schedule`

- **Summary**: Get Campaigns
- **Operation ID**: `fetch-campaigns`
- **Scopes**: `emails/schedule.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location ID to fetch campaigns from
- `limit` [optional] (number) - Maximum number of campaigns to return. Defaults to 10, maximum is 100
- `offset` [optional] (number) - Number of campaigns to skip for pagination
- `status` [optional] (string) - Filter by schedule status | enum: `active`, `pause`, `complete`, `cancelled`, `retry`, `draft`, `resend-scheduled`
- `emailStatus` [optional] (string) - Filter by email delivery status | enum: `all`, `not-started`, `paused`, `cancelled`, `processing`, `resumed`, `next-drip`, `complete`, `success`, `error`, `waiting`, `queued`, `queueing`, `reading`, `scheduled`
- `name` [optional] (string) - Filter campaigns by name
- `parentId` [optional] (string) - Filter campaigns by parent folder ID
- `limitedFields` [optional] (boolean) - When true, returns only essential campaign fields like id, templateDataDownloadUrl, updatedAt, type, templateType, templateId, downloadUrl and isPlainText. When false, returns complete campaign data including meta information, bulkRequestStatusInfo, ABTestInfo, resendScheduleInfo and all other campaign properties
- `archived` [optional] (boolean) - Filter archived campaigns
- `campaignsOnly` [optional] (boolean) - Return only campaigns, excluding folders
- `showStats` [optional] (boolean) - When true, returns campaign statistics including delivered count, opened count, clicked count and revenue if available for the campaign. When false, returns campaign data without statistics.

**Request Body**
- None

**Response Schema**
- **200**: Success
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ScheduleFetchSuccessfulDTO`
    - Type: object
    - Properties:
      - `schedules` [required] (array)
      - `total` [required] (array)
      - `traceId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: The token does not have access to this location
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InvalidLocationDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **404**: Not Found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/NotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Category

#### GET `/social-media-posting/{locationId}/categories`

- **Summary**: Get categories by location id
- **Operation ID**: `get-categories-location-id`
- **Scopes**: `socialplanner/category.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `searchText` [optional] (string) - Search text string
- `limit` [optional] (string) - Limit
- `skip` [optional] (string) - Skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetByLocationIdResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/{locationId}/categories/{id}`

- **Summary**: Get categories by id
- **Operation ID**: `get-categories-id`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Category Id
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetByIdResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Collections

#### GET `/products/collections`

- **Summary**: Fetch Product Collections
- **Operation ID**: `get-product-collection`
- **Scopes**: `products/collection.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `altId` [required] (string) - Location Id
- `altType` [required] (string) - The type of alt. For now it is only LOCATION | enum: `location`
- `collectionIds` [optional] (string) - Ids of the collections separated by comma(,) for search purposes
- `name` [optional] (string) - Query to search collection based on names

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListCollectionResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/collections`

- **Summary**: Create Product Collection
- **Operation ID**: `create-product-collection`
- **Scopes**: `products/collection.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateProductCollectionsDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `collectionId` [optional] (string)
    - `name` [required] (string)
    - `slug` [required] (string)
    - `image` [optional] (string)
    - `seo` [optional] (any)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateCollectionResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/products/collections/{collectionId}`

- **Summary**: Delete Product Collection
- **Operation ID**: `delete-product-collection`
- **Scopes**: `products/collection.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `collectionId` [required] (string) - MongoId of the collection

**Query Parameters**
- `altId` [required] (string) - Location Id
- `altType` [required] (string) - The type of alt. For now it is only LOCATION | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteProductCollectionResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/products/collections/{collectionId}`

- **Summary**: Get Details about individual product collection
- **Operation ID**: `get-product-collection-id`
- **Scopes**: `products/collection.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `collectionId` [required] (string) - Collection Id

**Query Parameters**
- `altId` [required] (string) - Location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DefaultCollectionResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (any)
      - `status` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/products/collections/{collectionId}`

- **Summary**: Update Product Collection
- **Operation ID**: `update-product-collection`
- **Scopes**: `products/collection.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `collectionId` [required] (string) - MongoId of the collection

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateProductCollectionsDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [optional] (string)
    - `slug` [optional] (string)
    - `image` [optional] (string)
    - `seo` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateProductCollectionResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Companies

#### GET `/companies/{companyId}`

- **Summary**: Get Company
- **Operation ID**: `get-company`
- **Scopes**: `companies.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCompanyByIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `company` [optional] (object) ref: `#/components/schemas/GetCompanyByIdSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Contacts

#### GET `/contacts/`

- **Summary**: Get Contacts
- **Operation ID**: `get-contacts`
- **Scopes**: `contacts.readonly`
- **External references**: <https://highlevel.stoplight.io/docs/integrations/dbe4f3a00a106-search-contacts>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `startAfterId` [optional] (string) - Start After Id
- `startAfter` [optional] (number) - Start Afte
- `query` [optional] (string) - Contact Query
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 100 and default will be 20

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsSearchSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `contacts` [optional] (array)
      - `count` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/`

- **Summary**: Create Contact
- **Operation ID**: `create-contact`
- **Scopes**: `contacts.write`
- **External references**: <https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list">

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateContactDto`
  - Type: object
  - Properties:
    - `firstName` [optional] (string)
    - `lastName` [optional] (string)
    - `name` [optional] (string)
    - `email` [optional] (string)
    - `locationId` [required] (string)
    - `gender` [optional] (string)
    - `phone` [optional] (string)
    - `address1` [optional] (string)
    - `city` [optional] (string)
    - `state` [optional] (string)
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `timezone` [optional] (string)
    - `dnd` [optional] (boolean)
    - `dndSettings` [optional] (object) ref: `#/components/schemas/DndSettingsSchema`
    - `inboundDndSettings` [optional] (object) ref: `#/components/schemas/InboundDndSettingsSchema`
    - `tags` [optional] (array)
    - `customFields` [optional] (array)
    - `source` [optional] (string)
    - `country` [optional] (string)
    - ... 2 more properties

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateContactsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `contact` [optional] (object) ref: `#/components/schemas/CreateContactSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/contacts/{contactId}`

- **Summary**: Delete Contact
- **Operation ID**: `delete-contact`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteContactsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/contacts/{contactId}`

- **Summary**: Get Contact
- **Operation ID**: `get-contact`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsByIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `contact` [optional] (object) ref: `#/components/schemas/GetContectByIdSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/contacts/{contactId}`

- **Summary**: Update Contact
- **Operation ID**: `update-contact`
- **Scopes**: `contacts.write`
- **External references**: <https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list">

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateContactDto`
  - Type: object
  - Properties:
    - `firstName` [optional] (string)
    - `lastName` [optional] (string)
    - `name` [optional] (string)
    - `email` [optional] (string)
    - `phone` [optional] (string)
    - `address1` [optional] (string)
    - `city` [optional] (string)
    - `state` [optional] (string)
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `timezone` [optional] (string)
    - `dnd` [optional] (boolean)
    - `dndSettings` [optional] (object) ref: `#/components/schemas/DndSettingsSchema`
    - `inboundDndSettings` [optional] (object) ref: `#/components/schemas/InboundDndSettingsSchema`
    - `tags` [optional] (array)
    - `customFields` [optional] (array)
    - `source` [optional] (string)
    - `country` [optional] (string)
    - `assignedTo` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateContactsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
      - `contact` [optional] (object) ref: `#/components/schemas/GetContectByIdSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/contacts/business/{businessId}`

- **Summary**: Get Contacts By BusinessId
- **Operation ID**: `get-contacts-by-businessId`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `businessId` [required] (string)

**Query Parameters**
- `limit` [optional] (string)
- `locationId` [required] (string)
- `skip` [optional] (string)
- `query` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsSearchSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `contacts` [optional] (array)
      - `count` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/upsert`

- **Summary**: Upsert Contact
- **Operation ID**: `upsert-contact`
- **Scopes**: `contacts.write`
- **External references**: <https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list">

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpsertContactDto`
  - Type: object
  - Properties:
    - `firstName` [optional] (string)
    - `lastName` [optional] (string)
    - `name` [optional] (string)
    - `email` [optional] (string)
    - `locationId` [required] (string)
    - `gender` [optional] (string)
    - `phone` [optional] (string)
    - `address1` [optional] (string)
    - `city` [optional] (string)
    - `state` [optional] (string)
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `timezone` [optional] (string)
    - `dnd` [optional] (boolean)
    - `dndSettings` [optional] (object) ref: `#/components/schemas/DndSettingsSchema`
    - `inboundDndSettings` [optional] (object) ref: `#/components/schemas/InboundDndSettingsSchema`
    - `tags` [optional] (array)
    - `customFields` [optional] (array)
    - `source` [optional] (string)
    - `country` [optional] (string)
    - ... 2 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpsertContactsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `new` [optional] (boolean)
      - `contact` [optional] (object) ref: `#/components/schemas/GetContectByIdSchema`
      - `traceId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Conversations

#### POST `/conversations/`

- **Summary**: Create Conversation
- **Operation ID**: `create-conversation`
- **Scopes**: `conversations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateConversationDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `contactId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateConversationSuccessResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `conversation` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/conversations/{conversationId}`

- **Summary**: Delete Conversation
- **Operation ID**: `delete-conversation`
- **Scopes**: `conversations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `conversationId` [required] (string) - Conversation ID as string

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteConversationSuccessfulResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/{conversationId}`

- **Summary**: Get Conversation
- **Operation ID**: `get-conversation`
- **Scopes**: `conversations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `conversationId` [required] (string) - Conversation ID as string

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetConversationByIdResponse`
    - Type: object
    - Properties:
      - `contactId` [required] (string)
      - `locationId` [required] (string)
      - `deleted` [required] (boolean)
      - `inbox` [required] (boolean)
      - `type` [required] (number)
      - `unreadCount` [required] (number)
      - `assignedTo` [optional] (string)
      - `id` [required] (string)
      - `starred` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/conversations/{conversationId}`

- **Summary**: Update Conversation
- **Operation ID**: `update-conversation`
- **Scopes**: `conversations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `conversationId` [required] (string) - Conversation ID as string

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateConversationDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `unreadCount` [optional] (number)
    - `starred` [optional] (boolean)
    - `feedback` [optional] (object)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetConversationSuccessfulResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `conversation` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Coupons

#### DELETE `/payments/coupon`

- **Summary**: Delete Coupon
- **Operation ID**: `delete-coupon`
- **Scopes**: `payments/coupons.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeleteCouponParams`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `id` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteCouponResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `traceId` [required] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/coupon`

- **Summary**: Fetch Coupon
- **Operation ID**: `get-coupon`
- **Scopes**: `payments/coupons.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id
- `altType` [required] (string) - Alt Type | enum: `location`
- `id` [required] (string) - Coupon id
- `code` [required] (string) - Coupon code

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateCouponResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `usageCount` [required] (number)
      - `limitPerCustomer` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string)
      - `name` [required] (string)
      - `code` [required] (string)
      - `discountType` [required] (string) enum: `percentage`, `amount`
      - `discountValue` [required] (number)
      - `status` [required] (string) enum: `scheduled`, `active`, `expired`
      - `startDate` [required] (string)
      - `endDate` [optional] (string)
      - `applyToFuturePayments` [required] (boolean)
      - `applyToFuturePaymentsConfig` [required] (any)
      - `userId` [optional] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [required] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/coupon`

- **Summary**: Create Coupon
- **Operation ID**: `create-coupon`
- **Scopes**: `payments/coupons.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCouponParams`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `code` [required] (string)
    - `discountType` [required] (string) enum: `percentage`, `amount`
    - `discountValue` [required] (number)
    - `startDate` [required] (string)
    - `endDate` [optional] (string)
    - `usageLimit` [optional] (number)
    - `productIds` [optional] (array)
    - `applyToFuturePayments` [optional] (boolean)
    - `applyToFuturePaymentsConfig` [optional] (any)
    - `limitPerCustomer` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateCouponResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `usageCount` [required] (number)
      - `limitPerCustomer` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string)
      - `name` [required] (string)
      - `code` [required] (string)
      - `discountType` [required] (string) enum: `percentage`, `amount`
      - `discountValue` [required] (number)
      - `status` [required] (string) enum: `scheduled`, `active`, `expired`
      - `startDate` [required] (string)
      - `endDate` [optional] (string)
      - `applyToFuturePayments` [required] (boolean)
      - `applyToFuturePaymentsConfig` [required] (any)
      - `userId` [optional] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [required] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/payments/coupon`

- **Summary**: Update Coupon
- **Operation ID**: `update-coupon`
- **Scopes**: `payments/coupons.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCouponParams`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `code` [required] (string)
    - `discountType` [required] (string) enum: `percentage`, `amount`
    - `discountValue` [required] (number)
    - `startDate` [required] (string)
    - `endDate` [optional] (string)
    - `usageLimit` [optional] (number)
    - `productIds` [optional] (array)
    - `applyToFuturePayments` [optional] (boolean)
    - `applyToFuturePaymentsConfig` [optional] (any)
    - `limitPerCustomer` [optional] (boolean)
    - `id` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateCouponResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `usageCount` [required] (number)
      - `limitPerCustomer` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string)
      - `name` [required] (string)
      - `code` [required] (string)
      - `discountType` [required] (string) enum: `percentage`, `amount`
      - `discountValue` [required] (number)
      - `status` [required] (string) enum: `scheduled`, `active`, `expired`
      - `startDate` [required] (string)
      - `endDate` [optional] (string)
      - `applyToFuturePayments` [required] (boolean)
      - `applyToFuturePaymentsConfig` [required] (any)
      - `userId` [optional] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [required] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/coupon/list`

- **Summary**: List Coupons
- **Operation ID**: `list-coupons`
- **Scopes**: `payments/coupons.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id
- `altType` [required] (string) - Alt Type | enum: `location`
- `limit` [optional] (number) - Maximum number of coupons to return
- `offset` [optional] (number) - Number of coupons to skip for pagination
- `status` [optional] (string) - Filter coupons by status | enum: `scheduled`, `active`, `expired`
- `search` [optional] (string) - Search term to filter coupons by name or code

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListCouponsResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
      - `traceId` [required] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Custom Field

#### GET `/locations/{locationId}/customFields`

- **Summary**: Get Custom Fields
- **Operation ID**: `get-custom-fields`
- **Scopes**: `locations/customFields.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `model` [optional] (string) - Model of the custom field you want to retrieve | enum: `contact`, `opportunity`, `all`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldsListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `customFields` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/locations/{locationId}/customFields`

- **Summary**: Create Custom Field
- **Operation ID**: `create-custom-field`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomFieldsDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `placeholder` [optional] (string)
    - `showInForms` [required] (boolean)
    - `options` [optional] (array)
    - `acceptedFormats` [optional] (string) enum: `.pdf`, `.docx`, `.doc`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.csv`, `.xlsx`, `.xls`, `all`
    - `dataType` [required] (string) enum: `TEXT`, `LARGE_TEXT`, `NUMERICAL`, `PHONE`, `MONETORY`, `CHECKBOX`, `SINGLE_OPTIONS`, `MULTIPLE_OPTIONS`, `DATE`, `TEXTBOX_LIST`, `FILE_UPLOAD`, `RADIO`, `EMAIL`
    - `fieldKey` [required] (string)
    - `objectKey` [required] (string)
    - `maxFileLimit` [optional] (number)
    - `allowCustomOption` [optional] (boolean)
    - `parentId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}/customFields/{id}`

- **Summary**: Delete Custom Field
- **Operation ID**: `delete-custom-field`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Field Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldDeleteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/customFields/{id}`

- **Summary**: Get Custom Field
- **Operation ID**: `get-custom-field`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id")

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/locations/{locationId}/customFields/{id}`

- **Summary**: Update Custom Field
- **Operation ID**: `update-custom-field`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Field Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomFieldsDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `placeholder` [optional] (string)
    - `showInForms` [required] (boolean)
    - `options` [optional] (array)
    - `acceptedFormats` [optional] (string) enum: `.pdf`, `.docx`, `.doc`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.csv`, `.xlsx`, `.xls`, `all`
    - `maxFileLimit` [optional] (number)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/locations/{locationId}/customFields/upload`

- **Summary**: Uploads File to customFields
- **Operation ID**: `upload-file-customFields`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `multipart/form-data`
  - Schema ref: `#/components/schemas/FileUploadBody`
  - Type: object
  - Properties:
    - `id` [optional] (string)
    - `maxFiles` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FileUploadResponseDto`
    - Type: object
    - Properties:
      - `uploadedFiles` [optional] (object)
      - `meta` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Custom Fields V2

#### POST `/custom-fields/`

- **Summary**: Create Custom Field
- **Operation ID**: `create-custom-field`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomFieldsDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `placeholder` [optional] (string)
    - `showInForms` [required] (boolean)
    - `options` [optional] (array)
    - `acceptedFormats` [optional] (string) enum: `.pdf`, `.docx`, `.doc`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.csv`, `.xlsx`, `.xls`, `all`
    - `dataType` [required] (string) enum: `TEXT`, `LARGE_TEXT`, `NUMERICAL`, `PHONE`, `MONETORY`, `CHECKBOX`, `SINGLE_OPTIONS`, `MULTIPLE_OPTIONS`, `DATE`, `TEXTBOX_LIST`, `FILE_UPLOAD`, `RADIO`, `EMAIL`
    - `fieldKey` [required] (string)
    - `objectKey` [required] (string)
    - `maxFileLimit` [optional] (number)
    - `allowCustomOption` [optional] (boolean)
    - `parentId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/custom-fields/{id}`

- **Summary**: Delete Custom Field By Id
- **Operation ID**: `delete-custom-field`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFolderDeleteResponseDto`
    - Type: object
    - Properties:
      - `succeded` [required] (boolean)
      - `id` [required] (string)
      - `key` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/custom-fields/{id}`

- **Summary**: Get Custom Field / Folder By Id
- **Operation ID**: `get-custom-field-by-id`
- **Scopes**: `locations/customFields.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/custom-fields/{id}`

- **Summary**: Update Custom Field By Id
- **Operation ID**: `update-custom-field`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomFieldsDTO`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `placeholder` [optional] (string)
    - `showInForms` [required] (boolean)
    - `options` [optional] (array)
    - `acceptedFormats` [optional] (string) enum: `.pdf`, `.docx`, `.doc`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.csv`, `.xlsx`, `.xls`, `all`
    - `maxFileLimit` [optional] (number)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `field` [optional] (object) ref: `#/components/schemas/ICustomField`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/custom-fields/folder`

- **Summary**: Create Custom Field Folder
- **Operation ID**: `create-custom-field-folder`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateFolder`
  - Type: object
  - Properties:
    - `objectKey` [required] (string)
    - `name` [required] (string)
    - `locationId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ICustomFieldFolder`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `objectKey` [required] (string)
      - `locationId` [required] (string)
      - `name` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/custom-fields/folder/{id}`

- **Summary**: Delete Custom Field Folder
- **Operation ID**: `delete-custom-field-folder`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- `locationId` [required] (string) - Location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFolderDeleteResponseDto`
    - Type: object
    - Properties:
      - `succeded` [required] (boolean)
      - `id` [required] (string)
      - `key` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/custom-fields/folder/{id}`

- **Summary**: Update Custom Field Folder Name
- **Operation ID**: `update-custom-field-folder`
- **Scopes**: `locations/customFields.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateFolder`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `locationId` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ICustomFieldFolder`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `objectKey` [required] (string)
      - `locationId` [required] (string)
      - `name` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/custom-fields/object-key/{objectKey}`

- **Summary**: Get Custom Fields By Object Key
- **Operation ID**: `get-custom-fields-by-object-key`
- **Scopes**: `locations/customFields.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `objectKey` [required] (string) - key of the Object. Must include "custom_objects." prefix for custom objects. Available on the Custom Objects details Page under settings

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomFieldsResponseDTO`
    - Type: object
    - Properties:
      - `fields` [optional] (array)
      - `folders` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Custom Menu Links

#### GET `/custom-menus/`

- **Summary**: Get Custom Menu Links
- **Operation ID**: `get-custom-menus`
- **Scopes**: `custom-menu-link.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [optional] (string) - Unique identifier of the location
- `skip` [optional] (number) - Number of items to skip for pagination
- `limit` [optional] (number) - Maximum number of items to return
- `query` [optional] (string) - Search query to filter custom menus by name, supports partial || full names
- `showOnCompany` [optional] (boolean) - Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved custom menus. Returns an array of custom menu objects, potentially including their structure, items, and relevant metadata.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCustomMenusResponseDTO`
    - Type: object
    - Properties:
      - `customMenus` [optional] (array)
      - `totalLinks` [optional] (number)
- **400**: Bad Request. Invalid query parameters provided.
  - No response body.
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden. The client does not have necessary permissions to access custom menus.
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/custom-menus/`

- **Summary**: Create Custom Menu Link
- **Operation ID**: `create-custom-menu`
- **Scopes**: `custom-menu-link.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomMenuDTO`
  - Type: object
  - Properties:
    - `title` [required] (string)
    - `url` [required] (string)
    - `icon` [required] (any)
    - `showOnCompany` [required] (boolean)
    - `showOnLocation` [required] (boolean)
    - `showToAllLocations` [required] (boolean)
    - `openMode` [required] (string) enum: `iframe`, `new_tab`, `current_tab`
    - `locations` [required] (array)
    - `userRole` [required] (string) enum: `all`, `admin`, `user`
    - `allowCamera` [optional] (boolean)
    - `allowMicrophone` [optional] (boolean)

**Response Schema**
- **201**: Custom menu successfully created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSingleCustomMenusSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `customMenu` [optional] (any)
- **400**: Bad Request - Invalid input
  - No response body.
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden - Insufficient permissions
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/custom-menus/{customMenuId}`

- **Summary**: Delete Custom Menu Link
- **Operation ID**: `delete-custom-menu`
- **Scopes**: `custom-menu-link.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `customMenuId` [required] (string) - ID of the custom menu to delete

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Custom menu successfully deleted
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteCustomMenuSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
      - `message` [optional] (string)
      - `deletedMenuId` [optional] (string)
      - `deletedAt` [optional] (string)
- **400**: Bad Request. Invalid parameters provided.
  - No response body.
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden. The client does not have necessary permissions to delete this custom menu.
  - No response body.
- **404**: Not Found. The specified custom menu does not exist or has already been deleted.
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/custom-menus/{customMenuId}`

- **Summary**: Get Custom Menu Link
- **Operation ID**: `get-custom-menu-by-id`
- **Scopes**: `custom-menu-link.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `customMenuId` [required] (string) - Unique identifier of the custom menu

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved custom menu. Returns a single custom menu object, potentially including its structure, items, and relevant metadata.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSingleCustomMenusSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `customMenu` [optional] (any)
- **400**: Bad Request. Invalid query parameters provided.
  - No response body.
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden. The client does not have necessary permissions to access custom menu.
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/custom-menus/{customMenuId}`

- **Summary**: Update Custom Menu Link
- **Operation ID**: `update-custom-menu`
- **Scopes**: `custom-menu-link.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `customMenuId` [required] (string) - ID of the custom menu to update

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomMenuDTO`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `url` [optional] (string)
    - `icon` [optional] (any)
    - `showOnCompany` [optional] (boolean)
    - `showOnLocation` [optional] (boolean)
    - `showToAllLocations` [optional] (boolean)
    - `openMode` [optional] (string) enum: `iframe`, `new_tab`, `current_tab`
    - `locations` [optional] (array)
    - `userRole` [optional] (string) enum: `all`, `admin`, `user`
    - `allowCamera` [optional] (boolean)
    - `allowMicrophone` [optional] (boolean)

**Response Schema**
- **200**: Custom menu successfully updated
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateCustomMenuLinkResponseDTO`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
      - `customMenu` [optional] (any)
- **400**: Bad Request - Invalid input
  - No response body.
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden - Insufficient permissions
  - No response body.
- **404**: Not Found - Custom menu or company not found
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Custom Provider

#### PUT `/payments/custom-provider/capabilities`

- **Summary**: Custom-provider marketplace app update capabilities
- **Operation ID**: `custom-provider-marketplace-app-update-capabilities`
- **Scopes**: `payments/custom-provider.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomProviderCapabilitiesDto`
  - Type: object
  - Properties:
    - `supportsSubscriptionSchedules` [required] (boolean)
    - `companyId` [optional] (string)
    - `locationId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateCustomProviderCapabilitiesResponseSchema`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/custom-provider/connect`

- **Summary**: Fetch given provider config
- **Operation ID**: `fetch-config`
- **Scopes**: `payments/custom-provider.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCustomProvidersResponseSchema`
    - Type: object
    - Properties:
      - `name` [required] (string)
      - `description` [required] (string)
      - `paymentsUrl` [required] (string)
      - `queryUrl` [required] (string)
      - `imageUrl` [required] (string)
      - `_id` [required] (string)
      - `locationId` [required] (string)
      - `marketplaceAppId` [required] (string)
      - `paymentProvider` [optional] (object)
      - `deleted` [required] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [optional] (string)
- **400**: No such config exists for given locationId and marketplaceAppId
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/custom-provider/connect`

- **Summary**: Create new provider config
- **Operation ID**: `create-config`
- **Scopes**: `payments/custom-provider.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location id

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ConnectCustomProvidersConfigDto`
  - Type: object
  - Properties:
    - `live` [required] (any)
    - `test` [required] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ConnectCustomProvidersResponseSchema`
    - Type: object
    - Properties:
      - `name` [required] (string)
      - `description` [required] (string)
      - `paymentsUrl` [required] (string)
      - `queryUrl` [required] (string)
      - `imageUrl` [required] (string)
      - `_id` [required] (string)
      - `locationId` [required] (string)
      - `marketplaceAppId` [required] (string)
      - `paymentProvider` [optional] (object)
      - `deleted` [required] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [optional] (string)
- **400**: No such config exists for given locationId and marketplaceAppId
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/custom-provider/disconnect`

- **Summary**: Disconnect existing provider config
- **Operation ID**: `disconnect-config`
- **Scopes**: `payments/custom-provider.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location id

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeleteCustomProvidersConfigDto`
  - Type: object
  - Properties:
    - `liveMode` [required] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DisconnectCustomProvidersResponseSchema`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: No such config exists for given locationId and marketplaceAppId
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/payments/custom-provider/provider`

- **Summary**: Deleting an existing integration
- **Operation ID**: `delete-integration`
- **Scopes**: `payments/custom-provider.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteCustomProvidersResponseSchema`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/custom-provider/provider`

- **Summary**: Create new integration
- **Operation ID**: `create-integration`
- **Scopes**: `payments/custom-provider.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location id

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomProvidersDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `description` [required] (string)
    - `paymentsUrl` [required] (string)
    - `queryUrl` [required] (string)
    - `imageUrl` [required] (string)
    - `supportsSubscriptionSchedule` [required] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateCustomProvidersResponseSchema`
    - Type: object
    - Properties:
      - `name` [required] (string)
      - `description` [required] (string)
      - `paymentsUrl` [required] (string)
      - `queryUrl` [required] (string)
      - `imageUrl` [required] (string)
      - `_id` [required] (string)
      - `locationId` [required] (string)
      - `marketplaceAppId` [required] (string)
      - `paymentProvider` [optional] (object)
      - `deleted` [required] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `traceId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Custom Value

#### GET `/locations/{locationId}/customValues`

- **Summary**: Get Custom Values
- **Operation ID**: `get-custom-values`
- **Scopes**: `locations/customValues.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomValuesListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `customValues` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/locations/{locationId}/customValues`

- **Summary**: Create Custom Value
- **Operation ID**: `create-custom-value`
- **Scopes**: `locations/customValues.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/customValuesDTO`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `value` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomValueIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `customValue` [optional] (object) ref: `#/components/schemas/CustomValueSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}/customValues/{id}`

- **Summary**: Delete Custom Value
- **Operation ID**: `delete-custom-value`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Value Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomValueDeleteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/customValues/{id}`

- **Summary**: Get Custom Value
- **Operation ID**: `get-custom-value`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Value Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomValueIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `customValue` [optional] (object) ref: `#/components/schemas/CustomValueSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/locations/{locationId}/customValues/{id}`

- **Summary**: Update Custom Value
- **Operation ID**: `update-custom-value`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Custom Value Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/customValuesDTO`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `value` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomValueIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `customValue` [optional] (object) ref: `#/components/schemas/CustomValueSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Dashboard

#### GET `/voice-ai/dashboard/call-logs`

- **Summary**: List Call Logs
- **Operation ID**: `get-call-logs`
- **Scopes**: `voice-ai-dashboard.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location identifier. Filters results to this location.
- `agentId` [optional] (string) - Agent identifier. When provided, returns logs for this agent only.
- `contactId` [optional] (string) - Contact IDs (comma-separated) to filter by.
- `callType` [optional] (string) - Call type filter. | enum: `LIVE`, `TRIAL`
- `startDate` [optional] (number) - Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be provided together.
- `endDate` [optional] (number) - End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be provided together.
- `actionType` [optional] (string) - Action type filter for call logs (comma-separated ACTION_TYPE values) | enum: `CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`, `KNOWLEDGE_BASE`
- `sortBy` [optional] (string) - Field to sort by. Defaults to newest if omitted. | enum: `duration`, `createdAt`
- `sort` [optional] (string) - Sort direction. Applies only when sortBy is provided. | enum: `ascend`, `descend`
- `page` [optional] (number) - Page number (1-based).
- `pageSize` [optional] (number) - Page size (max 50).

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved call logs
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CallLogsResponseDTO`
    - Type: object
    - Properties:
      - `total` [required] (number)
      - `page` [required] (number)
      - `pageSize` [required] (number)
      - `callLogs` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/voice-ai/dashboard/call-logs/{callId}`

- **Summary**: Get Call Log
- **Operation ID**: `getCallLog`
- **Scopes**: `voice-ai-dashboard.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `callId` [required] (string) - Call ID

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved call log
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CallLogDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `contactId` [optional] (string)
      - `agentId` [required] (string)
      - `isAgentDeleted` [required] (boolean)
      - `fromNumber` [optional] (string)
      - `createdAt` [required] (string)
      - `duration` [required] (number)
      - `trialCall` [required] (boolean)
      - `executedCallActions` [required] (array)
      - `summary` [required] (string)
      - `transcript` [required] (string)
      - `translation` [optional] (any)
      - `extractedData` [optional] (any)
      - `messageId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Documents

#### GET `/proposals/document`

- **Summary**: List documents
- **Operation ID**: `list-documents-contracts`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `status` [optional] (string) - Document status, pass as comma separated values | enum: `draft`, `sent`, `viewed`, `completed`, `accepted`
- `paymentStatus` [optional] (string) - Payment status, pass as comma separated values | enum: `waiting_for_payment`, `paid`, `no_payment`
- `limit` [optional] (number) - Limit to fetch number of records
- `skip` [optional] (number) - Skip number of records
- `query` [optional] (string) - Search string
- `dateFrom` [optional] (string) - Date start from (ISO 8601), dateFrom & DateTo must be provided together
- `dateTo` [optional] (string) - Date to (ISO 8601), dateFrom & DateTo must be provided together

**Request Body**
- None

**Response Schema**
- **200**: Document fetched successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DocumentListResponseDto`
    - Type: object
    - Properties:
      - `documents` [required] (array)
      - `total` [required] (number)
      - `whiteLabelBaseUrl` [optional] (number)
      - `whiteLabelBaseUrlForInvoice` [optional] (number)
- **400**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/proposals/document/send`

- **Summary**: Send document
- **Operation ID**: `send-documents-contracts`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SendDocumentDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `documentId` [required] (string)
    - `documentName` [optional] (string)
    - `medium` [optional] (string) enum: `link`, `email`
    - `ccRecipients` [optional] (array)
    - `notificationSettings` [optional] (any)
    - `sentBy` [required] (string)

**Response Schema**
- **200**: Document sent successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendDocumentResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `links` [required] (array)
- **400**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


### Email

#### DELETE `/conversations/messages/email/{emailMessageId}/schedule`

- **Summary**: Cancel a scheduled email message.
- **Operation ID**: `cancel-scheduled-email-message`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- `emailMessageId` [required] (string) - Email Message Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: The scheduled email message was cancelled successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CancelScheduledResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (number)
      - `message` [required] (string)


#### GET `/conversations/messages/email/{id}`

- **Summary**: Get email by Id
- **Operation ID**: `get-email-by-id`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Email object for the id given.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetEmailMessageResponseDto`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `altId` [optional] (string)
      - `threadId` [required] (string)
      - `locationId` [required] (string)
      - `contactId` [required] (string)
      - `conversationId` [required] (string)
      - `dateAdded` [required] (string)
      - `subject` [optional] (string)
      - `body` [required] (string)
      - `direction` [required] (string) enum: `inbound`, `outbound`
      - `status` [optional] (string) enum: `pending`, `scheduled`, `sent`, `delivered`, `read`, `undelivered`, `connected`, `failed`, `opened`
      - `contentType` [required] (string)
      - `attachments` [optional] (array)
      - `provider` [optional] (string)
      - `from` [required] (string)
      - `to` [required] (array)
      - `cc` [optional] (array)
      - `bcc` [optional] (array)
      - `replyToMessageId` [optional] (string)
      - `source` [optional] (string) enum: `workflow`, `bulk_actions`, `campaign`, `api`, `app`
      - ... 1 more properties


### Email Verification

#### POST `/email/verify`

- **Summary**: Email Verification
- **Operation ID**: `verify-email`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/VerificationBodyDto`
  - Type: object
  - Properties:
    - `type` [required] (string) enum: `email`, `contact`
    - `verify` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Composition: `oneOf`
      - `#/components/schemas/EmailVerifiedResponseDto`
      - `#/components/schemas/EmailNotVerifiedResponseDto`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Estimate

#### POST `/invoices/estimate`

- **Summary**: Create New Estimate
- **Operation ID**: `create-new-estimate`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateEstimatesDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `liveMode` [optional] (boolean)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `contactDetails` [required] (any)
    - `estimateNumber` [optional] (number)
    - `issueDate` [optional] (string)
    - `expiryDate` [optional] (string)
    - `sentTo` [optional] (any)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `meta` [optional] (object)
    - `sendEstimateDetails` [optional] (any)
    - `frequencySettings` [required] (any)
    - `estimateNumberPrefix` [optional] (string)
    - ... 5 more properties

**Response Schema**
- **201**: Created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateResponseDto`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
      - ... 14 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/invoices/estimate/{estimateId}`

- **Summary**: Delete Estimate
- **Operation ID**: `delete-estimate`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `estimateId` [required] (string) - Estimate Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AltDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`

**Response Schema**
- **200**: Successfully Deleted
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateResponseDto`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
      - ... 14 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/invoices/estimate/{estimateId}`

- **Summary**: Update Estimate
- **Operation ID**: `update-estimate`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `estimateId` [required] (string) - Estimate Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateEstimateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `liveMode` [optional] (boolean)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `contactDetails` [required] (any)
    - `estimateNumber` [optional] (number)
    - `issueDate` [optional] (string)
    - `expiryDate` [optional] (string)
    - `sentTo` [optional] (any)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `meta` [optional] (object)
    - `sendEstimateDetails` [optional] (any)
    - `frequencySettings` [required] (any)
    - `estimateNumberPrefix` [optional] (string)
    - ... 6 more properties

**Response Schema**
- **200**: Successfully updated
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateResponseDto`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
      - ... 14 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/estimate/{estimateId}/invoice`

- **Summary**: Create Invoice from Estimate
- **Operation ID**: `create-invoice-from-estimate`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `estimateId` [required] (string) - Estimate Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateInvoiceFromEstimateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `markAsInvoiced` [required] (boolean)
    - `version` [optional] (string) enum: `v1`, `v2`

**Response Schema**
- **200**: Successfully Created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateInvoiceFromEstimateResponseDTO`
    - Type: object
    - Properties:
      - `estimate` [required] (any)
      - `invoice` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/estimate/{estimateId}/send`

- **Summary**: Send Estimate
- **Operation ID**: `send-estimate`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `estimateId` [required] (string) - Estimate Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SendEstimateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `action` [required] (string) enum: `sms_and_email`, `send_manually`, `email`, `sms`
    - `liveMode` [required] (boolean)
    - `userId` [required] (string)
    - `sentFrom` [optional] (any)
    - `estimateName` [optional] (string)

**Response Schema**
- **201**: Created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateResponseDto`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
      - ... 14 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/estimate/list`

- **Summary**: List Estimates
- **Operation ID**: `list-estimates`
- **Scopes**: `invoices/estimate.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `startAt` [optional] (string) - startAt in YYYY-MM-DD format
- `endAt` [optional] (string) - endAt in YYYY-MM-DD format
- `search` [optional] (string) - search text for estimates name
- `status` [optional] (string) - estimate status | enum: `all`, `draft`, `sent`, `accepted`, `declined`, `invoiced`, `viewed`
- `contactId` [optional] (string) - Contact ID for the estimate
- `limit` [required] (string) - Limit the number of items to return
- `offset` [required] (string) - Number of items to skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListEstimatesResponseDTO`
    - Type: object
    - Properties:
      - `estimates` [required] (array)
      - `total` [required] (number)
      - `traceId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/estimate/number/generate`

- **Summary**: Generate Estimate Number
- **Operation ID**: `generate-estimate-number`
- **Scopes**: `invoices/estimate.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GenerateEstimateNumberResponse`
    - Type: object
    - Properties:
      - `estimateNumber` [required] (number)
      - `traceId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/invoices/estimate/stats/last-visited-at`

- **Summary**: Update estimate last visited at
- **Operation ID**: `update-estimate-last-visited-at`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/EstimateIdParam`
  - Type: object
  - Properties:
    - `estimateId` [required] (string)

**Response Schema**
- **200**: No description
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/invoices/estimate/template`

- **Summary**: List Estimate Templates
- **Operation ID**: `list-estimate-templates`
- **Scopes**: `invoices/estimate.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `search` [optional] (string) - To search for an estimate template by id / name
- `limit` [required] (string) - Limit the number of items to return
- `offset` [required] (string) - Number of items to skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListEstimateTemplateResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
      - `traceId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/estimate/template`

- **Summary**: Create Estimate Template
- **Operation ID**: `create-estimate-template`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/EstimateTemplatesDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `liveMode` [optional] (boolean)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `meta` [optional] (object)
    - `sendEstimateDetails` [optional] (any)
    - `estimateNumberPrefix` [optional] (string)
    - `attachments` [optional] (array)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **201**: Successfully created
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateTemplateResponseDTO`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/invoices/estimate/template/{templateId}`

- **Summary**: Delete Estimate Template
- **Operation ID**: `delete-estimate-template`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AltDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`

**Response Schema**
- **200**: Successfully deleted
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateTemplateResponseDTO`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/invoices/estimate/template/{templateId}`

- **Summary**: Update Estimate Template
- **Operation ID**: `update-estimate-template`
- **Scopes**: `invoices/estimate.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/EstimateTemplatesDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `liveMode` [optional] (boolean)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `meta` [optional] (object)
    - `sendEstimateDetails` [optional] (any)
    - `estimateNumberPrefix` [optional] (string)
    - `attachments` [optional] (array)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **200**: Successfully updated
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateTemplateResponseDTO`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/estimate/template/preview`

- **Summary**: Preview Estimate Template
- **Operation ID**: `preview-estimate-template`
- **Scopes**: `invoices/estimate.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `templateId` [required] (string) - Template Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EstimateTemplateResponseDTO`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `_id` [required] (string)
      - `liveMode` [required] (boolean)
      - `deleted` [required] (boolean)
      - `name` [required] (string)
      - `currency` [required] (string)
      - `businessDetails` [required] (any)
      - `items` [required] (array)
      - `discount` [required] (any)
      - `title` [optional] (string)
      - `estimateNumberPrefix` [optional] (string)
      - `attachments` [optional] (array)
      - `updatedBy` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `__v` [required] (number)
      - `automaticTaxesEnabled` [required] (boolean)
      - `termsNotes` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Followers

#### DELETE `/contacts/{contactId}/followers`

- **Summary**: Remove Followers
- **Operation ID**: `remove-followers-contact`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/FollowersDTO`
  - Type: object
  - Properties:
    - `followers` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteFollowersSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `followers` [optional] (array)
      - `followersRemoved` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/followers`

- **Summary**: Add Followers
- **Operation ID**: `add-followers-contact`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/FollowersDTO`
  - Type: object
  - Properties:
    - `followers` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateAddFollowersSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `followers` [optional] (array)
      - `followersAdded` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/opportunities/{id}/followers`

- **Summary**: Remove Followers
- **Operation ID**: `remove-followers-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/FollowersDTO`
  - Type: object
  - Properties:
    - `followers` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteFollowersSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `followers` [optional] (array)
      - `followersRemoved` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/opportunities/{id}/followers`

- **Summary**: Add Followers
- **Operation ID**: `add-followers-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/FollowersDTO`
  - Type: object
  - Properties:
    - `followers` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateAddFollowersSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `followers` [optional] (array)
      - `followersAdded` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Forms

#### GET `/forms/`

- **Summary**: Get Forms
- **Operation ID**: `get-forms`
- **Scopes**: `forms.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `skip` [optional] (number)
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 50 and default will be 10
- `type` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FormsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `forms` [optional] (array)
      - `total` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/forms/submissions`

- **Summary**: Get Forms Submissions
- **Operation ID**: `get-forms-submissions`
- **Scopes**: `forms.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `page` [optional] (number) - Page No. By default it will be 1
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `formId` [optional] (string) - Filter submission by form id
- `q` [optional] (string) - Filter by contactId, name, email or phone no.
- `startAt` [optional] (string) - Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
- `endAt` [optional] (string) - Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FormsSubmissionsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `submissions` [optional] (array)
      - `meta` [optional] (object) ref: `#/components/schemas/metaSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/forms/upload-custom-files`

- **Summary**: Upload files to custom fields
- **Operation ID**: `upload-to-custom-fields`
- **Scopes**: `forms.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `contactId` [required] (string) - Contact ID to upload the file to.
- `locationId` [required] (string) - Location ID of the contact.

**Request Body**
- Body is **required**.
- Content-Type: `multipart/form-data`
  - Schema: not specified

**Response Schema**
- **200**: Successful response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Funnel

#### GET `/funnels/funnel/list`

- **Summary**: Fetch List of Funnels
- **Operation ID**: `getFunnels`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `type` [optional] (string)
- `category` [optional] (string)
- `offset` [optional] (string)
- `limit` [optional] (string)
- `parentId` [optional] (string)
- `name` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response - List of funnels returned
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FunnelListResponseDTO`
    - Type: object
    - Properties:
      - `funnels` [required] (object)
      - `count` [required] (number)
      - `traceId` [required] (string)


#### GET `/funnels/page`

- **Summary**: Fetch list of funnel pages
- **Operation ID**: `getPagesByFunnelId`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `funnelId` [required] (string)
- `name` [optional] (string)
- `limit` [required] (number)
- `offset` [required] (number)

**Request Body**
- None

**Response Schema**
- **200**: Successful response - List of funnel pages returned
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FunnelPageResponseDTO`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `locationId` [required] (string)
      - `funnelId` [required] (string)
      - `name` [required] (string)
      - `stepId` [required] (string)
      - `deleted` [required] (string)
      - `updatedAt` [required] (string)


#### GET `/funnels/page/count`

- **Summary**: Fetch count of funnel pages
- **Operation ID**: `getPagesCountByFunnelId`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `funnelId` [required] (string)
- `name` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response - Count of funnel pages returned
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FunnelPageCountResponseDTO`
    - Type: object
    - Properties:
      - `count` [required] (number)


### Integrations

#### GET `/payments/integrations/provider/whitelabel`

- **Summary**: List White-label Integration Providers
- **Operation ID**: `list-integration-providers`
- **Scopes**: `payments/integration.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListWhitelabelIntegrationProviderResponseDto`
    - Type: object
    - Properties:
      - `providers` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/integrations/provider/whitelabel`

- **Summary**: Create White-label Integration Provider
- **Operation ID**: `create-integration provider`
- **Scopes**: `payments/integration.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateWhiteLabelIntegrationProviderDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `uniqueName` [required] (string)
    - `title` [required] (string)
    - `provider` [required] (string) enum: `authorize-net`, `nmi`
    - `description` [required] (string)
    - `imageUrl` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateWhitelabelIntegrationResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string)
      - `title` [required] (string)
      - `route` [required] (string)
      - `provider` [required] (string)
      - `description` [required] (string)
      - `imageUrl` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Invoice

#### GET `/invoices/`

- **Summary**: List invoices
- **Operation ID**: `list-invoices`
- **Scopes**: `invoices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`
- `status` [optional] (string) - status to be filtered
- `startAt` [optional] (string) - startAt in YYYY-MM-DD format
- `endAt` [optional] (string) - endAt in YYYY-MM-DD format
- `search` [optional] (string) - To search for an invoice by id / name / email / phoneNo
- `paymentMode` [optional] (string) - payment mode | enum: `default`, `live`, `test`
- `contactId` [optional] (string) - Contact ID for the invoice
- `limit` [required] (string) - Limit the number of items to return
- `offset` [required] (string) - Number of items to skip
- `sortField` [optional] (string) - The field on which sorting should be applied | enum: `issueDate`
- `sortOrder` [optional] (string) - The order of sort which should be applied for the sortField | enum: `ascend`, `descend`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListInvoicesResponseDto`
    - Type: object
    - Properties:
      - `invoices` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/`

- **Summary**: Create Invoice
- **Operation ID**: `create-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateInvoiceDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `contactDetails` [required] (any)
    - `invoiceNumber` [optional] (string)
    - `issueDate` [required] (string)
    - `dueDate` [optional] (string)
    - `sentTo` [required] (object) ref: `#/components/schemas/SentToDto`
    - `liveMode` [required] (boolean)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `paymentSchedule` [optional] (any)
    - `lateFeesConfiguration` [optional] (any)
    - `tipsConfiguration` [optional] (any)
    - `invoiceNumberPrefix` [optional] (string)
    - ... 3 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 3 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/invoices/{invoiceId}`

- **Summary**: Delete invoice
- **Operation ID**: `delete-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 3 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema: not specified
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/{invoiceId}`

- **Summary**: Get invoice
- **Operation ID**: `get-invoice`
- **Scopes**: `invoices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 5 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/invoices/{invoiceId}`

- **Summary**: Update invoice
- **Operation ID**: `update-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInvoiceDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `title` [optional] (string)
    - `currency` [required] (string)
    - `description` [optional] (string)
    - `businessDetails` [optional] (any)
    - `invoiceNumber` [optional] (string)
    - `contactId` [optional] (string)
    - `contactDetails` [optional] (object) ref: `#/components/schemas/ContactDetailsDto`
    - `termsNotes` [optional] (string)
    - `discount` [optional] (object) ref: `#/components/schemas/DiscountDto`
    - `invoiceItems` [required] (array)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `liveMode` [optional] (boolean)
    - `issueDate` [required] (string)
    - `dueDate` [required] (string)
    - `paymentSchedule` [optional] (any)
    - `tipsConfiguration` [optional] (any)
    - `xeroDetails` [optional] (object)
    - ... 4 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 3 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/invoices/{invoiceId}/late-fees-configuration`

- **Summary**: Update invoice late fees configuration
- **Operation ID**: `update-invoice-late-fees-configuration`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInvoiceLateFeesConfigurationDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `lateFeesConfiguration` [required] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 3 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/{invoiceId}/record-payment`

- **Summary**: Record a manual payment for an invoice
- **Operation ID**: `record-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/RecordPaymentDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `mode` [required] (string) enum: `cash`, `card`, `cheque`, `bank_transfer`, `other`
    - `card` [required] (object) ref: `#/components/schemas/CardDto`
    - `cheque` [required] (object) ref: `#/components/schemas/ChequeDto`
    - `notes` [required] (string)
    - `amount` [optional] (number)
    - `meta` [optional] (object)
    - `paymentScheduleIds` [optional] (array)
    - `fulfilledAt` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecordPaymentResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `invoice` [required] (object) ref: `#/components/schemas/DefaultInvoiceResponseDto`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/{invoiceId}/send`

- **Summary**: Send invoice
- **Operation ID**: `send-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SendInvoiceDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `userId` [required] (string)
    - `action` [required] (string) enum: `sms_and_email`, `send_manually`, `email`, `sms`
    - `liveMode` [required] (boolean)
    - `sentFrom` [optional] (any)
    - `autoPayment` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendInvoicesResponseDto`
    - Type: object
    - Properties:
      - `invoice` [required] (object) ref: `#/components/schemas/DefaultInvoiceResponseDto`
      - `smsData` [required] (object)
      - `emailData` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/{invoiceId}/void`

- **Summary**: Void invoice
- **Operation ID**: `void-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `invoiceId` [required] (string) - Invoice Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/VoidInvoiceDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/VoidInvoiceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (string) enum: `draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`
      - `liveMode` [required] (boolean)
      - `amountPaid` [required] (number)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (object)
      - `invoiceNumber` [required] (number)
      - `currency` [required] (string)
      - `contactDetails` [required] (object)
      - `issueDate` [required] (string)
      - `dueDate` [required] (string)
      - `discount` [optional] (object)
      - `invoiceItems` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `amountDue` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - ... 3 more properties
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema: not specified
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/generate-invoice-number`

- **Summary**: Generate Invoice Number
- **Operation ID**: `generate-invoice-number`
- **Scopes**: `invoices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GenerateInvoiceNumberResponseDto`
    - Type: object
    - Properties:
      - `invoiceNumber` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/invoices/stats/last-visited-at`

- **Summary**: Update invoice last visited at
- **Operation ID**: `update-invoice-last-visited-at`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PatchInvoiceStatsLastViewedDto`
  - Type: object
  - Properties:
    - `invoiceId` [required] (string)

**Response Schema**
- **200**: No description
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Medias

#### DELETE `/medias/{id}`

- **Summary**: Delete File or Folder
- **Operation ID**: `delete-media-content`
- **Scopes**: `medias.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- `altType` [required] (string) - AltType | enum: `location`
- `altId` [required] (string) - location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - No response body.


#### POST `/medias/{id}`

- **Summary**: Update File/ Folder
- **Operation ID**: `update-media-object`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Unique identifier of the file or folder to update

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateObject`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `altId` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Type: object


#### PUT `/medias/delete-files`

- **Summary**: Bulk Delete / Trash Files or Folders
- **Operation ID**: `bulk-delete-media-objects`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeleteMediaObjectsBodyParams`
  - Type: object
  - Properties:
    - `filesToBeDeleted` [required] (array)
    - `altType` [required] (string) enum: `location`
    - `altId` [required] (string)
    - `status` [required] (string) enum: `deleted`, `trashed`

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Type: object


#### GET `/medias/files`

- **Summary**: Get List of Files/ Folders
- **Operation ID**: `fetch-media-content`
- **Scopes**: `medias.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `offset` [optional] (string) - Number of files to skip in listing
- `limit` [optional] (string) - Number of files to show in the listing
- `sortBy` [required] (string) - Field to sorting the file listing by
- `sortOrder` [required] (string) - Direction in which file needs to be sorted
- `type` [required] (string) - Type
- `query` [optional] (string) - Query text
- `altType` [required] (string) - AltType | enum: `location`
- `altId` [required] (string) - location Id
- `parentId` [optional] (string) - parent id or folder id
- `fetchAll` [optional] (string) - Fetch all files or folders

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetFilesResponseDTO`
    - Type: object
    - Properties:
      - `files` [required] (array)


#### POST `/medias/folder`

- **Summary**: Create Folder
- **Operation ID**: `create-media-folder`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateFolderParams`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `parentId` [optional] (string)

**Response Schema**
- **200**: Returns the newly created folder object
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FolderDTO`
    - Type: object
    - Properties:
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `parentId` [optional] (string)
      - `type` [required] (string)
      - `deleted` [optional] (boolean)
      - `pendingUpload` [optional] (boolean)
      - `category` [optional] (string)
      - `subCategory` [optional] (string)
      - `isPrivate` [optional] (boolean)
      - `relocatedFolder` [optional] (boolean)
      - `migrationCompleted` [optional] (boolean)
      - `appFolder` [optional] (boolean)
      - `isEssential` [optional] (boolean)
      - `status` [optional] (string)
      - `lastUpdatedBy` [optional] (string)


#### PUT `/medias/update-files`

- **Summary**: Bulk Update Files/ Folders
- **Operation ID**: `bulk-update-media-objects`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateMediaObjects`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `filesToBeUpdated` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Type: object


#### POST `/medias/upload-file`

- **Summary**: Upload File into Media Library
- **Operation ID**: `upload-media-content`
- **Scopes**: `medias.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `multipart/form-data`
  - Type: object
  - Properties:
    - `file` [optional] (string)
    - `hosted` [optional] (boolean)
    - `fileUrl` [optional] (string)
    - `name` [optional] (string)
    - `parentId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UploadFileResponseDTO`
    - Type: object
    - Properties:
      - `fileId` [required] (string)
      - `url` [required] (string)


### Messages

#### GET `/conversations/{conversationId}/messages`

- **Summary**: Get messages by conversation id
- **Operation ID**: `get-messages`
- **Scopes**: `conversations/message.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `conversationId` [required] (string) - Conversation ID as string

**Query Parameters**
- `lastMessageId` [optional] (string) - Message ID of the last message in the list as a string
- `limit` [optional] (number) - Number of messages to be fetched from the conversation. Default limit is 20
- `type` [optional] (string) - Types of message to fetched separated with comma | enum: `TYPE_CALL`, `TYPE_SMS`, `TYPE_EMAIL`, `TYPE_FACEBOOK`, `TYPE_GMB`, `TYPE_INSTAGRAM`, `TYPE_WHATSAPP`, `TYPE_ACTIVITY_APPOINTMENT`, `TYPE_ACTIVITY_CONTACT`, `TYPE_ACTIVITY_INVOICE`, `TYPE_ACTIVITY_PAYMENT`, `TYPE_ACTIVITY_OPPORTUNITY`, `TYPE_LIVE_CHAT`, `TYPE_INTERNAL_COMMENTS`, `TYPE_ACTIVITY_EMPLOYEE_ACTION_LOG`

**Request Body**
- None

**Response Schema**
- **200**: List of messages for the conversation id of the given type.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetMessagesByConversationResponseDto`
    - Type: object
    - Properties:
      - `messages` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/locations/{locationId}/messages/{messageId}/transcription`

- **Summary**: Get transcription by Message ID
- **Operation ID**: `get-message-transcription`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID as string
- `messageId` [required] (string) - Message ID as string

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Gives the attached recording transcription to the message
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetMessageTranscriptionResponseDto`
    - Type: object
    - Properties:
      - `mediaChannel` [required] (number)
      - `sentenceIndex` [required] (number)
      - `startTime` [required] (number)
      - `endTime` [required] (number)
      - `transcript` [required] (string)
      - `confidence` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/locations/{locationId}/messages/{messageId}/transcription/download`

- **Summary**: Download transcription by Message ID
- **Operation ID**: `download-message-transcription`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID as string
- `messageId` [required] (string) - Message ID as string

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Downloads the attached transcription of the message
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/conversations/messages`

- **Summary**: Send a new message
- **Operation ID**: `send-a-new-message`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SendMessageBodyDto`
  - Type: object
  - Properties:
    - `type` [required] (string) enum: `SMS`, `Email`, `WhatsApp`, `IG`, `FB`, `Custom`, `Live_Chat`
    - `contactId` [required] (string)
    - `appointmentId` [optional] (string)
    - `attachments` [optional] (array)
    - `emailFrom` [optional] (string)
    - `emailCc` [optional] (array)
    - `emailBcc` [optional] (array)
    - `html` [optional] (string)
    - `message` [optional] (string)
    - `subject` [optional] (string)
    - `replyMessageId` [optional] (string)
    - `templateId` [optional] (string)
    - `threadId` [optional] (string)
    - `scheduledTimestamp` [optional] (number)
    - `conversationProviderId` [optional] (string)
    - `emailTo` [optional] (string)
    - `emailReplyMode` [optional] (string) enum: `reply`, `reply_all`
    - `fromNumber` [optional] (string)
    - `toNumber` [optional] (string)

**Response Schema**
- **200**: Created the message
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendMessageResponseDto`
    - Type: object
    - Properties:
      - `conversationId` [required] (string)
      - `emailMessageId` [optional] (string)
      - `messageId` [required] (string)
      - `messageIds` [optional] (array)
      - `msg` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/messages/{id}`

- **Summary**: Get message by message id
- **Operation ID**: `get-message`
- **Scopes**: `conversations/message.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Message object for the id given.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetMessageResponseDto`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `altId` [optional] (string)
      - `type` [required] (number)
      - `messageType` [required] (string) enum: `TYPE_CALL`, `TYPE_SMS`, `TYPE_EMAIL`, `TYPE_SMS_REVIEW_REQUEST`, `TYPE_WEBCHAT`, `TYPE_SMS_NO_SHOW_REQUEST`, `TYPE_CAMPAIGN_SMS`, `TYPE_CAMPAIGN_CALL`, `TYPE_CAMPAIGN_EMAIL`, `TYPE_CAMPAIGN_VOICEMAIL`, `TYPE_FACEBOOK`, `TYPE_CAMPAIGN_FACEBOOK`, `TYPE_CAMPAIGN_MANUAL_CALL`, `TYPE_CAMPAIGN_MANUAL_SMS`, `TYPE_GMB`, `TYPE_CAMPAIGN_GMB`, `TYPE_REVIEW`, `TYPE_INSTAGRAM`, `TYPE_WHATSAPP`, `TYPE_CUSTOM_SMS`, `TYPE_CUSTOM_EMAIL`, `TYPE_CUSTOM_PROVIDER_SMS`, `TYPE_CUSTOM_PROVIDER_EMAIL`, `TYPE_IVR_CALL`, `TYPE_ACTIVITY_CONTACT`, `TYPE_ACTIVITY_INVOICE`, `TYPE_ACTIVITY_PAYMENT`, `TYPE_ACTIVITY_OPPORTUNITY`, `TYPE_LIVE_CHAT`, `TYPE_LIVE_CHAT_INFO_MESSAGE`, `TYPE_ACTIVITY_APPOINTMENT`, `TYPE_FACEBOOK_COMMENT`, `TYPE_INSTAGRAM_COMMENT`, `TYPE_CUSTOM_CALL`, `TYPE_INTERNAL_COMMENT`, `TYPE_ACTIVITY_EMPLOYEE_ACTION_LOG`
      - `locationId` [required] (string)
      - `contactId` [required] (string)
      - `conversationId` [required] (string)
      - `dateAdded` [required] (string)
      - `body` [optional] (string)
      - `direction` [required] (string) enum: `inbound`, `outbound`
      - `status` [optional] (string) enum: `connected`, `delivered`, `failed`, `opened`, `pending`, `read`, `scheduled`, `sent`, `undelivered`, `clicked`, `opt_out`
      - `contentType` [required] (string)
      - `attachments` [optional] (array)
      - `meta` [optional] (object) ref: `#/components/schemas/MessageMeta`
      - `source` [optional] (string) enum: `workflow`, `bulk_actions`, `campaign`, `api`, `app`
      - `userId` [optional] (string)
      - `conversationProviderId` [optional] (string)
      - `chatWidgetId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/messages/{messageId}/locations/{locationId}/recording`

- **Summary**: Get Recording by Message ID
- **Operation ID**: `get-message-recording`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID as string
- `messageId` [required] (string) - Message ID as string

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Gives the attached recording to the message
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/conversations/messages/{messageId}/schedule`

- **Summary**: Cancel a scheduled message.
- **Operation ID**: `cancel-scheduled-message`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `messageId` [required] (string) - Message Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: The scheduled message was cancelled successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CancelScheduledResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (number)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/conversations/messages/{messageId}/status`

- **Summary**: Update message status
- **Operation ID**: `update-message-status`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `messageId` [required] (string) - Message Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateMessageStatusDto`
  - Type: object
  - Properties:
    - `status` [required] (string) enum: `delivered`, `failed`, `pending`, `read`
    - `error` [optional] (any)
    - `emailMessageId` [optional] (string)
    - `recipients` [optional] (array)

**Response Schema**
- **200**: Created the message
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendMessageResponseDto`
    - Type: object
    - Properties:
      - `conversationId` [required] (string)
      - `emailMessageId` [optional] (string)
      - `messageId` [required] (string)
      - `messageIds` [optional] (array)
      - `msg` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **403**: Forbidden
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ForbiddenDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/conversations/messages/inbound`

- **Summary**: Add an inbound message
- **Operation ID**: `add-an-inbound-message`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ProcessMessageBodyDto`
  - Type: object
  - Properties:
    - `type` [required] (string) enum: `SMS`, `Email`, `WhatsApp`, `GMB`, `IG`, `FB`, `Custom`, `WebChat`, `Live_Chat`, `Call`
    - `attachments` [optional] (array)
    - `message` [optional] (string)
    - `conversationId` [required] (string)
    - `conversationProviderId` [required] (string)
    - `html` [optional] (string)
    - `subject` [optional] (string)
    - `emailFrom` [optional] (string)
    - `emailTo` [optional] (string)
    - `emailCc` [optional] (array)
    - `emailBcc` [optional] (array)
    - `emailMessageId` [optional] (string)
    - `altId` [optional] (string)
    - `direction` [optional] (object)
    - `date` [optional] (string)
    - `call` [optional] (any)

**Response Schema**
- **200**: Created the message
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ProcessMessageResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `conversationId` [required] (string)
      - `messageId` [required] (string)
      - `message` [required] (string)
      - `contactId` [optional] (string)
      - `dateAdded` [optional] (string)
      - `emailMessageId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/conversations/messages/outbound`

- **Summary**: Add an external outbound call
- **Operation ID**: `add-an-outbound-message`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ProcessOutboundMessageBodyDto`
  - Type: object
  - Properties:
    - `type` [required] (string) enum: `Call`
    - `attachments` [optional] (array)
    - `conversationId` [required] (string)
    - `conversationProviderId` [required] (string)
    - `altId` [optional] (string)
    - `date` [optional] (string)
    - `call` [optional] (any)

**Response Schema**
- **200**: Created the message
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ProcessMessageResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `conversationId` [required] (string)
      - `messageId` [required] (string)
      - `message` [required] (string)
      - `contactId` [optional] (string)
      - `dateAdded` [optional] (string)
      - `emailMessageId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/conversations/messages/upload`

- **Summary**: Upload file attachments
- **Operation ID**: `upload-file-attachments`
- **Scopes**: `conversations/message.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `multipart/form-data`
  - Schema ref: `#/components/schemas/UploadFilesDto`
  - Type: object
  - Properties:
    - `conversationId` [required] (string)
    - `locationId` [required] (string)
    - `attachmentUrls` [required] (array)

**Response Schema**
- **200**: Uploaded the file successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UploadFilesResponseDto`
    - Type: object
    - Properties:
      - `uploadedFiles` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **413**: Payload Too Large
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UploadFilesErrorResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (number) enum: `400`, `413`, `415`
      - `message` [required] (string)
- **415**: Unsupported Media Type
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UploadFilesErrorResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (number) enum: `400`, `413`, `415`
      - `message` [required] (string)


### Notes

#### GET `/contacts/{contactId}/notes`

- **Summary**: Get All Notes
- **Operation ID**: `get-all-notes`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetNotesListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `notes` [optional] (array)
      - `hasMore` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/notes`

- **Summary**: Create Note
- **Operation ID**: `create-note`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/NotesDTO`
  - Type: object
  - Properties:
    - `userId` [optional] (string)
    - `body` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCreateUpdateNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `note` [optional] (object) ref: `#/components/schemas/GetNoteSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/contacts/{contactId}/notes/{id}`

- **Summary**: Delete Note
- **Operation ID**: `delete-note`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `id` [required] (string) - Note Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/contacts/{contactId}/notes/{id}`

- **Summary**: Get Note
- **Operation ID**: `get-note`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `id` [required] (string) - Note Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCreateUpdateNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `note` [optional] (object) ref: `#/components/schemas/GetNoteSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/contacts/{contactId}/notes/{id}`

- **Summary**: Update Note
- **Operation ID**: `update-note`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `id` [required] (string) - Note Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/NotesDTO`
  - Type: object
  - Properties:
    - `userId` [optional] (string)
    - `body` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetCreateUpdateNoteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `note` [optional] (object) ref: `#/components/schemas/GetNoteSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Number Pools

#### GET `/phone-system/number-pools`

- **Summary**: List Number Pools
- **Operation ID**: `getNumberPoolList`
- **Scopes**: `numberpools.read`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [optional] (string) - Location ID to filter pools

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved number pools list
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
      - `data` [optional] (array)
      - `total` [optional] (number)
- **400**: Bad request - Invalid location ID or parameters
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `error` [optional] (string)
      - `statusCode` [optional] (number)
- **401**: Unauthorized - Invalid or missing authentication token
  - No response body.
- **403**: Forbidden - Insufficient permissions for this location
  - No response body.


### OAuth 2.0

#### GET `/oauth/installedLocations`

- **Summary**: Get Location where app is installed
- **Operation ID**: `get-installed-location`
- **Scopes**: `oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `skip` [optional] (string) - Parameter to skip the number installed locations
- `limit` [optional] (string) - Parameter to limit the number installed locations
- `query` [optional] (string) - Parameter to search for the installed location by name
- `isInstalled` [optional] (boolean) - Filters out location which are installed for specified app under the specified company
- `companyId` [required] (string) - Parameter to search by the companyId
- `appId` [required] (string) - Parameter to search by the appId
- `versionId` [optional] (string) - VersionId of the app
- `onTrial` [optional] (boolean) - Filters out locations which are installed for specified app in trial mode
- `planId` [optional] (string) - Filters out location which are installed for specified app under the specified planId

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetInstalledLocationsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locations` [optional] (array)
      - `count` [optional] (number)
      - `installToFutureLocations` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/oauth/locationToken`

- **Summary**: Get Location Access Token from Agency Token
- **Operation ID**: `get-location-access-token`
- **Scopes**: `oauth.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/x-www-form-urlencoded`
  - Schema ref: `#/components/schemas/GetLocationAccessCodeBodyDto`
  - Type: object
  - Properties:
    - `companyId` [required] (string)
    - `locationId` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLocationAccessTokenSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `access_token` [optional] (string)
      - `token_type` [optional] (string)
      - `expires_in` [optional] (number)
      - `scope` [optional] (string)
      - `locationId` [optional] (string)
      - `planId` [optional] (string)
      - `userId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/oauth/token`

- **Summary**: Get Access Token
- **Operation ID**: `get-access-token`
- **Scopes**: -

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/x-www-form-urlencoded`
  - Schema ref: `#/components/schemas/GetAccessCodebodyDto`
  - Type: object
  - Properties:
    - `client_id` [required] (string)
    - `client_secret` [required] (string)
    - `grant_type` [required] (string) enum: `authorization_code`, `refresh_token`, `client_credentials`
    - `code` [optional] (string)
    - `refresh_token` [optional] (string)
    - `user_type` [optional] (string) enum: `Company`, `Location`
    - `redirect_uri` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetAccessCodeSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `access_token` [optional] (string)
      - `token_type` [optional] (string)
      - `expires_in` [optional] (number)
      - `refresh_token` [optional] (string)
      - `scope` [optional] (string)
      - `userType` [optional] (string)
      - `locationId` [optional] (string)
      - `companyId` [optional] (string)
      - `approvedLocations` [optional] (array)
      - `userId` [required] (string)
      - `planId` [optional] (string)
      - `isBulkInstallation` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | Facebook

#### GET `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`

- **Summary**: Get facebook pages
- **Operation ID**: `get-facebook-page-group`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response, runs Facebook OAuth and redirects to application
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetFacebookAccountsResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}`

- **Summary**: Attach facebook pages
- **Operation ID**: `attach-facebook-page-group`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachFBAccountDTO`
  - Type: object
  - Properties:
    - `type` [optional] (object)
    - `originId` [optional] (string)
    - `name` [optional] (string)
    - `avatar` [optional] (string)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaFBAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/facebook/start`

- **Summary**: Starts OAuth For Facebook Account
- **Operation ID**: `start-facebook-oauth`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Account Location Id
- `userId` [required] (string) - User ID
- `page` [optional] (string) - Facebook Page
- `reconnect` [optional] (string) - Reconnect boolean as string

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | Google

#### GET `/social-media-posting/oauth/{locationId}/google/locations/{accountId}`

- **Summary**: Get google business locations
- **Operation ID**: `get-google-locations`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetGoogleLocationResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/google/locations/{accountId}`

- **Summary**: Set google business locations
- **Operation ID**: `set-google-locations`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachGMBLocationDTO`
  - Type: object
  - Properties:
    - `location` [optional] (object)
    - `account` [optional] (object)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaGmbAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/google/start`

- **Summary**: Starts OAuth For Google Account
- **Operation ID**: `start-google-oauth`
- **Scopes**: `socialplanner/oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | Instagram

#### GET `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`

- **Summary**: Get Instagram Professional Accounts
- **Operation ID**: `get-instagram-page-group`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetInstagramAccountsResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}`

- **Summary**: Attach Instagram Professional Accounts
- **Operation ID**: `attach-instagram-page-group`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachIGAccountDTO`
  - Type: object
  - Properties:
    - `originId` [optional] (string)
    - `name` [optional] (string)
    - `avatar` [optional] (string)
    - `pageId` [required] (string)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaInstagramAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/instagram/start`

- **Summary**: Starts OAuth For Instagram Account
- **Operation ID**: `start-instagram-oauth`
- **Scopes**: `socialplanner/oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | LinkedIn

#### GET `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`

- **Summary**: Get Linkedin pages and profile
- **Operation ID**: `get-linkedin-page-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinkedInAccountsResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}`

- **Summary**: Attach linkedin pages and profile
- **Operation ID**: `attach-linkedin-page-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachLinkedinAccountDTO`
  - Type: object
  - Properties:
    - `type` [optional] (string) enum: `page`, `group`, `profile`, `location`, `business`
    - `originId` [optional] (string)
    - `name` [optional] (string)
    - `avatar` [optional] (string)
    - `urn` [optional] (string)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaLinkedInAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/linkedin/start`

- **Summary**: Starts OAuth For LinkedIn Account
- **Operation ID**: `start-linkedin-oauth`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | Tiktok

#### GET `/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}`

- **Summary**: Get Tiktok Business profile
- **Operation ID**: `get-tiktok-business-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTiktokBusinessAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`

- **Summary**: Get Tiktok profile
- **Operation ID**: `get-tiktok-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTiktokAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}`

- **Summary**: Attach Tiktok profile
- **Operation ID**: `attach-tiktok-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachTiktokAccountDTO`
  - Type: object
  - Properties:
    - `type` [optional] (string) enum: `page`, `group`, `profile`, `location`, `business`
    - `originId` [optional] (string)
    - `name` [optional] (string)
    - `avatar` [optional] (string)
    - `verified` [optional] (boolean)
    - `username` [optional] (string)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaTiktokAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/tiktok-business/start`

- **Summary**: Starts OAuth For Tiktok Business Account
- **Operation ID**: `start-tiktok-business-oauth`
- **Scopes**: `socialplanner/oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/tiktok/start`

- **Summary**: Starts OAuth For Tiktok Account
- **Operation ID**: `start-tiktok-oauth`
- **Scopes**: `socialplanner/oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Oauth | Twitter

#### GET `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`

- **Summary**: Get Twitter profile
- **Operation ID**: `get-twitter-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTwitterAccountsResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}`

- **Summary**: Attach Twitter profile
- **Operation ID**: `attach-twitter-profile`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Account Location Id
- `accountId` [required] (string) - Account Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AttachTwitterAccountDTO`
  - Type: object
  - Properties:
    - `originId` [optional] (string)
    - `name` [optional] (string)
    - `username` [optional] (string)
    - `avatar` [optional] (string)
    - `protected` [optional] (boolean)
    - `verified` [optional] (boolean)
    - `companyId` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SocialMediaTwitterAccountResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/oauth/twitter/start`

- **Summary**: Starts OAuth For Twitter Account
- **Operation ID**: `start-twitter-oauth`
- **Scopes**: `socialplanner/oauth.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `userId` [required] (string) - User Id
- `page` [optional] (string) - Page
- `reconnect` [optional] (string) - Reconnect

**Request Body**
- None

**Response Schema**
- **200**: Successful Response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Object Schema

#### GET `/objects/`

- **Summary**: Get all objects for a location
- **Operation ID**: `get-object-by-location-id`
- **Scopes**: `objects/schema.readonly`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - location id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomObjectListResponseDTO`
    - Type: object
    - Properties:
      - `objects` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/objects/`

- **Summary**: Create Custom Object
- **Operation ID**: `create-custom-object-schema`
- **Scopes**: `objects/schema.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomObjectSchemaDTO`
  - Type: object
  - Properties:
    - `labels` [required] (any)
    - `key` [required] (string)
    - `description` [optional] (string)
    - `locationId` [required] (string)
    - `primaryDisplayPropertyDetails` [required] (any)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomObjectResponseDTO`
    - Type: object
    - Properties:
      - `object` [optional] (object) ref: `#/components/schemas/ICustomObjectSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/objects/{key}`

- **Summary**: Get Object Schema by key / id
- **Operation ID**: `get-object-schema-by-key`
- **Scopes**: `objects/schema.readonly`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `key` [required] (string) - key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

**Query Parameters**
- `locationId` [required] (string) - location id of the sub account
- `fetchProperties` [optional] (string) - Fetch Properties , Fetches all the standard / custom fields of the object when set to true

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomObjectByIdResponseDTO`
    - Type: object
    - Properties:
      - `object` [optional] (object) ref: `#/components/schemas/ICustomObjectSchema`
      - `cache` [required] (boolean)
      - `fields` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/objects/{key}`

- **Summary**: Update Object Schema By Key / Id
- **Operation ID**: `update-custom-object`
- **Scopes**: `objects/schema.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `key` [required] (string) - key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomObjectSchemaDTO`
  - Type: object
  - Properties:
    - `labels` [optional] (any)
    - `description` [optional] (string)
    - `locationId` [required] (string)
    - `searchableProperties` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CustomObjectResponseDTO`
    - Type: object
    - Properties:
      - `object` [optional] (object) ref: `#/components/schemas/ICustomObjectSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Opportunities

#### POST `/opportunities/`

- **Summary**: Create Opportunity
- **Operation ID**: `create-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateDto`
  - Type: object
  - Properties:
    - `pipelineId` [required] (string)
    - `locationId` [required] (string)
    - `name` [required] (string)
    - `pipelineStageId` [optional] (string)
    - `status` [required] (string) enum: `open`, `won`, `lost`, `abandoned`, `all`
    - `contactId` [required] (string)
    - `monetaryValue` [optional] (number)
    - `assignedTo` [optional] (string)
    - `customFields` [optional] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `opportunity` [optional] (object) ref: `#/components/schemas/SearchOpportunitiesResponseSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/opportunities/{id}`

- **Summary**: Delete Opportunity
- **Operation ID**: `delete-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteUpdateOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/opportunities/{id}`

- **Summary**: Get Opportunity
- **Operation ID**: `get-opportunity`
- **Scopes**: `opportunities.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `opportunity` [optional] (object) ref: `#/components/schemas/SearchOpportunitiesResponseSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/opportunities/{id}`

- **Summary**: Update Opportunity
- **Operation ID**: `update-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateOpportunityDto`
  - Type: object
  - Properties:
    - `pipelineId` [optional] (string)
    - `name` [optional] (string)
    - `pipelineStageId` [optional] (string)
    - `status` [optional] (string) enum: `open`, `won`, `lost`, `abandoned`, `all`
    - `monetaryValue` [optional] (number)
    - `assignedTo` [optional] (string)
    - `customFields` [optional] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `opportunity` [optional] (object) ref: `#/components/schemas/SearchOpportunitiesResponseSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/opportunities/{id}/status`

- **Summary**: Update Opportunity Status
- **Operation ID**: `update-opportunity-status`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Opportunity Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateStatusDto`
  - Type: object
  - Properties:
    - `status` [required] (string) enum: `open`, `won`, `lost`, `abandoned`, `all`

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteUpdateOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/opportunities/upsert`

- **Summary**: Upsert Opportunity
- **Operation ID**: `Upsert-opportunity`
- **Scopes**: `opportunities.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpsertOpportunityDto`
  - Type: object
  - Properties:
    - `pipelineId` [required] (string)
    - `locationId` [required] (string)
    - `contactId` [required] (string)
    - `name` [optional] (string)
    - `status` [optional] (string) enum: `open`, `won`, `lost`, `abandoned`, `all`
    - `pipelineStageId` [optional] (string)
    - `monetaryValue` [optional] (number)
    - `assignedTo` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpsertOpportunitySuccessfulResponseDto`
    - Type: object
    - Properties:
      - `opportunity` [required] (object)
      - `new` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Order Notes

#### GET `/payments/orders/{orderId}/notes`

- **Summary**: List Order Notes
- **Operation ID**: `list-order-notes`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `orderId` [required] (string) - ID of the order that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Order fulfillments

#### GET `/payments/orders/{orderId}/fulfillments`

- **Summary**: List fulfillment
- **Operation ID**: `list-order-fulfillment`
- **Scopes**: `payments/orders.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `orderId` [required] (string) - ID of the order that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListFulfillmentResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/orders/{orderId}/fulfillments`

- **Summary**: Create order fulfillment
- **Operation ID**: `create-order-fulfillment`
- **Scopes**: `payments/orders.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `orderId` [required] (string) - ID of the order that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateFulfillmentDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `trackings` [required] (array)
    - `items` [required] (array)
    - `notifyCustomer` [required] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateFulfillmentResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Orders

#### GET `/payments/orders`

- **Summary**: List Orders
- **Operation ID**: `list-orders`
- **Scopes**: `payments/orders.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [optional] (string) - LocationId is the id of the sub-account.
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.
- `altType` [required] (string) - AltType is the type of identifier.
- `status` [optional] (string) - Order status.
- `paymentMode` [optional] (string) - Mode of payment.
- `startAt` [optional] (string) - Starting interval of orders.
- `endAt` [optional] (string) - Closing interval of orders.
- `search` [optional] (string) - The name of the order for searching.
- `contactId` [optional] (string) - Contact id for filtering of orders.
- `funnelProductIds` [optional] (string) - Funnel product ids separated by comma.
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListOrdersResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/orders/{orderId}`

- **Summary**: Get Order by ID
- **Operation ID**: `get-order-by-id`
- **Scopes**: `payments/orders.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `orderId` [required] (string) - ID of the order that needs to be returned

**Query Parameters**
- `locationId` [optional] (string) - LocationId is the id of the sub-account.
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetOrderResponseSchema`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string)
      - `contactId` [optional] (string)
      - `currency` [optional] (string)
      - `amount` [optional] (number)
      - `status` [required] (string)
      - `liveMode` [optional] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `fulfillmentStatus` [optional] (string)
      - `contactSnapshot` [optional] (object)
      - `amountSummary` [optional] (any)
      - `source` [optional] (any)
      - `items` [optional] (array)
      - `coupon` [optional] (object)
      - `trackingId` [optional] (string)
      - `fingerprint` [optional] (string)
      - `meta` [optional] (object)
      - `markAsTest` [optional] (boolean)
      - ... 3 more properties
- **400**: Order not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/orders/{orderId}/record-payment`

- **Summary**: Record Order Payment
- **Operation ID**: `record-order-payment`
- **Scopes**: `payments/orders.collectPayment`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `orderId` [required] (string) - MongoDB Order ID

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PostRecordOrderPaymentBody`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `mode` [required] (string) enum: `cash`, `card`, `cheque`, `bank_transfer`, `other`
    - `card` [optional] (any)
    - `cheque` [optional] (any)
    - `notes` [optional] (string)
    - `amount` [optional] (number)
    - `meta` [optional] (object)
    - `isPartialPayment` [optional] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/PostRecordOrderPaymentResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Order not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/payments/orders/migrate-order-ps`

- **Summary**: migration Endpoint for Order Payment Status
- **Operation ID**: `post-migrate-order-payment-status`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [optional] (string) - LocationId is the id of the sub-account.
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.

**Request Body**
- None

**Response Schema**
- **201**: No description
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Phone Numbers

#### GET `/phone-system/numbers/location/{locationId}`

- **Summary**: List active numbers
- **Operation ID**: `active-numbers`
- **Scopes**: `phonenumbers.read`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - The unique identifier of the location

**Query Parameters**
- `pageSize` [optional] (number) - How many resources to return in each list page. The default is 50, and the maximum is 1000.
- `page` [optional] (number) - The page index for pagination. The default is 0.
- `searchFilter` [optional] (string) - Filter numbers by phone number pattern. Supports partial matching (e.g., "+91" to find all Indian numbers).
- `skipNumberPool` [optional] (boolean) - Whether to exclude numbers that are assigned to number pools. Default is true.

**Request Body**
- None

**Response Schema**
- **200**: Successfully retrieved list of active numbers
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `numbers` [required] (array)
      - `isUnderGhl` [required] (boolean)
      - `pageSize` [required] (number)
      - `page` [required] (number)
      - `accountStatus` [required] (string) enum: `active`, `suspended`, `closed`
- **400**: Bad request - Invalid parameters
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `error` [optional] (string)
      - `statusCode` [optional] (number)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Phone system not connected
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `statusCode` [optional] (number)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `msg` [optional] (string)
      - `accountStatus` [optional] (string)


### Pipelines

#### GET `/opportunities/pipelines`

- **Summary**: Get Pipelines
- **Operation ID**: `get-pipelines`
- **Scopes**: `opportunities.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPipelinesSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `pipelines` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Post

#### POST `/social-media-posting/{locationId}/posts`

- **Summary**: Create post
- **Operation ID**: `create-post`
- **Scopes**: `socialplanner/post.write`
- **External references**: <https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreatePostDTO`
  - Type: object
  - Properties:
    - `accountIds` [required] (array)
    - `summary` [optional] (string)
    - `media` [optional] (array)
    - `status` [optional] (object)
    - `scheduleDate` [optional] (string)
    - `createdBy` [optional] (string)
    - `followUpComment` [optional] (string)
    - `ogTagsDetails` [optional] (any)
    - `type` [required] (object)
    - `postApprovalDetails` [optional] (any)
    - `scheduleTimeUpdated` [optional] (boolean)
    - `tags` [optional] (array)
    - `categoryId` [optional] (string)
    - `tiktokPostDetails` [optional] (any)
    - `gmbPostDetails` [optional] (any)
    - `userId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreatePostSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/social-media-posting/{locationId}/posts/{id}`

- **Summary**: Delete Post
- **Operation ID**: `delete-post`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Post Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeletePostSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/social-media-posting/{locationId}/posts/{id}`

- **Summary**: Get post
- **Operation ID**: `get-post`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Post Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/social-media-posting/{locationId}/posts/{id}`

- **Summary**: Edit post
- **Operation ID**: `edit-post`
- **Scopes**: -
- **External references**: <https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Post Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PostCreateRequest`
  - Type: object
  - Properties:
    - `accountIds` [optional] (array)
    - `summary` [optional] (string)
    - `media` [optional] (array)
    - `status` [optional] (object)
    - `scheduleDate` [optional] (string)
    - `createdBy` [optional] (string)
    - `followUpComment` [optional] (string)
    - `ogTagsDetails` [optional] (any)
    - `type` [required] (object)
    - `postApprovalDetails` [optional] (any)
    - `scheduleTimeUpdated` [optional] (boolean)
    - `tags` [optional] (array)
    - `categoryId` [optional] (string)
    - `tiktokPostDetails` [optional] (any)
    - `gmbPostDetails` [optional] (any)
    - `userId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdatePostSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/{locationId}/posts/bulk-delete`

- **Summary**: Bulk Delete Social Planner Posts
- **Operation ID**: `bulk-delete-social-planner-posts`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/DeletePostsDto`
  - Type: object
  - Properties:
    - `postIds` [optional] (array)

**Response Schema**
- **201**: Posts deleted successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BulkDeleteResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [required] (any)
- **400**: Cannot delete more than 50 posts at a time.
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: No posts found with the given IDs.
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)
- **500**: An error occurred while trying to delete the posts. Please try again later.
  - No response body.


#### POST `/social-media-posting/{locationId}/posts/list`

- **Summary**: Get posts
- **Operation ID**: `get-posts`
- **Scopes**: `socialplanner/post.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SearchPostDTO`
  - Type: object
  - Properties:
    - `type` [optional] (string)
    - `accounts` [optional] (string)
    - `skip` [required] (string)
    - `limit` [required] (string)
    - `fromDate` [required] (string)
    - `toDate` [required] (string)
    - `includeUsers` [required] (string)
    - `postType` [optional] (object)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/PostSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Prices

#### GET `/products/{productId}/price`

- **Summary**: List Prices for a Product
- **Operation ID**: `list-prices-for-product`
- **Scopes**: `products/prices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID of the product that needs to be used

**Query Parameters**
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `locationId` [required] (string) - The unique identifier for the location.
- `ids` [optional] (string) - To filter the response only with the given price ids, Please provide with comma separated

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListPricesResponseDto`
    - Type: object
    - Properties:
      - `prices` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/{productId}/price`

- **Summary**: Create Price for a Product
- **Operation ID**: `create-price-for-product`
- **Scopes**: `products/prices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID of the product that needs to be used

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreatePriceDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `type` [required] (string) enum: `one_time`, `recurring`
    - `currency` [required] (string)
    - `amount` [required] (number)
    - `recurring` [optional] (any)
    - `description` [optional] (string)
    - `membershipOffers` [optional] (array)
    - `trialPeriod` [optional] (number)
    - `totalCycles` [optional] (number)
    - `setupFee` [optional] (number)
    - `variantOptionIds` [optional] (array)
    - `compareAtPrice` [optional] (number)
    - `locationId` [required] (string)
    - `userId` [optional] (string)
    - `meta` [optional] (any)
    - `trackInventory` [optional] (boolean)
    - `availableQuantity` [optional] (number)
    - `allowOutOfStockPurchases` [optional] (boolean)
    - `sku` [optional] (string)
    - `shippingOptions` [optional] (any)
    - ... 2 more properties

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreatePriceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `membershipOffers` [optional] (array)
      - `variantOptionIds` [optional] (array)
      - `locationId` [optional] (string)
      - `product` [optional] (string)
      - `userId` [optional] (string)
      - `name` [required] (string)
      - `type` [required] (string) enum: `one_time`, `recurring`
      - `currency` [required] (string)
      - `amount` [required] (number)
      - `recurring` [optional] (any)
      - `createdAt` [optional] (string)
      - `updatedAt` [optional] (string)
      - `compareAtPrice` [optional] (number)
      - `trackInventory` [optional] (boolean)
      - `availableQuantity` [optional] (number)
      - `allowOutOfStockPurchases` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/products/{productId}/price/{priceId}`

- **Summary**: Delete Price by ID for a Product
- **Operation ID**: `delete-price-by-id-for-product`
- **Scopes**: `products/prices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID of the product that needs to be used
- `priceId` [required] (string) - ID of the price that needs to be returned

**Query Parameters**
- `locationId` [required] (string) - location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeletePriceResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/products/{productId}/price/{priceId}`

- **Summary**: Get Price by ID for a Product
- **Operation ID**: `get-price-by-id-for-product`
- **Scopes**: `products/prices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID of the product that needs to be used
- `priceId` [required] (string) - ID of the price that needs to be returned

**Query Parameters**
- `locationId` [required] (string) - location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPriceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `membershipOffers` [optional] (array)
      - `variantOptionIds` [optional] (array)
      - `locationId` [optional] (string)
      - `product` [optional] (string)
      - `userId` [optional] (string)
      - `name` [required] (string)
      - `type` [required] (string) enum: `one_time`, `recurring`
      - `currency` [required] (string)
      - `amount` [required] (number)
      - `recurring` [optional] (any)
      - `createdAt` [optional] (string)
      - `updatedAt` [optional] (string)
      - `compareAtPrice` [optional] (number)
      - `trackInventory` [optional] (boolean)
      - `availableQuantity` [optional] (number)
      - `allowOutOfStockPurchases` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/products/{productId}/price/{priceId}`

- **Summary**: Update Price by ID for a Product
- **Operation ID**: `update-price-by-id-for-product`
- **Scopes**: `products/prices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID of the product that needs to be used
- `priceId` [required] (string) - ID of the price that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdatePriceDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `type` [required] (string) enum: `one_time`, `recurring`
    - `currency` [required] (string)
    - `amount` [required] (number)
    - `recurring` [optional] (any)
    - `description` [optional] (string)
    - `membershipOffers` [optional] (array)
    - `trialPeriod` [optional] (number)
    - `totalCycles` [optional] (number)
    - `setupFee` [optional] (number)
    - `variantOptionIds` [optional] (array)
    - `compareAtPrice` [optional] (number)
    - `locationId` [required] (string)
    - `userId` [optional] (string)
    - `meta` [optional] (any)
    - `trackInventory` [optional] (boolean)
    - `availableQuantity` [optional] (number)
    - `allowOutOfStockPurchases` [optional] (boolean)
    - `sku` [optional] (string)
    - `shippingOptions` [optional] (any)
    - ... 2 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdatePriceResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `membershipOffers` [optional] (array)
      - `variantOptionIds` [optional] (array)
      - `locationId` [optional] (string)
      - `product` [optional] (string)
      - `userId` [optional] (string)
      - `name` [required] (string)
      - `type` [required] (string) enum: `one_time`, `recurring`
      - `currency` [required] (string)
      - `amount` [required] (number)
      - `recurring` [optional] (any)
      - `createdAt` [optional] (string)
      - `updatedAt` [optional] (string)
      - `compareAtPrice` [optional] (number)
      - `trackInventory` [optional] (boolean)
      - `availableQuantity` [optional] (number)
      - `allowOutOfStockPurchases` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/products/inventory`

- **Summary**: List Inventory
- **Operation ID**: `get-list-inventory`
- **Scopes**: `products/prices.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `search` [optional] (string) - Search string for Variant Search

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetInventoryResponseDto`
    - Type: object
    - Properties:
      - `inventory` [required] (array)
      - `total` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/inventory`

- **Summary**: Update Inventory
- **Operation ID**: `update-inventory`
- **Scopes**: `products/prices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInventoryDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `items` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInventoryResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Products

#### GET `/products/`

- **Summary**: List Products
- **Operation ID**: `list-invoices`
- **Scopes**: `products.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `locationId` [required] (string) - LocationId is the id of the sub-account
- `search` [optional] (string) - The name of the product for searching.
- `collectionIds` [optional] (string) - Filter by product category Ids. Supports comma separated values
- `collectionSlug` [optional] (string) - The slug value of the collection by which the collection would be searched
- `expand` [optional] (array) - Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes
- `productIds` [optional] (array) - List of product ids to be fetched.
- `storeId` [optional] (string) - fetch and project products based on the storeId
- `includedInStore` [optional] (boolean) - Separate products by which are included in the store and which are not
- `availableInStore` [optional] (boolean) - If the product is included in the online store
- `sortOrder` [optional] (string) - The order of sort which should be applied for the date | enum: `asc`, `desc`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListProductsResponseDto`
    - Type: object
    - Properties:
      - `products` [required] (array)
      - `total` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/`

- **Summary**: Create Product
- **Operation ID**: `create-product`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateProductDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `locationId` [required] (string)
    - `description` [optional] (string)
    - `productType` [required] (string) enum: `DIGITAL`, `PHYSICAL`, `SERVICE`, `PHYSICAL/DIGITAL`
    - `image` [optional] (string)
    - `statementDescriptor` [optional] (string)
    - `availableInStore` [optional] (boolean)
    - `medias` [optional] (array)
    - `variants` [optional] (array)
    - `collectionIds` [optional] (array)
    - `isTaxesEnabled` [optional] (boolean)
    - `taxes` [optional] (array)
    - `automaticTaxCategoryId` [optional] (string)
    - `isLabelEnabled` [optional] (boolean)
    - `label` [optional] (any)
    - `slug` [optional] (string)
    - `seo` [optional] (any)
    - `taxInclusive` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateProductResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `description` [optional] (string)
      - `variants` [optional] (array)
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `productType` [required] (string)
      - `availableInStore` [optional] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `statementDescriptor` [optional] (string)
      - `image` [optional] (string)
      - `collectionIds` [optional] (array)
      - `isTaxesEnabled` [optional] (boolean)
      - `taxes` [optional] (array)
      - `automaticTaxCategoryId` [optional] (string)
      - `label` [optional] (any)
      - `slug` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/products/{productId}`

- **Summary**: Delete Product by ID
- **Operation ID**: `delete-product-by-id`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID or the slug of the product that needs to be returned

**Query Parameters**
- `locationId` [required] (string) - location Id
- `sendWishlistStatus` [optional] (boolean) - Parameter which will decide whether to show the wishlisting status of products

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteProductResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/products/{productId}`

- **Summary**: Get Product by ID
- **Operation ID**: `get-product-by-id`
- **Scopes**: `products.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID or the slug of the product that needs to be returned

**Query Parameters**
- `locationId` [required] (string) - location Id
- `sendWishlistStatus` [optional] (boolean) - Parameter which will decide whether to show the wishlisting status of products

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetProductResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `description` [optional] (string)
      - `variants` [optional] (array)
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `productType` [required] (string)
      - `availableInStore` [optional] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `statementDescriptor` [optional] (string)
      - `image` [optional] (string)
      - `collectionIds` [optional] (array)
      - `isTaxesEnabled` [optional] (boolean)
      - `taxes` [optional] (array)
      - `automaticTaxCategoryId` [optional] (string)
      - `label` [optional] (any)
      - `slug` [optional] (string)
- **400**: Product not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/products/{productId}`

- **Summary**: Update Product by ID
- **Operation ID**: `update-product-by-id`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `productId` [required] (string) - ID or the slug of the product that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateProductDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `locationId` [required] (string)
    - `description` [optional] (string)
    - `productType` [required] (string) enum: `DIGITAL`, `PHYSICAL`, `SERVICE`, `PHYSICAL/DIGITAL`
    - `image` [optional] (string)
    - `statementDescriptor` [optional] (string)
    - `availableInStore` [optional] (boolean)
    - `medias` [optional] (array)
    - `variants` [optional] (array)
    - `collectionIds` [optional] (array)
    - `isTaxesEnabled` [optional] (boolean)
    - `taxes` [optional] (array)
    - `automaticTaxCategoryId` [optional] (string)
    - `isLabelEnabled` [optional] (boolean)
    - `label` [optional] (any)
    - `slug` [optional] (string)
    - `seo` [optional] (any)
    - `taxInclusive` [optional] (boolean)
    - `prices` [optional] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateProductResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `description` [optional] (string)
      - `variants` [optional] (array)
      - `locationId` [required] (string)
      - `name` [required] (string)
      - `productType` [required] (string)
      - `availableInStore` [optional] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `statementDescriptor` [optional] (string)
      - `image` [optional] (string)
      - `collectionIds` [optional] (array)
      - `isTaxesEnabled` [optional] (boolean)
      - `taxes` [optional] (array)
      - `automaticTaxCategoryId` [optional] (string)
      - `label` [optional] (any)
      - `slug` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/bulk-update`

- **Summary**: Bulk Update Products
- **Operation ID**: `bulkUpdate`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkUpdateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `type` [required] (string) enum: `bulk-update-price`, `bulk-update-availability`, `bulk-update-product-collection`, `bulk-delete-products`, `bulk-update-currency`
    - `productIds` [required] (array)
    - `filters` [optional] (any)
    - `price` [optional] (any)
    - `compareAtPrice` [optional] (any)
    - `availability` [optional] (boolean)
    - `collectionIds` [optional] (array)
    - `currency` [optional] (string)

**Response Schema**
- **201**: Products updated successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BulkUpdateResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/bulk-update/edit`

- **Summary**: Bulk Edit Products and Prices
- **Operation ID**: `bulkEdit`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkEditRequestDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `products` [required] (array)

**Response Schema**
- **201**: Products and prices updated successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BulkEditResponseDto`
    - Type: object
    - Properties:
      - `message` [required] (string)
      - `status` [required] (boolean)
      - `updatedCount` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Providers

#### POST `/conversations/providers/live-chat/typing`

- **Summary**: Agent/Ai-Bot is typing a message indicator for live chat
- **Operation ID**: `live-chat-agent-typing`
- **Scopes**: `conversations/livechat.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UserTypingBody`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `isTyping` [required] (string)
    - `visitorId` [required] (string)
    - `conversationId` [required] (string)

**Response Schema**
- **201**: Show typing indicator for live chat
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateLiveChatMessageFeedbackResponse`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Records

#### POST `/objects/{schemaKey}/records`

- **Summary**: Create Record
- **Operation ID**: `create-object-record`
- **Scopes**: `objects/record.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-175596/e2f3e9f2e111d69/87cpx-275236>, <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `schemaKey` [required] (string) - The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateCustomObjectRecordDto`
  - Type: object

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecordByIdResponseDTO`
    - Type: object
    - Properties:
      - `record` [optional] (object) ref: `#/components/schemas/IRecordSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/objects/{schemaKey}/records/{id}`

- **Summary**: Delete Record
- **Operation ID**: `delete-object-record`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `schemaKey` [required] (string) - The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` [required] (string) - id of the record to be updated. Available on the Record details page under the 3 dots or in the url

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ObjectRecordDeleteResponseDTO`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `success` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/objects/{schemaKey}/records/{id}`

- **Summary**: Get Record By Id
- **Operation ID**: `get-record-by-id`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `schemaKey` [required] (string) - The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` [required] (string) - id of the record to be updated. Available on the Record details page under the 3 dots or in the url

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecordByIdResponseDTO`
    - Type: object
    - Properties:
      - `record` [optional] (object) ref: `#/components/schemas/IRecordSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/objects/{schemaKey}/records/{id}`

- **Summary**: Update Record
- **Operation ID**: `update-object-record`
- **Scopes**: -
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-175596/e2f3e9f2e111d69/87cpx-275676>, <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `schemaKey` [required] (string) - The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings.
- `id` [required] (string) - id of the record to be updated. Available on the Record details page under the 3 dots or in the url

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateCustomObjectRecordDto`
  - Type: object

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecordByIdResponseDTO`
    - Type: object
    - Properties:
      - `record` [optional] (object) ref: `#/components/schemas/IRecordSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Recurring Tasks

#### POST `/locations/{locationId}/recurring-tasks`

- **Summary**: Create Recurring Task
- **Operation ID**: `create-recurring-task`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/RecurringTaskCreateDTO`
  - Type: object
  - Properties:
    - `title` [required] (string)
    - `description` [optional] (string)
    - `contactIds` [optional] (array)
    - `owners` [optional] (array)
    - `rruleOptions` [required] (any)
    - `ignoreTaskCreation` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecurringTaskSingleResponseDTO`
    - Type: object
    - Properties:
      - `recurringTask` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}/recurring-tasks/{id}`

- **Summary**: Delete Recurring Task
- **Operation ID**: `delete-recurring-task`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Recurring Task Id
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteRecurringTaskResponseDTO`
    - Type: object
    - Properties:
      - `id` [required] (string)
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/recurring-tasks/{id}`

- **Summary**: Get Recurring Task By Id
- **Operation ID**: `get-recurring-task-by-id`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Recurring Task Id
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecurringTaskSingleResponseDTO`
    - Type: object
    - Properties:
      - `recurringTask` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/locations/{locationId}/recurring-tasks/{id}`

- **Summary**: Update Recurring Task
- **Operation ID**: `update-recurring-task`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string) - Recurring Task Id
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/RecurringTaskUpdateDTO`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `description` [optional] (string)
    - `contactIds` [optional] (array)
    - `owners` [optional] (array)
    - `rruleOptions` [optional] (any)
    - `ignoreTaskCreation` [optional] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RecurringTaskSingleResponseDTO`
    - Type: object
    - Properties:
      - `recurringTask` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Redirect

#### POST `/funnels/lookup/redirect`

- **Summary**: Create Redirect
- **Operation ID**: `create-redirect`
- **Scopes**: `funnels/redirect.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateRedirectParams`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `domain` [required] (string)
    - `path` [required] (string)
    - `target` [required] (string)
    - `action` [required] (string) enum: `funnel`, `website`, `url`, `all`

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateRedirectResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (any)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/funnels/lookup/redirect/{id}`

- **Summary**: Delete Redirect By Id
- **Operation ID**: `delete-redirect-by-id`
- **Scopes**: `funnels/redirect.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response - URL redirect deleted successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteRedirectResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (object)
- **422**: Unprocessable Entity - The provided data is invalid or incomplete
  - No response body.


#### PATCH `/funnels/lookup/redirect/{id}`

- **Summary**: Update Redirect By Id
- **Operation ID**: `update-redirect-by-id`
- **Scopes**: `funnels/redirect.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `id` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateRedirectParams`
  - Type: object
  - Properties:
    - `target` [required] (string)
    - `action` [required] (string) enum: `funnel`, `website`, `url`, `all`
    - `locationId` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateRedirectResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (any)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/funnels/lookup/redirect/list`

- **Summary**: Fetch List of Redirects
- **Operation ID**: `fetch-redirects-list`
- **Scopes**: `funnels/redirect.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `limit` [required] (number)
- `offset` [required] (number)
- `search` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response - List of URL redirects returned
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/RedirectListResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (object)
- **422**: Unprocessable Entity - The provided data is invalid or incomplete
  - No response body.


### Relations

#### POST `/associations/relations`

- **Summary**: Create Relation for you associated entities.
- **Operation ID**: `create-relation`
- **Scopes**: `associations/relation.write`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/createRelationReqDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `associationId` [required] (string)
    - `firstRecordId` [required] (string)
    - `secondRecordId` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/associations/relations/{recordId}`

- **Summary**: Get all relations By record Id
- **Operation ID**: `get-relations-by-record-id`
- **Scopes**: `associations/relation.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `recordId` [required] (string)

**Query Parameters**
- `locationId` [required] (string) - Your Sub Account's ID
- `skip` [required] (number)
- `limit` [required] (number)
- `associationIds` [optional] (array) - Association Ids

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/associations/relations/{relationId}`

- **Summary**: Delete Relation
- **Operation ID**: `delete-relation`
- **Scopes**: `associations/relation.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `relationId` [required] (string)

**Query Parameters**
- `locationId` [required] (string) - Your Sub Account's ID

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetPostSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `id` [required] (string)
      - `key` [required] (string)
      - `firstObjectLabel` [required] (object)
      - `firstObjectKey` [required] (object)
      - `secondObjectLabel` [required] (object)
      - `secondObjectKey` [required] (object)
      - `associationType` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Reviews

#### GET `/products/reviews`

- **Summary**: Fetch Product Reviews
- **Operation ID**: `get-product-reviews`
- **Scopes**: `products.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `sortField` [optional] (string) - The field upon which the sort should be applied | enum: `createdAt`, `rating`
- `sortOrder` [optional] (string) - The order of sort which should be applied for the sortField | enum: `asc`, `desc`
- `rating` [optional] (number) - Key to filter the ratings
- `startDate` [optional] (string) - The start date for filtering reviews
- `endDate` [optional] (string) - The end date for filtering reviews
- `productId` [optional] (string) - Comma-separated list of product IDs
- `storeId` [optional] (string) - Comma-separated list of store IDs

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListProductReviewsResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/products/reviews/{reviewId}`

- **Summary**: Delete Product Review
- **Operation ID**: `delete-product-review`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `reviewId` [required] (string) - Review Id

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `productId` [required] (string) - Product Id of the product

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteProductReviewResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/products/reviews/{reviewId}`

- **Summary**: Update Product Reviews
- **Operation ID**: `update-product-review`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `reviewId` [required] (string) - Review Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateProductReviewDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `productId` [required] (string)
    - `status` [required] (string)
    - `reply` [optional] (array)
    - `rating` [optional] (number)
    - `headline` [optional] (string)
    - `detail` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateProductReviewsResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/reviews/bulk-update`

- **Summary**: Update Product Reviews
- **Operation ID**: `bulk-update-product-review`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateProductReviewsDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `reviews` [required] (array)
    - `status` [required] (object)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateProductReviewsResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/products/reviews/count`

- **Summary**: Fetch Review Count as per status
- **Operation ID**: `get-reviews-count`
- **Scopes**: `products.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `rating` [optional] (number) - Key to filter the ratings
- `startDate` [optional] (string) - The start date for filtering reviews
- `endDate` [optional] (string) - The end date for filtering reviews
- `productId` [optional] (string) - Comma-separated list of product IDs
- `storeId` [optional] (string) - Comma-separated list of store IDs

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CountReviewsByStatusResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Saas

#### GET `/saas-api/public-api/agency-plans/{companyId}`

- **Summary**: Get Agency Plans
- **Operation ID**: `get-agency-plans-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string) - Company ID to get agency plans for

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Agency plans retrieved successfully
  - Content-Type: `application/json`
    - Type: array
    - Items ref: `#/components/schemas/AgencyPlanResponseDto`
    - Item type: object
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/saas-api/public-api/bulk-disable-saas/{companyId}`

- **Summary**: Disable SaaS for locations
- **Operation ID**: `bulk-disable-saas-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string) - Company ID to disable SaaS for

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkDisableSaasDto`
  - Type: object
  - Properties:
    - `locationIds` [required] (array)

**Response Schema**
- **200**: SaaS disabled successfully for locations
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BulkDisableSaasResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/saas-api/public-api/bulk-enable-saas/{companyId}`

- **Summary**: Bulk Enable SaaS
- **Operation ID**: `bulk-enable-saas-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string) - Company ID to enable SaaS for

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkEnableSaasRequestDto`
  - Type: object
  - Properties:
    - `locationIds` [required] (array)
    - `isSaaSV2` [required] (boolean)
    - `actionPayload` [required] (any)

**Response Schema**
- **200**: Bulk SaaS enable operation completed successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BulkEnableSaasResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `message` [required] (string)
      - `bulkActionUrl` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/saas-api/public-api/enable-saas/{locationId}`

- **Summary**: Enable SaaS for Sub-Account (Formerly Location)
- **Operation ID**: `enable-saas-location-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID to enable SaaS for

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/EnableSaasDto`
  - Type: object
  - Properties:
    - `stripeAccountId` [optional] (string)
    - `name` [optional] (string)
    - `email` [optional] (string)
    - `stripeCustomerId` [optional] (string)
    - `companyId` [required] (string)
    - `isSaaSV2` [required] (boolean)
    - `contactId` [optional] (string)
    - `providerLocationId` [optional] (string)
    - `description` [optional] (string)
    - `saasPlanId` [optional] (string)
    - `priceId` [optional] (string)

**Response Schema**
- **200**: SaaS enabled successfully for location
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/EnableSaasResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### GET `/saas-api/public-api/get-saas-subscription/{locationId}`

- **Summary**: Get Location Subscription Details
- **Operation ID**: `get-location-subscription-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID to get subscription details for

**Query Parameters**
- `companyId` [required] (string) - Company ID to filter subscription details

**Request Body**
- None

**Response Schema**
- **200**: Location subscription details retrieved successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationSubscriptionResponseDto`
    - Type: object
    - Properties:
      - `locationId` [required] (string)
      - `isSaaSV2` [required] (boolean)
      - `companyId` [required] (string)
      - `saasMode` [optional] (string)
      - `subscriptionId` [optional] (string)
      - `customerId` [optional] (string)
      - `productId` [optional] (string)
      - `priceId` [optional] (string)
      - `saasPlanId` [optional] (string)
      - `subscriptionStatus` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### GET `/saas-api/public-api/locations`

- **Summary**: Get locations by stripeId with companyId
- **Operation ID**: `locations-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `customerId` [optional] (string) - Stripe customer ID to find locations for
- `subscriptionId` [optional] (string) - Stripe subscription ID to find locations for
- `companyId` [required] (string) - Company ID to filter locations

**Request Body**
- None

**Response Schema**
- **200**: Locations retrieved successfully
  - Content-Type: `application/json`
    - Type: array
    - Item type: string
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/saas-api/public-api/pause/{locationId}`

- **Summary**: Pause location
- **Operation ID**: `pause-location-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID to pause/unpause

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PauseLocationDto`
  - Type: object
  - Properties:
    - `paused` [required] (boolean)
    - `companyId` [required] (string)

**Response Schema**
- **200**: Location paused/unpaused successfully
  - Content-Type: `application/json`
    - Type: boolean
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### GET `/saas-api/public-api/saas-locations/{companyId}`

- **Summary**: Get SaaS Locations
- **Operation ID**: `get-saas-locations-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string) - Company ID to get SaaS locations for

**Query Parameters**
- `page` [optional] (number) - Page number for pagination

**Request Body**
- None

**Response Schema**
- **200**: SaaS locations retrieved successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSaasLocationsResponseDto`
    - Type: object
    - Properties:
      - `locations` [required] (array)
      - `pagination` [required] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### GET `/saas-api/public-api/saas-plan/{planId}`

- **Summary**: Get SaaS Plan
- **Operation ID**: `get-saas-plan-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `planId` [required] (string) - Plan ID to get SaaS plan details for

**Query Parameters**
- `companyId` [required] (string) - Company ID to filter SaaS plan

**Request Body**
- None

**Response Schema**
- **200**: SaaS plan retrieved successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SaasPlanResponseDto`
    - Type: object
    - Properties:
      - `planId` [required] (string)
      - `companyId` [required] (string)
      - `title` [required] (string)
      - `description` [required] (string)
      - `saasProducts` [required] (array)
      - `addOns` [optional] (array)
      - `planLevel` [required] (number)
      - `trialPeriod` [required] (number)
      - `setupFee` [optional] (number)
      - `userLimit` [optional] (number)
      - `contactLimit` [optional] (number)
      - `prices` [required] (array)
      - `categoryId` [optional] (string)
      - `snapshotId` [optional] (string)
      - `providerLocationId` [optional] (string)
      - `productId` [optional] (string)
      - `isSaaSV2` [required] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/saas-api/public-api/update-rebilling/{companyId}`

- **Summary**: Update Rebilling
- **Operation ID**: `update-rebilling-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string) - Company ID to update rebilling for

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateRebillingDto`
  - Type: object
  - Properties:
    - `product` [required] (string) enum: `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `EmailNotification`, `whatsApp`, `reviewsAI`, `VERIFIED_CALLER_ID`, `WALLET_SALES_TAX`, `NOTIFICATION_SMS`, `EmailSmtp`, `EmailVerification`, `autoCompleteAddress`, `funnelAI`, `domainPurchase`, `Phone`, `Email`
    - `locationIds` [required] (array)
    - `config` [required] (object)

**Response Schema**
- **200**: Rebilling updated successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateRebillingResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### PUT `/saas-api/public-api/update-saas-subscription/{locationId}`

- **Summary**: Update SaaS subscription
- **Operation ID**: `update-saas-subscription-deprecated`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string) - Location ID to update subscription for

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateSubscriptionDto`
  - Type: object
  - Properties:
    - `subscriptionId` [required] (string)
    - `customerId` [required] (string)
    - `companyId` [required] (string)

**Response Schema**
- **200**: SaaS subscription updated successfully
  - Content-Type: `application/json`
    - Type: string
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Resource not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ResourceNotFoundDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **500**: Internal server error
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/InternalServerErrorDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### GET `/saas/agency-plans/{companyId}`

- **Summary**: Get Agency Plans
- **Operation ID**: `get-agency-plans`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.


#### POST `/saas/bulk-disable-saas/{companyId}`

- **Summary**: Disable SaaS for locations
- **Operation ID**: `bulk-disable-saas`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkDisableSaasDto`
  - Type: object
  - Properties:
    - `locationIds` [required] (array)

**Response Schema**
- **201**: No description
  - No response body.


#### POST `/saas/bulk-enable-saas/{companyId}`

- **Summary**: Bulk Enable SaaS
- **Operation ID**: `bulk-enable-saas`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/BulkEnableSaasRequestDto`
  - Type: object
  - Properties:
    - `locationIds` [required] (array)
    - `isSaaSV2` [required] (boolean)
    - `actionPayload` [required] (any)

**Response Schema**
- **201**: No description
  - No response body.


#### POST `/saas/enable-saas/{locationId}`

- **Summary**: Enable SaaS for Sub-Account (Formerly Location)
- **Operation ID**: `enable-saas-location`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/EnableSaasDto`
  - Type: object
  - Properties:
    - `stripeAccountId` [optional] (string)
    - `name` [optional] (string)
    - `email` [optional] (string)
    - `stripeCustomerId` [optional] (string)
    - `companyId` [required] (string)
    - `isSaaSV2` [required] (boolean)
    - `contactId` [optional] (string)
    - `providerLocationId` [optional] (string)
    - `description` [optional] (string)
    - `saasPlanId` [optional] (string)
    - `priceId` [optional] (string)

**Response Schema**
- **201**: No description
  - No response body.


#### GET `/saas/get-saas-subscription/{locationId}`

- **Summary**: Get Location Subscription Details
- **Operation ID**: `get-location-subscription`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- `companyId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.


#### GET `/saas/locations`

- **Summary**: Get locations by stripeId with companyId
- **Operation ID**: `locations`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `customerId` [required] (string)
- `subscriptionId` [required] (string)
- `companyId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.


#### POST `/saas/pause/{locationId}`

- **Summary**: Pause location
- **Operation ID**: `pause-location`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PauseLocationDto`
  - Type: object
  - Properties:
    - `paused` [required] (boolean)
    - `companyId` [required] (string)

**Response Schema**
- **201**: No description
  - No response body.


#### GET `/saas/saas-locations/{companyId}`

- **Summary**: Get SaaS Locations
- **Operation ID**: `get-saas-locations`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- `page` [required] (number)

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.


#### GET `/saas/saas-plan/{planId}`

- **Summary**: Get SaaS Plan
- **Operation ID**: `get-saas-plan`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `planId` [required] (string)

**Query Parameters**
- `companyId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.


#### POST `/saas/update-rebilling/{companyId}`

- **Summary**: Update Rebilling
- **Operation ID**: `update-rebilling`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `companyId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateRebillingDto`
  - Type: object
  - Properties:
    - `product` [required] (string) enum: `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `EmailNotification`, `whatsApp`, `reviewsAI`, `VERIFIED_CALLER_ID`, `WALLET_SALES_TAX`, `NOTIFICATION_SMS`, `EmailSmtp`, `EmailVerification`, `autoCompleteAddress`, `funnelAI`, `domainPurchase`, `Phone`, `Email`
    - `locationIds` [required] (array)
    - `config` [required] (object)

**Response Schema**
- **201**: No description
  - No response body.


#### PUT `/saas/update-saas-subscription/{locationId}`

- **Summary**: Update SaaS subscription
- **Operation ID**: `generate-payment-link`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- `locationId` [required] (string)

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateSubscriptionDto`
  - Type: object
  - Properties:
    - `subscriptionId` [required] (string)
    - `customerId` [required] (string)
    - `companyId` [required] (string)

**Response Schema**
- **200**: No description
  - No response body.


### Schedule

#### GET `/invoices/schedule`

- **Summary**: List schedules
- **Operation ID**: `list-invoice-schedules`
- **Scopes**: `invoices/schedule.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`
- `status` [optional] (string) - status to be filtered
- `startAt` [optional] (string) - startAt in YYYY-MM-DD format
- `endAt` [optional] (string) - endAt in YYYY-MM-DD format
- `search` [optional] (string) - To search for an invoice by id / name / email / phoneNo
- `paymentMode` [optional] (string) - payment mode | enum: `default`, `live`, `test`
- `limit` [required] (string) - Limit the number of items to return
- `offset` [required] (string) - Number of items to skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListSchedulesResponseDto`
    - Type: object
    - Properties:
      - `schedules` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/schedule`

- **Summary**: Create Invoice Schedule
- **Operation ID**: `create-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateInvoiceScheduleDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `contactDetails` [required] (object) ref: `#/components/schemas/ContactDetailsDto`
    - `schedule` [required] (object) ref: `#/components/schemas/ScheduleOptionsDto`
    - `liveMode` [required] (boolean)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `tipsConfiguration` [optional] (any)
    - `lateFeesConfiguration` [optional] (any)
    - `invoiceNumberPrefix` [optional] (string)
    - `paymentMethods` [optional] (any)
    - `attachments` [optional] (array)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/invoices/schedule/{scheduleId}`

- **Summary**: Delete schedule
- **Operation ID**: `delete-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/schedule/{scheduleId}`

- **Summary**: Get an schedule
- **Operation ID**: `get-invoice-schedule`
- **Scopes**: `invoices/schedule.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/invoices/schedule/{scheduleId}`

- **Summary**: Update schedule
- **Operation ID**: `update-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInvoiceScheduleDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `contactDetails` [required] (object) ref: `#/components/schemas/ContactDetailsDto`
    - `schedule` [required] (object) ref: `#/components/schemas/ScheduleOptionsDto`
    - `liveMode` [required] (boolean)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `discount` [required] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `attachments` [optional] (array)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/schedule/{scheduleId}/auto-payment`

- **Summary**: Manage Auto payment for an schedule invoice
- **Operation ID**: `auto-payment-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/AutoPaymentScheduleDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `id` [required] (string)
    - `autoPayment` [required] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/AutoPaymentInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/schedule/{scheduleId}/cancel`

- **Summary**: Cancel an scheduled invoice
- **Operation ID**: `cancel-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CancelInvoiceScheduleDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CancelInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/schedule/{scheduleId}/schedule`

- **Summary**: Schedule an schedule invoice
- **Operation ID**: `schedule-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/ScheduleInvoiceScheduleDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `liveMode` [required] (boolean)
    - `autoPayment` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ScheduleInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/schedule/{scheduleId}/updateAndSchedule`

- **Summary**: Update scheduled recurring invoice
- **Operation ID**: `update-and-schedule-invoice-schedule`
- **Scopes**: `invoices/schedule.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `scheduleId` [required] (string) - Schedule Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateAndScheduleInvoiceScheduleResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `status` [required] (object)
      - `liveMode` [required] (boolean)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `schedule` [optional] (object) ref: `#/components/schemas/ScheduleOptionsDto`
      - `invoices` [required] (array)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `contactDetails` [required] (any)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `total` [required] (number)
      - `title` [required] (string)
      - `termsNotes` [required] (string)
      - `compiledTermsNotes` [required] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Search

#### POST `/contacts/search`

- **Summary**: Search Contacts
- **Operation ID**: `search-contacts-advanced`
- **Scopes**: `contacts.readonly`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SearchBodyV2DTO`
  - Type: object

**Response Schema**
- **200**: Success
  - No response body.
- **400**: Bad Request
  - No response body.
- **401**: Unauthorized
  - No response body.


#### GET `/contacts/search/duplicate`

- **Summary**: Get Duplicate Contact
- **Operation ID**: `get-duplicate-contact`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `number` [optional] (string) - Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`
- `email` [optional] (string) - Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/conversations/search`

- **Summary**: Search Conversations
- **Operation ID**: `search-conversation`
- **Scopes**: `conversations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `contactId` [optional] (string) - Contact Id
- `assignedTo` [optional] (string) - User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. Use "unassigned" to fetch conversations not assigned to any user.
- `followers` [optional] (string) - User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated values.
- `mentions` [optional] (string) - User Id of the mention. Multiple values are comma separated.
- `query` [optional] (string) - Search paramater as a string
- `sort` [optional] (string) - Sort paramater - asc or desc | enum: `asc`, `desc`
- `startAfterDate` [optional] (any) - Search to begin after the specified date - should contain the sort value of the last document
- `id` [optional] (string) - Id of the conversation
- `limit` [optional] (number) - Limit of conversations - Default is 20
- `lastMessageType` [optional] (string) - Type of the last message in the conversation as a string | enum: `TYPE_CALL`, `TYPE_SMS`, `TYPE_EMAIL`, `TYPE_SMS_REVIEW_REQUEST`, `TYPE_WEBCHAT`, `TYPE_SMS_NO_SHOW_REQUEST`, `TYPE_CAMPAIGN_SMS`, `TYPE_CAMPAIGN_CALL`, `TYPE_CAMPAIGN_EMAIL`, `TYPE_CAMPAIGN_VOICEMAIL`, `TYPE_FACEBOOK`, `TYPE_CAMPAIGN_FACEBOOK`, `TYPE_CAMPAIGN_MANUAL_CALL`, `TYPE_CAMPAIGN_MANUAL_SMS`, `TYPE_GMB`, `TYPE_CAMPAIGN_GMB`, `TYPE_REVIEW`, `TYPE_INSTAGRAM`, `TYPE_WHATSAPP`, `TYPE_CUSTOM_SMS`, `TYPE_CUSTOM_EMAIL`, `TYPE_CUSTOM_PROVIDER_SMS`, `TYPE_CUSTOM_PROVIDER_EMAIL`, `TYPE_IVR_CALL`, `TYPE_ACTIVITY_CONTACT`, `TYPE_ACTIVITY_INVOICE`, `TYPE_ACTIVITY_PAYMENT`, `TYPE_ACTIVITY_OPPORTUNITY`, `TYPE_LIVE_CHAT`, `TYPE_LIVE_CHAT_INFO_MESSAGE`, `TYPE_ACTIVITY_APPOINTMENT`, `TYPE_FACEBOOK_COMMENT`, `TYPE_INSTAGRAM_COMMENT`, `TYPE_CUSTOM_CALL`, `TYPE_INTERNAL_COMMENT`, `TYPE_ACTIVITY_EMPLOYEE_ACTION_LOG`
- `lastMessageAction` [optional] (string) - Action of the last outbound message in the conversation as string. | enum: `automated`, `manual`
- `lastMessageDirection` [optional] (string) - Direction of the last message in the conversation as string. | enum: `inbound`, `outbound`
- `status` [optional] (string) - The status of the conversation to be filtered - all, read, unread, starred | enum: `all`, `read`, `unread`, `starred`, `recents`
- `sortBy` [optional] (string) - The sorting of the conversation to be filtered as - manual messages or all messages | enum: `last_manual_message_date`, `last_message_date`, `score_profile`
- `sortScoreProfile` [optional] (string) - Id of score profile on which sortBy.ScoreProfile should sort on
- `scoreProfile` [optional] (string) - Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax
- `scoreProfileMin` [optional] (number) - Minimum value for score
- `scoreProfileMax` [optional] (number) - Maximum value for score

**Request Body**
- None

**Response Schema**
- **200**: Successfully fetched the conversations
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendConversationResponseDto`
    - Type: object
    - Properties:
      - `conversations` [required] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/locations/search`

- **Summary**: Search
- **Operation ID**: `search-locations`
- **Scopes**: `locations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `companyId` [optional] (string) - The company/agency id on which you want to perform the search
- `skip` [optional] (string) - The value by which the results should be skipped. Default will be 0
- `limit` [optional] (string) - The value by which the results should be limited. Default will be 10
- `order` [optional] (string) - The order in which the results should be returned - Allowed values asc, desc. Default will be asc
- `email` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SearchSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locations` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/opportunities/search`

- **Summary**: Search Opportunity
- **Operation ID**: `search-opportunity`
- **Scopes**: `opportunities.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `q` [optional] (string)
- `location_id` [required] (string) - Location Id
- `pipeline_id` [optional] (string) - Pipeline Id
- `pipeline_stage_id` [optional] (string) - stage Id
- `contact_id` [optional] (string) - Contact Id
- `status` [optional] (string) | enum: `open`, `won`, `lost`, `abandoned`, `all`
- `assigned_to` [optional] (string)
- `campaignId` [optional] (string) - Campaign Id
- `id` [optional] (string) - Opportunity Id
- `order` [optional] (string)
- `endDate` [optional] (string) - End date
- `startAfter` [optional] (string) - Start After
- `startAfterId` [optional] (string) - Start After Id
- `date` [optional] (string) - Start date
- `country` [optional] (string)
- `page` [optional] (number)
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `getTasks` [optional] (boolean) - get Tasks in contact
- `getNotes` [optional] (boolean) - get Notes in contact
- `getCalendarEvents` [optional] (boolean) - get Calender event in contact

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SearchSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `locations` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/users/search`

- **Summary**: Search Users
- **Operation ID**: `search-users`
- **Scopes**: `users.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `companyId` [required] (string) - Company ID in which the search needs to be performed
- `query` [optional] (string) - The search term for the user is matched based on the user full name, email or phone
- `skip` [optional] (string) - No of results to be skipped before returning the result
- `limit` [optional] (string) - No of results to be limited before returning the result
- `locationId` [optional] (string) - Location ID in which the search needs to be performed
- `type` [optional] (string) - Type of the users to be filtered in the search
- `role` [optional] (string) - Role of the users to be filtered in the search
- `ids` [optional] (string) - List of User IDs to be filtered in the search
- `sort` [optional] (string) - The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name
- `sortDirection` [optional] (string) - The direction in which the results need to be sorted
- `enabled2waySync` [optional] (boolean)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SearchUserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `users` [optional] (array)
      - `count` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/users/search/filter-by-email`

- **Summary**: Filter Users by Email
- **Operation ID**: `filter-users-by-email`
- **Scopes**: `users.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/FilterByEmailDto`
  - Type: object
  - Properties:
    - `companyId` [required] (string)
    - `emails` [required] (array)
    - `deleted` [optional] (boolean)
    - `skip` [optional] (string)
    - `limit` [optional] (string)
    - `projection` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SearchUserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `users` [optional] (array)
      - `count` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Search Object Records

#### POST `/objects/{schemaKey}/records/search`

- **Summary**: Search Object Records
- **Operation ID**: `search-object-records`
- **Scopes**: `objects/record.readonly`
- **External references**: <https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336>

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `schemaKey` [optional] (string) - custom object key

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SearchRecordsBody`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `page` [required] (number)
    - `pageLimit` [required] (number)
    - `query` [required] (string)
    - `searchAfter` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SearchRecordResponseDTO`
    - Type: object
    - Properties:
      - `records` [optional] (array)
      - `total` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Shipping Carrier

#### GET `/store/shipping-carrier`

- **Summary**: List Shipping Carriers
- **Operation ID**: `list-shipping-carriers`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListShippingCarrierResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/store/shipping-carrier`

- **Summary**: Create Shipping Carrier
- **Operation ID**: `create-shipping-carrier`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateShippingCarrierDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `callbackUrl` [required] (string)
    - `services` [optional] (array)
    - `allowsMultipleServiceSelection` [optional] (boolean)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateShippingCarrierResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/store/shipping-carrier/{shippingCarrierId}`

- **Summary**: Delete shipping carrier
- **Operation ID**: `delete-shipping-carrier`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingCarrierId` [required] (string) - ID of the shipping carrier that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteShippingCarrierResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/store/shipping-carrier/{shippingCarrierId}`

- **Summary**: Get Shipping Carrier
- **Operation ID**: `get-shipping-carriers`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingCarrierId` [required] (string) - ID of the shipping carrier that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetShippingCarrierResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/store/shipping-carrier/{shippingCarrierId}`

- **Summary**: Update Shipping Carrier
- **Operation ID**: `update-shipping-carrier`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingCarrierId` [required] (string) - ID of the shipping carrier that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateShippingCarrierDto`
  - Type: object
  - Properties:
    - `altId` [optional] (string)
    - `altType` [optional] (string) enum: `location`
    - `name` [optional] (string)
    - `callbackUrl` [optional] (string)
    - `services` [optional] (array)
    - `allowsMultipleServiceSelection` [optional] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateShippingCarrierResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Shipping Zone

#### GET `/store/shipping-zone`

- **Summary**: List Shipping Zones
- **Operation ID**: `list-shipping-zones`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.
- `withShippingRate` [optional] (boolean) - Include shipping rates array

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListShippingZoneResponseDto`
    - Type: object
    - Properties:
      - `total` [required] (number)
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/store/shipping-zone`

- **Summary**: Create Shipping Zone
- **Operation ID**: `create-shipping-zone`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateShippingZoneDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `countries` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateShippingZoneResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/store/shipping-zone/{shippingZoneId}`

- **Summary**: Delete shipping zone
- **Operation ID**: `delete-shipping-zone`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the item that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteShippingZoneResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/store/shipping-zone/{shippingZoneId}`

- **Summary**: Get Shipping Zone
- **Operation ID**: `get-shipping-zones`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the item that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `withShippingRate` [optional] (boolean) - Include shipping rates array

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetShippingZoneResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/store/shipping-zone/{shippingZoneId}`

- **Summary**: Update Shipping Zone
- **Operation ID**: `update-shipping-zone`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the item that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateShippingZoneDto`
  - Type: object
  - Properties:
    - `altId` [optional] (string)
    - `altType` [optional] (string) enum: `location`
    - `name` [optional] (string)
    - `countries` [optional] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateShippingZoneResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/store/shipping-zone/shipping-rates`

- **Summary**: Get available shipping rates
- **Operation ID**: `get-available-shipping-zones`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/GetAvailableShippingRates`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `country` [required] (string) enum: `US`, `CA`, `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `KR`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `UA`, `AE`, `GB`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
    - `address` [optional] (any)
    - `amountAvailable` [optional] (string) enum: `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
    - `totalOrderAmount` [required] (number)
    - `weightAvailable` [optional] (boolean)
    - `totalOrderWeight` [required] (number)
    - `source` [required] (any)
    - `products` [required] (array)
    - `couponCode` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetAvailableShippingRatesResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Shipping Zone Rates

#### GET `/store/shipping-zone/{shippingZoneId}/shipping-rate`

- **Summary**: List Shipping Rates
- **Operation ID**: `list-shipping-rates`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the item that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListShippingRateResponseDto`
    - Type: object
    - Properties:
      - `total` [required] (number)
      - `data` [required] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/store/shipping-zone/{shippingZoneId}/shipping-rate`

- **Summary**: Create Shipping Rate
- **Operation ID**: `create-shipping-rate`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the item that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateShippingRateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `description` [optional] (string)
    - `currency` [required] (string)
    - `amount` [required] (number)
    - `conditionType` [required] (string) enum: `none`, `price`, `weight`
    - `minCondition` [required] (number)
    - `maxCondition` [required] (number)
    - `isCarrierRate` [optional] (boolean)
    - `shippingCarrierId` [required] (string)
    - `percentageOfRateFee` [optional] (number)
    - `shippingCarrierServices` [optional] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateShippingRateResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

- **Summary**: Delete shipping rate
- **Operation ID**: `delete-shipping-rate`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the shipping zone
- `shippingRateId` [required] (string) - ID of the shipping rate that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteShippingRateResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

- **Summary**: Get Shipping Rate
- **Operation ID**: `get-shipping-rates`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the shipping zone
- `shippingRateId` [required] (string) - ID of the shipping rate that needs to be returned

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetShippingRateResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}`

- **Summary**: Update Shipping Rate
- **Operation ID**: `update-shipping-rate`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- `shippingZoneId` [required] (string) - ID of the shipping zone
- `shippingRateId` [required] (string) - ID of the shipping rate that needs to be returned

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateShippingRateDto`
  - Type: object
  - Properties:
    - `altId` [optional] (string)
    - `altType` [optional] (string) enum: `location`
    - `name` [optional] (string)
    - `description` [optional] (string)
    - `currency` [optional] (string)
    - `amount` [optional] (number)
    - `conditionType` [optional] (string) enum: `none`, `price`, `weight`
    - `minCondition` [optional] (number)
    - `maxCondition` [optional] (number)
    - `isCarrierRate` [optional] (boolean)
    - `shippingCarrierId` [optional] (string)
    - `percentageOfRateFee` [optional] (number)
    - `shippingCarrierServices` [optional] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateShippingRateResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Snapshots

#### GET `/snapshots/`

- **Summary**: Get Snapshots
- **Operation ID**: `get-custom-snapshots`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `companyId` [required] (string) - Company Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSnapshotsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `snapshots` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/snapshots/share/link`

- **Summary**: Create Snapshot Share Link
- **Operation ID**: `create-snapshot-share-link`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `companyId` [required] (string)

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateSnapshotShareLinkRequestDTO`
  - Type: object
  - Properties:
    - `snapshot_id` [required] (string)
    - `share_type` [required] (string) enum: `link`, `permanent_link`, `agency_link`, `location_link`
    - `relationship_number` [optional] (string)
    - `share_location_id` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateSnapshotShareLinkSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `shareLink` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/snapshots/snapshot-status/{snapshotId}`

- **Summary**: Get Snapshot Push between Dates
- **Operation ID**: `get-snapshot-push`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `snapshotId` [required] (string)

**Query Parameters**
- `companyId` [required] (string)
- `from` [required] (string)
- `to` [required] (string)
- `lastDoc` [required] (string) - Id for last document till what you want to skip
- `limit` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSnapshotPushStatusSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `data` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/snapshots/snapshot-status/{snapshotId}/location/{locationId}`

- **Summary**: Get Last Snapshot Push
- **Operation ID**: `get-latest-snapshot-push`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `snapshotId` [required] (string)
- `locationId` [required] (string)

**Query Parameters**
- `companyId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLatestSnapshotPushStatusSuccessfulResponseDTO`
    - Type: object
    - Properties:
      - `data` [optional] (object) ref: `#/components/schemas/SnapshotStatusSchemaWithAssets`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Statistics

#### POST `/social-media-posting/statistics`

- **Summary**: Get Social Media Statistics
- **Operation ID**: `get-social-media-statistics`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location ID

**Request Body**
- Body is **optional**.
- Content-Type: `application/json`
  - Type: object
  - Properties:
    - `profileIds` [required] (array)
    - `platforms` [optional] (array)

**Response Schema**
- **201**: Successfully retrieved analytics data
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `results` [optional] (object)
      - `message` [optional] (string)
      - `traceId` [optional] (string)
- **400**: Bad Request - Occurs when more than 100 accounts are requested or invalid parameters are provided
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized - Invalid or missing authentication credentials
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity - Invalid request body format
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Store

#### POST `/products/store/{storeId}`

- **Summary**: Action to include/exclude the product in store
- **Operation ID**: `update-store-status`
- **Scopes**: `products.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `storeId` [required] (string) - Products related to the store

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateProductStoreDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `action` [required] (string) enum: `include`, `exclude`
    - `productIds` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateProductStoreResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/products/store/{storeId}/priority`

- **Summary**: Update product display priorities in store
- **Operation ID**: `update-display-priority`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `storeId` [required] (string) - Products related to the store

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateDisplayPriorityBodyDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `products` [required] (array)

**Response Schema**
- **200**: Successfully updated display priorities
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/products/store/{storeId}/stats`

- **Summary**: Fetch Product Store Stats
- **Operation ID**: `get-product-store-stats`
- **Scopes**: `products.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `storeId` [required] (string) - Products related to the store

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`
- `search` [optional] (string) - The name of the product for searching.
- `collectionIds` [optional] (string) - Filter by product collection Ids. Supports comma separated values

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetProductStatsResponseDto`
    - Type: object
    - Properties:
      - `totalProducts` [required] (number)
      - `includedInStore` [required] (number)
      - `excludedFromStore` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Store Setting

#### GET `/store/store-setting`

- **Summary**: Get Store Settings
- **Operation ID**: `get-store-settings`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - Location Id or Agency Id
- `altType` [required] (string) | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetStoreSettingResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/store/store-setting`

- **Summary**: Create/Update Store Settings
- **Operation ID**: `create-store-setting`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateStoreSettingDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `shippingOrigin` [required] (any)
    - `storeOrderNotification` [optional] (any)
    - `storeOrderFulfillmentNotification` [optional] (any)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateStoreSettingResponseDto`
    - Type: object
    - Properties:
      - `status` [required] (boolean)
      - `message` [optional] (string)
      - `data` [required] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Sub-Account (Formerly Location)

#### POST `/locations/`

- **Summary**: Create Sub-Account (Formerly Location)
- **Operation ID**: `create-location`
- **Scopes**: `locations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateLocationDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `phone` [optional] (string)
    - `companyId` [required] (string)
    - `address` [optional] (string)
    - `city` [optional] (string)
    - `state` [optional] (string)
    - `country` [optional] (string) enum: `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `timezone` [optional] (string)
    - `prospectInfo` [optional] (any)
    - `settings` [optional] (any)
    - `social` [optional] (any)
    - `twilio` [optional] (any)
    - `mailgun` [optional] (any)
    - `snapshotId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateLocationSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `companyId` [optional] (string)
      - `name` [optional] (string)
      - `phone` [optional] (string)
      - `email` [optional] (string)
      - `address` [optional] (string)
      - `city` [optional] (string)
      - `state` [optional] (string)
      - `domain` [optional] (string)
      - `country` [optional] (string) enum: `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
      - `postalCode` [optional] (string)
      - `website` [optional] (string)
      - `timezone` [optional] (string)
      - `settings` [optional] (any)
      - `social` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}`

- **Summary**: Delete Sub-Account (Formerly Location)
- **Operation ID**: `delete-location`
- **Scopes**: `locations.internal-access-only`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `deleteTwilioAccount` [required] (boolean) - Boolean value to indicate whether to delete Twilio Account or not

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationDeletedSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `message` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/locations/{locationId}`

- **Summary**: Get Sub-Account (Formerly Location)
- **Operation ID**: `get-location`
- **Scopes**: `locations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLocationByIdSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `location` [optional] (object) ref: `#/components/schemas/GetLocationByIdSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/locations/{locationId}`

- **Summary**: Put Sub-Account (Formerly Location)
- **Operation ID**: `put-location`
- **Scopes**: `locations.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateLocationDto`
  - Type: object
  - Properties:
    - `name` [optional] (string)
    - `phone` [optional] (string)
    - `companyId` [required] (string)
    - `address` [optional] (string)
    - `city` [optional] (string)
    - `state` [optional] (string)
    - `country` [optional] (string) enum: `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
    - `postalCode` [optional] (string)
    - `website` [optional] (string)
    - `timezone` [optional] (string)
    - `prospectInfo` [optional] (any)
    - `settings` [optional] (any)
    - `social` [optional] (any)
    - `twilio` [optional] (any)
    - `mailgun` [optional] (any)
    - `snapshot` [optional] (any)

**Response Schema**
- **200**: Successful update response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateLocationSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `companyId` [optional] (string)
      - `name` [optional] (string)
      - `phone` [optional] (string)
      - `email` [optional] (string)
      - `address` [optional] (string)
      - `city` [optional] (string)
      - `state` [optional] (string)
      - `domain` [optional] (string)
      - `country` [optional] (string) enum: `AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`
      - `postalCode` [optional] (string)
      - `website` [optional] (string)
      - `timezone` [optional] (string)
      - `settings` [optional] (any)
      - `social` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Subscriptions

#### GET `/payments/subscriptions`

- **Summary**: List Subscriptions
- **Operation ID**: `list-subscriptions`
- **Scopes**: `payments/subscriptions.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.
- `altType` [required] (string) - AltType is the type of identifier. | enum: `location`
- `entityId` [optional] (string) - Entity id for filtering of subscriptions.
- `paymentMode` [optional] (string) - Mode of payment.
- `startAt` [optional] (string) - Starting interval of subscriptions.
- `endAt` [optional] (string) - Closing interval of subscriptions.
- `entitySourceType` [optional] (string) - Source of the subscriptions.
- `search` [optional] (string) - The name of the subscription for searching.
- `contactId` [optional] (string) - Contact ID for the subscription
- `id` [optional] (string) - Subscription id for filtering of subscriptions.
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListSubscriptionResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/subscriptions/{subscriptionId}`

- **Summary**: Get Subscription by ID
- **Operation ID**: `get-subscription-by-id`
- **Scopes**: `payments/subscriptions.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `subscriptionId` [required] (string) - ID of the subscription that needs to be returned

**Query Parameters**
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.
- `altType` [required] (string) - AltType is the type of identifier. | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSubscriptionResponseSchema`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altType` [required] (object)
      - `altId` [required] (string)
      - `contactId` [optional] (string)
      - `contactSnapshot` [optional] (object)
      - `coupon` [optional] (object)
      - `currency` [optional] (string)
      - `amount` [optional] (number)
      - `status` [optional] (object)
      - `liveMode` [optional] (boolean)
      - `entityType` [optional] (string)
      - `entityId` [optional] (string)
      - `entitySource` [optional] (any)
      - `subscriptionId` [optional] (string)
      - `subscriptionSnapshot` [optional] (object)
      - `paymentProvider` [optional] (object)
      - `ipAddress` [optional] (string)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `meta` [optional] (object)
      - ... 7 more properties
- **400**: Subscription not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Surveys

#### GET `/surveys/`

- **Summary**: Get Surveys
- **Operation ID**: `get-surveys`
- **Scopes**: `surveys.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `skip` [optional] (number)
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 50 and default will be 10
- `type` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSurveysSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `surveys` [optional] (array)
      - `total` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/surveys/submissions`

- **Summary**: Get Surveys Submissions
- **Operation ID**: `get-surveys-submissions`
- **Scopes**: `surveys.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `page` [optional] (number) - Page No. By default it will be 1
- `limit` [optional] (number) - Limit Per Page records count. will allow maximum up to 100 and default will be 20
- `surveyId` [optional] (string) - Filter submission by survey id
- `q` [optional] (string) - Filter by contactId, name, email or phone no.
- `startAt` [optional] (string) - Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
- `endAt` [optional] (string) - Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetSurveysSubmissionSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `submissions` [optional] (array)
      - `meta` [optional] (object) ref: `#/components/schemas/metaSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Tag

#### GET `/social-media-posting/{locationId}/tags`

- **Summary**: Get tags by location id
- **Operation ID**: `get-tags-location-id`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `searchText` [optional] (string) - Search text string
- `limit` [optional] (string) - Limit
- `skip` [optional] (string) - Skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTagsByLocationIdResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/social-media-posting/{locationId}/tags/details`

- **Summary**: Get tags by ids
- **Operation ID**: `get-tags-by-ids`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateTagDTO`
  - Type: object
  - Properties:
    - `tagIds` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTagsByIdResponseDTO`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `statusCode` [required] (number)
      - `message` [required] (string)
      - `results` [optional] (any)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Tags

#### DELETE `/contacts/{contactId}/tags`

- **Summary**: Remove Tags
- **Operation ID**: `remove-tags`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/TagsDTO`
  - Type: object
  - Properties:
    - `tags` [required] (array)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateDeleteTagSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tags` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/tags`

- **Summary**: Add Tags
- **Operation ID**: `add-tags`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/TagsDTO`
  - Type: object
  - Properties:
    - `tags` [required] (array)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateAddTagSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tags` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/tags`

- **Summary**: Get Tags
- **Operation ID**: `get-location-tags`
- **Scopes**: `locations/tags.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTagsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tags` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/locations/{locationId}/tags`

- **Summary**: Create Tag
- **Operation ID**: `create-tag`
- **Scopes**: `locations/tags.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/tagBody`
  - Type: object
  - Properties:
    - `name` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTagSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tag` [optional] (object) ref: `#/components/schemas/LocationTagsSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}/tags/{tagId}`

- **Summary**: Delete tag
- **Operation ID**: `delete-tag`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `tagId` [required] (string) - Tag Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTagDeleteSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/tags/{tagId}`

- **Summary**: Get tag by id
- **Operation ID**: `get-tag-by-id`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `tagId` [required] (string) - Tag Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTagSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tag` [optional] (object) ref: `#/components/schemas/LocationTagsSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/locations/{locationId}/tags/{tagId}`

- **Summary**: Update tag
- **Operation ID**: `update-tag`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `tagId` [required] (string) - Tag Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/tagBody`
  - Type: object
  - Properties:
    - `name` [required] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTagSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tag` [optional] (object) ref: `#/components/schemas/LocationTagsSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Tasks

#### GET `/contacts/{contactId}/tasks`

- **Summary**: Get all Tasks
- **Operation ID**: `get-all-tasks`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TasksListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tasks` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/tasks`

- **Summary**: Create Task
- **Operation ID**: `create-task`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateTaskParams`
  - Type: object
  - Properties:
    - `title` [required] (string)
    - `body` [optional] (string)
    - `dueDate` [required] (string)
    - `completed` [required] (boolean)
    - `assignedTo` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TaskByIsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `task` [optional] (object) ref: `#/components/schemas/TaskSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/contacts/{contactId}/tasks/{taskId}`

- **Summary**: Delete Task
- **Operation ID**: `delete-task`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `taskId` [required] (string) - Task Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteTaskSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### GET `/contacts/{contactId}/tasks/{taskId}`

- **Summary**: Get Task
- **Operation ID**: `get-task`
- **Scopes**: `contacts.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `taskId` [required] (string) - Task Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TaskByIsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `task` [optional] (object) ref: `#/components/schemas/TaskSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### PUT `/contacts/{contactId}/tasks/{taskId}`

- **Summary**: Update Task
- **Operation ID**: `update-task`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `taskId` [required] (string) - Task Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateTaskBody`
  - Type: object
  - Properties:
    - `title` [optional] (string)
    - `body` [optional] (string)
    - `dueDate` [optional] (string)
    - `completed` [optional] (boolean)
    - `assignedTo` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TaskByIsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `task` [optional] (object) ref: `#/components/schemas/TaskSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/contacts/{contactId}/tasks/{taskId}/completed`

- **Summary**: Update Task Completed
- **Operation ID**: `update-task-completed`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `taskId` [required] (string) - Task Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateTaskStatusParams`
  - Type: object
  - Properties:
    - `completed` [required] (boolean)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TaskByIsSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `task` [optional] (object) ref: `#/components/schemas/TaskSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Tasks Search

#### POST `/locations/{locationId}/tasks/search`

- **Summary**: Task Search Filter
- **Operation ID**: `task-search`
- **Scopes**: `locations/tasks.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/TaskSearchParamsDto`
  - Type: object
  - Properties:
    - `contactId` [optional] (array)
    - `completed` [optional] (boolean)
    - `assignedTo` [optional] (array)
    - `query` [optional] (string)
    - `limit` [optional] (number)
    - `skip` [optional] (number)
    - `businessId` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationTaskListSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `tasks` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Template

#### GET `/invoices/template`

- **Summary**: List templates
- **Operation ID**: `list-invoice-templates`
- **Scopes**: `invoices/template.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`
- `status` [optional] (string) - status to be filtered
- `startAt` [optional] (string) - startAt in YYYY-MM-DD format
- `endAt` [optional] (string) - endAt in YYYY-MM-DD format
- `search` [optional] (string) - To search for an invoice by id / name / email / phoneNo
- `paymentMode` [optional] (string) - payment mode | enum: `default`, `live`, `test`
- `limit` [required] (string) - Limit the number of items to return
- `offset` [required] (string) - Number of items to skip

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListTemplatesResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/invoices/template`

- **Summary**: Create template
- **Operation ID**: `create-invoice-template`
- **Scopes**: `invoices/template.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateInvoiceTemplateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `internal` [optional] (boolean)
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `discount` [optional] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `tipsConfiguration` [optional] (any)
    - `lateFeesConfiguration` [optional] (any)
    - `invoiceNumberPrefix` [optional] (string)
    - `paymentMethods` [optional] (any)
    - `attachments` [optional] (array)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateInvoiceTemplateResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `invoiceNumberPrefix` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/invoices/template/{templateId}`

- **Summary**: Delete template
- **Operation ID**: `delete-invoice-template`
- **Scopes**: `invoices/template.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteInvoiceTemplateResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/invoices/template/{templateId}`

- **Summary**: Get an template
- **Operation ID**: `get-invoice-template`
- **Scopes**: `invoices/template.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- `altId` [required] (string) - location Id / company Id based on altType
- `altType` [required] (string) - Alt Type | enum: `location`

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTemplateResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `invoiceNumberPrefix` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/invoices/template/{templateId}`

- **Summary**: Update template
- **Operation ID**: `update-invoice-template`
- **Scopes**: `invoices/template.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInvoiceTemplateDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `internal` [optional] (boolean)
    - `name` [required] (string)
    - `businessDetails` [required] (object) ref: `#/components/schemas/BusinessDetailsDto`
    - `currency` [required] (string)
    - `items` [required] (array)
    - `discount` [optional] (object) ref: `#/components/schemas/DiscountDto`
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `miscellaneousCharges` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceTemplateResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `invoiceNumberPrefix` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/invoices/template/{templateId}/late-fees-configuration`

- **Summary**: Update template late fees configuration
- **Operation ID**: `update-invoice-template-late-fees-configuration`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateInvoiceLateFeesConfigurationDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `lateFeesConfiguration` [required] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceTemplateResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `invoiceNumberPrefix` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PATCH `/invoices/template/{templateId}/payment-methods-configuration`

- **Summary**: Update template late fees configuration
- **Operation ID**: `update-invoice-payment-methods-configuration`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `templateId` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdatePaymentMethodsConfigurationDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `paymentMethods` [optional] (any)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UpdateInvoiceTemplateResponseDto`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altId` [required] (string)
      - `altType` [required] (string) enum: `location`
      - `name` [required] (string)
      - `businessDetails` [required] (any)
      - `currency` [required] (string)
      - `discount` [optional] (any)
      - `items` [required] (array)
      - `invoiceNumberPrefix` [optional] (string)
      - `total` [required] (number)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/locations/{locationId}/templates`

- **Summary**: GET all or email/sms templates
- **Operation ID**: `GET-all-or-email-sms-templates`
- **Scopes**: `locations/templates.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id

**Query Parameters**
- `deleted` [optional] (boolean)
- `skip` [optional] (string)
- `limit` [optional] (string)
- `type` [optional] (string) | enum: `sms`, `email`, `whatsapp`
- `originId` [required] (string) - Origin Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTemplatesSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `templates` [optional] (array)
      - `totalCount` [optional] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/locations/{locationId}/templates/{id}`

- **Summary**: DELETE an email/sms template
- **Operation ID**: `DELETE-an-email-sms-template`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string) - Location Id
- `id` [required] (string) - Template Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: No description
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Templates

#### GET `/emails/builder`

- **Summary**: Fetch email templates
- **Operation ID**: `fetch-template`
- **Scopes**: `emails/builder.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)
- `limit` [optional] (string)
- `offset` [optional] (string)
- `search` [optional] (string)
- `sortByDate` [optional] (string)
- `archived` [optional] (string)
- `builderVersion` [optional] (string) | enum: `1`, `2`
- `name` [optional] (string)
- `parentId` [optional] (string)
- `originId` [optional] (string)
- `templatesOnly` [optional] (string)

**Request Body**
- None

**Response Schema**
- **200**: Success
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/FetchBuilderSuccesfulResponseDto`
    - Type: object
    - Properties:
      - `name` [optional] (string)
      - `updatedBy` [optional] (string)
      - `isPlainText` [optional] (boolean)
      - `lastUpdated` [optional] (string)
      - `dateAdded` [optional] (string)
      - `previewUrl` [optional] (string)
      - `id` [optional] (string)
      - `version` [optional] (string)
      - `templateType` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Not Found
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/emails/builder`

- **Summary**: Create a new template
- **Operation ID**: `create-template`
- **Scopes**: `emails/builder.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateBuilderDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `title` [optional] (string)
    - `type` [required] (string) enum: `html`, `folder`, `import`, `builder`, `blank`
    - `updatedBy` [optional] (string)
    - `builderVersion` [optional] (string) enum: `1`, `2`
    - `name` [optional] (string)
    - `parentId` [optional] (string)
    - `templateDataUrl` [optional] (string)
    - `importProvider` [required] (string) enum: `mailchimp`, `active_campaign`, `kajabi`
    - `importURL` [optional] (string)
    - `templateSource` [optional] (string)
    - `isPlainText` [optional] (boolean)

**Response Schema**
- **201**: Success
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/CreateBuilderSuccesfulResponseDto`
    - Type: object
    - Properties:
      - `redirect` [required] (string)
      - `traceId` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Not Found
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/emails/builder/{locationId}/{templateId}`

- **Summary**: Delete a template
- **Operation ID**: `delete-template`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `locationId` [required] (string)
- `templateId` [required] (string)

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Success
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteBuilderSuccesfulResponseDto`
    - Type: object
    - Properties:
      - `ok` [optional] (string)
      - `traceId` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Not Found
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/emails/builder/data`

- **Summary**: Update a template
- **Operation ID**: `update-template`
- **Scopes**: `emails/builder.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SaveBuilderDataDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `templateId` [required] (string)
    - `updatedBy` [required] (string)
    - `dnd` [required] (any)
    - `html` [required] (string)
    - `editorType` [required] (string) enum: `html`, `builder`
    - `previewText` [optional] (string)
    - `isPlainText` [optional] (boolean)

**Response Schema**
- **201**: Success
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BuilderUpdateSuccessfulDTO`
    - Type: object
    - Properties:
      - `ok` [optional] (string)
      - `traceId` [optional] (string)
      - `previewUrl` [optional] (string)
      - `templateDownloadUrl` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **404**: Not Found
  - No response body.
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/proposals/templates`

- **Summary**: List templates
- **Operation ID**: `list-documents-contracts-templates`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `dateFrom` [optional] (string) - Date start from (ISO 8601)
- `dateTo` [optional] (string) - Date to (ISO 8601)
- `type` [optional] (string) - Comma-separated template types. Valid values: proposal, estimate, contentLibrary
- `name` [optional] (string) - Template Name
- `isPublicDocument` [optional] (boolean) - If the docForm is a DocForm
- `userId` [optional] (string) - User Id, required when isPublicDocument is true
- `limit` [optional] (string) - Limit
- `skip` [optional] (string) - Skip

**Request Body**
- None

**Response Schema**
- **200**: Templates fetched successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/TemplateListPaginationResponseDTO`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `total` [required] (number)
      - `traceId` [optional] (string)
- **400**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


#### POST `/proposals/templates/send`

- **Summary**: Send template
- **Operation ID**: `send-documents-contracts-template`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/SendDocumentFromPublicApiBodyDto`
  - Type: object
  - Properties:
    - `templateId` [required] (string)
    - `userId` [required] (string)
    - `sendDocument` [optional] (boolean)
    - `locationId` [required] (string)
    - `contactId` [required] (string)
    - `opportunityId` [optional] (string)

**Response Schema**
- **200**: Document sent successfully
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/SendTemplateResponseDto`
    - Type: object
    - Properties:
      - `success` [required] (boolean)
      - `links` [required] (array)
- **400**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)


### Text2Pay

#### POST `/invoices/text2pay`

- **Summary**: Create & Send
- **Operation ID**: `text2pay-invoice`
- **Scopes**: `invoices.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/Text2PayDto`
  - Type: object
  - Properties:
    - `altId` [required] (string)
    - `altType` [required] (string) enum: `location`
    - `name` [required] (string)
    - `currency` [required] (string)
    - `items` [required] (array)
    - `termsNotes` [optional] (string)
    - `title` [optional] (string)
    - `contactDetails` [required] (any)
    - `invoiceNumber` [optional] (string)
    - `issueDate` [required] (string)
    - `dueDate` [optional] (string)
    - `sentTo` [required] (object) ref: `#/components/schemas/SentToDto`
    - `liveMode` [required] (boolean)
    - `automaticTaxesEnabled` [optional] (boolean)
    - `paymentSchedule` [optional] (any)
    - `lateFeesConfiguration` [optional] (any)
    - `tipsConfiguration` [optional] (any)
    - `invoiceNumberPrefix` [optional] (string)
    - `paymentMethods` [optional] (any)
    - `attachments` [optional] (array)
    - ... 7 more properties

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/Text2PayInvoiceResponseDto`
    - Type: object
    - Properties:
      - `invoice` [required] (object) ref: `#/components/schemas/DefaultInvoiceResponseDto`
      - `invoiceUrl` [required] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Timezone

#### GET `/locations/{locationId}/timezones`

- **Summary**: Fetch Timezones
- **Operation ID**: `get-timezones`
- **Scopes**: `locations.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - No response body.
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Transactions

#### GET `/payments/transactions`

- **Summary**: List Transactions
- **Operation ID**: `list-transactions`
- **Scopes**: `payments/transactions.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [optional] (string) - LocationId is the id of the sub-account.
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.
- `altType` [required] (string) - AltType is the type of identifier.
- `paymentMode` [optional] (string) - Mode of payment.
- `startAt` [optional] (string) - Starting interval of transactions.
- `endAt` [optional] (string) - Closing interval of transactions.
- `entitySourceType` [optional] (string) - Source of the transactions.
- `entitySourceSubType` [optional] (string) - Source sub-type of the transactions.
- `search` [optional] (string) - The name of the transaction for searching.
- `subscriptionId` [optional] (string) - Subscription id for filtering of transactions.
- `entityId` [optional] (string) - Entity id for filtering of transactions.
- `contactId` [optional] (string) - Contact id for filtering of transactions.
- `limit` [optional] (number) - The maximum number of items to be included in a single page of results
- `offset` [optional] (number) - The starting index of the page, indicating the position from which the results should be retrieved.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ListTxnsResponseDto`
    - Type: object
    - Properties:
      - `data` [required] (array)
      - `totalCount` [required] (number)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/payments/transactions/{transactionId}`

- **Summary**: Get Transaction by ID
- **Operation ID**: `get-transaction-by-id`
- **Scopes**: `payments/transactions.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `transactionId` [required] (string) - ID of the transaction that needs to be returned

**Query Parameters**
- `locationId` [optional] (string) - LocationId is the id of the sub-account.
- `altId` [required] (string) - AltId is the unique identifier e.g: location id.
- `altType` [required] (string) - AltType is the type of identifier.

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetTxnResponseSchema`
    - Type: object
    - Properties:
      - `_id` [required] (string)
      - `altType` [required] (string)
      - `altId` [required] (string)
      - `contactId` [optional] (string)
      - `contactSnapshot` [optional] (object)
      - `currency` [optional] (string)
      - `amount` [optional] (number)
      - `status` [optional] (object)
      - `liveMode` [optional] (boolean)
      - `createdAt` [required] (string)
      - `updatedAt` [required] (string)
      - `entityType` [optional] (string)
      - `entityId` [optional] (string)
      - `entitySource` [optional] (any)
      - `chargeId` [optional] (string)
      - `chargeSnapshot` [optional] (object)
      - `invoiceId` [optional] (string)
      - `subscriptionId` [optional] (string)
      - `paymentProvider` [optional] (object)
      - `ipAddress` [optional] (string)
      - ... 9 more properties
- **400**: Transaction not found
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Trigger Links

#### GET `/links/`

- **Summary**: Get Links
- **Operation ID**: `get-links`
- **Scopes**: `links.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinksSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `links` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/links/`

- **Summary**: Create Link
- **Operation ID**: `create-link`
- **Scopes**: `links.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/LinksDto`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `name` [required] (string)
    - `redirectTo` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinkSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `link` [optional] (object) ref: `#/components/schemas/LinkSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/links/{linkId}`

- **Summary**: Delete Link
- **Operation ID**: `delete-link`
- **Scopes**: `links.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `linkId` [required] (string) - Link Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteLinksSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/links/{linkId}`

- **Summary**: Update Link
- **Operation ID**: `update-link`
- **Scopes**: `links.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `linkId` [required] (string) - Link Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/LinkUpdateDto`
  - Type: object
  - Properties:
    - `name` [required] (string)
    - `redirectTo` [required] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinkSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `link` [optional] (object) ref: `#/components/schemas/LinkSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/links/id/{linkId}`

- **Summary**: Get Link by ID
- **Operation ID**: `get-link-by-id`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `linkId` [required] (string) - Link Id

**Query Parameters**
- `locationId` [required] (string) - Location Id

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinkSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `link` [optional] (object) ref: `#/components/schemas/LinkSchema`
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Trigger Links Search

#### GET `/links/search`

- **Summary**: Search Trigger Links
- **Operation ID**: `search-trigger-links`
- **Scopes**: -

**Request Header Parameters**
- `Authorization` [required] (string) - Access Token
- `Version` [required] (string) - API Version | enum: `2021-04-15`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string) - Location Id
- `query` [optional] (string) - Search query as a string
- `skip` [optional] (number) - Numbers of query results to skip
- `limit` [optional] (number) - Limit on number of search results

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetLinksSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `links` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


### Untagged

#### POST `/courses/courses-exporter/public/import`

- **Summary**: Import Courses
- **Operation ID**: `import-courses`
- **Scopes**: -

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/PublicExporterPayload`
  - Type: object
  - Properties:
    - `locationId` [required] (string)
    - `userId` [optional] (string)
    - `products` [required] (array)

**Response Schema**
- **201**: No description
  - No response body.


### Users

#### GET `/users/`

- **Summary**: Get User by Location
- **Operation ID**: `get-user-by-location`
- **Scopes**: `users.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/LocationSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `users` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)


#### POST `/users/`

- **Summary**: Create User
- **Operation ID**: `create-user`
- **Scopes**: `users.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateUserDto`
  - Type: object
  - Properties:
    - `companyId` [required] (string)
    - `firstName` [required] (string)
    - `lastName` [required] (string)
    - `email` [required] (string)
    - `password` [required] (string)
    - `phone` [optional] (string)
    - `type` [required] (string)
    - `role` [required] (string)
    - `locationIds` [required] (array)
    - `permissions` [optional] (object) ref: `#/components/schemas/PermissionsDto`
    - `scopes` [optional] (array)
    - `scopesAssignedToOnly` [optional] (array)
    - `profilePhoto` [optional] (string)

**Response Schema**
- **201**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `name` [optional] (string)
      - `firstName` [optional] (string)
      - `lastName` [optional] (string)
      - `email` [optional] (string)
      - `phone` [optional] (string)
      - `extension` [optional] (string)
      - `permissions` [optional] (object) ref: `#/components/schemas/PermissionsDto`
      - `scopes` [optional] (string) enum: `campaigns.readonly`, `campaigns.write`, `calendars.readonly`, `calendars/events.write`, `calendars/groups.write`, `calendars.write`, `contacts.write`, `contacts/bulkActions.write`, `workflows.readonly`, `workflows.write`, `triggers.write`, `funnels.write`, `forms.write`, `surveys.write`, `quizzes.write`, `websites.write`, `medias.write`, `medias.readonly`, `opportunities.write`, `opportunities/leadValue.readonly`, `opportunities/bulkActions.write`, `reporting/phone.readonly`, `reporting/adwords.readonly`, `reporting/facebookAds.readonly`, `reporting/attributions.readonly`, `prospecting/auditReport.write`, `reporting/reports.readonly`, `reporting/agent.readonly`, `reporting/reports.write`, `payments.write`, `payments/refunds.write`, `payments/records.write`, `payments/exports.write`, `payments/subscriptionsCancel.write`, `invoices.write`, `invoices.readonly`, `invoices/schedule.readonly`, `invoices/schedule.write`, `invoices/template.readonly`, `invoices/template.write`, `reputation/review.write`, `reputation/listing.write`, `reputation/reviewsAIAgents.write`, `conversations.write`, `conversations.readonly`, `conversations/message.readonly`, `conversations/message.write`, `contentAI.write`, `dashboard/stats.readonly`, `locations/tags.write`, `locations/tags.readonly`, `marketing.write`, `eliza.write`, `settings.write`, `socialplanner/post.write`, `socialplanner/account.readonly`, `socialplanner/account.write`, `socialplanner/category.readonly`, `socialplanner/category.write`, `socialplanner/csv.readonly`, `socialplanner/csv.write`, `socialplanner/group.write`, `socialplanner/hashtag.readonly`, `socialplanner/hashtag.write`, `socialplanner/oauth.readonly`, `socialplanner/oauth.write`, `socialplanner/post.readonly`, `socialplanner/recurring.readonly`, `socialplanner/recurring.write`, `socialplanner/review.readonly`, `socialplanner/review.write`, `socialplanner/rss.readonly`, `socialplanner/rss.write`, `socialplanner/search.readonly`, `socialplanner/setting.readonly`, `socialplanner/setting.write`, `socialplanner/stat.readonly`, `socialplanner/tag.readonly`, `socialplanner/tag.write`, `socialplanner/filters.readonly`, `socialplanner/medias.readonly`, `socialplanner/medias.write`, `socialplanner/watermarks.readonly`, `socialplanner/watermarks.write`, `socialplanner/metatag.readonly`, `socialplanner/facebook.readonly`, `socialplanner/linkedin.readonly`, `socialplanner/twitter.readonly`, `socialplanner/notification.readonly`, `socialplanner/notification.write`, `socialplanner/snapshot.readonly`, `socialplanner/snapshot.write`, `marketing/affiliate.write`, `blogs.write`, `membership.write`, `communities.write`, `gokollab.write`, `certificates.write`, `certificates.readonly`, `adPublishing.write`, `adPublishing.readonly`, `prospecting.write`, `prospecting.readonly`, `prospecting/reports.readonly`, `private-integration-location.readonly`, `private-integration-location.write`, `private-integration-company.readonly`, `private-integration-company.write`, `native-integrations.readonly`, `native-integrations.write`, `wordpress.write`, `wordpress.read`, `custom-menu-link.write`, `qrcodes.write`, `users/team-management.write`, `users/team-management.readonly`, `loginas.write`, `snapshots/api.readonly`, `snapshots/api.create`, `snapshots/api.edit`, `snapshots/api.push`, `snapshots/api.refresh`, `snapshots/api.share`, `snapshots/api.delete`, `internaltools.location-transfer.write`, `internaltools.location-transfer.readonly`, `affiliateportal.write`, `affiliateportal.readonly`, `companies.write`, `internaltools.billing.write`, `internaltools.billing.readonly`, `internaltools.billing-common.readonly`, `internaltools.billing-common.write`, `voice-ai-agents.write`, `voice-ai-agent-goals.readonly`, `voice-ai-agent-goals.write`, `voice-ai-dashboard.readonly`, `agency/launchpad.write`, `agency/launchpad.readonly`, `launchpad.write`, `launchpad.readonly`, `text-ai-agents.write`, `text-ai-agent-goals.readonly`, `text-ai-agent-goals.write`, `text-ai-agent-training.write`
      - `roles` [optional] (object) ref: `#/components/schemas/RoleSchema`
      - `lcPhone` [optional] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/users/{userId}`

- **Summary**: Delete User
- **Operation ID**: `delete-user`
- **Scopes**: `users.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/DeleteUserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
      - `message` [optional] (string)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/users/{userId}`

- **Summary**: Get User
- **Operation ID**: `get-user`
- **Scopes**: `users.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `userId` [required] (string) - User Id

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `name` [optional] (string)
      - `firstName` [optional] (string)
      - `lastName` [optional] (string)
      - `email` [optional] (string)
      - `phone` [optional] (string)
      - `extension` [optional] (string)
      - `permissions` [optional] (object) ref: `#/components/schemas/PermissionsDto`
      - `scopes` [optional] (string) enum: `campaigns.readonly`, `campaigns.write`, `calendars.readonly`, `calendars/events.write`, `calendars/groups.write`, `calendars.write`, `contacts.write`, `contacts/bulkActions.write`, `workflows.readonly`, `workflows.write`, `triggers.write`, `funnels.write`, `forms.write`, `surveys.write`, `quizzes.write`, `websites.write`, `medias.write`, `medias.readonly`, `opportunities.write`, `opportunities/leadValue.readonly`, `opportunities/bulkActions.write`, `reporting/phone.readonly`, `reporting/adwords.readonly`, `reporting/facebookAds.readonly`, `reporting/attributions.readonly`, `prospecting/auditReport.write`, `reporting/reports.readonly`, `reporting/agent.readonly`, `reporting/reports.write`, `payments.write`, `payments/refunds.write`, `payments/records.write`, `payments/exports.write`, `payments/subscriptionsCancel.write`, `invoices.write`, `invoices.readonly`, `invoices/schedule.readonly`, `invoices/schedule.write`, `invoices/template.readonly`, `invoices/template.write`, `reputation/review.write`, `reputation/listing.write`, `reputation/reviewsAIAgents.write`, `conversations.write`, `conversations.readonly`, `conversations/message.readonly`, `conversations/message.write`, `contentAI.write`, `dashboard/stats.readonly`, `locations/tags.write`, `locations/tags.readonly`, `marketing.write`, `eliza.write`, `settings.write`, `socialplanner/post.write`, `socialplanner/account.readonly`, `socialplanner/account.write`, `socialplanner/category.readonly`, `socialplanner/category.write`, `socialplanner/csv.readonly`, `socialplanner/csv.write`, `socialplanner/group.write`, `socialplanner/hashtag.readonly`, `socialplanner/hashtag.write`, `socialplanner/oauth.readonly`, `socialplanner/oauth.write`, `socialplanner/post.readonly`, `socialplanner/recurring.readonly`, `socialplanner/recurring.write`, `socialplanner/review.readonly`, `socialplanner/review.write`, `socialplanner/rss.readonly`, `socialplanner/rss.write`, `socialplanner/search.readonly`, `socialplanner/setting.readonly`, `socialplanner/setting.write`, `socialplanner/stat.readonly`, `socialplanner/tag.readonly`, `socialplanner/tag.write`, `socialplanner/filters.readonly`, `socialplanner/medias.readonly`, `socialplanner/medias.write`, `socialplanner/watermarks.readonly`, `socialplanner/watermarks.write`, `socialplanner/metatag.readonly`, `socialplanner/facebook.readonly`, `socialplanner/linkedin.readonly`, `socialplanner/twitter.readonly`, `socialplanner/notification.readonly`, `socialplanner/notification.write`, `socialplanner/snapshot.readonly`, `socialplanner/snapshot.write`, `marketing/affiliate.write`, `blogs.write`, `membership.write`, `communities.write`, `gokollab.write`, `certificates.write`, `certificates.readonly`, `adPublishing.write`, `adPublishing.readonly`, `prospecting.write`, `prospecting.readonly`, `prospecting/reports.readonly`, `private-integration-location.readonly`, `private-integration-location.write`, `private-integration-company.readonly`, `private-integration-company.write`, `native-integrations.readonly`, `native-integrations.write`, `wordpress.write`, `wordpress.read`, `custom-menu-link.write`, `qrcodes.write`, `users/team-management.write`, `users/team-management.readonly`, `loginas.write`, `snapshots/api.readonly`, `snapshots/api.create`, `snapshots/api.edit`, `snapshots/api.push`, `snapshots/api.refresh`, `snapshots/api.share`, `snapshots/api.delete`, `internaltools.location-transfer.write`, `internaltools.location-transfer.readonly`, `affiliateportal.write`, `affiliateportal.readonly`, `companies.write`, `internaltools.billing.write`, `internaltools.billing.readonly`, `internaltools.billing-common.readonly`, `internaltools.billing-common.write`, `voice-ai-agents.write`, `voice-ai-agent-goals.readonly`, `voice-ai-agent-goals.write`, `voice-ai-dashboard.readonly`, `agency/launchpad.write`, `agency/launchpad.readonly`, `launchpad.write`, `launchpad.readonly`, `text-ai-agents.write`, `text-ai-agent-goals.readonly`, `text-ai-agent-goals.write`, `text-ai-agent-training.write`
      - `roles` [optional] (object) ref: `#/components/schemas/RoleSchema`
      - `lcPhone` [optional] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### PUT `/users/{userId}`

- **Summary**: Update User
- **Operation ID**: `update-user`
- **Scopes**: `users.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/UpdateUserDto`
  - Type: object
  - Properties:
    - `firstName` [optional] (string)
    - `lastName` [optional] (string)
    - `email` [optional] (string)
    - `emailChangeOTP` [optional] (string)
    - `password` [optional] (string)
    - `phone` [optional] (string)
    - `type` [optional] (string)
    - `role` [optional] (string)
    - `companyId` [optional] (string)
    - `locationIds` [optional] (array)
    - `permissions` [optional] (object) ref: `#/components/schemas/PermissionsDto`
    - `scopes` [optional] (array)
    - `scopesAssignedToOnly` [optional] (array)
    - `profilePhoto` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UserSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `id` [optional] (string)
      - `name` [optional] (string)
      - `firstName` [optional] (string)
      - `lastName` [optional] (string)
      - `email` [optional] (string)
      - `phone` [optional] (string)
      - `extension` [optional] (string)
      - `permissions` [optional] (object) ref: `#/components/schemas/PermissionsDto`
      - `scopes` [optional] (string) enum: `campaigns.readonly`, `campaigns.write`, `calendars.readonly`, `calendars/events.write`, `calendars/groups.write`, `calendars.write`, `contacts.write`, `contacts/bulkActions.write`, `workflows.readonly`, `workflows.write`, `triggers.write`, `funnels.write`, `forms.write`, `surveys.write`, `quizzes.write`, `websites.write`, `medias.write`, `medias.readonly`, `opportunities.write`, `opportunities/leadValue.readonly`, `opportunities/bulkActions.write`, `reporting/phone.readonly`, `reporting/adwords.readonly`, `reporting/facebookAds.readonly`, `reporting/attributions.readonly`, `prospecting/auditReport.write`, `reporting/reports.readonly`, `reporting/agent.readonly`, `reporting/reports.write`, `payments.write`, `payments/refunds.write`, `payments/records.write`, `payments/exports.write`, `payments/subscriptionsCancel.write`, `invoices.write`, `invoices.readonly`, `invoices/schedule.readonly`, `invoices/schedule.write`, `invoices/template.readonly`, `invoices/template.write`, `reputation/review.write`, `reputation/listing.write`, `reputation/reviewsAIAgents.write`, `conversations.write`, `conversations.readonly`, `conversations/message.readonly`, `conversations/message.write`, `contentAI.write`, `dashboard/stats.readonly`, `locations/tags.write`, `locations/tags.readonly`, `marketing.write`, `eliza.write`, `settings.write`, `socialplanner/post.write`, `socialplanner/account.readonly`, `socialplanner/account.write`, `socialplanner/category.readonly`, `socialplanner/category.write`, `socialplanner/csv.readonly`, `socialplanner/csv.write`, `socialplanner/group.write`, `socialplanner/hashtag.readonly`, `socialplanner/hashtag.write`, `socialplanner/oauth.readonly`, `socialplanner/oauth.write`, `socialplanner/post.readonly`, `socialplanner/recurring.readonly`, `socialplanner/recurring.write`, `socialplanner/review.readonly`, `socialplanner/review.write`, `socialplanner/rss.readonly`, `socialplanner/rss.write`, `socialplanner/search.readonly`, `socialplanner/setting.readonly`, `socialplanner/setting.write`, `socialplanner/stat.readonly`, `socialplanner/tag.readonly`, `socialplanner/tag.write`, `socialplanner/filters.readonly`, `socialplanner/medias.readonly`, `socialplanner/medias.write`, `socialplanner/watermarks.readonly`, `socialplanner/watermarks.write`, `socialplanner/metatag.readonly`, `socialplanner/facebook.readonly`, `socialplanner/linkedin.readonly`, `socialplanner/twitter.readonly`, `socialplanner/notification.readonly`, `socialplanner/notification.write`, `socialplanner/snapshot.readonly`, `socialplanner/snapshot.write`, `marketing/affiliate.write`, `blogs.write`, `membership.write`, `communities.write`, `gokollab.write`, `certificates.write`, `certificates.readonly`, `adPublishing.write`, `adPublishing.readonly`, `prospecting.write`, `prospecting.readonly`, `prospecting/reports.readonly`, `private-integration-location.readonly`, `private-integration-location.write`, `private-integration-company.readonly`, `private-integration-company.write`, `native-integrations.readonly`, `native-integrations.write`, `wordpress.write`, `wordpress.read`, `custom-menu-link.write`, `qrcodes.write`, `users/team-management.write`, `users/team-management.readonly`, `loginas.write`, `snapshots/api.readonly`, `snapshots/api.create`, `snapshots/api.edit`, `snapshots/api.push`, `snapshots/api.refresh`, `snapshots/api.share`, `snapshots/api.delete`, `internaltools.location-transfer.write`, `internaltools.location-transfer.readonly`, `affiliateportal.write`, `affiliateportal.readonly`, `companies.write`, `internaltools.billing.write`, `internaltools.billing.readonly`, `internaltools.billing-common.readonly`, `internaltools.billing-common.write`, `voice-ai-agents.write`, `voice-ai-agent-goals.readonly`, `voice-ai-agent-goals.write`, `voice-ai-dashboard.readonly`, `agency/launchpad.write`, `agency/launchpad.readonly`, `launchpad.write`, `launchpad.readonly`, `text-ai-agents.write`, `text-ai-agent-goals.readonly`, `text-ai-agent-goals.write`, `text-ai-agent-training.write`
      - `roles` [optional] (object) ref: `#/components/schemas/RoleSchema`
      - `lcPhone` [optional] (object)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Wallet Charges

#### GET `/marketplace/billing/charges`

- **Summary**: Get all wallet charges
- **Operation ID**: `getCharges`
- **Scopes**: `charges.readonly`

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- `meterId` [optional] (string) - Billing Meter ID (you can find this on your app's pricing page on the developer portal)
- `eventId` [optional] (string) - Event ID / Transaction ID
- `userId` [optional] (string) - Filter results by User ID that your server passed via API when the charge was created
- `startDate` [optional] (string) - Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window.
- `endDate` [optional] (string) - Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window.
- `skip` [optional] (number) - Number of records to skip
- `limit` [optional] (number) - Maximum number of records to return

**Request Body**
- None

**Response Schema**
- **200**: Returns list of wallet charges
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `charges` [optional] (array)
      - `total` [optional] (number)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/marketplace/billing/charges`

- **Summary**: Create a new wallet charge
- **Operation ID**: `charge`
- **Scopes**: `charges.write`

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/RaiseChargeBodyDTO`
  - Type: object
  - Properties:
    - `appId` [required] (string)
    - `meterId` [required] (string)
    - `eventId` [required] (string)
    - `userId` [optional] (string)
    - `locationId` [required] (string)
    - `companyId` [required] (string)
    - `description` [required] (string)
    - `price` [optional] (number)
    - `units` [required] (string)
    - `eventTime` [optional] (string)

**Response Schema**
- **201**: Charge created successfully
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
      - `chargeId` [optional] (string)
- **400**: Bad request
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `statusCode` [optional] (number)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### DELETE `/marketplace/billing/charges/{chargeId}`

- **Summary**: Delete a wallet charge
- **Operation ID**: `deleteCharge`
- **Scopes**: `charges.write`

**Request Header Parameters**
- None

**Path Parameters**
- `chargeId` [required] (string) - ID of the charge to delete

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Charge deleted successfully
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `success` [optional] (boolean)
- **404**: Charge not found
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `statusCode` [optional] (number)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/marketplace/billing/charges/{chargeId}`

- **Summary**: Get specific wallet charge details
- **Operation ID**: `getSpecificCharge`
- **Scopes**: `charges.readonly`

**Request Header Parameters**
- None

**Path Parameters**
- `chargeId` [required] (string) - ID of the charge to retrieve

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Returns charge details
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `refunded` [optional] (boolean)
      - `currency` [optional] (string)
      - `appId` [optional] (string)
      - `meterId` [optional] (string)
      - `chargeId` [optional] (string)
      - `entityType` [optional] (string)
      - `entityId` [optional] (string)
      - `amountCharged` [optional] (number)
      - `pricePerUnit` [optional] (number)
      - `transactionType` [optional] (string)
      - `units` [optional] (number)
      - `meta` [optional] (object)
      - `createdAt` [optional] (string)
      - `updatedAt` [optional] (string)
- **404**: Charge not found
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `message` [optional] (string)
      - `statusCode` [optional] (number)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### GET `/marketplace/billing/charges/has-funds`

- **Summary**: Check if account has sufficient funds
- **Operation ID**: `hasFunds`
- **Scopes**: `charges.readonly`

**Request Header Parameters**
- None

**Path Parameters**
- None

**Query Parameters**
- None

**Request Body**
- None

**Response Schema**
- **200**: Returns fund availability status
  - Content-Type: `application/json`
    - Type: object
    - Properties:
      - `hasFunds` [optional] (boolean)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Workflow

#### DELETE `/contacts/{contactId}/workflow/{workflowId}`

- **Summary**: Delete Contact from Workflow
- **Operation ID**: `delete-contact-from-workflow`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `workflowId` [required] (string) - Workflow Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateWorkflowDto`
  - Type: object
  - Properties:
    - `eventStartTime` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsWorkflowSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


#### POST `/contacts/{contactId}/workflow/{workflowId}`

- **Summary**: Add Contact to Workflow
- **Operation ID**: `add-contact-to-workflow`
- **Scopes**: `contacts.write`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- `contactId` [required] (string) - Contact Id
- `workflowId` [required] (string) - Workflow Id

**Query Parameters**
- None

**Request Body**
- Body is **required**.
- Content-Type: `application/json`
  - Schema ref: `#/components/schemas/CreateWorkflowDto`
  - Type: object
  - Properties:
    - `eventStartTime` [optional] (string)

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/ContactsWorkflowSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `succeded` [optional] (boolean)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


### Workflows

#### GET `/workflows/`

- **Summary**: Get Workflow
- **Operation ID**: `get-workflow`
- **Scopes**: `workflows.readonly`

**Request Header Parameters**
- `Version` [required] (string) - API Version | enum: `2021-07-28`

**Path Parameters**
- None

**Query Parameters**
- `locationId` [required] (string)

**Request Body**
- None

**Response Schema**
- **200**: Successful response
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/GetWorkflowSuccessfulResponseDto`
    - Type: object
    - Properties:
      - `workflows` [optional] (array)
- **400**: Bad Request
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/BadRequestDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
- **401**: Unauthorized
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnauthorizedDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (string)
      - `error` [optional] (string)
- **422**: Unprocessable Entity
  - Content-Type: `application/json`
    - Schema ref: `#/components/schemas/UnprocessableDTO`
    - Type: object
    - Properties:
      - `statusCode` [optional] (number)
      - `message` [optional] (array)
      - `error` [optional] (string)


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
