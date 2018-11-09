var config = require("./config.json");

module.exports = {
    constructor: () => { return config },
    runThis: (application, method) => {
      method(application);
    },
    setupWatcherOnChangeEvent: (watcher, dir, method, defaultTasksCallBack) => {
      watcher.on("change", function(file, stats) {
        let windowsOS = (/\\/).test(file.path),
            config = module.exports.constructor();
            filePathArray = windowsOS ? file.path.split("\\") : file.path.split("/"),
            folderFromFilePath = filePathArray[filePathArray.indexOf(dir) - 1],
            folder = folderFromFilePath != undefined ? folderFromFilePath.replace("app_", "") : folderFromFilePath,
            applicationIndex = config.applications.map((a)=>{return a["folder"]}).indexOf(folder),
            application = config.applications[applicationIndex];
  
        if(dir !== "/" && application !== undefined && method !== null) {
          method(application);
        } else {
          if(defaultTasksCallBack !== null || defaultTasksCallBack !== undefined ){
            defaultTasksCallBack();
          }
        }
        /*if(unitTestCallBack !== null || unitTestCallBack !== undefined ) {
          unitTestCallBack();
        }*/
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
    }
}