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
        $(function () {
            var text = self.textService.Concat("Application ", "1");
            console.log(text);
        });
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
var StringService_1 = require("../../typeScript/Services/StringService");
// Instantiate Services with dependency injection
var textService = new StringService_1.TextService();
// Controllers
var indexController = new IndexController_1.IndexController(textService);
indexController.init();

},{"../../typeScript/Services/StringService":3,"./Controllers/IndexController":1}],3:[function(require,module,exports){
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
        var searchRegex = new RegExp(findThis, "g"), replaceRegex = new RegExp("\\b" + findThis + "\\b"), count = (inThis.match(searchRegex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLFNBQVM7QUFFVDtJQUlJLHlCQUdJLFdBQTJCO1FBSTNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSwwQ0FBZTs7Ozs7QUNKNUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gseUVBQXNFO0FBRXRFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLDJCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNkdkI7SUFLSTtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7SUFFdEMsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUMsQ0FBUTtRQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lB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Z0JBRUwsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQWpHQSxBQWlHQyxJQUFBO0FBakdZLGtDQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XG5cbi8vIE1vZGVsc1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgdGV4dFNlcnZpY2U6IElTdHJpbmdTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGV4dFNlcnZpY2U6IElTdHJpbmdTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0U2VydmljZSA9IHRleHRTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXh0U2VydmljZS5Db25jYXQoXCJBcHBsaWNhdGlvbiBcIiwgXCIxXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAgICBcbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdGV4dFNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHRoaXMuTnVtZXJpY1N0cmluZyA9IFwiMDEyMzQ1Njc4OVwiO1xuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBDb25jYXQoYSA6c3RyaW5nLGI6c3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLCBcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcsIFxuICAgICAgICByZXBsYWNlV2l0aFRoaXM6IHN0cmluZyk6IHN0cmluZ3tcbiAgICAgICAgICAgIGxldCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcbiAgICAgICAgICAgICAgICByZXBsYWNlUmVnZXggPSBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGZpbmRUaGlzICsgXCJcXFxcYlwiKSxcbiAgICAgICAgICAgICAgICBjb3VudCA9IChpblRoaXMubWF0Y2goc2VhcmNoUmVnZXgpIHx8IFtdKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKHJlcGxhY2VSZWdleCwgcmVwbGFjZVdpdGhUaGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgcmV0dXJuIGluVGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgVG9BcnJheShpbnB1dDogc3RyaW5nKSA6IHN0cmluZ1tdIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlucHV0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIFVuc2NyYWJibGUoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZykgOiBib29sZWFuIHtcblxuICAgICAgICBsZXQgZmluZFRoaXNOb3JtYWxpc2VkID0gZmluZFRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGluVGhpc05vcm1hbGlzZWQgPSBpblRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkgPSB0aGlzLlRvQXJyYXkoaW5UaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICBpbnB1dEFycmF5ID0gdGhpcy5Ub0FycmF5KGZpbmRUaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICByZXN1bHRzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGlucHV0Q2hhcmFjdGVyID0gaW5wdXRBcnJheVtpXSxcbiAgICAgICAgICAgICAgICBpbmRleE9mID0gc2NyYWJibGVBcnJheS5pbmRleE9mKGlucHV0Q2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4T2Y+LTEpe1xuICAgICAgICAgICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0Q2hhcmFjdGVyKTtcbiAgICAgICAgICAgICAgICBzY3JhYmJsZUFycmF5LnNwbGljZShpbmRleE9mLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRBcnJheVRvU3RyaW5nID0gcmVzdWx0c0FycmF5LmpvaW4oXCJcIiksXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRBcnJheVRvU3RyaW5nID09PSBmaW5kVGhpc05vcm1hbGlzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuVG9BcnJheShjcml0ZXJpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iXX0=
