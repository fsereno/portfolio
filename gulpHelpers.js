var config = require("./config.json");

module.exports = {
    constructor: () => { return config },
    runThis: (application, method) => {
      method(application);
    },
    setupWatcherOnChangeEvent: (watcher, dir, method, defaultTasksCallBack) => {
      watcher.on("change", function(file, stats) {
        let windowsOS = (/\\/).test(file);
        let config = module.exports.constructor();
        let filePathArray = windowsOS ? file.split("\\") : file.split("/");
        let folderFromFilePath = filePathArray[filePathArray.indexOf(dir) - 1];
        let folder = folderFromFilePath !== undefined ? folderFromFilePath.replace("app_", "") : folderFromFilePath;
        let applicationIndex = config.applications.map((a)=>{return a["folder"]}).indexOf(folder);
        let application = config.applications[applicationIndex];
        if(dir !== "/" && application !== undefined && method !== null) {
          method(application);
        } else {
          if(defaultTasksCallBack !== null || defaultTasksCallBack !== undefined ){
            defaultTasksCallBack();
          }
        }
      });
    },
    watchThis: (watcher, dir, method, unitTestCallBack, defaultTasksCallBack) => { 
      module.exports.setupWatcherOnChangeEvent(watcher, dir, method, unitTestCallBack, defaultTasksCallBack);
    },
    populateLoggerOptions: (
      before,
      after,
      extname,
      showChange,
      dest,
      beforeEach,
      afterEach
      ) => {
      let options = {
        before: before,
        after: after,
        extname: extname,
        showChange: showChange,
        dest: dest,
        beforeEach: beforeEach,
        afterEach: afterEach
      }
      return options;
    },
    compileJsIsFalse: (compileJs) => typeof compileJs !== "undefined" && compileJs === false,
    compileJsIsTrue: (compileJs) => (typeof compileJs === "undefined") || typeof compileJs !== "undefined" &&  compileJs === true
}