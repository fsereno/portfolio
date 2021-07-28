module.exports = {
  
  runThis: (application = {}, method) => {
    if (typeof method === "function") {
      method(application);
    }
  },
  /*testTask(directory) {
    return directoryExists(directory).then((result) => {
      if (result) {
        gulp.src(`${directory}/*.test.{ts,js}`)
          .pipe(mocha({
            reporter: "spec",
            require: ["@babel/register", "ts-node/register"]
          }));
      }
    });
  }*/
}