"use strict";
exports.__esModule = true;
exports.StringSearchModule = void 0;
var StringSearchModule = /** @class */ (function () {
    function StringSearchModule() {
    }
    StringSearchModule.prototype.searchCriterions = function (criterions, searchTerm) {
        if (criterions === void 0) { criterions = []; }
        if (searchTerm === void 0) { searchTerm = ""; }
        var searchResult = criterions.length > 0 ? criterions.filter(function (criterion) {
            return criterion.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
        }) : [];
        var result = searchResult.length > 0;
        return result;
    };
    return StringSearchModule;
}());
exports.StringSearchModule = StringSearchModule;
