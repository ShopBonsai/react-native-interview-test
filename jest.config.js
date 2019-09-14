module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    'source/**/*.js',
    '!source/screens/index.js',
    '!source/ducks/index.js',
    '!source/copy.js',
    '!source/palette.js',
  ],
  // eslint-disable-next-line id-length
  coveragePathIgnorePatterns: ['<rootDir>/source/env.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/scripts/assetsTransformer.js',
  },
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
};
