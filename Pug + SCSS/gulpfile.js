'use strict';

const del = require('del');



global.$ = {
  path: {
    task: require('./gulpTasks/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  del: require('del')
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});


$.gulp.task('serve', function() {
    $.browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    $.browserSync.watch('build', $.browserSync.reload);
});


$.gulp.task('default', $.gulp.series(
  'sass', 'pug', 'scripts', 'libs', 'delImages', 'imagesGet',
  $.gulp.parallel('serve', 'watch')
));


$.gulp.task('delImages', function(){
  return del('build/images');
});




