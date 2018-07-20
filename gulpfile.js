"use strict";
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var useref = require("gulp-useref");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var gulpSequence = require("gulp-sequence")

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

gulp.task("typeScript", function () {

  entries.forEach(entry => {
    
    //var dir = entry.split("/");

    return browserify({
      basedir: "app/typeScript/",
      debug: true,
      entries: entry+"/app.ts",
      cache: {},
      packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("app/js/"+entry));

  });
  
});

gulp.task("sassEach", function () {

  entries.forEach(entry => {

    return gulp.src("app/"+entry+"/sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("app/"+entry+"/css"));

  });

});

gulp.task("sass", function () {
  return gulp.src("app/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/css"));
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

gulp.task("pug", function buildHTML() {
  return gulp.src("app/pug/**/*.pug")
  .pipe(pug({
    pretty: true

  }))
  .pipe(gulp.dest("app"));
});

gulp.task("htmlEach",["typeScriptEach", "sassEach", "pugEach"], function () {
  
  entries.forEach(entry => {
  
    return gulp.src("app/"+entry+"/*.html")
      .pipe(useref())
      .pipe(gulp.dest("dist/"+entry));

  });

});

gulp.task("html",["typeScript", "sass", "pug"], function () {
  return gulp.src("app/*.html")
    .pipe(useref())
    .pipe(gulp.dest("dist"));
});

gulp.task("build", function(callback){
	gulpSequence(
    ["typeScript", "sass", "pug", "html"],
    callback);
});

gulp.task("buildEach", function(callback){
	gulpSequence(
    ["typeScriptEach", "sassEach", "pugEach", "htmlEach"],
    callback);
});

gulp.task("default", function () {
  //gulp.start("build");
  gulp.start("buildEach");
});
