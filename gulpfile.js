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
  "app_licence"
]

gulp.task("typeScript", function () {

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

gulp.task("sass", function () {

  entries.forEach(entry => {

    return gulp.src("app/"+entry+"/sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("app/"+entry+"/css"));

  });

});

gulp.task("pug", function buildHTML() {

  entries.forEach(entry => {

    return gulp.src("app/"+entry+"/pug/**/*.pug")
    .pipe(pug({
      pretty: true

    }))
    .pipe(gulp.dest("app/"+entry));

  });

});

gulp.task("html",["typeScript", "sass", "pug"], function () {
  
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

gulp.task("build", function(callback){
	gulpSequence(
    ["typeScript", "sass", "pug", "html", "images"],
    callback);
});

gulp.task("default", function () {
  gulp.start("build");
});
