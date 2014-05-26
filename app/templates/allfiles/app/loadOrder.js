define([], function() {

    return [
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

        // Include models
        "includes/models",

        // Configure application (routes, providers, etc)
        "app.config",

        // Run compile code
        "app.run",

    ];
});
