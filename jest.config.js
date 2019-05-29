module.exports = {
  roots: ['<rootDir>/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['cobertura', 'html'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
      },
    ],
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        includeFailureMsg: true,
        outputPath: 'reports/test-report.html',
      },
    ],
  ],
  collectCoverageFrom: ['src/**/*.js'],
  setupFiles: ['dotenv/config'],
};
