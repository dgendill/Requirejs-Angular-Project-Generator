require.config({
	paths: {
		angular: "../bower_components/angular/angular",
		angularRoute: "../bower_components/angular-route/angular-route"
	},
	shim: {
		"angular" : {"exports" : "angular"},
        "controllers": ["angular"],
        "filters": ["angular"],
        "directives": ["angular"],
		"angularRoute": ["angular"],
	}
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    // Load angular for the first time
	"angular",

	// Define the angular module for the app
	// and require angular module dependencies
	"app",

	// Include controllers
	"includes/controllers",

	// Include directives
	"includes/directives",

	// Include filters
	"includes/filters",

	// Configure application (routes, providers, etc)
	"app.config",

	// Run compile code
	"app.run",

], function(angular, app) {
	"use strict";

    angular.resumeBootstrap();

});
