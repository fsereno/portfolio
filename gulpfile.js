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
    gulpConfig = require("./gulpConfig.json"),
    gulpHelpers = require("./gulpHelpers");

let cssTask = (application) => {
 return gulp.src("app/"+gulpConfig.prefix+application.folder+"/sass/styles.scss")
 .pipe(logger(gulpHelpers.populateLoggerOptions(
    "CSS task started...",
    "CSS task complete!",
    ".css",
    false,
    "../css",
    "Compiled to: ",
    " " + logSymbols.success
  )))
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+gulpConfig.prefix+application.folder+"/css"))
  .pipe(connect.reload());
}

let jsTask = (application) => {
  return browserify({
    basedir: "app/"+gulpConfig.prefix+application.folder+"/typeScript/",
    debug: true,
    entries: "app.ts",
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest("app/"+gulpConfig.prefix+application.folder+"/js"))
  .pipe(connect.reload())
  .pipe(logger(gulpHelpers.populateLoggerOptions(
    "JS task started...",
    "JS task complete!",
    ".js",
    false,
    "../js",
    "Compiled to: ",
    " " + logSymbols.success
  )));
}

let htmlTask = (application) => {
  return gulp.src("app/"+gulpConfig.prefix+application.folder+"/pug/index.pug")
  .pipe(logger(gulpHelpers.populateLoggerOptions(
    "HTML task started...",
    "HTML task complete!",
    ".html",
    false,
    "../",
    "Compiled to: ",
    " " + logSymbols.success
  )))
  .pipe(pug({
    pretty: true,
    locals:{config: gulpConfig, application: application}
  }))
  .pipe(gulp.dest("app/"+gulpConfig.prefix+application.folder))
  .pipe(connect.reload());
};

let userefTask = (application) => {
  return gulp.src("app/"+gulpConfig.prefix+application.folder+"/index.html")
  .pipe(logger(gulpHelpers.populateLoggerOptions(
    "Useref task started...",
    "Useref task complete!",
    ".html",
    false,
    "../../dist/"+gulpConfig.prefix+application.folder+"/",
    "Compiled to: ",
    " " + logSymbols.success
  )))
  .pipe(useref())
  .pipe(gulp.dest("dist/"+gulpConfig.prefix+application.folder));
};

let createTask = (application) => {
  return directoryExists("app/"+gulpConfig.prefix+application.folder)
    .then(result => {       
      if(result === false) {
        gulp.src("app/"+gulpConfig.prefix+gulpConfig.masterTemplateDir+"/**/*")
        .pipe(logger(gulpHelpers.populateLoggerOptions(
            "Create task started...",
            "Crete task complete!",
            null,
            false,
            "../../"+gulpConfig.prefix+application.folder,
            "Created: ",
            " " + logSymbols.success
        )))
        .pipe(gulp.dest("app/"+gulpConfig.prefix+application.folder));
      }
    });
}

let mochaTaskCallBack = () => {
  gulp.start("mocha");
}

let defaultTasks = (application) => {
  gulpHelpers.runThis(application, cssTask);
  gulpHelpers.runThis(application, jsTask);
  gulpHelpers.runThis(application, htmlTask);
}

let publishTasks = (application) => {
  gulpHelpers.runThis(application, userefTask);
}

let createTasks = (application) => {
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
   root: ["./app/"+gulpConfig.prefix+gulpConfig.entry, ".", "./app"],
   livereload: true
 })
});

gulp.task("create", () => {
  gulpConfig.applications.map(createTasks);
});

gulp.task("publish",["mocha", "images"], () => {
  gulpConfig.applications.map(publishTasks);
});

gulp.task("default",["mocha", "connect", "watch"], () => {
  gulpConfig.applications.map(defaultTasks);
});