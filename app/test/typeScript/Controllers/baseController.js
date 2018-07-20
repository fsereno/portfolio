"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = /** @class */ (function () {
    function BaseController(testService) {
        this.testService = testService;
    }
    BaseController.prototype.init = function () {
        var self = this;
        $(function () {
            self.testService.text();
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
