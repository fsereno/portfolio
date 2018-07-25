(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = /** @class */ (function () {
    function BaseController(testService) {
        this.testService = testService;
    }
    BaseController.prototype.init = function () {
        var self = this;
        $(function () {
            var text = self.testService.text();
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
var testService_1 = require("../../typeScript/Services/testService");
// Instantiate Services with dependency injection
var testService = new testService_1.TestService();
// Controllers
var baseController = new baseController_1.BaseController(testService);
baseController.init();

},{"../../typeScript/Services/testService":3,"./Controllers/baseController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.text = function () {
        var text = "This from the testService";
        return text;
    };
    return TestService;
}());
exports.TestService = TestService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBR0ksV0FBeUI7UUFJekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFJSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsQ0FBQyxDQUFDO1lBRUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQUVRLHdDQUFjOzs7OztBQ2xDdkIsY0FBYztBQUNkLCtEQUE4RDtBQUU5RCxXQUFXO0FBQ1gscUVBQW9FO0FBRXBFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUVuQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNidEI7SUFBQTtJQVVBLENBQUM7SUFSRywwQkFBSSxHQUFKO1FBRUksSUFBSSxJQUFJLEdBQUcsMkJBQTJCLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFUSxrQ0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRlc3RTZXJ2aWNlXCI7XG5cbmNsYXNzIEJhc2VDb250cm9sbGVyICB7XG4gICAgXG4gICAgdGVzdFNlcnZpY2U6IElUZXN0U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRlc3RTZXJ2aWNlID0gdGVzdFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdChcbiAgICAgICAgXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXN0U2VydmljZS50ZXh0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgICAgIFxufVxuXG5leHBvcnQgeyBCYXNlQ29udHJvbGxlciB9OyIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRlc3RTZXJ2aWNlID0gbmV3IFRlc3RTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcbihcbiAgICB0ZXN0U2VydmljZVxuKTtcblxuYmFzZUNvbnRyb2xsZXIuaW5pdCgpOyIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xuXG5jbGFzcyBUZXN0U2VydmljZSBpbXBsZW1lbnRzIElUZXN0U2VydmljZSB7XG5cbiAgICB0ZXh0KCkgOiBzdHJpbmcge1xuXG4gICAgICAgIHZhciB0ZXh0ID0gXCJUaGlzIGZyb20gdGhlIHRlc3RTZXJ2aWNlXCI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGV4dDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBUZXN0U2VydmljZSB9OyJdfQ==
