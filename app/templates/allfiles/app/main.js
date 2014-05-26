require([
    'app/require.config',
    'app/loadOrder'
], function( config, loadOrder ) {

    require.config(config);

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = "NG_DEFER_BOOTSTRAP!";

    require(loadOrder, function(angular, app) {
        "use strict";

        angular.resumeBootstrap();

    });

});

