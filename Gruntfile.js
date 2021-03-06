var grunt = require('grunt');
require('load-grunt-tasks')(grunt);

var files = ['modules/**/*.js', 'public/javascripts/**/*.js', 'routes/**/*.js', 'test/**/*.js'];

grunt.initConfig({
  mochacli: {
      options: {
          reporter: 'spec',
          bail: false
      },
      all: ['test/lib/*.js']
  },
  jshint: {
      files: files,
      options: {
          jshintrc: '.jshintrc'
      }
  },
  jscs: {
      files: {
          src: files
      },
      options: {
          config: '.jscsrc',
          esnext: true
      }
  },
  jsbeautifier: {
      write: {
          files: {
              src: files
          },
          options: {
              config: '.beautifyrc'
          }
      }
  }
});
grunt.registerTask('test', ['jshint', 'jscs', 'mochacli']);