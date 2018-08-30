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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxXQUF5QjtRQUl6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLENBQUM7WUFFSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLGdCQUFnQjtJQUVwQixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLDBDQUFlOzs7OztBQ0o1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLFdBQVcsQ0FDZCxDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R2QjtJQUFBO0lBdUdBLENBQUM7SUFyR1UsNEJBQU0sR0FBYixVQUFjLENBQVMsRUFBQyxDQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFXLEdB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QUFNLENBQUMsQ0FBQztvQkFFM0QsSUFBRyxDQUFDLEtBQUcsV0FBVyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFDO3dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtnQkFFTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCxrQkFBQztBQUFELENBdkdBLEFBdUdDLElBQUE7QUF2R1ksa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG4vLyBNb2RlbHNcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0U2VydmljZSA9IHRleHRTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcblxuICAgICAgICAgICAgdmFyIHRleHQgPSBzZWxmLnRleHRTZXJ2aWNlLkNvbmNhdChcIkFwcGxpY2F0aW9uIFwiLCBcIk1hc3RlciBUZW1wbGF0ZVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nKXtcblxuICAgICAgICAvL0V4YW1wbGUgbWV0aG9kXG4gICAgICAgIFxuICAgIH1cbiAgICAgICBcbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRleHRTZXJ2aWNlID0gbmV3IFRleHRTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHRleHRTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2VcbntcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG5cbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcbiAgICAgICAgICAgICAgICBjb3VudCA9IChpblRoaXMubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpblRoaXMgPSBpblRoaXMucmVwbGFjZShmaW5kVGhpcywgcmVwbGFjZVdpdGhUaGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgcmV0dXJuIGluVGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RyaW5nVG9BcnJheShpbnB1dDogc3RyaW5nKSA6IHN0cmluZ1tdIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlucHV0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIFVuc2NyYWJibGUoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZykgOiBib29sZWFuIHtcblxuICAgICAgICBsZXQgZmluZFRoaXNOb3JtYWxpc2VkID0gZmluZFRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGluVGhpc05vcm1hbGlzZWQgPSBpblRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkgPSB0aGlzLnN0cmluZ1RvQXJyYXkoaW5UaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICBpbnB1dEFycmF5ID0gdGhpcy5zdHJpbmdUb0FycmF5KGZpbmRUaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICByZXN1bHRzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGlucHV0Q2hhcmFjdGVyID0gaW5wdXRBcnJheVtpXSxcbiAgICAgICAgICAgICAgICBpbmRleE9mID0gc2NyYWJibGVBcnJheS5pbmRleE9mKGlucHV0Q2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4T2Y+LTEpe1xuICAgICAgICAgICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0Q2hhcmFjdGVyKTtcbiAgICAgICAgICAgICAgICBzY3JhYmJsZUFycmF5LnNwbGljZShpbmRleE9mLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRBcnJheVRvU3RyaW5nID0gcmVzdWx0c0FycmF5LmpvaW4oXCJcIiksXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRBcnJheVRvU3RyaW5nID09PSBmaW5kVGhpc05vcm1hbGlzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIEdldEFscGhhU3RyaW5nKCkgOiBzdHJpbmcge1xuXG4gICAgICAgIC8vIEdldCBmcm9tIHJlcG9zaXRvcnlcbiAgICAgICAgdmFyIHN0cmluZyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcblxuICAgIH07XG5cbiAgICBHZXROdW1lcmljU3RyaW5nKCkgOiBzdHJpbmcge1xuXG4gICAgICAgIC8vIEdldCBmcm9tIHJlcG9zaXRvcnlcbiAgICAgICAgdmFyIHN0cmluZyA9IFwiMDEyMzQ1Njc4OVwiO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuXG4gICAgfTtcblxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc3RyaW5nVG9BcnJheShjcml0ZXJpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iXX0=
