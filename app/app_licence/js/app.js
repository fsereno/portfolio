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
            var text = self.textService.Concat("Application ", "Master Template");
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
    TextService.prototype.stringToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    TextService.prototype.Unscrabble = function (findThis, inThis) {
        var findThisNormalised = findThis.toLowerCase(), inThisNormalised = inThis.toLowerCase(), scrabbleArray = this.stringToArray(inThisNormalised), inputArray = this.stringToArray(findThisNormalised), resultsArray = [];
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
    TextService.prototype.GetAlphaString = function () {
        // Get from repository
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return string;
    };
    ;
    TextService.prototype.GetNumericString = function () {
        // Get from repository
        var string = "0123456789";
        return string;
    };
    ;
    TextService.prototype.GenerateRandom = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.stringToArray(criterion);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxXQUF5QjtRQUl6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUlJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixDQUFDLENBQUM7WUFFRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSwwQ0FBZTs7Ozs7QUNKNUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gscUVBQW9FO0FBRXBFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNkdkI7SUFBQTtJQXVHQSxDQUFDO0lBckdVLDRCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUMsQ0FBUTtRQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUNJLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxlQUF1QjtRQUVuQixJQUFJLEtB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LENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBQzt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckI7Z0JBRUwsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXZHQSxBQXVHQyxJQUFBO0FBdkdZLGtDQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGV4dFNlcnZpY2VcIjtcblxuLy8gTW9kZWxzXG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZVxuICAgICAgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dFNlcnZpY2UgPSB0ZXh0U2VydmljZTtcbiAgICB9XG5cbiAgICBpbml0KFxuICAgICAgICBcbiAgICApIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAkKCgpID0+IHtcblxuICAgICAgICAgICAgdmFyIHRleHQgPSBzZWxmLnRleHRTZXJ2aWNlLkNvbmNhdChcIkFwcGxpY2F0aW9uIFwiLCBcIk1hc3RlciBUZW1wbGF0ZVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgICAgXG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB0ZXh0U2VydmljZSA9IG5ldyBUZXh0U2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB0ZXh0U2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGV4dFNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRTZXJ2aWNlIGltcGxlbWVudHMgSVRleHRTZXJ2aWNlXG57XG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuXG4gICAgICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKGZpbmRUaGlzLCBcImdcIiksXG4gICAgICAgICAgICAgICAgY291bnQgPSAoaW5UaGlzLm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UoZmluZFRoaXMsIHJlcGxhY2VXaXRoVGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHJldHVybiBpblRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0cmluZ1RvQXJyYXkoaW5wdXQ6IHN0cmluZykgOiBzdHJpbmdbXSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpbnB1dFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBVbnNjcmFiYmxlKFxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLCBcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcpIDogYm9vbGVhbiB7XG5cbiAgICAgICAgbGV0IGZpbmRUaGlzTm9ybWFsaXNlZCA9IGZpbmRUaGlzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBpblRoaXNOb3JtYWxpc2VkID0gaW5UaGlzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBzY3JhYmJsZUFycmF5ID0gdGhpcy5zdHJpbmdUb0FycmF5KGluVGhpc05vcm1hbGlzZWQpLFxuICAgICAgICAgICAgaW5wdXRBcnJheSA9IHRoaXMuc3RyaW5nVG9BcnJheShmaW5kVGhpc05vcm1hbGlzZWQpLFxuICAgICAgICAgICAgcmVzdWx0c0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbnB1dENoYXJhY3RlciA9IGlucHV0QXJyYXlbaV0sXG4gICAgICAgICAgICAgICAgaW5kZXhPZiA9IHNjcmFiYmxlQXJyYXkuaW5kZXhPZihpbnB1dENoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleE9mPi0xKXtcbiAgICAgICAgICAgICAgICByZXN1bHRzQXJyYXkucHVzaChpbnB1dENoYXJhY3Rlcik7XG4gICAgICAgICAgICAgICAgc2NyYWJibGVBcnJheS5zcGxpY2UoaW5kZXhPZiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0QXJyYXlUb1N0cmluZyA9IHJlc3VsdHNBcnJheS5qb2luKFwiXCIpLFxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0QXJyYXlUb1N0cmluZyA9PT0gZmluZFRoaXNOb3JtYWxpc2VkO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBHZXRBbHBoYVN0cmluZygpIDogc3RyaW5nIHtcblxuICAgICAgICAvLyBHZXQgZnJvbSByZXBvc2l0b3J5XG4gICAgICAgIHZhciBzdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG5cbiAgICB9O1xuXG4gICAgR2V0TnVtZXJpY1N0cmluZygpIDogc3RyaW5nIHtcblxuICAgICAgICAvLyBHZXQgZnJvbSByZXBvc2l0b3J5XG4gICAgICAgIHZhciBzdHJpbmcgPSBcIjAxMjM0NTY3ODlcIjtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcblxuICAgIH07XG5cbiAgICBHZW5lcmF0ZVJhbmRvbShjcml0ZXJpYTogc3RyaW5nW10sIGxlbmd0aDpudW1iZXIpIDogc3RyaW5nIHtcblxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdXG5cbiAgICAgICAgd2hpbGUob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnN0cmluZ1RvQXJyYXkoY3JpdGVyaW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGk9PT1pbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IG91dHB1dC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG59Il19
