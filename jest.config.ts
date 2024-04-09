import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@stainless-temp/meorphis-test-8mppdo$': '<rootDir>/src/index.ts',
    '^@stainless-temp/meorphis-test-8mppdo/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@stainless-temp/meorphis-test-8mppdo/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
