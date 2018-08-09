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
    logger = require("gulp-logger"),
    logSymbols = require("log-symbols"),
    directoryExists = require("directory-exists"),
    appConfig = require("./appConfig.json"),
    gulpHelpers = require("./gulpHelpers");

function cssTask(application){
 return gulp.src("app/"+appConfig.prefix+application.folder+"/sass/styles.scss")
 .pipe(logger({
    before: "CSS task started...",
    after: "CSS task complete!",
    extname: ".css",
    showChange: false,
    dest: "../css",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+appConfig.prefix+application.folder+"/css"))
  .pipe(connect.reload());
}

function jsTask(application){
  return browserify({
    basedir: "app/"+appConfig.prefix+application.folder+"/typeScript/",
    debug: true,
    entries: "app.ts",
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest("app/"+appConfig.prefix+application.folder+"/js"))
  .pipe(connect.reload())
  .pipe(logger({
    before: "JS task started...",
    after: "JS task complete!",
    extname: ".js",
    showChange: false,
    dest: "../js",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }));
}

function htmlTask(application) {
  return gulp.src("app/"+appConfig.prefix+application.folder+"/pug/index.pug")
  .pipe(logger({
    before: "HTML task started...",
    after: "HTML task complete!",
    extname: ".html",
    showChange: false,
    dest: "../",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(pug({
    pretty: true,
    locals:{appConfig: appConfig, application: application}
  }))
  .pipe(gulp.dest("app/"+appConfig.prefix+application.folder))
  .pipe(connect.reload());
};

function userefTask(application) {
  return gulp.src("app/"+appConfig.prefix+application.folder+"/index.html")
  .pipe(logger({
    before: "Useref task started...",
    after: "Useref task complete!",
    extname: ".html",
    showChange: false,
    dest: "../../dist/"+appConfig.prefix+application.folder+"/",
    beforeEach: "Compiled to: ",
    afterEach: " " + logSymbols.success
  }))
  .pipe(useref())
  .pipe(gulp.dest("dist/"+appConfig.prefix+application.folder));
};

function createTask(application){
  return directoryExists("app/"+appConfig.prefix+application.folder)
    .then(result => {       
      if(result === false) {
        gulp.src("app/"+appConfig.prefix+appConfig.masterTemplateDir+"/**/*")
        .pipe(logger({
            before: "Create task started...",
            after: "Crete task complete!",
            showChange: false,
            dest: "../../"+appConfig.prefix+application.folder,
            beforeEach: "Created: ",
            afterEach: " " + logSymbols.success
        }))
        .pipe(gulp.dest("app/"+appConfig.prefix+application.folder));
      }
    });
}

function mochaTaskCallBack() {
  gulp.start("mocha");
}

var defaultTasks = (application) => {
  gulpHelpers.runThis(application, cssTask);
  gulpHelpers.runThis(application, jsTask);
  gulpHelpers.runThis(application, htmlTask);
}

var publishTasks = (application) => {
  gulpHelpers.runThis(application, userefTask);
}

var createTasks = (application) => {
  gulpHelpers.runThis(application, createTask);
}

gulp.task("images", () => {
  var output = gulp.src("app/images/**/*")
    .pipe(gulp.dest("dist/images"));
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
  gulpHelpers.watchThis(gulp.watch("app/**/sass/*.scss"), "sass", cssTask, mochaTaskCallBack);
  gulpHelpers.watchThis(gulp.watch("app/**/typeScript/**/*.ts"), "typeScript", jsTask, mochaTaskCallBack);
  gulpHelpers.watchThis(gulp.watch("app/**/pug/*.pug"), "pug", htmlTask, mochaTaskCallBack);
  gulpHelpers.watchThis(gulp.watch("app/pug/**/*.pug"), "/", null, mochaTaskCallBack);
  gulpHelpers.watchThis(gulp.watch("app/sass/**/*.scss"), "/", null, mochaTaskCallBack);
  gulpHelpers.watchThis(gulp.watch("app/typeScript/**/*.ts"), "/", null, mochaTaskCallBack);
});

gulp.task("connect", function() {
  connect.server({
   root: ["./app/"+appConfig.prefix+appConfig.entry, ".", "./app"],
   livereload: true
 })
});

gulp.task("create", () => {
  appConfig.applications.map(createTasks);
});

gulp.task("publish",["mocha", "images"], () => {
  appConfig.applications.map(publishTasks);
});

gulp.task("default",["mocha", "connect", "watch"], () => {
  appConfig.applications.map(defaultTasks);
});