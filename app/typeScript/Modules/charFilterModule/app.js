"use strict";
exports.__esModule = true;
exports.CharFilterModule = void 0;
var CharFilterModule = /** @class */ (function () {
    function CharFilterModule() {
    }
    CharFilterModule.prototype.filter = function (value, regex) {
        var result = "";
        for (var i = 0; i < value.length; i++) {
            var test_1 = regex.test(value[i]);
            if (test_1) {
                result = result += value[i];
            }
        }
        return result;
    };
    return CharFilterModule;
}());
exports.CharFilterModule = CharFilterModule;
