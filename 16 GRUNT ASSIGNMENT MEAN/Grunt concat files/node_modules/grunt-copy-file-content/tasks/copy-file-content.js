'use strict';

var grunt = require('grunt');

var options;

var sendError = function (message) {
  grunt.log.error(message);
  grunt.util.error(message);
};

var convertToRegex = function (pattern) {
  var regexCharacters = '\\[](){}^$.*+?|,/';

  if (typeof pattern === 'string') {
    regexCharacters.split('').forEach(function (character) {
      var characterAsRegex = new RegExp('(\\' + character + ')', 'g');

      pattern = pattern.replace(characterAsRegex, '\\$1');
    });
  } else {
    var message = 'Please pass a string for your start/end markers.';

    sendError(message);
  }

  return pattern;
};

var getSrcContent = function (src) {
  var regEx,
      content = '';

  src.forEach(function (file, index) {
    if (grunt.file.exists(file) && grunt.file.isFile(file)) {
      var fileContent;

      if (options.entireFile) {
        fileContent = grunt.file.read(file);
      } else {
        regEx = new RegExp('(' + convertToRegex(options.srcStart) + ')([\\s\\S]*?)(' + convertToRegex(options.srcEnd) + ')');
        fileContent = regEx.exec(grunt.file.read(file))[2];
      }
      
      if (index > 0 && index < src.length - 1) {
        content += "\n";
      }

      content += fileContent;

    } else {
      var message = 'Source file (' + file + ') does not exist.';

      sendError(message);
    }
  });

  return content;
};

var insertSrcContent = function (file, srcContent) {
  var regEx = new RegExp('(' + convertToRegex(options.destStart) + ')([\\s\\S]*?)(' + convertToRegex(options.destEnd) + ')'),
      newContent = options.destStart + '\n' + srcContent + '\n' + options.destEnd;

  if (grunt.file.exists(file) && grunt.file.isFile(file)) {
      newContent = grunt.file.read(file).replace(regEx, newContent);
  } else {
    var message = 'Destination file (' + file + ') does not exist.';

    sendError(message);
  }

  return newContent;
};

var copyContent = function () {
  var combinedContent;

  options = this.options({
              entireFile: false
            });

  this.files.forEach(function (file) {
    if (((!options.srcStart || !options.srcEnd) && !options.entireFile) || !options.destStart || !options.destEnd) {
      var message = 'You must provide start and stop markers.';

      sendError(message);
    }

    combinedContent = insertSrcContent(file.dest, getSrcContent(file.orig.src));

    grunt.file.write(file.dest, combinedContent);
  });
  
};

module.exports = function (grunt) {
  grunt.registerMultiTask('copy_file_content', 'This plugin can copy portions of one file into another file using start/stop markers.', copyContent);
};