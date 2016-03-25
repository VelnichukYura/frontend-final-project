/**
 * Created by wwws- on 25.03.2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade');


gulp.task('default', function() {
    // place code for your default task here
});

//jade
gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'))
});

//sass
gulp.task('sass', function () {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

//watch
gulp.task('watch',function() {
    gulp.watch('src/scss/style.scss', ['sass'])
    gulp.watch('./src/jade/*.jade', ['jade'])

});

//defaultt
gulp.task('default', ['jade', 'sass','watch']);
