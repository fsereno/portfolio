"use strict";
exports.__esModule = true;
exports.StringSearchModule = void 0;
var StringSearchModule = /** @class */ (function () {
    function StringSearchModule() {
        this.searchDoesNotExist = function (existingValue, searchTerm) {
            if (existingValue === void 0) { existingValue = ""; }
            if (searchTerm === void 0) { searchTerm = ""; }
            return (existingValue || "").indexOf(searchTerm) === -1;
        };
        this.combineSearchTerms = function (existingValue, searchTerm) {
            if (existingValue === void 0) { existingValue = ""; }
            if (searchTerm === void 0) { searchTerm = ""; }
            var result = existingValue + " " + searchTerm;
            return result.trim();
        };
    }
    StringSearchModule.prototype.searchCriterions = function (criterions, searchTerm) {
        if (criterions === void 0) { criterions = []; }
        if (searchTerm === void 0) { searchTerm = ""; }
        var searchResult = criterions.length > 0 ? criterions.filter(function (criterion) {
            var searchTerms = searchTerm.split(" ").filter(function (x) { return x; });
            var searchTermSearch = searchTerms.filter(function (term) {
                return criterion.toUpperCase().indexOf(term.toUpperCase()) !== -1;
            });
            return searchTermSearch.length > 0;
        }) : [];
        var result = searchResult.length > 0;
        return result;
    };
    return StringSearchModule;
}());
exports.StringSearchModule = StringSearchModule;
