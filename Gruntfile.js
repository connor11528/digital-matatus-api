'use strict';

// use Grunt to inject bower libraries
// ==============================

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'public'
    },

    // inject bower libraries into index.html
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    }
  });

  grunt.registerTask('build', [
    'bower-install'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
