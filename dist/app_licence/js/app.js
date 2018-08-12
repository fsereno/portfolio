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
        var result = inThis.replace(findThis, replaceWithThis);
        return result;
    };
    return TextService;
}());
exports.TextService = TextService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxTQUFTO0FBRVQ7SUFJSSx5QkFHSSxXQUF5QjtRQUl6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUlJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixDQUFDLENBQUM7WUFFRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQUVRLDBDQUFlOzs7OztBQ3BDeEIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gscUVBQW9FO0FBRXBFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNkdkI7SUFBQTtJQWdCQSxDQUFDO0lBZFUsNEJBQU0sR0FBYixVQUFjLENBQVMsRUFBQyxDQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGVBQXVCO1FBRXZCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXZELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCxrQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG4vLyBNb2RlbHNcblxuY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuXG4gICAgICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdChcbiAgICAgICAgXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXh0U2VydmljZS5Db25jYXQoXCJBcHBsaWNhdGlvbiBcIiwgXCJNYXN0ZXIgVGVtcGxhdGVcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgICAgIFxufVxuXG5leHBvcnQgeyBJbmRleENvbnRyb2xsZXIgfTsiLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRleHRTZXJ2aWNlID0gbmV3IFRleHRTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHRleHRTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2VcbntcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iXX0=
