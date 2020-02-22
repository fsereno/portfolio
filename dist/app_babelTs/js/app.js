define(["./Person"], function (_Person) {
  "use strict";

  var person = new _Person.Person("james");
  console.log(person.name);
});