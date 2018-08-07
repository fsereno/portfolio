/* 

usage
 
  > gulp default - To build development resources, start the dev server and watch for changes.
    Navigate to http://localhost:8080 to see the application running.
  
  > gulp publish - To publish production resources to dist

*/

"use strict";
var gulp = require("gulp"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    tsify = require("tsify"),
    useref = require("gulp-useref"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    mocha = require("gulp-mocha"),
    connect = require("gulp-connect"),
    logger = require('gulp-logger'),
    logSymbols = require('log-symbols'),
    appConfig = require("./appConfig.json");

let runThis = (folder, method) => {
  method(folder);
};

let watchThis = (resources, dir, method) => {  
  var watcher = gulp.watch(resources);
  setupWatcherOnChangeEvent(watcher, dir, method);
};

function cssTask(folder){
 return gulp.src("app/"+folder+"/sass/styles.scss")
 .pipe(logger({
    before: 'cssTask started...',
    after: 'cssTask complete!',
    extname: '.css',
    showChange: false,
    dest: "../css",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+folder+"/css"))
  .pipe(connect.reload());
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
  .pipe(gulp.dest("app/"+folder+"/js"))
  .pipe(connect.reload())
  .pipe(logger({
    before: 'jsTask started...',
    after: 'jsTask complete!',
    extname: '.js',
    showChange: false,
    dest: "../js",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }));
}

function htmlTask(folder) {
  return gulp.src("app/"+folder+"/pug/index.pug")
  .pipe(logger({
    before: 'htmlTask started...',
    after: 'htmlTask complete!',
    extname: '.html',
    showChange: false,
    dest: "../",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(pug({
    pretty: true,
    locals:{appConfig: appConfig, application: folder}
  }))
  .pipe(gulp.dest("app/"+folder))
  .pipe(connect.reload());
};

function userefTask(folder) {
  return gulp.src("app/"+folder+"/index.html")
  .pipe(logger({
    before: 'userefTask started...',
    after: 'userefTask complete!',
    extname: '.html',
    showChange: false,
    dest: "../../dist/"+folder+"/",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(useref())
  .pipe(gulp.dest("dist/"+folder));
};

function setupWatcherOnChangeEvent(watcher, dir, method){
  watcher.on('change', function(file, stats) {
    var windowsOS = (/\\/).test(file.path);
    var fileArray = windowsOS ? file.path.split("\\") : file.path.split("/");
    var folder = fileArray[fileArray.indexOf(dir) - 1];
    method(folder);
    gulp.start("mocha");
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

gulp.task('images', () => {
  var output = gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
    return output;
});

gulp.task("mocha", () => {
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

gulp.task("connect", function() {
  connect.server({
   root: ["./app/"+appConfig.prefix+appConfig.entry, ".", "./app"],
   livereload: true
 })
});

gulp.task("publish",["mocha", "images"], () => {
  appConfig.applications.map(publishTasks);
});

gulp.task("default",["mocha", "connect", "watch"], () => {
  appConfig.applications.map(defaultTasks);
});

