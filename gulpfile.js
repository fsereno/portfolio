/* 

  Author: Fabio Sereno.
  Description: Gulpfile.js, tasks for building individual applications.

Usage...
 
  > gulp default - To build development resources, start the dev server and watch for changes.
    Navigate to http://localhost:8080 to see the application running.
  
  > gulp publish - To publish production resources to dist

  > gulp create - Update the config.json file with additional applications.
    Run this command and a new application will be created based on app_master.

*/

"use strict";
let gulp = require("gulp"),
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
    config = require("./config.json"),
    gulpHelpers = require("./gulpHelpers"),
    flatmap = require("gulp-flatMap");

let cssTask = (application) => {
 return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/sass/styles.scss")
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
  .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder+"/css"))
  .pipe(connect.reload());
}

let jsTask = (application) => {
  return browserify({
    basedir: config.developmentDir+"/"+config.prefix+application.folder+"/typeScript/",
    debug: true,
    entries: "app.ts",
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder+"/js"))
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
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/pug/index.pug")
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
    locals:{config: config, application: application}
  }))
  .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder))
  .pipe(connect.reload());
};

let userefTask = (application) => {
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/index.html")
  .pipe(logger(gulpHelpers.populateLoggerOptions(
    "Useref task started...",
    "Useref task complete!",
    ".html",
    false,
    "../../"+config.publishDir+"/"+config.prefix+application.folder+"/",
    "Compiled to: ",
    " " + logSymbols.success
  )))
  .pipe(useref())
  .pipe(gulp.dest(config.publishDir+"/"+config.prefix+application.folder));
};

let createTask = (application) => {
  return directoryExists(config.developmentDir+"/"+config.prefix+application.folder)
    .then(result => {       
      if(result === false) {
        gulp.src(config.developmentDir+"/"+config.prefix+config.masterTemplateDir+"/**/*")
        .pipe(logger(gulpHelpers.populateLoggerOptions(
            "Create task started...",
            "Crete task complete!",
            null,
            false,
            "../../"+config.prefix+application.folder,
            "Created: ",
            " " + logSymbols.success
        )))
        .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder));
      }
    });
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

let defaultTasksCallBack = () => {
  config.applications.map(defaultTasks);
}

gulp.task("images", () => {
  var output = gulp.src(config.developmentDir+"/images/**/*")
    .pipe(gulp.dest(config.publishDir+"/images"));
    return output;
});

gulp.task("fonts", () => {
  var output = gulp.src(config.developmentDir+"/fonts/**/*")
    .pipe(gulp.dest(config.publishDir+"/fonts"));
    return output;
});

gulp.task("mochaServiceTests", () => {
  return gulp.src(config.developmentDir+"/tests/services/*.test.ts")
    .pipe(mocha({
        reporter: "spec",
        require: ["ts-node/register"]
    }));
});

let startServer = async () => {
  return new Promise((resolve, reject) => {
    try{
      connect.server({
        root: ["./"+config.developmentDir+"/"+config.prefix+config.entry, ".", "./"+config.developmentDir],
        livereload: true
      }, () => resolve())
    }
    catch(err){
      reject(new Error(err))
    }
  });
}

let nigthmare = async () => {
  return new Promise((resolve, reject) => {
      gulp.src(config.developmentDir+"/tests/applications/**/*.test.ts")
        .pipe(flatmap((stream) => {
          return stream
            .pipe(mocha({
              reporter: "spec",
              require: ["ts-node/register"]
          }).on("error", (err) => reject(new Error(err))))
        })).on("finish", () => resolve());
    })
}

let endServer = async () => {
  return new Promise((resolve, reject) => {
    try{
      connect.serverClose(() => resolve());
    }
    catch(err){
      reject(new Error(err))
    }
  });
}

gulp.task("nightmare2", async () => {
  await startServer();
  await nigthmare();
  await endServer();
});

gulp.task("mochaNightmareTests",["connect"], () => {
  return gulp.src(config.developmentDir+"/tests/applications/**/*.test.ts")
    .pipe(mocha({
        reporter: "spec",
        require: ["ts-node/register"]
    }));
});

gulp.task("nightmare", ["mochaNightmareTests"], () => {
  return connect.serverClose();
});

gulp.task("watch", () => {
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/sass/*.scss"), "sass", cssTask, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/typeScript/**/*.ts"), "typeScript", jsTask, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/pug/*.pug"), "pug", htmlTask, defaultTasksCallBack);
  
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/sass/**/*.scss"), "/", null, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/pug/**/*.pug"), "/", null, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/typeScript/**/*.ts"), "/", null, defaultTasksCallBack);
});

gulp.task("connect", () => {
  connect.server({
   root: ["./"+config.developmentDir+"/"+config.prefix+config.entry, ".", "./"+config.developmentDir],
   livereload: true
 })
});

gulp.task("create", () => {
  config.applications.map(createTasks);
});

gulp.task("publish",["mochaServiceTests", "images", "fonts"], () => {
  config.applications.map(publishTasks);
});

gulp.task("build", ["mochaServiceTests"], () => {
  config.applications.map(defaultTasks);
});

// Rough idea for full build and tests being run, in the correct dequence, ideally will not use gulp.start
gulp.task("full", ["build"], ()=>{
  gulp.start("nightmare");
});

gulp.task("default",["connect", "watch"], () => {
  config.applications.map(defaultTasks);
});