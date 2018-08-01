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
  "app_licence"
]

function test1(){
  return "Test1";
};
function test2(){
  return "Test2";
};
function test3(){
  return "Test3";
};

gulp.task('promise', function() {
  return Promise.all([
    test1(),
    test2(),
    test3()
  ]).then(function(values) {
      console.log("tests completed");
      console.log(values);
  })
});

var fn = function asyncMultiply(v){ // sample async action
  return new Promise(function(resolve, reject){
    resolve(v);
  });
} 

var typeScriptPromise = function typeScriptPromiseConstructor(file){
  return new Promise(function(resolve, reject){   
    resolve(function(){

      return browserify({
        basedir: "app/"+file+"/typeScript/",
        debug: true,
        entries: "app.ts",
        cache: {},
        packageCache: {}
      })
      .plugin(tsify)
      .bundle()
      .pipe(source("app.js"))
      .pipe(gulp.dest("app/"+file+"/js"));

    }

    );
  });
} 

gulp.task("ts3", function () {
  
  var actions = entries.map(typeScriptPromise);
  var results = Promise.all(actions); // pass array of promises

  results.then(data => // or just .then(console.log)
      console.log(data), // [2, 4, 6, 8, 10]
  );

});


gulp.task("ts2", function () {
  
  var actions = entries.map(fn);
  var results = Promise.all(actions); // pass array of promises

  results.then(data => // or just .then(console.log)
      console.log(data) // [2, 4, 6, 8, 10]
  );

});

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
