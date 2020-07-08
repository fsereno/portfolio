"use strict";

/*

  Author: Fabio Sereno.
  Description: Gulpfile.js, tasks for building individual applications.

Usage...

  > gulp default    - To build development resources,
                      start the dev server and watch for changes.
                      Navigate to http://localhost:8080 to see the app running.

  > gulp build      - To build development resources and run unit tests on services.

  > gulp frontendTests  - To start development server, run Nightmare tests in a headless browser
                      and close the server when all tests are done.

  > gulp serviceTests - Run all TypeScript Service unit tests.

  > gulp publish    - To publish production resources to dist

  > gulp create     - Update the config.json file with additional applications.
                      Run this command and a new application will
                      be created based on app_master.
*/

const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const useref = require("gulp-useref");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const mocha = require("gulp-mocha");
const connect = require("gulp-connect");
const logger = require("gulp-logger");
const logSymbols = require("log-symbols");
const directoryExists = require("directory-exists");
const config = require("./config.json");
const gulpHelpers = require("./gulpHelpers");
const flatmap = require("gulp-flatmap");
const uglify = require('gulp-uglify');
let buffer = require('vinyl-buffer');

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
  .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
  .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder+"/css"))
  .pipe(connect.reload());
}

let jsTask = (application) => {
  if (gulpHelpers.compileJsIsFalse(application.compileJs)) {
    return false;
  }
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
  .pipe(buffer())
  .pipe(uglify())
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
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/pug/*.pug")
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
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/*.html")
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

let copyJsTask = (application) => {
  if (gulpHelpers.compileJsIsTrue(application.compileJs)) {
    return false;
  }
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/js/**/*.js")
    .pipe(logger(gulpHelpers.populateLoggerOptions(
      "Copy JS task started...",
      "Copy JS task complete!",
      ".js",
      false,
      "../../"+config.publishDir+"/"+config.prefix+application.folder+"/js/",
      "Compiled to: ",
      " " + logSymbols.success
    )))
    .pipe(gulp.dest(config.publishDir+"/"+config.prefix+application.folder+"/js/"));
}

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
  gulpHelpers.runThis(application, copyJsTask);
}

let createTasks = (application) => {
  gulpHelpers.runThis(application, createTask);
}

let defaultTasksCallBack = () => {
  config.applications.map(defaultTasks);
}

let startServerTask = () => {
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

let frontendTestTask = () => {
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

let endServerTask = () => {
  return new Promise((resolve, reject) => {
    try{
      connect.serverClose();
      resolve();
    }
    catch(err){
      reject(new Error(err))
    }
  });
}

let frontendTestTasks = async () => {
  await startServerTask();
  await frontendTestTask();
  await endServerTask();
}

let fontsTask = () => {
  return gulp.src(config.developmentDir+"/fonts/**/*")
    .pipe(gulp.dest(config.publishDir+"/fonts"));
}

let imagesTask = () => {
  return gulp.src(config.developmentDir+"/images/**/*")
  .pipe(gulp.dest(config.publishDir+"/images"));
}

let serviceTestsTask = () => {
  return gulp.src(config.developmentDir+"/tests/services/*.test.ts")
    .pipe(mocha({
        reporter: "spec",
        require: ["ts-node/register"]
    }));
}

gulp.task("images", (done) => {
  imagesTask();
  done();
});

gulp.task("fonts", (done) => {
  fontsTask();
  done();
});

gulp.task("watch", (done) => {
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/sass/*.scss"), "sass", cssTask, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/typeScript/**/*.ts"), "typeScript", jsTask, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/**/pug/*.pug"), "pug", htmlTask, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/sass/**/*.scss"), "/", null, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/pug/**/*.pug"), "/", null, defaultTasksCallBack);
  gulpHelpers.watchThis(gulp.watch(config.developmentDir+"/typeScript/**/*.ts"), "/", null, defaultTasksCallBack);
  done();
});

gulp.task("connect", (done) => {
  startServerTask();
  done();
});

gulp.task("serviceTests", (done) => {
  serviceTestsTask();
  done();
});

gulp.task("frontendTests", (done) => {
  frontendTestTasks();
  done();
});

gulp.task("tests", (done) => {
  serviceTestsTask();
  frontendTestTasks();
  done();
});

gulp.task("create", (done) => {
  config.applications.map(createTasks);
  done();
});

gulp.task("publish", gulp.series(["serviceTests", "images", "fonts"], (done) => {
  config.applications.map(publishTasks);
  done();
}));

gulp.task("build", gulp.series(["serviceTests"], (done) => {
  config.applications.map(defaultTasks);
  done();
}));

gulp.task("default", gulp.series(["connect", "watch"], (done) => {
  config.applications.map(defaultTasks);
  done();
}));