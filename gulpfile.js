'use strict';
var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var useref = require("gulp-useref");

gulp.task("typeScript", function () {
  return browserify({
      basedir: '.',
      debug: true,
      entries: ['app/scripts/application.ts'],
      cache: {},
      packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('application.js'))
  .pipe(gulp.dest("dist/scripts"));
});

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['typeScript', 'html'], function () {
  return gulp.src('dist/**/*');
});

gulp.task('default', function () {
  gulp.start('build');
});
