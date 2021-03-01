"use strict";
const gulp = require("gulp");
const run = require('gulp-run-command').default;
const mocha = require("gulp-mocha");

const testsTask = () => gulp.src(`./tests/*.test.js`).pipe(mocha());

gulp.task("test", (done) => {
    testsTask();
    done();
});

gulp.task('default', run("npx webpack"));