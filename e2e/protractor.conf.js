// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/*.feature'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./steps/timeout.ts', './steps/*.steps.ts'],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    'no-colors': true,
    // <boolean> invoke formatters without executing steps
    dryRun: false,// <boolean> invoke formatters without executing steps
    format: [
      
    ],
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};