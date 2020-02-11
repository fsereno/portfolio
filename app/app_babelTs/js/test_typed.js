define([], function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var PersonType = function PersonType(name) {
    _classCallCheck(this, PersonType);

    _defineProperty(this, "name", void 0);

    this.name = name;
  };

  var person = new PersonType("james");
  console.log(person.name);
});