"use strict";
var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var useref = require("gulp-useref");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var gulpSequence = require("gulp-sequence")
var mocha = require("gulp-mocha");
var fs = require('fs');
var checkFilesExist = require('check-files-exist');

var entries = [
  "app_test1",
  "app_test2"
]

function FolderModel(css, js, html, folder){
  this.folder = folder;
  this.css = css;
  this.js = js;
  this.html = html;
}

let cssTask = (folder) => {
  return gulp.src("app/"+folder+"/sass/styles.scss")
  .pipe(sass().on("error", sass.logError))
};

var jsTask = (folder) => {
  return browserify({
    basedir: "app/"+folder+"/typeScript/",
    debug: true,
    entries: "app.ts",
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source("app.js"))
};

var htmlTask = (folder) => {
  return gulp.src("app/"+folder+"/pug/index.pug")
  .pipe(pug({
    pretty: true
  }))
};

var getPromises = (folder) => {
  return build(folder);
}

var build = async (folder) => {
  var css = await cssTask(folder);
  var js = await jsTask(folder);
  var html = await htmlTask(folder);
  var folderModel = new FolderModel(css,js,html,folder);
  return Promise.resolve(folderModel)
}

gulp.task("default", () => {
  var promises = entries.map(getPromises);
  Promise.all(promises).then((results)=>{
    results.forEach(result => {
      result.css.pipe(gulp.dest("app/"+result.folder+"/css"))
      result.js.pipe(gulp.dest("app/"+result.folder+"/js"));
      result.html.pipe(gulp.dest("app/"+result.folder));
    });
  })
});