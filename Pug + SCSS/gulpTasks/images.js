const plumber = require('gulp-plumber'),
      errorHandler = require('gulp-plumber-error-handler'),
      imagemin = require('gulp-imagemin'),
      del = require('del'),
      changed = require('gulp-changed');


module.exports = function() {
  $.gulp.task('imagesGet', () => {
    return $.gulp.src('app/images/**/*')
      .pipe(plumber({ errorHandler: errorHandler('Error in img task') }))
      .pipe(changed('build/images'))
      .pipe(imagemin())
      .pipe($.gulp.dest('build/images'))
  });

  $.gulp.task('delImages', () => {
    return del('build/images');
  });
};