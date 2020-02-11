"use strict";
const gulp = require("gulp");
const run = require('gulp-run-command').default;
const config = require("../../config.json");
const gulpHelpers = require("../../gulpHelpers");
const pug = require("gulp-pug");
const logger = require("gulp-logger");
const logSymbols = require("log-symbols");
const directory = process.cwd().split("_")[1];
const application = config.applications.filter((x) => x.folder === directory)[0];

gulp.task("default", () => {
  console.log("TEST");
  console.log(directory)
  console.log(application)
});

gulp.task('js', run("npx babel typeScript  --out-dir js --extensions '.ts'"));

gulp.task("html", () => {
  return gulp.src("./pug/*.pug")
    .pipe(logger(gulpHelpers.populateLoggerOptions(
      "HTML task started...",
      "HTML task complete!",
      ".html",
      false,
      "../",
      "Compiled to: ",
      ` ${logSymbols.success}`
    )))
    .pipe(pug({
      pretty: true,
      locals: {
        config: config,
        application: application
      }
    }))
    .pipe(gulp.dest("./"));
});