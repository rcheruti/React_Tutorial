
module.exports = function (grunt) {
  
  grunt.registerTask('default',['babel']);
  
  grunt.loadNpmTasks('grunt-babel');
  //grunt.loadNpmTasks('babel-preset-react');
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['react']
      },
      dist: {
        files: {
          'www/scripts.js': 'src/js/*'
        }
      }
    }
  });
  
  
};
