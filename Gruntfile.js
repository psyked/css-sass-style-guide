module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        assemble: {
            options: {
                postprocess: require('pretty')
            },
            demo: {
                options: {
                    partials: ['templates/includes/*.hbs'],
                    layoutdir: 'templates',
                    layout: 'index.html'
                },
                src: ['*.md'],
                dest: './'
            }
        },

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                options: { livereload: true },
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },

            html_source: {
                files: ['*.md', 'templates/**'],
                tasks: ['assemble']
            },

            html: {
                options: { livereload: true },
                files: ['*.html']
            },

            js: {
                options: { livereload: true },
                files: 'js-source/**/*.js',
                tasks: ['uglify']
            }
        },

        open: {
            server: {
                path: 'http://localhost:9000'
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: "*",
                    base: "./",
                    middleware: function (connect, options) {
                        var path = require('path');
                        return [
                            require('connect-livereload')(),
                            connect.static(path.resolve('.'))
                        ];
                    }
                }
            }
        },

        uglify: {
            js: {
                options: {
                    sourceMap: 'js/app.js.map'
                },
                files: {
                    'js/app.js': ['js-source/app.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['assemble', 'sass', 'uglify']);
    grunt.registerTask('default', ['build', 'connect', 'open', 'watch']);
}