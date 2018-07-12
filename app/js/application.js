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
        console.log("This is a Service");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvdHlwZVNjcmlwdC9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC90eXBlU2NyaXB0L1NlcnZpY2VzL3Rlc3RTZXJ2aWNlLnRzIiwiYXBwL3R5cGVTY3JpcHQvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBR0ksV0FBeUI7UUFJekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFJSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsQ0FBQyxDQUFDO1lBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTCxxQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUFFUSx3Q0FBYzs7Ozs7QUM5QnZCO0lBQUE7SUFRQSxDQUFDO0lBTkcsMEJBQUksR0FBSjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVRLGtDQUFXOzs7OztBQ1pwQixjQUFjO0FBQ2QsK0RBQThEO0FBRTlELFdBQVc7QUFDWCxzREFBcUQ7QUFFckQsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBRW5DLFdBQVcsQ0FDZCxDQUFDO0FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRlc3RTZXJ2aWNlXCI7XG5cbmNsYXNzIEJhc2VDb250cm9sbGVyICB7XG4gICAgXG4gICAgdGVzdFNlcnZpY2U6IElUZXN0U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRlc3RTZXJ2aWNlID0gdGVzdFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdChcbiAgICAgICAgXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgJCgoKSA9PiB7XG5cbiAgICAgICAgICAgIHNlbGYudGVzdFNlcnZpY2UudGV4dCgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgICAgIFxufVxuXG5leHBvcnQgeyBCYXNlQ29udHJvbGxlciB9OyIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xuXG5jbGFzcyBUZXN0U2VydmljZSBpbXBsZW1lbnRzIElUZXN0U2VydmljZSB7XG5cbiAgICB0ZXh0KCkgOiB2b2lkIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgYSBTZXJ2aWNlXCIpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFRlc3RTZXJ2aWNlIH07IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi9TZXJ2aWNlcy90ZXN0U2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGVzdFNlcnZpY2UgPSBuZXcgVGVzdFNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBiYXNlQ29udHJvbGxlciA9IG5ldyBCYXNlQ29udHJvbGxlclxuKFxuICAgIHRlc3RTZXJ2aWNlXG4pO1xuXG5iYXNlQ29udHJvbGxlci5pbml0KCk7Il19
