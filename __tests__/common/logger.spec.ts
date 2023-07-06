import { v4 } from 'uuid';
import * as _winston from 'winston';

import {
  consoleTransport,
  createLogger,
  debugFn,
  errorFn,
  fileTransport,
} from '../mocks/winston.mock';

const message = {
  action: v4(),
  data: v4(),
  sessionId: v4(),
};
const err = new Error();

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
  process.env = {};
});

test('should log to files', () => {
  process.env.NODE_SDK_INWORLD_LOGGER_ENABLED = 'true';
  process.env.NODE_SDK_INWORLD_LOGGER_FOLDER = __dirname;

  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledWith(message);
  expect(errorFn).toHaveBeenCalledTimes(1);
  expect(errorFn).toHaveBeenCalledWith(err);
  expect(consoleTransport).toHaveBeenCalledTimes(0);
  expect(fileTransport).toHaveBeenCalledTimes(3);
});

test('should log to console', () => {
  process.env.NODE_SDK_INWORLD_LOGGER_ENABLED = 'true';

  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledWith(message);
  expect(errorFn).toHaveBeenCalledTimes(1);
  expect(errorFn).toHaveBeenCalledWith(err);
  expect(consoleTransport).toHaveBeenCalledTimes(2);
  expect(fileTransport).toHaveBeenCalledTimes(0);
});

test('should not log anything', () => {
  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(0);
  expect(debugFn).toHaveBeenCalledTimes(0);
  expect(errorFn).toHaveBeenCalledTimes(0);
  expect(consoleTransport).toHaveBeenCalledTimes(0);
  expect(fileTransport).toHaveBeenCalledTimes(0);
});
