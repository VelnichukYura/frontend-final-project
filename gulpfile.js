var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var git = require('gulp-git');

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
