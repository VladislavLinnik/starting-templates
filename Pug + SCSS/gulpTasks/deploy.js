const ghPages = require('gulp-gh-pages');

module.exports = function(){
  $.gulp.task('deploy', () => {
    return $.gulp.src('build/**/*')
      .pipe(ghPages());
  });
};