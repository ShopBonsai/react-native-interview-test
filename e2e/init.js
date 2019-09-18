import detox from 'detox';
import adapter from 'detox/runners/jest/adapter';
import specReporter from 'detox/runners/jest/specReporter';
import assignReporter from 'detox/runners/jest/assignReporter';
import mockAsyncStorage from 'mock-async-storage';

import packageJson from '../package.json';

// Mock Async Storage
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

// Set the default timeout
jest.setTimeout(120000);

// Environment reporters
jasmine.getEnv().addReporter(adapter);
jasmine.getEnv().addReporter(specReporter);
jasmine.getEnv().addReporter(assignReporter);

beforeAll(async () => {
  await detox.init(packageJson.detox);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
