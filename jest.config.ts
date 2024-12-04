import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@styles/(.*)$': '<rootDir>/src/shared/styles/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default jestConfig;
//
// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   roots: ['<rootDir>/src'],
//   modulePaths: ['<rootDir>'],
//   moduleDirectories: ['node_modules', 'src'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '^@public/(.*)$': '<rootDir>/public/$1',
//     '^@styles/(.*)$': '<rootDir>/src/shared/styles/$1',
//     '^@pages/(.*)$': '<rootDir>/src/pages/$1',
//     '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
//     '^@features/(.*)$': '<rootDir>/src/features/$1',
//     '^@entities/(.*)$': '<rootDir>/src/entities/$1',
//     '^@shared/(.*)$': '<rootDir>/src/shared/$1',
//
//     // '^.+\\.(css|scss)$': 'identity-obj-proxy',
//   },
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// };
