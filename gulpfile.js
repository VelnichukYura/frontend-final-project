var gulp =    require('gulp'),
    sass =    require('gulp-sass'),
    connect = require('gulp-connect'),
    jade =    require('gulp-jade');

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});
//html
gulp.task('html', function () {
    return gulp.src('dist/*.html')
        .pipe(connect.reload())

});

//jade
gulp.task('jade', function() {
    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            pretty: true

        }))

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
    gulp.watch('./src/jade/**/*.jade', ['jade'])
    gulp.watch('dist/*.html', ['html'])
    gulp.watch('./src/scss/**/*.scss', ['sass'])
});
//default task
gulp.task('default', ['connect','watch']);

//git commit
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
