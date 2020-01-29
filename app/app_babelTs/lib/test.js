define([], function () {
  "use strict";

  class Person {
    constructor(name) {
      this.name = name;
    }

  }

  var test = new Person("James");
  console.log(test.name);
});