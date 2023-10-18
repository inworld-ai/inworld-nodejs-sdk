# Discord bot

This example project contains source code that implements [Discord bot](https://discordjs.guide/#before-you-begin) using [Nest.js](https://nestjs.com) and Inworld Node.js SDK.


## Table of Contents

- [Requirements](#requirements)
- [Instructions](#instructions)
- [Environment Variables](#environment)


## Requirements

- Node version 16+
- NPM version 8.19.4+
- Yarn version 1.22.19+
- [Inworld Integration API Key and Secret](https://studio.inworld.ai/)
- [An Inworld Scene ID](https://studio.inworld.ai/)
- [Discord bot ID](https://discordjs.guide/#before-you-begin)
- (Optional) A [channel whitelist](#environment)
- (Optional) A [user whitelist](#environment)


## Instructions

If you are setting this project up locally or on a remote server follow these instructions. If you're using an automatic hosting service, you will not need to perform this but review the list of [Environment Variables](#environment) to know how to setup the service. If you use automated hosting services which don't allow for a `.env` file to be created to store your Environment Variables you will need to use the `NOENV` environment variable defined in the [Environment Variables](#environment) section.

1. From the project directory type `yarn install` to download and install the project dependencies.
1. Copy the `.env-sample` file to `.evn`.
1. Open the `.env` file in an editor and enter your Inworld API Key, Secret and Scene ID after the `DISCORD_BOT_TOKEN`, `INWORLD_KEY`, `INWORLD_SECRET` and `INWORLD_SCENE` fields respectively.
1. If you wish to configure the channel or/and user whitelist, set `CHANNELS_WHITELIST` or/and `USERS_WHITELIST` follow the list of available environment variables [here](#environment)
1. Save and close the file.
1. Launch the application by typing in `yarn start` in dev mode. For prod use `yarn build && yarn start:prod`


## Environment

The following are the list of Environment Variables this project supports:

| Name                         | Type    | Description                                                  | Requirement                       |
| -----------------------------| ------ | ------------------------------------------------------------- | ---------------------------------- |
| INWORLD_KEY                  | String | The Inworld Workspace Integration API Key.                    | Required                           |
| INWORLD_SECRET               | String | The Inworld Workspace Integration API Secret.                 | Required                           |
| INWORLD_SCENE                | String | The Inworld Scene ID.                                         | Required                           |
| DISCORD_BOT_TOKEN            | String | Discord bot token.                                            | Required                           |
| DISCORD_MESSAGES_FETCH_LIMIT | Number | Number of chat messages that will be used as previous dialog. | Optional, default = 100            |
| MAX_RETRY_ATTEMPTS           | Number | Number of attempts to send a message to a character.          | Optional, default = 3              |
| CHANNELS_WHITELIST           | String | List of channels where the bot will respond.                  | Optional                           |
| USERS_WHITELIST              | String | List of users with whom the bot will chat in DM.              | Optional                           | 
| SENTRY_DSN                   | String |                                                               | Optional                           |
| SENTRY_ENVIRONMENT           | String |                                                               | Optional                           |
| SENTRY_RELEASE               | String |                                                               | Optional                           |
| NOENV                        | Any    | Use if this service is deployed without an .env file.         | Optional                           |
