"use strict";
const gulp = require("gulp");
const run = require('gulp-run-command').default;

gulp.task('default', run("npx babel typeScript  --out-dir js --extensions '.ts'"));