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

var entries2 = [
  1000,
 3000
]

function pugPromises() {
  console.log("pugPromises")
  return entries.map(pugPromise)
};

function sassPromises() {
  console.log("sassPromises")
  return entries.map(sassPromise)
};

function typeScriptPromises() {
  console.log("typeScriptPromises")
  return entries.map(typeScriptPromise)
};

function userefPromises() {
  console.log("userefPromises")
  return entries.map(userefPromise)
};

gulp.task("setup", function () {

  let promises = [delayES8(1000), delayES8(3000)];

  Promise.all(promises).
    then((results) => {
      sayHello(); // this is resolve ?
    })
    .catch((err) => console.log(err));
});

gulp.task("setup3", function () {
    let promises = [doTasks()];
    Promise.all(promises).
      then((results) => {
        userefPromises();
        //sayHello(); // this is resolve ?
        
      })
      .catch((err) => console.log(err));
});


gulp.task("setup2", function () {

  let pugPromises = entries.map(pugPromise)

  //console.log(pugPromises);

  //let promises = [delayES8(1000), delayES8(3000)];

  Promise.all(pugPromises).
    then((results) => {
      //console.log(results)

      sayHello();
    })
    .catch((err) => console.log(err));
});

function delay(time) {
  return new Promise((resolve, reject) => {
    if(isNaN(time)){
      reject(new Error("Delay requires a valid number"));
    } else {
      setTimeout(resolve, time);
    }
  });
}

function buildHTML(callBack, folder) {
  gulp.src("app/"+folder+"/pug/**/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("app/"+folder));
};

function compileSass(callBack, folder) {
  gulp.src("app/"+folder+"/sass/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/"+folder+"/css"));
};

function compileTypeScript(callBack, folder) {
  browserify({
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

function replaceReferences(callBack, folder) {
  gulp.src("app/"+folder+"/*.html")
    .pipe(useref())
    .pipe(gulp.dest("dist/"+folder));
  callBack();
};

var userefPromise = (folder) => {
  return new Promise((resolve, reject) => {
    var file = "app/"+folder+"/index.html";
    checkFilesExist([file], __dirname)
      .then(function () {
        replaceReferences(resolve, folder);
    }, (err) => {
      reject(new Error("No file found to replaceReferences " + file));
    })
  });
}

var pugPromise = (folder) => {
  return new Promise((resolve, reject) => {
    var file = "app/"+folder+"/pug/**/*.pug";
    checkFilesExist([file], __dirname)
      .then(function () {
        buildHTML(resolve, folder);
    }, (err) => {
      reject(new Error("No file found to buildHTML"));
    })
  });
}

var sassPromise = (folder) => {
  return new Promise((resolve, reject) => {
    var file = "app/"+folder+"/sass/**/styles.scss";
    checkFilesExist([file], __dirname)
      .then(function () {
        compileSass(resolve, folder);
    }, (err) => {
      reject(new Error("No file found to compileSass"));
    })
  });
}

var typeScriptPromise = (folder) => {
  return new Promise((resolve, reject) => {
    var file = "app/"+folder+"/typeScript/app.ts";
    checkFilesExist([file], __dirname)
      .then(function () {
        compileTypeScript(resolve, folder);
    }, (err) => {
      reject(new Error("No file found to compileTypeScript"));
    })
  });
}

async function delayES8(time){
  await delay(time) // this could do gulp stuff
  return;
}

async function doTasks(){
  await pugPromises();
  await sassPromises();
  await typeScriptPromises();
  //await userefPromises();
  return;
}

function sayHello(){
  console.log("hello");
}

gulp.task("typeScript", function () {
  entries.forEach(entry => {
    return browserify({
      basedir: "app/"+entry+"/typeScript/",
      debug: true,
      entries: "app.ts",
      cache: {},
      packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("app/"+entry+"/js"));
  });
});

gulp.task("sass", function () {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("app/"+entry+"/css"));
  });
});

gulp.task("pug", function buildHTML() {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/pug/**/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("app/"+entry));
  });
});

gulp.task("html",["typeScript", "sass", "pug"], function () {
  entries.forEach(entry => {
    return gulp.src("app/"+entry+"/*.html")
      .pipe(useref())
      .pipe(gulp.dest("dist/"+entry));
  });
});

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


gulp.task("build", function(callback){
	gulpSequence(
    ["typeScript", "sass", "pug", "html", "images", "mocha"],
    callback);
});

gulp.task("default", function () {
  gulp.start("build");
});

gulp.task('build2', ["html", "images", "mocha"], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

