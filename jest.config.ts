import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^meorphis-test-9-y581b6$': '<rootDir>/src/index.ts',
    '^meorphis-test-9-y581b6/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^meorphis-test-9-y581b6/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
