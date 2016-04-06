var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var git = require('gulp-git');
var browserSync = require('browser-sync').create();
var openURL = require('open');
var $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
    return gulp.src("src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));
});

gulp.task('jade', function () {
    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('commit', function () {
    git.exec({args: 'add -A'}, function (err, stdout) {
        git.exec({args: 'diff --name-status --cached --raw'}, function (err, stdout) {
            var message = stdout.replace(/\t/g, " - ").replace(/\n/g, ";\n");
            git.exec({args: 'commit -m "' + message + '"'}, function (err, stdout) {
                console.log(err);
                console.log(stdout);
            });
        });
    });
});

gulp.task('pull', function () {
    git.exec({args: 'pull'}, function (err, stdout) {
        console.log(err);
        console.log(stdout);
    });
});

gulp.task('push', function () {
    git.exec({args: 'push'}, function (err, stdout) {
        console.log(err);
        console.log(stdout);
    });
});

gulp.task('watcher', function () {
    var watcher = gulp.watch(['src/jade/index.jade', 'src/scss/style.scss'], ['jade', 'sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
gulp.task('start:client', ['start:server', 'sass', 'jade'], function () {
    openURL('http://localhost:9001');
});

gulp.task('start:server', function() {
    $.connect.server({
        root: ['dist'],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9001
    });
});

// Static Server + watching scss/jade files
gulp.task('serve', ['sass', 'jade'], function () {

    browserSync.init({
        server: "./dist"
    });

});

gulp.task('default', ['watcher']);