var appConfig = require("./appConfig.json");

module.exports = {
    constructor: () => { return appConfig },
    runThis: (application, method) => {
      method(application);
    },
    setupWatcherOnChangeEvent: (watcher, dir, method, callBack) => {
      watcher.on("change", function(file, stats) {
        var windowsOS = (/\\/).test(file.path),
            appConfig = module.exports.constructor();
            filePathArray = windowsOS ? file.path.split("\\") : file.path.split("/"),
            folderFromFilePath = filePathArray[filePathArray.indexOf(dir) - 1],
            folder = folderFromFilePath != undefined ? folderFromFilePath.replace("app_", "") : folderFromFilePath,
            applicationIndex = appConfig.applications.map((a)=>{return a["folder"]}).indexOf(folder),
            application = appConfig.applications[applicationIndex];
  
        if(dir !== "/" && application !== undefined && method !== null) {
          method(application);
        } else {
          appConfig.applications.map(defaultTasks);
        }
        callBack();
      });
    },
    watchThis: (watcher, dir, method, callBack) => {  
      module.exports.setupWatcherOnChangeEvent(watcher, dir, method, callBack);
    }
  }