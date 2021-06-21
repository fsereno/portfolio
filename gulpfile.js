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

  > gulp test - Run all TypeScript Service unit tests.

  > gulp publish    - To publish production resources to dist

  > gulp create     - Update the config.json file with additional applications.
                      Run this command and a new application will
                      be created based on app_master.
*/

const gulp = require("gulp");
const useref = require("gulp-useref");
const sass = require("gulp-sass");
const pug = require("gulp-pug-3");
const mocha = require("gulp-mocha");
const connect = require("gulp-connect");
const logger = require("gulp-logger");
const logSymbols = require("log-symbols");
const directoryExists = require("directory-exists");
const config = require("./config.json");
const gulpUtil = require("./gulpUtil");
const flatmap = require("gulp-flatmap");
const run = require('gulp-run-command').default;

let cssTask = (application) => {
  let directories = gulpUtil.getApplicationDirectories(application);
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/sass/styles.scss")
  .pipe(logger(gulpUtil.populateLoggerOptions(
      "CSS task started...",
      "CSS task complete!",
      ".css",
      false,
      "../css",
      "Compiled to: ",
      " " + logSymbols.success
    )))
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest(directories.applicationDirectory+"/css"))
    .pipe(connect.reload());
}

let htmlTask = (application) => {
  let directories = gulpUtil.getApplicationDirectories(application);
  return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/pug/*.pug")
  .pipe(logger(gulpUtil.populateLoggerOptions(
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
  .pipe(gulp.dest(directories.applicationDirectory))
  .pipe(connect.reload());
};

let userefTask = (application) => {
  let directories = gulpUtil.getApplicationDirectories(application);
  return gulp.src(directories.applicationDirectory+"/*.html")
  .pipe(logger(gulpUtil.populateLoggerOptions(
    "Useref task started...",
    "Useref task complete!",
    ".html",
    false,
    "../../"+directories.destinationDirectory+"/",
    "Compiled to: ",
    " " + logSymbols.success
  )))
  .pipe(useref())
  .pipe(gulp.dest(directories.destinationDirectory));
};

let copyJsTask = (application) => {
  let directories = gulpUtil.getApplicationDirectories(application);
  if (application.useRequire) {
    return gulp.src(config.developmentDir+"/"+config.prefix+application.folder+"/js/**/*.js")
      .pipe(logger(gulpUtil.populateLoggerOptions(
        "Copy JS task started...",
        "Copy JS task complete!",
        ".js",
        false,
        "../../"+directories.destinationDirectory+"/js/",
        "Compiled to: ",
        " " + logSymbols.success
      )))
      .pipe(gulp.dest(directories.destinationDirectory+"/js/"));
  }
  return false;
}

let createTask = (application) => {
  return directoryExists(config.developmentDir+"/"+config.prefix+application.folder)
    .then(result => {
      let templateDirectory = typeof application.masterTemplateDir !== "undefined" && application.masterTemplateDir.length > 0 ? application.masterTemplateDir : config.masterTemplateDir;
      if(result === false) {
        gulp.src(`${config.developmentDir}/${config.prefix}${templateDirectory}/**/*`)
        .pipe(logger(gulpUtil.populateLoggerOptions(
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
  gulpUtil.runThis(application, cssTask);
  gulpUtil.runThis(application, htmlTask);
}

let publishTasks = (application) => {
  gulpUtil.runThis(application, userefTask);
  gulpUtil.runThis(application, copyJsTask);
}

let createTasks = (application) => {
  gulpUtil.runThis(application, createTask);
}

let testAllAppsTasks = (application) => {
  gulpUtil.runThis(application, testAllAppsTask);
}

let startServerTask = () => {
  return new Promise((resolve, reject) => {
    try {
      connect.server({
        root: ["./", ".", "./"+config.developmentDir],
        livereload: true,
        host: '0.0.0.0' // try with setting the host to here, the container was pointing here
      }, () => resolve())
    }
    catch(err) {
      reject(new Error(err))
    }
  });
}

let frontendTestTask = () => {
  return new Promise((resolve, reject) => {
      gulp.src(config.developmentDir+"/tests/functional/**/*.test.ts")
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

let fontsCopyTask = () => {
  return gulp.src(config.developmentDir+"/fonts/**/*")
    .pipe(gulp.dest(config.publishDir+"/fonts"));
}

let cssFontsCopyTask = () => {
  return gulp.src(config.developmentDir+"/css/fonts/**/*")
    .pipe(gulp.dest(config.publishDir+"/css/fonts"));
}

let imagesCopyTask = () => {
  return gulp.src(config.developmentDir+"/images/**/*")
  .pipe(gulp.dest(config.publishDir+"/images"));
}

let faviconCopyTask = () => {
  return gulp.src('app/*.ico')
    .pipe(gulp.dest(config.publishDir));
}

let testTask = (directory) => gulpUtil.testTask(`${config.developmentDir}/tests/${directory}`);

let testAllAppsTask = (application) => gulpUtil.testTask(`${config.developmentDir}/${config.prefix}${application.folder}/tests`);

const stopTasks = async () => await endServerTask();

gulp.task("images", (done) => {
  imagesCopyTask();
  done();
});

gulp.task("fonts", (done) => {
  fontsCopyTask();
  cssFontsCopyTask();
  done();
});

gulp.task('favicon', (done) => {
  faviconCopyTask();
  done();
})

gulp.task("watch", (done) => {
  gulpUtil.watchThis(gulp.watch(config.developmentDir+"/**/sass/*.scss"), "sass", cssTask);
  gulpUtil.watchThis(gulp.watch(config.developmentDir+"/**/pug/*.pug"), "pug", htmlTask);
  gulpUtil.watchThis(gulp.watch(config.developmentDir+"/sass/**/*.scss"), "/", null);
  gulpUtil.watchThis(gulp.watch(config.developmentDir+"/pug/**/*.pug"), "/", null);
  gulpUtil.watchThis(gulp.watch(config.developmentDir+"/typeScript/**/*.ts"), "/", null);
  done();
});

gulp.task("connect", (done) => {
  startServerTask();
  done();
});

gulp.task("test-func", (done) => {
  frontendTestTasks();
  done();
});

gulp.task("test", (done) => {
  testTask("services");
  testTask("utils");
  config.applications.map(testAllAppsTasks);
  done();
});

gulp.task('webpack', run("npx webpack"));

gulp.task('webpack-prod', run("npx webpack --env.production"));

gulp.task("create", (done) => {
  config.applications.map(createTasks);
  done();
});

gulp.task("publish", gulp.series(["test", "images", "fonts", "favicon", "webpack-prod"], (done) => {
  config.applications.map(publishTasks);
  done();
}));

gulp.task("build", gulp.series(["test", "webpack"], (done) => {
  config.applications.map(defaultTasks);
  done();
}));

gulp.task("default", gulp.series(["connect", "watch"], (done) => {
  config.applications.map(defaultTasks);
  done();
}));

gulp.task("stop", (done) => {
  stopTasks();
  done();
});