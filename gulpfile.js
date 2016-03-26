/**
 * Created by wwws- on 25.03.2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    jade = require('gulp-jade');
//conect
gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true,
        port:8888
    });
    opn('http://localhost:8888')
});
//jade
gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('src/jade/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(connect.reload())
        .pipe(gulp.dest('./dist/'))
});
//sass
gulp.task('sass', function () {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(connect.reload())
        .pipe(gulp.dest('dist/css'));
});
//watch
gulp.task('watch',function() {
    gulp.watch('src/jade/*.jade', ['jade'])
    gulp.watch('src/scss/style.scss', ['sass'])
});
//default task
gulp.task('default', ['connect','watch']);
