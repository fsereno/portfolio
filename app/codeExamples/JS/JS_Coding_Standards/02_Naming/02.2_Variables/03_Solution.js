//Outer scope
let globalApplicationConfigurationSettings = {
    entry: "index.js",
    root: "http://www.application.co.uk/"
}

let getEntryUrl = function() {
  //Inner scope
  return `${globalApplicationConfigurationSettings.root}${globalApplicationConfigurationSettings.entry}`
}

console.log(getEntryUrl())