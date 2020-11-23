"use strict";
exports.__esModule = true;
exports.KeyGeneratorModule = void 0;
var KeyGeneratorModule = /** @class */ (function () {
    function KeyGeneratorModule() {
    }
    KeyGeneratorModule.prototype.generate = function (field, limit) {
        if (field === void 0) { field = ""; }
        if (limit === void 0) { limit = 25; }
        var result = typeof field !== "undefined"
            ? field.substring(0, limit).split(" ").join("")
            : "";
        return result;
    };
    return KeyGeneratorModule;
}());
exports.KeyGeneratorModule = KeyGeneratorModule;
