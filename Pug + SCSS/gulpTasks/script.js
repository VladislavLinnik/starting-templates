const include = require('gulp-include'),
      babel = require('gulp-babel');


 module.exports = function() {
   $.gulp.task('scripts', () => {
     return $.gulp.src('app/js/app.js')
			 .pipe(include())
       .pipe(babel({
         presets: ['@babel/env']
       }))
       .pipe($.gulp.dest('build/js/'));
   });
 };
