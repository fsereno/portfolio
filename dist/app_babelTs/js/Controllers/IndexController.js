define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IndexController = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var IndexController =
  /*#__PURE__*/
  function () {
    function IndexController() {
      var _this = this;

      _classCallCheck(this, IndexController);

      _defineProperty(this, "input", void 0);

      _defineProperty(this, "result", void 0);

      _defineProperty(this, "counter", void 0);

      _defineProperty(this, "counterLimit", void 0);

      _defineProperty(this, "formId", void 0);

      _defineProperty(this, "setCounter", function () {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return _this.counter.text(value);
      });

      _defineProperty(this, "incrementCounter", function (value) {
        return Number(value + 1);
      });

      _defineProperty(this, "isCounterWithinLimit", function (value) {
        return value <= Number(_this.counterLimit - 1);
      });

      _defineProperty(this, "thereIsAValue", function (input) {
        return typeof input !== "undefined" && input.length > 0;
      });

      _defineProperty(this, "validateForm", function () {
        jQuery("#".concat(_this.formId)).on("submit", function (e) {
          e.preventDefault();

          var input = _this.input.val().toString();

          var result = _this.result.text();

          var counter = Number(_this.counter.text());

          if (_this.thereIsAValue(input) && _this.isCounterWithinLimit(counter)) {
            if (_this.thereIsAValue(result)) {
              _this.result.text("".concat(result, ", ").concat(input));
            } else {
              _this.result.text(input);
            }

            var updatedCounter = _this.incrementCounter(counter);

            _this.setCounter(updatedCounter);

            _this.input.val();
          }
        });
      });

      this.input = jQuery("#input");
      this.result = jQuery("#result");
      this.counter = jQuery("#counter");
      this.counterLimit = 10;
      this.formId = "inputForm";
    }

    _createClass(IndexController, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        jQuery(function () {
          _this2.validateForm();

          _this2.setCounter();
        });
      }
    }]);

    return IndexController;
  }();

  _exports.IndexController = IndexController;
});