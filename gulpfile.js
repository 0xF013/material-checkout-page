'use strict';
 
var 
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  
  sassPath = './style.sass',
  fontsPath = './node_modules/materialize-css/font/**/*';

gulp.task('sass', ['fonts'], function() {
  return gulp.src(sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function() {
  return gulp.src(fontsPath)
    .pipe(gulp.dest('./dist/fonts'));
});
 
gulp.task('watch', ['build'], function() {
  gulp.watch(sassPath, ['sass']);
}); 

gulp.task('build', ['fonts', 'sass']);