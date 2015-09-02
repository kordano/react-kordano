module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist :{
        src: [
          'src/core.js',
          'src/libs/*.js'
        ],
        dest: 'js/build/kordano.js'
      }
    },
    uglify: {
      build: {
        src: "js/build/kordano.js",
        dest: "js/build/kordano.min.js"
      }
    },
    watch: {
      scripts: {
        files: ["js/*.js"],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
};
