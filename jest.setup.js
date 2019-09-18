import mockAsyncStorage from 'mock-async-storage';

// Mock Async Storage
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
