"use strict";
exports.__esModule = true;
exports.ContactFilterModule = void 0;
var ContactFilterModule = /** @class */ (function () {
    function ContactFilterModule() {
    }
    ContactFilterModule.prototype.filterNonNumerics = function (value) {
        var regex = /[0-9]/;
        var result = "";
        for (var i = 0; i < value.length; i++) {
            var test_1 = regex.test(value[i]);
            if (test_1) {
                result = result += value[i];
            }
        }
        return result;
    };
    return ContactFilterModule;
}());
exports.ContactFilterModule = ContactFilterModule;
