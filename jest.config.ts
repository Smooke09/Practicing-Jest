export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json"],
  setupFilesAfterEnv: ["./src/test/jest.setup.ts"],
  testMatch: ["<rootDir>src/**/*.test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
