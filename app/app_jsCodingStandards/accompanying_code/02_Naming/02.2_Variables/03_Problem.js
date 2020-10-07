//Outer scope
let entry = "index.js";
let root = "http://www.application.co.uk/";

let getEntryUrl = function() {
  //Inner scope
  return `${root}${entry}`
}

console.log(getEntryUrl())