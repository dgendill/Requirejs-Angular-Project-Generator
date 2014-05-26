define([], function() {
    return {
        paths: {
            angular: "../bower_components/angular/angular",
            angularRoute: "../bower_components/angular-route/angular-route",
            angularMocks : "../bower_components/angular-mocks/angular-mocks"
        },
        shim: {
            "angular" : {"exports" : "angular"},
            "controllers": ["angular"],
            "filters": ["angular"],
            "directives": ["angular"],
            "angularRoute": ["angular"],
            "angularMocks": ["angular"],
        }
    };
});
