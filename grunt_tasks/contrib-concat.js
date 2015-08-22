/**
 * Grunt Contrib Concat
 * --------------------------------------------------
 * Repo: https://github.com/gruntjs/grunt-contrib-concat
 * --------------------------------------------------
 */

exports.task = {
  options: {
    separator: '\n\n'
  },
  build: {
    options: {
      banner: '<%= banner.exapanded %>'
    },
    files: {
      /* Main */
      '<%= path.temp %>/<%= path.scripts %>/app.js': [
        '<%= path.source %>/<%= path.scripts %>/vendors/modernizr.min.js',
        '<%= path.source %>/<%= path.scripts %>/vendors/jquery.min.js',
        '<%= path.source %>/<%= path.scripts %>/app.js',
      ],
      
    }
  }
};
