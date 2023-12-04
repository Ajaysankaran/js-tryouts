
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {

    // if your using tsconfig.paths thers is no harm in telling jest
    '@/(.*)$': '<rootDir>/src/$1',

    // mocking assests and styling
    // '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/tests/mocks/fileMock.ts',
    // '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.ts',
    /* mock models and services folder */
    // '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.ts',
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['./setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      { tsconfig: './tsconfig.jest.json' },
    ],
  },
};