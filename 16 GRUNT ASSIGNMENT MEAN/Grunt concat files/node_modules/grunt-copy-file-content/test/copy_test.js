'use strict';

var grunt = require('grunt');
var copyContent = require('../tasks/copy-file-content')(grunt);

function getNormalizedFile(filepath) {
  return grunt.util.normalizelf(grunt.file.read(filepath));
}

exports.copy_file_content = {
	copy_entire_file: function (test) {
		test.expect(1);

		var actual = getNormalizedFile('tmp/html/somefile.html');
		var expected = getNormalizedFile('test/expected/somefile.html');

		test.equal(actual, expected, 'should describe what happens when an entire file is copied.');

		test.done();
	},
	copy_multiple_files: function (test) {
		test.expect(1);

		var actual = getNormalizedFile('tmp/html/somefile2.html');
		var expected = getNormalizedFile('test/expected/somefile2.html');

		test.equal(actual, expected, 'should describe what happens when multiple files are copied into another.');

		test.done();
	}
};