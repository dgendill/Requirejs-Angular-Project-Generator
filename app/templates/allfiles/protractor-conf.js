// An example configuration file.
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl : 'http://127.0.0.1:8000',

  // Do not start a Selenium Standalone sever - only run this using chrome.
  // chromeOnly: true,
  // chromeDriver: 'C:/Users/Dom/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['tests/e2e/**/*_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose : true,
    defaultTimeoutInterval: 30000
  }
};
