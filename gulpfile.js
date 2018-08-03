"use strict";
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var useref = require("gulp-useref");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var gulpSequence = require("gulp-sequence")
var mocha = require("gulp-mocha");
var fs = require('fs');
var checkFilesExist = require('check-files-exist');

var entries = [
  "app_test1",
  "app_test2"
]

gulp.task("typeScriptEach", function () {
  entries.forEach(entry => {
    return browserify({
      basedir: "app/"+entry+"/typeScript/",
      debug: true,
      entries: "app.ts",
      cache: {},
      packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("app/"+entry+"/js"));
  });
});

gulp.task("sassEach", function () {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("app/"+entry+"/css"));
  });
});

gulp.task("pugEach", function buildHTML() {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/pug/**/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("app/"+entry));
  });
});

gulp.task("htmlEach",["typeScriptEach", "sassEach", "pugEach"], function () {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/*.html")
      .pipe(useref())
      .pipe(gulp.dest("dist/"+entry));
  });
});

gulp.task('images', function () {
  var output = gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
    return output;
});

gulp.task("mocha", function () {
  return gulp.src("app/**/*.test.ts")
      .pipe(mocha({
          reporter: "spec",
          require: ["ts-node/register"]
      }));
});


gulp.task("build", function(callback){
	gulpSequence(
    ["typeScriptEach", "sassEach", "pugEach"],
    callBack)
});

function callBack(){

  console.log("hello");

}

gulp.task("publish", function(callback){
	gulpSequence(
    ["htmlEach", "images", "mocha"],
    callback);
});

gulp.task("default", function () {
  gulp.start("build");
});


