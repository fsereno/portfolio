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

var typeScriptPromise = (file) => {
  return new Promise(function(resolve, reject){   
    var result = browserify({
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
    
    
    resolve(); 
  
  
  });
} 

gulp.task("setup", function () {

  let promises = [delayES8(1000), delayES8(3000)];

  Promise.all(promises).
    then((results) => {
      sayHello();
    })
    .catch((err) => console.log(err));

  /*delayES8(1000)
    .then((results) => {     
      sayHello()
    }).then(results => {
      return delayES8(3000)
    }).then((results) => {     
      sayHello()
    })
    .catch((err) => console.log(err));*/
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


async function delayES8(time){

  await delay(time) // this could do gulp stuff

  return;

}

function sayHello(){
  console.log("hello");
}

var pugPromise = (file) => {
  
  return new Promise(function(resolve, reject){        
  
    var result = gulp.src("app/"+file+"/pug/**/*.pug")
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest("app/"+file));
      
    resolve(htmlPromise(file));
  
  });
} 

var sassPromise = (file) => {
  return new Promise(function(resolve, reject){     
    var result = gulp.src("app/"+file+"/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/"+file+"/css"));
    resolve(); 
  });
} 

function htmlPromise(file) {
  return new Promise(function(resolve, reject){  
    
    var filePath = "app/"+file+"/index.html";
    var result = gulp.src(filePath)
    //.pipe(useref())
    .pipe(gulp.dest("dist/"+file));     
    
    resolve();
    
  });
} 

gulp.task("typeScriptPromises", function () {
  var actions = entries.map(typeScriptPromise),
      results = Promise.all(actions);
  results.then(data => 
    gulp.start("sassPromises")
  );
});

gulp.task("sassPromises", function () {
  var actions = entries.map(sassPromise),
      results = Promise.all(actions);
  results.then(data => 
    gulp.start("pugPromises")
  );
});

gulp.task("pugPromises", function () {
  var actions = entries.map(pugPromise),
      results = Promise.all(actions);
  results.then(response => {

    console.log(response);

    //return response;
  });
});
/*gulp.task("htmlPromises", function () {
  var actions = entries.map(htmlPromise),
      results = Promise.all(actions);
  results.then(data => 
      console.log("done")
  );
});*/

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
