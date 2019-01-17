"use strict";
 
var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
 
gulp.task("concatIndex", function () {
    gulp.src(['partials/header.html', 'partials/indexBody.html', 'partials/footer.html'])
        .pipe(concat("index.html"))
        .pipe(gulp.dest("./"))
});
 
gulp.task("build", gulp.series('concatIndex', function () {
    browserSync.reload();
}));
 
gulp.task('default',gulp.series('build', function () {
    browserSync.init({
        open: false,
        server: {
            baseDir: "./"
        }
    });
 
}));