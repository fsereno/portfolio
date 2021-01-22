define(["exports"], function (_exports) {
  "use strict";
  "use strict;";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Component = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Component =
  /*#__PURE__*/
  function () {
    function Component() {
      var _this = this;

      _classCallCheck(this, Component);

      _defineProperty(this, "input", void 0);

      _defineProperty(this, "result", void 0);

      _defineProperty(this, "counterElement", void 0);

      _defineProperty(this, "counterLimit", void 0);

      _defineProperty(this, "form", void 0);

      _defineProperty(this, "couter", void 0);

      _defineProperty(this, "updateCounter", function () {
        return _this.counterElement.text(_this.couter);
      });

      _defineProperty(this, "increaseCounter", function () {
        return _this.couter = _this.couter + 1;
      });

      _defineProperty(this, "decreaseCounter", function () {
        return _this.couter = _this.couter - 1;
      });

      _defineProperty(this, "isCounterWithinLimit", function (value) {
        return value <= Number(_this.counterLimit - 1);
      });

      _defineProperty(this, "thereIsAValue", function (input) {
        return typeof input !== "undefined" && input.length > 0;
      });

      _defineProperty(this, "listHasItems", function () {
        return typeof _this.result[0] !== "undefined" && _this.result[0].childNodes.length > 0;
      });

      _defineProperty(this, "populateResult", function (value) {
        return _this.result.html(value);
      });

      _defineProperty(this, "clearInput", function () {
        return _this.input.val("");
      });

      _defineProperty(this, "addListItem", function (input) {
        if (_this.listHasItems()) {
          var result = _this.result.html();

          return "".concat(result, "<li class=\"list-group-item d-flex justify-content-between align-items-center\">").concat(input, " <a href=\"#\" class=\"badge badge-danger delete\">Delete</a></li>");
        } else {
          return "<li class=\"list-group-item d-flex justify-content-between align-items-center\">".concat(input, " <a href=\"#\" class=\"badge badge-danger delete\">Delete</a></li>");
        }
      });

      _defineProperty(this, "deleteListItem", function (index) {
        var result = _this.result[0].childNodes;

        if (typeof result !== "undefined" && result.length > 0) {
          result[index].remove();

          _this.decreaseCounter();

          _this.updateCounter();
        }
      });

      _defineProperty(this, "bindDeleteItemHandler", function () {
        _this.result.find("li .delete").on("click", function (e) {
          e.preventDefault();
          var index = jQuery(e.currentTarget).index(".delete") || 0;

          _this.deleteListItem(index);
        });
      });

      _defineProperty(this, "isFormValid", function (input) {
        var isValid = false;
        var counter = Number(_this.counterElement.text());

        if (_this.thereIsAValue(input) && _this.isCounterWithinLimit(counter)) {
          isValid = true;
        }

        return isValid;
      });

      _defineProperty(this, "submitFormHandler", function () {
        _this.form.on("submit", function (e) {
          e.preventDefault();

          var input = _this.input.val().toString();

          if (_this.isFormValid(input)) {
            var list = _this.addListItem(input);

            _this.populateResult(list);

            _this.bindDeleteItemHandler();

            _this.increaseCounter();

            _this.updateCounter();

            _this.clearInput();
          }

          ;
        });
      });

      this.input = jQuery("#input");
      this.result = jQuery("#result");
      this.counterElement = jQuery("#counter");
      this.counterLimit = 10;
      this.couter = 0;
      this.form = jQuery("#inputForm");
    }

    _createClass(Component, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        jQuery(function () {
          _this2.submitFormHandler();

          _this2.updateCounter();
        });
      }
    }]);

    return Component;
  }();

  _exports.Component = Component;
});