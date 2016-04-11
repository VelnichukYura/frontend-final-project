var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var git = require('gulp-git');
var browserSync = require('browser-sync').create();
var imageop = require('gulp-image-optimization');


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


gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});

gulp.task('watcher', function () {
    gulp.watch('src/jade/*.jade', ['jade'])
    gulp.watch('src/scss/*.scss', ['sass'])
    //sass
    //jade
});


gulp.task('serve', ['sass', 'jade'], function () {

    browserSync.init({
        server: "./dist"
    });

});

gulp.task('start:client', ['start:server', 'sass', 'jade'], function () {
    openURL('http://localhost:9001');
});

gulp.task('start:server', function() {
    $.connect.server({
        root: ['dist'],
        livereload: true,
        port: 9001
    });
});


gulp.task('default', ['watch']);

