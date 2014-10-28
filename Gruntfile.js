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
        },

        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: [
                    "W005" // Found what might be an outdated version of jQuery;
                ]
            },
            files: [
                "_site/*.html"
            ]
        }
    });

    grunt.loadNpmTasks("grunt-html-validation");
    grunt.loadNpmTasks("grunt-bootlint");

    grunt.registerTask("default", [
        "validation",
        "bootlint"
    ]);
};
