/* usage

  > gulp default - To build development resources 
  > gulp build - To publish production resources to dist

*/

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

function BuildModel(folder, built){
  this.folder = folder;
  this.built = built;
}

let cssTask = (folder) => {
  return gulp.src("app/"+folder+"/sass/styles.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+folder+"/css"));
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
  .pipe(gulp.dest("app/"+folder+"/js"));
};

var htmlTask = (folder) => {
  return gulp.src("app/"+folder+"/pug/index.pug")
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest("app/"+folder))
};

var userefTask = (folder) => {
  return gulp.src("app/"+folder+"/index.html")
  .pipe(useref())
  .pipe(gulp.dest("dist/"+folder));
};

var defaultPromises = async (folder) => {
  var css = await cssTask(folder);
  var js = await jsTask(folder);
  var html = await htmlTask(folder);
  var folderModel = new FolderModel(css,js,html,folder);
  return Promise.resolve(folderModel)
}

var buildPromises = async (folder) => {
  var useref = await userefTask(folder);
  var buildModel = new BuildModel(folder, true);
  return Promise.resolve(buildModel)
}

gulp.task('images', function () {
  var output = gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
    return output;
});

gulp.task("mocha", function () {
  return gulp.src("app/**/*.test.ts")
    .pipe(mocha({
        reporter: "spec",
        require: ["ts-node/register"]
    }));
});

gulp.task("build",["images", "mocha"], () => {
  var promises = entries.map(buildPromises);
  Promise.all(promises).then((results)=>{
    results.forEach(result => {
      console.log("Build task complete for " + result.folder);
    });
  });
})

gulp.task("default", () => {
  var promises = entries.map(defaultPromises);
  Promise.all(promises).then((results)=>{
    results.forEach(result => {
      console.log("Default task complete for " + result.folder);
    });
  })
});