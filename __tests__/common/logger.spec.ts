import * as _path from 'path';
import { v4 } from 'uuid';
import * as _winston from 'winston';

import {
  consoleTransport,
  createLogger,
  debugFn,
  errorFn,
  fileTransport,
  warnFn,
} from '../mocks/winston.mock';

const message = {
  action: v4(),
  data: v4(),
  sessionId: v4(),
};
const warning = {
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
  process.env.NODE_SDK_INWORLD_LOGGER_LEVEL = 'debug';
  process.env.NODE_SDK_INWORLD_LOGGER_FILE = _path.join(__dirname, 'logs.log');

  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.warn(warning);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledWith(message);
  expect(warnFn).toHaveBeenCalledTimes(1);
  expect(warnFn).toHaveBeenCalledWith(warning);
  expect(errorFn).toHaveBeenCalledTimes(1);
  expect(errorFn).toHaveBeenCalledWith(err);
  expect(consoleTransport).toHaveBeenCalledTimes(0);
  expect(fileTransport).toHaveBeenCalledTimes(2);
});

test('should log to console', () => {
  process.env.NODE_SDK_INWORLD_LOGGER_LEVEL = 'debug';

  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.warn(warning);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledTimes(1);
  expect(debugFn).toHaveBeenCalledWith(message);
  expect(warnFn).toHaveBeenCalledTimes(1);
  expect(warnFn).toHaveBeenCalledWith(warning);
  expect(errorFn).toHaveBeenCalledTimes(1);
  expect(errorFn).toHaveBeenCalledWith(err);
  expect(consoleTransport).toHaveBeenCalledTimes(2);
  expect(fileTransport).toHaveBeenCalledTimes(0);
});

test('should not log anything', () => {
  const { Logger } = require('../../src/common/logger');
  const logger = Logger.getInstance();

  logger.debug(message);
  logger.warn(warning);
  logger.error(err);

  expect(createLogger).toHaveBeenCalledTimes(0);
  expect(debugFn).toHaveBeenCalledTimes(0);
  expect(warnFn).toHaveBeenCalledTimes(0);
  expect(errorFn).toHaveBeenCalledTimes(0);
  expect(consoleTransport).toHaveBeenCalledTimes(0);
  expect(fileTransport).toHaveBeenCalledTimes(0);
});
