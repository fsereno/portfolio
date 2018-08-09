var gulpConfig = require("./gulpConfig.json");

module.exports = {
    constructor: () => { return gulpConfig },
    runThis: (application, method) => {
      method(application);
    },
    setupWatcherOnChangeEvent: (watcher, dir, method, callBack) => {
      watcher.on("change", function(file, stats) {
        let windowsOS = (/\\/).test(file.path),
            gulpConfig = module.exports.constructor();
            filePathArray = windowsOS ? file.path.split("\\") : file.path.split("/"),
            folderFromFilePath = filePathArray[filePathArray.indexOf(dir) - 1],
            folder = folderFromFilePath != undefined ? folderFromFilePath.replace("app_", "") : folderFromFilePath,
            applicationIndex = gulpConfig.applications.map((a)=>{return a["folder"]}).indexOf(folder),
            application = gulpConfig.applications[applicationIndex];
  
        if(dir !== "/" && application !== undefined && method !== null) {
          method(application);
        } else {
          gulpConfig.applications.map(defaultTasks);
        }
        callBack();
      });
    },
    watchThis: (watcher, dir, method, callBack) => {  
      module.exports.setupWatcherOnChangeEvent(watcher, dir, method, callBack);
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
    }
}