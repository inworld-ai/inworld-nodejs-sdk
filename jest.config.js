module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', 'generated'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '@proto/(.*)': '<rootDir>/generated/proto/$1',
    '@root/(.*)': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: ['__tests__/helpers.ts'],
};
