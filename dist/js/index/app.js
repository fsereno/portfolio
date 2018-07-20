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
            self.testService.text();
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.text = function () {
        console.log("This is a Service");
    };
    return TestService;
}());
exports.TestService = TestService;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var baseController_1 = require("./Controllers/baseController");
// Services
var testService_1 = require("./Services/testService");
// Instantiate Services with dependency injection
var testService = new testService_1.TestService();
// Controllers
var baseController = new baseController_1.BaseController(testService);
baseController.init();

},{"./Controllers/baseController":1,"./Services/testService":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImluZGV4L1NlcnZpY2VzL3Rlc3RTZXJ2aWNlLnRzIiwiaW5kZXgvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQTtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBSUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBRVEsd0NBQWM7Ozs7O0FDOUJ2QjtJQUFBO0lBUUEsQ0FBQztJQU5HLDBCQUFJLEdBQUo7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFckMsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFFUSxrQ0FBVzs7Ozs7QUNacEIsY0FBYztBQUNkLCtEQUE4RDtBQUU5RCxXQUFXO0FBQ1gsc0RBQXFEO0FBRXJELGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUVuQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xuXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xuICAgIFxuICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXN0U2VydmljZTogSVRlc3RTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXN0U2VydmljZSA9IHRlc3RTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoXG4gICAgICAgIFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICQoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnRlc3RTZXJ2aWNlLnRleHQoKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAgICBcbn1cblxuZXhwb3J0IHsgQmFzZUNvbnRyb2xsZXIgfTsiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGVzdFNlcnZpY2VcIjtcblxuY2xhc3MgVGVzdFNlcnZpY2UgaW1wbGVtZW50cyBJVGVzdFNlcnZpY2Uge1xuXG4gICAgdGV4dCgpIDogdm9pZCB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGEgU2VydmljZVwiKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBUZXN0U2VydmljZSB9OyIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4vU2VydmljZXMvdGVzdFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRlc3RTZXJ2aWNlID0gbmV3IFRlc3RTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcbihcbiAgICB0ZXN0U2VydmljZVxuKTtcblxuYmFzZUNvbnRyb2xsZXIuaW5pdCgpOyJdfQ==