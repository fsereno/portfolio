define(["core-js/modules/es6.function.name"], function (_es6Function) {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  };

  var test = new Person("James");
  console.log(test.name);
});