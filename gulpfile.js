var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var git = require('gulp-git');
var browserSync = require('browser-sync').create();


// SASS TASK
gulp.task('sass', function(){
  return.gulp.src('src/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});


// JADE TASK
gulp.task('jade', function () {
 return. gulp.src('./src/jade/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./dist/'));
});

//BROWSER-SYNC TASK
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/jade/**/*.jade'), ['jade']);
  gulp.watch('dist/*.html', browserSync.reload);
});