var gulp = require('gulp');
var jsValidate = require('gulp-jsvalidate');

gulp.task("javascript", function () {
  console.log("Validate JavaScript");
  return gulp.src("contents/javascripts/**.js")
      .pipe(jsValidate());
});