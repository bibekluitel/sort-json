module.exports = {
  roots: ['<rootDir>'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(s?css|less)$": "<rootDir>/test/style-mock.ts"
  },
};