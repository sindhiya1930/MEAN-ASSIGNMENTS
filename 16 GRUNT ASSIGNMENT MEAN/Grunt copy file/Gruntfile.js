module.exports = function(grunt) {

grunt.initConfig({
    copy: {
        backup: {
           files: [{
              expand: true,
              src: ['js/first.js'],    // creating a backup of README.md
              rename: function () {       // specifies the rename function
                 return 'dest/copy.js'; // returns a string with the complete destination
              }
           }]
        }
     }
  });

          //load concat plugin
          grunt.loadNpmTasks('grunt-contrib-copy');
          
              //create default task
              grunt.registerTask("default", ["copy"]);
          
          };