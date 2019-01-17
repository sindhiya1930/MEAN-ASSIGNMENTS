module.exports = function(grunt) {
    
        //project configurations
        grunt.initConfig({
    
            concat : {
                dist : {
                    src : ["js/*.js"],
                    dest : "dist/script.js"
                }
            }

    
        });
    
        //load concat plugin
        grunt.loadNpmTasks('grunt-contrib-concat');
    
        //create default task
        grunt.registerTask("default", ["concat"]);
    
    };