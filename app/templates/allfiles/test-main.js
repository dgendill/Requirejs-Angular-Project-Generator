var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push("../" + pathToModule(file));
  }
});

var config = require([
    'base/app/require.config.js',
    'base/app/loadOrder.js'
], function(config, loadOrder) {

    require.config(_.extend(config, {
        // Karma serves files under /base,
        // which is the basePath from your config file
        baseUrl: '/base/app',
        deps : loadOrder,
        callback: function() {
            // dynamically load all test files
            require(allTestFiles, function() {
                window.__karma__.start();
            });
        }
    }));

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = "NG_DEFER_BOOTSTRAP!";
});

