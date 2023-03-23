import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
   transform: {
    "^.+\\.tsx?$": "ts-jest"
   },
   moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
