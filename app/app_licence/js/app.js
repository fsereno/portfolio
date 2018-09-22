(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var IndexController = /** @class */ (function () {
    function IndexController(stringService) {
        this.stringService = stringService;
    }
    IndexController.prototype.init = function () {
        var self = this;
        $(function () {
            var text = self.stringService.Concat("Application ", "Master Template");
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
// Repositories
var StringRepository_1 = require("../../typeScript/Repositories/StringRepository");
// Repositories
var stringRepository = new StringRepository_1.StringRepository();
// Instantiate Services with dependency injection
var stringService = new StringService_1.StringService(stringRepository);
// Controllers
var indexController = new IndexController_1.IndexController(stringService);
indexController.init();

},{"../../typeScript/Repositories/StringRepository":3,"../../typeScript/Services/StringService":4,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringRepository = /** @class */ (function () {
    function StringRepository() {
        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return StringRepository;
}());
exports.StringRepository = StringRepository;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService(stringRepository) {
        this.stringRepository = stringRepository;
        this.AlphaString = this.stringRepository.AlphaString;
        this.NumericString = this.stringRepository.AlphaString;
        this.Vowels = this.stringRepository.Vowels;
        this.Constonants = this.stringRepository.Constonants;
    }
    StringService.prototype.Concat = function (a, b) {
        return a + " " + b;
    };
    StringService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var searchRegex = new RegExp(findThis, "g"), replaceRegex = new RegExp("\\b" + findThis + "\\b"), count = (inThis.match(searchRegex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
        }
        return inThis;
    };
    StringService.prototype.ToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    StringService.prototype.GenerateRandom = function (criteria, length) {
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
    return StringService;
}());
exports.StringService = StringService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxhQUE2QjtRQUk3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUlJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixDQUFDLENBQUM7WUFFRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV4RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSwwQ0FBZTs7Ozs7QUNKNUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gseUVBQXdFO0FBRXhFLGVBQWU7QUFDZixtRkFBa0Y7QUFFbEYsZUFBZTtBQUNmLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGlEQUFpRDtBQUNqRCxJQUFJLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV4RCxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxhQUFhLENBQ2hCLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDcEJ2QjtJQU9JO1FBRUksSUFBSSxDQUFDLFdB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N0IsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQTtBQTlFWSxzQ0FBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuXG4vLyBNb2RlbHNcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHByaXZhdGUgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZVxuICAgICAgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMuc3RyaW5nU2VydmljZSA9IHN0cmluZ1NlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdChcbiAgICAgICAgXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi5zdHJpbmdTZXJ2aWNlLkNvbmNhdChcIkFwcGxpY2F0aW9uIFwiLCBcIk1hc3RlciBUZW1wbGF0ZVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgICAgXG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZVwiO1xuXG4vLyBSZXBvc2l0b3JpZXNcbmltcG9ydCB7IFN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvU3RyaW5nUmVwb3NpdG9yeVwiO1xuXG4vLyBSZXBvc2l0b3JpZXNcbmxldCBzdHJpbmdSZXBvc2l0b3J5ID0gbmV3IFN0cmluZ1JlcG9zaXRvcnkoKTtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHN0cmluZ1NlcnZpY2UgPSBuZXcgU3RyaW5nU2VydmljZShzdHJpbmdSZXBvc2l0b3J5KTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgc3RyaW5nU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdSZXBvc2l0b3J5IGltcGxlbWVudHMgSVN0cmluZ1JlcG9zaXRvcnkge1xuXG4gICAgcHVibGljIEFscGhhU3RyaW5nOiBzdHJpbmc7XG4gICAgcHVibGljIE51bWVyaWNTdHJpbmc6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHRoaXMuTnVtZXJpY1N0cmluZyA9IFwiMDEyMzQ1Njc4OVwiO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gXCJCQ0RGR0hKS0xNTlBRUlNUVlhaV1lcIlxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1JlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnlcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBzdHJpbmdSZXBvc2l0b3J5OiBJU3RyaW5nUmVwb3NpdG9yeVxuICAgICl7XG5cbiAgICAgICAgdGhpcy5zdHJpbmdSZXBvc2l0b3J5ID0gc3RyaW5nUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5BbHBoYVN0cmluZyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5BbHBoYVN0cmluZztcbiAgICAgICAgdGhpcy5OdW1lcmljU3RyaW5nID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkFscGhhU3RyaW5nO1xuICAgICAgICB0aGlzLlZvd2VscyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Wb3dlbHM7XG4gICAgICAgIHRoaXMuQ29uc3RvbmFudHMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQ29uc3RvbmFudHM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG4gICAgICAgICAgICBsZXQgc2VhcmNoUmVnZXggPSBuZXcgUmVnRXhwKGZpbmRUaGlzLCBcImdcIiksXG4gICAgICAgICAgICAgICAgcmVwbGFjZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBmaW5kVGhpcyArIFwiXFxcXGJcIiksXG4gICAgICAgICAgICAgICAgY291bnQgPSAoaW5UaGlzLm1hdGNoKHNlYXJjaFJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpblRoaXMgPSBpblRoaXMucmVwbGFjZShyZXBsYWNlUmVnZXgsIHJlcGxhY2VXaXRoVGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHJldHVybiBpblRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIFRvQXJyYXkoaW5wdXQ6IHN0cmluZykgOiBzdHJpbmdbXSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpbnB1dFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuVG9BcnJheShjcml0ZXJpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iXX0=
