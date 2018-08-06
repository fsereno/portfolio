/* usage

  > gulp default - To build development resources 
  > gulp publish - To publish production resources to dist

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

var watch = null;

function BuildModel(css, js, html, folder){
  this.folder = folder;
  this.css = css;
  this.js = js;
  this.html = html;
}

function PublishModel(folder, built){
  this.folder = folder;
  this.built = built;
}

let cssTask = (folder) => {
  return gulp.src("app/"+folder+"/sass/styles.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("app/"+folder+"/css"));
};

let cssWatch = (folder) => {  
  watch = folder;
  gulp.watch("app/"+folder+"/sass/styles.scss", ["test"]);
};

gulp.task("test", function(){
  cssTask(watch);
})

/*let cssWatch = (folder) => {  
  gulp.watch("app/"+folder+"/sass/styles.scss", cssTask(folder));
};*/

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
  var buildModel = new BuildModel(css,js,html,folder);
  return Promise.resolve(buildModel)
}

var defaultWatches = async (folder) => {
  var css = await cssWatch(folder);
  var buildModel = new BuildModel(css, null, null, folder);
  return Promise.resolve(buildModel)
}

var buildPromises = async (folder) => {
  var publishModel = new PublishModel(folder, true);
  return Promise.resolve(publishModel)
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

gulp.task("watch", () => {
  var promises = entries.map(defaultWatches);
  Promise.all(promises).then((results)=>{
    results.forEach(result => {
      console.log("Watching " + result.folder);
    });
  })
});

gulp.task("publish",["images", "mocha"], () => {
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