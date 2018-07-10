(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
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
exports.__esModule = true;
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.text = function () {
        console.log("Tester");
    };
    return TestService;
}());
exports.TestService = TestService;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC9zY3JpcHRzL1NlcnZpY2VzL3Rlc3RTZXJ2aWNlLnRzIiwiYXBwL3NjcmlwdHMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBR0ksV0FBeUI7UUFJekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFJSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsQ0FBQyxDQUFDO1lBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTCxxQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUFFUSx3Q0FBYzs7Ozs7QUM5QnZCO0lBQUE7SUFRQSxDQUFDO0lBTkcsMEJBQUksR0FBSjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFFUSxrQ0FBVzs7Ozs7QUNacEIsY0FBYztBQUNkLCtEQUE4RDtBQUU5RCxXQUFXO0FBQ1gsc0RBQXFEO0FBRXJELGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUVuQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xuXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xuICAgIFxuICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXN0U2VydmljZTogSVRlc3RTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXN0U2VydmljZSA9IHRlc3RTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoXG4gICAgICAgIFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICQoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnRlc3RTZXJ2aWNlLnRleHQoKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAgICBcbn1cblxuZXhwb3J0IHsgQmFzZUNvbnRyb2xsZXIgfTsiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGVzdFNlcnZpY2VcIjtcblxuY2xhc3MgVGVzdFNlcnZpY2UgaW1wbGVtZW50cyBJVGVzdFNlcnZpY2Uge1xuXG4gICAgdGV4dCgpIDogdm9pZCB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0ZXJcIik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgVGVzdFNlcnZpY2UgfTsiLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL2Jhc2VDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gXCIuL1NlcnZpY2VzL3Rlc3RTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB0ZXN0U2VydmljZSA9IG5ldyBUZXN0U2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGJhc2VDb250cm9sbGVyID0gbmV3IEJhc2VDb250cm9sbGVyXG4oXG4gICAgdGVzdFNlcnZpY2Vcbik7XG5cbmJhc2VDb250cm9sbGVyLmluaXQoKTsiXX0=
