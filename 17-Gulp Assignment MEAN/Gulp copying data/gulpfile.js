var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('first.txt')
    .pipe(rename({ basename: 'second'}))
    .pipe(gulp.dest('dest'));
});