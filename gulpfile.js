"use strict";

/*

  Author: Fabio Sereno.
  Description: Gulpfile.js, tasks for building individual applications.

Usage...

  > gulp frontendTests
    - To start development server, run Nightmare tests in a headless browser
    - and close the server when all tests are done.

  > gulp test - Run all TypeScript Service unit tests.

  > gulp create     - Update the config.json file with additional applications.
                      Run this command and a new application will
                      be created based on app_master.
*/

const gulp = require("gulp");
const mocha = require("gulp-mocha");
const connect = require("gulp-connect");
const logger = require("gulp-logger");
const logSymbols = require("log-symbols");
const directoryExists = require("directory-exists");
const config = require("./config.json");
const gulpUtil = require("./gulpUtil");
const flatmap = require("gulp-flatmap");

// these can be uninstalled eventually
const useref = require("gulp-useref");
const sass = require("gulp-sass");
const run = require('gulp-run-command').default;
const pug = require("gulp-pug-3");

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

let testTask = (directory) => gulpUtil.testTask(`${config.developmentDir}/tests/${directory}`);

let testAllAppsTask = (application) => gulpUtil.testTask(`${config.developmentDir}/${config.prefix}${application.folder}/tests`);

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

gulp.task("create", (done) => {
  config.applications.map(createTasks);
  done();
});