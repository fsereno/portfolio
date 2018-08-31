(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var IndexController = /** @class */ (function () {
    function IndexController(textService) {
        this.textService = textService;
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            var text = self.textService.Concat("Application ", "Master Template");
            console.log(text);
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        //Example method
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Services
var textService_1 = require("../../typeScript/Services/textService");
// Instantiate Services with dependency injection
var textService = new textService_1.TextService();
// Controllers
var indexController = new IndexController_1.IndexController(textService);
indexController.init();

},{"../../typeScript/Services/textService":3,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextService = /** @class */ (function () {
    function TextService() {
        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
    }
    TextService.prototype.Concat = function (a, b) {
        return a + " " + b;
    };
    TextService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var regex = new RegExp(findThis, "g"), count = (inThis.match(regex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(findThis, replaceWithThis);
        }
        return inThis;
    };
    TextService.prototype.ToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    TextService.prototype.Unscrabble = function (findThis, inThis) {
        var findThisNormalised = findThis.toLowerCase(), inThisNormalised = inThis.toLowerCase(), scrabbleArray = this.ToArray(inThisNormalised), inputArray = this.ToArray(findThisNormalised), resultsArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            var inputCharacter = inputArray[i], indexOf = scrabbleArray.indexOf(inputCharacter);
            if (indexOf > -1) {
                resultsArray.push(inputCharacter);
                scrabbleArray.splice(indexOf, 1);
            }
        }
        var resultArrayToString = resultsArray.join(""), result = resultArrayToString === findThisNormalised;
        return result;
    };
    TextService.prototype.GenerateRandom = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.ToArray(criterion);
                array.forEach(function (char, i) {
                    var indexToPush = Math.floor(Math.random() * array.length);
                    if (i === indexToPush && output.length < length) {
                        output.push(char);
                    }
                });
            });
        }
        var result = output.join("");
        return result;
    };
    return TextService;
}());
exports.TextService = TextService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxXQUF5QjtRQUl6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLENBQUM7WUFFSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLGdCQUFnQjtJQUVwQixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLDBDQUFlOzs7OztBQ0o1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLFdBQVcsQ0FDZCxDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R2QjtJQUtJO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyw0QkFBNEIsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUV0QyxDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLENBQVMsRUFB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Q0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FqR0EsQUFpR0MsSUFBQTtBQWpHWSxrQ0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5cbi8vIE1vZGVsc1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuXG4gICAgICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNlbGYudGV4dFNlcnZpY2UuQ29uY2F0KFwiQXBwbGljYXRpb24gXCIsIFwiTWFzdGVyIFRlbXBsYXRlXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcblxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcpe1xuXG4gICAgICAgIC8vRXhhbXBsZSBtZXRob2RcbiAgICAgICAgXG4gICAgfVxuICAgICAgIFxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy90ZXh0U2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdGV4dFNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2VydmljZSBpbXBsZW1lbnRzIElUZXh0U2VydmljZVxue1xuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHRoaXMuTnVtZXJpY1N0cmluZyA9IFwiMDEyMzQ1Njc4OVwiO1xuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBDb25jYXQoYSA6c3RyaW5nLGI6c3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLCBcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcsIFxuICAgICAgICByZXBsYWNlV2l0aFRoaXM6IHN0cmluZyk6IHN0cmluZ3tcblxuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgVW5zY3JhYmJsZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nKSA6IGJvb2xlYW4ge1xuXG4gICAgICAgIGxldCBmaW5kVGhpc05vcm1hbGlzZWQgPSBmaW5kVGhpcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgaW5UaGlzTm9ybWFsaXNlZCA9IGluVGhpcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgc2NyYWJibGVBcnJheSA9IHRoaXMuVG9BcnJheShpblRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIGlucHV0QXJyYXkgPSB0aGlzLlRvQXJyYXkoZmluZFRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIHJlc3VsdHNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5wdXRDaGFyYWN0ZXIgPSBpbnB1dEFycmF5W2ldLFxuICAgICAgICAgICAgICAgIGluZGV4T2YgPSBzY3JhYmJsZUFycmF5LmluZGV4T2YoaW5wdXRDaGFyYWN0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXhPZj4tMSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRDaGFyYWN0ZXIpO1xuICAgICAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkuc3BsaWNlKGluZGV4T2YsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdEFycmF5VG9TdHJpbmcgPSByZXN1bHRzQXJyYXkuam9pbihcIlwiKSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdEFycmF5VG9TdHJpbmcgPT09IGZpbmRUaGlzTm9ybWFsaXNlZDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgR2VuZXJhdGVSYW5kb20oY3JpdGVyaWE6IHN0cmluZ1tdLCBsZW5ndGg6bnVtYmVyKSA6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXVxuXG4gICAgICAgIHdoaWxlKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcblxuICAgICAgICAgICAgY3JpdGVyaWEuZm9yRWFjaChjcml0ZXJpb24gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5Ub0FycmF5KGNyaXRlcmlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhUb1B1c2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihpPT09aW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxufSJdfQ==
