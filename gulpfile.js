/* usage

  > gulp default - To build development resources 
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

var entries = [
  "app_test1",
  "app_test2"
]

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
    pretty: true
  }))
  .pipe(gulp.dest("app/"+folder))
};

function setupWatcherOnChangeEvent(watcher, dir, method){
  watcher.on('change', function(file, stats) {
    var windowsOS = (/\\/).test(file.path);
    var fileArray = windowsOS ? file.path.split("\\") : file.path.split("/");
    var folder = fileArray[fileArray.indexOf(dir) - 1];
    console.log(file);
    console.log(folder);
    method(folder);
  });
}

var userefTask = (folder) => {
  return gulp.src("app/"+folder+"/index.html")
  .pipe(useref())
  .pipe(gulp.dest("dist/"+folder));
};

var defaultTasks = (folder) => {
  runThis(folder, cssTask);
  runThis(folder, jsTask);
  runThis(folder, htmlTask);
}

var publishTasks = (folder) => {
  userefTask(folder)
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
  entries.map(publishTasks);
});

gulp.task("default", () => {
  entries.map(defaultTasks);
});