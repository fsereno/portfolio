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
            var text = self.stringService.Concat("Application ", "1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxhQUE2QjtRQUk3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixDQUFDLENBQUM7WUFFRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTCxzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksMENBQWU7Ozs7O0FDSjVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLHlFQUF3RTtBQUV4RSxlQUFlO0FBQ2YsbUZBQWtGO0FBRWxGLGVBQWU7QUFDZixJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUU5QyxpREFBaUQ7QUFDakQsSUFBSSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFeEQsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsYUFBYSxDQUNoQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ3BCdkI7SUFPSTtRQUVJLElBQUksQ0FBQyxXQUFX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LE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCxvQkFBQztBQUFELENBOUVBLEFBOEVDLElBQUE7QUE5RVksc0NBQWEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuLy8gTW9kZWxzXG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi5zdHJpbmdTZXJ2aWNlLkNvbmNhdChcIkFwcGxpY2F0aW9uIFwiLCBcIjFcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgICAgIFxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2VcIjtcblxuLy8gUmVwb3NpdG9yaWVzXG5pbXBvcnQgeyBTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvUmVwb3NpdG9yaWVzL1N0cmluZ1JlcG9zaXRvcnlcIjtcblxuLy8gUmVwb3NpdG9yaWVzXG5sZXQgc3RyaW5nUmVwb3NpdG9yeSA9IG5ldyBTdHJpbmdSZXBvc2l0b3J5KCk7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2Uoc3RyaW5nUmVwb3NpdG9yeSk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHN0cmluZ1NlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElTdHJpbmdSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLkFscGhhU3RyaW5nID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNTdHJpbmcgPSBcIjAxMjM0NTY3ODlcIjtcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSBcIkFFSU9VXCI7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdTZXJ2aWNlIGltcGxlbWVudHMgSVN0cmluZ1NlcnZpY2VcbntcbiAgICBwdWJsaWMgQWxwaGFTdHJpbmc6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY1N0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcbiAgICBwcml2YXRlIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnlcbiAgICApe1xuXG4gICAgICAgIHRoaXMuc3RyaW5nUmVwb3NpdG9yeSA9IHN0cmluZ1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQWxwaGFTdHJpbmc7XG4gICAgICAgIHRoaXMuTnVtZXJpY1N0cmluZyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5BbHBoYVN0cmluZztcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuVm93ZWxzO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBHZW5lcmF0ZVJhbmRvbShjcml0ZXJpYTogc3RyaW5nW10sIGxlbmd0aDpudW1iZXIpIDogc3RyaW5nIHtcblxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdXG5cbiAgICAgICAgd2hpbGUob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLlRvQXJyYXkoY3JpdGVyaW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGk9PT1pbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IG91dHB1dC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG59Il19
