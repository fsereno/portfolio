"use strict";

const gulp = require("gulp");
const run = require('gulp-run-command').default;
const gulpUtil = require("../../gulpUtil");

gulp.task("test", () => gulpUtil.testTask("./tests"));
gulp.task('default', run("npx webpack"));