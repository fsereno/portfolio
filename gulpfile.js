/* usage

  > gulp default - To build development resources 
  > gulp watch - To watch for changes on scss,ts,pug and re-compile.
  > gulp publish - To publish production resources to dist

*/

"use strict";
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var useref = require("gulp-useref");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var mocha = require("gulp-mocha");
var appConfig = require("./appConfig.json");

let runThis = (folder, method) => {
  method(folder);
};

let watchThis = (resources, dir, method) => {  
  var watcher = gulp.watch(resources);
  setupWatcherOnChangeEvent(watcher, dir, method);
};

function cssTask(folder){
 return gulp.src("app/"+folder+"/sass/styles.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+folder+"/css"));
}

function jsTask(folder){
  return browserify({
    basedir: "app/"+folder+"/typeScript/",
    debug: true,
    entries: "app.ts",
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest("app/"+folder+"/js"));
}

function htmlTask(folder) {
  return gulp.src("app/"+folder+"/pug/index.pug")
  .pipe(pug({
    pretty: true,
    locals:{appConfig: appConfig, application: folder}
  }))
  .pipe(gulp.dest("app/"+folder))
};

function userefTask(folder) {
  return gulp.src("app/"+folder+"/index.html")
  .pipe(useref())
  .pipe(gulp.dest("dist/"+folder));
};

function setupWatcherOnChangeEvent(watcher, dir, method){
  watcher.on('change', function(file, stats) {
    var windowsOS = (/\\/).test(file.path);
    var fileArray = windowsOS ? file.path.split("\\") : file.path.split("/");
    var folder = fileArray[fileArray.indexOf(dir) - 1];
    method(folder);
    console.log("Modified: " + file.path);
  });
}

var defaultTasks = (application) => {
  runThis(appConfig.prefix+application.folder, cssTask);
  runThis(appConfig.prefix+application.folder, jsTask);
  runThis(appConfig.prefix+application.folder, htmlTask);
}

var publishTasks = (application) => {
  runThis(appConfig.prefix+application.folder, userefTask);
}

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

gulp.task("watch", () => {
  watchThis("app/**/sass/*.scss", "sass", cssTask);
  watchThis("app/**/typeScript/**/*.ts", "typeScript", jsTask);
  watchThis("app/**/pug/*.pug", "pug", htmlTask);
});

gulp.task("publish",["mocha", "images"], () => {
  appConfig.applications.map(publishTasks);
});

gulp.task("default",["watch"], () => {
  appConfig.applications.map(defaultTasks);
});