'use strict';
var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var useref = require("gulp-useref");
var sass = require('gulp-sass');

gulp.task("typeScript", function () {
  return browserify({
      basedir: '.',
      debug: true,
      entries: ['app/typeScript/application.ts'],
      cache: {},
      packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('application.js'))
  .pipe(gulp.dest("app/js"));
});

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('build', ['typeScript','sass', 'html'], function () {
  return gulp.src('dist/**/*');
});

gulp.task('default', function () {
  gulp.start('build');
});
