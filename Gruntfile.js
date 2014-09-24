module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        validation: {
            options: {
                "path": "/dev/null",
                "reportpath": false,
                "reset": true,
                "relaxerror": [
                    "Bad value X-UA-Compatible for attribute " +
                        "http-equiv on element meta."
                ]
            },
            files: {
                src: [
                    "_site/*.html"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-html-validation");

    grunt.registerTask("default", [
        "validation"
    ]);
};
