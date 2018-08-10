(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var BaseController = /** @class */ (function () {
    function BaseController(textService) {
        this.textService = textService;
    }
    BaseController.prototype.init = function () {
        var self = this;
        $(function () {
            var text = self.textService.Concat("Application ", "Master Template");
            console.log(text);
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var baseController_1 = require("./Controllers/baseController");
// Services
var textService_1 = require("../../typeScript/Services/textService");
// Instantiate Services with dependency injection
var textService = new textService_1.TextService();
// Controllers
var baseController = new baseController_1.BaseController(textService);
baseController.init();

},{"../../typeScript/Services/textService":3,"./Controllers/baseController":1}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLFNBQVM7QUFFVDtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBRVEsd0NBQWM7Ozs7O0FDbEN2QixjQUFjO0FBQ2QsK0RBQThEO0FBRTlELFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBRW5DLFdBQVcsQ0FDZCxDQUFDO0FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R0QjtJQUFBO0lBZ0JBLENBQUM7SUFkVSw0QkFBTSxHQUFiLFVBQWMsQ0FBUyxFQUFDLENBQVE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFDSSxRQUFnQixFQUNoQixNQUFjLEVBQ2QsZUFBdUI7UUFFdkIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdkQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQ0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5cbi8vIE1vZGVsc1xuXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xuICAgIFxuICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0U2VydmljZSA9IHRleHRTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXh0U2VydmljZS5Db25jYXQoXCJBcHBsaWNhdGlvbiBcIiwgXCJNYXN0ZXIgVGVtcGxhdGVcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgICAgIFxufVxuXG5leHBvcnQgeyBCYXNlQ29udHJvbGxlciB9OyIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRleHRTZXJ2aWNlID0gbmV3IFRleHRTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcbihcbiAgICB0ZXh0U2VydmljZVxuKTtcblxuYmFzZUNvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2VcbntcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iXX0=
