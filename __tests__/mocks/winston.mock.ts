export const createLogger = jest.fn().mockImplementation(() => ({
  debug: debugFn,
  error: errorFn,
}));
export const debugFn = jest.fn();
export const errorFn = jest.fn();
export const fileTransport = jest.fn();
export const consoleTransport = jest.fn();

jest.mock('winston', () => ({
  createLogger,
  format: {
    combine: jest.fn(),
    timestamp: jest.fn(),
    errors: jest.fn(),
    splat: jest.fn(),
    json: jest.fn(),
  },
  transports: {
    File: fileTransport,
    Console: consoleTransport,
  },
}));
