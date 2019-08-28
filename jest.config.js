module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)test.js'],
  setupFiles: ['./jest.setup.js'],
  collectCoverageFrom: [
    'source/**/*.js',
    'source/**/**/*.js',
    '!source/utils/fetcher.js',
    '!source/screens/index.js',
    '!source/ducks/index.js',
    '!source/copy.js',
    '!source/palette.js',
    '!source/redux/reducers/*Reducer.js',
    '!source/index.js'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/source/env.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/scripts/assetsTransformer.js'
  }
}
