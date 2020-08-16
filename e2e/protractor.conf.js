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
    // <boolean> invoke formatters without executing steps
    dryRun: false,// <boolean> invoke formatters without executing steps
    //make sure you are not using multi-capabilities    
    format: 'json:./report/results.json'
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  },
//Create html report
onComplete: () => {
  var reporter = require('cucumber-html-reporter');
  var options = {
    theme: 'bootstrap',
    jsonFile: './report/results.json',
    //output: './results.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"[version]",
        "Test Environment": "[environment]",
        "Browser": "[browser version]",
        "Platform": "Manjaro Arch Linux",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    },
    output: './report/cucumber_report.html',
  };
   reporter.generate(options);
 }
};