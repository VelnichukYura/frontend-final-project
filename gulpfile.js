var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

// SERVER + WATCH
gulp.task('serve', ['sass', 'jade'], function() {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch("src/scss/**/*.scss", ['sass']);
  gulp.watch('src/**/*.jade', ['jade']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
  });

// SASS TASK
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
});

// JADE TASK
gulp.task('jade', function () {
 return gulp.src('src/jade/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('dist/'));
});

//SERVE
gulp.task('default', ['serve']);