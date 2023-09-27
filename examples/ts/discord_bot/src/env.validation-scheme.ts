import * as Joi from 'joi';

export const validationSchema = Joi.object({
  INWORLD_KEY: Joi.string().required(),
  INWORLD_SECRET: Joi.string().required(),
  INWORLD_SCENE: Joi.string().required(),
  DISCORD_BOT_TOKEN: Joi.string().required(),
  DISCORD_MESSAGES_FETCH_LIMIT: Joi.number().default(100),
  MAX_RETRY_ATTEMPTS: Joi.number().default(1),
  SENTRY_DSN: Joi.string(),
  SENTRY_ENVIRONMENT: Joi.string(),
  SENTRY_RELEASE: Joi.string(),
  CHANNELS_WHITELIST: Joi.string(),
  USERS_WHITELIST: Joi.string(),
});
