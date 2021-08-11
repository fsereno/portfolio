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
const config = require("../config.json");

const createTask = (application) => {
  const path = `../${config.developmentDir}/${config.prefix}${application.folder}`;
  return directoryExists(path)
    .then(result => {
      const templateDirectory = typeof application.masterTemplateDir !== "undefined" 
        && application.masterTemplateDir.length > 0
        ? application.masterTemplateDir
        : config.masterTemplateDir;
      if (result === false) {
        gulp.src(`../${config.developmentDir}/${config.prefix}${templateDirectory}/**/*`)
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
        .pipe(gulp.dest(path));
      }
    });
}

const createTasks = application => createTask(application);

gulp.task("create", (done) => {
  config.applications.map(createTasks);
  done();
});