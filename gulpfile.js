"use strict";

/*

  Author: Fabio Sereno.
  Description: Gulpfile.js, tasks for building individual applications.

Usage...

  > gulp create     - Update the config.json file with additional applications.
                      Run this command and a new application will
                      be created based on app_master.
*/
const gulp = require("gulp");
const logger = require("gulp-logger");
const logSymbols = require("log-symbols");
const directoryExists = require("directory-exists");
const config = require("./config.json");

// these can be uninstalled eventually
//const gulpUtil = require("./gulpUtilX");
const flatmap = require("gulp-flatmap");
const mocha = require("gulp-mocha");
const connect = require("gulp-connect");
const useref = require("gulp-useref");
const sass = require("gulp-sass");
const run = require('gulp-run-command').default;
const pug = require("gulp-pug-3");

const createTask = (application) => {
  return directoryExists(config.developmentDir+"/"+config.prefix+application.folder)
    .then(result => {
      let templateDirectory = typeof application.masterTemplateDir !== "undefined" && application.masterTemplateDir.length > 0 ? application.masterTemplateDir : config.masterTemplateDir;
      if(result === false) {
        gulp.src(`${config.developmentDir}/${config.prefix}${templateDirectory}/**/*`)
        .pipe(logger(
          {
            before: "Create task started...",
            after: "Crete task complete!",
            extname: null,
            showChange: false,
            dest: "../../"+config.prefix+application.folder,
            beforeEach: "Created: ",
            afterEach: " " + logSymbols.success
          }
        ))
        .pipe(gulp.dest(config.developmentDir+"/"+config.prefix+application.folder));
      }
    });
}

const createTasks = application => createTask(application);

gulp.task("create", (done) => {
  config.applications.map(createTasks);
  done();
});