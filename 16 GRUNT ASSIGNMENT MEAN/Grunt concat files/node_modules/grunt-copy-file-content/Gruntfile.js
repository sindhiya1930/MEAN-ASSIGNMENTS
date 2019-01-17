/*
 * grunt-copy-file-content
 *
 * Copyright (c) 2014 Keeley Carrigan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    clean: {
      tests: ['tmp']
    },
    copy_file_content: {
      htmlCopy: {
        options: {
          srcStart: '<!-- start -->',
          srcEnd: '<!-- end -->',
          destStart: '<!-- start -->',
          destEnd: '<!-- end -->'
        },
        files: {
          'tmp/html/somefile2.html': ['tmp/html/someotherfile.html', 'tmp/html/somefile.html']
        }
      },
      cssCopy: {
        options: {
          entireFile: true,
          destStart: '<style>',
          destEnd: '</style>'
        },
        files: {
          'tmp/html/somefile.html': 'tmp/css/main.css'
        }
      }
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Setup a test helper to create some folders to clean.
  grunt.registerTask('copy', 'Copy fixtures to a temp location.', function() {
    grunt.file.copy('test/fixtures/css/main.css', 'tmp/css/main.css');
    grunt.file.copy('test/fixtures/html/somefile.html', 'tmp/html/somefile.html');
    grunt.file.copy('test/fixtures/html/somefile2.html', 'tmp/html/somefile2.html');
    grunt.file.copy('test/fixtures/html/someotherfile.html', 'tmp/html/someotherfile.html');
  });

  // Whenever the 'test' task is run, first create some files to be cleaned,
  // then run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'copy_file_content', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
