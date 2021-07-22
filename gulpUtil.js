const config = require("./config.json");
const gulp = require("gulp");
const directoryExists = require("directory-exists");
const mocha = require("gulp-mocha");

module.exports = {

  constructor: () => { return config },

  runThis: (application = {}, method) => {
    if (typeof method === "function") {
      method(application);
    }
  },
  testTask(directory) {
    return directoryExists(directory).then((result) => {
      if (result) {
        gulp.src(`${directory}/*.test.{ts,js}`)
          .pipe(mocha({
            reporter: "spec",
            require: ["@babel/register", "ts-node/register"]
          }));
      }
    });
  }
}