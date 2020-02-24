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

  // Interfaces
  var IndexController =
  /*#__PURE__*/
  function () {
    function IndexController() {
      var _this = this;

      _classCallCheck(this, IndexController);

      _defineProperty(this, "input", void 0);

      _defineProperty(this, "result", void 0);

      _defineProperty(this, "formId", void 0);

      _defineProperty(this, "validateForm", function () {
        var self = _this;
        jQuery("#".concat(_this.formId)).on("submit", function (e) {
          e.preventDefault();
          var input = self.input.val().toString();
          self.result.text(input);
        });
      });

      this.input = jQuery("#input");
      this.result = jQuery("#result");
      this.formId = "inputForm";
    }

    _createClass(IndexController, [{
      key: "init",
      value: function init() {
        var self = this;
        jQuery(function () {
          self.validateForm();
        });
      }
    }]);

    return IndexController;
  }();

  _exports.IndexController = IndexController;
});