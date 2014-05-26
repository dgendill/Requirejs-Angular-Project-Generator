define([
	"angular",

    // Add additional module dependiences to the
    // includes/modules module
	"includes/modules",

	], function (angular) {
		"use strict";

		return angular.module("myappname", ["ngRoute", "ngMock"]);
});
