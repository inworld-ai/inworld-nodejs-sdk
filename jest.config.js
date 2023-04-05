module.exports = {
  coveragePathIgnorePatterns: ['node_modules', 'proto'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '@proto/(.*)': '<rootDir>/proto/$1',
    '@root/(.*)': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: ['__tests__/helpers.ts'],
};
