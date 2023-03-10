module.exports = {
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
  resetMocks: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['lcov', 'json'],
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss|css|sass|jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/structure/components$1',
    '^@commons(.*)$': '<rootDir>/src/structure/commons$1',
    '^@layout(.*)$': '<rootDir>/src/structure/layout$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@typesUtils(.*)$': '<rootDir>/src/types$1',
  },
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
};
