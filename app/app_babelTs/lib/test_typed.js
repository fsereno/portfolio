define([], function () {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class PersonType {
    constructor(name) {
      _defineProperty(this, "name", void 0);

      this.name = name;
    }

  }

  var test = new PersonType("James");
  console.log(test.name);
});