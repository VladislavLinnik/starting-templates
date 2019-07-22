const sass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      bulkSass = require('gulp-sass-bulk-import'),
      postcss = require('gulp-postcss'),
      errorHandler = require('gulp-plumber-error-handler'),
      autoprefixer = require('gulp-autoprefixer');


module.exports = function(){
  $.gulp.task('sass', () => {
    return $.gulp.src('app/sass/main.scss')
      .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
      .pipe(bulkSass())
      .pipe(sass())
      .pipe(postcss([
        require('postcss-import'),
        require('postcss-discard-comments'),
        require('postcss-discard-duplicates'),
      ]))
      .pipe(autoprefixer({
        browsers: ['> 0.1%'],
        cascade: false
      }))
      .pipe($.gulp.dest('build/css'));
  });
};