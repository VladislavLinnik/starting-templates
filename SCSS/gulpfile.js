var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
    return gulp.src('./src/sass/**/*.+(scss|sass)')
                .pipe(autoprefixer({
                    browsers: ['> 0.1%']
                }))
                .pipe(sassGlob())
                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                .pipe(gulp.dest('./app/css/'))
});

gulp.task('default', ['styles']);

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', ['default']);
});