"use strict";
const gulp = require("gulp");
const run = require('gulp-run-command').default;

gulp.task('js', run("npx webpack"));