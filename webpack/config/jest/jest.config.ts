import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).{tj]s?(x)})'],
};

export default config;
