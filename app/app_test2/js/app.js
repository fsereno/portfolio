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
        console.log("This app 2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsIlNlcnZpY2VzL3Rlc3RTZXJ2aWNlLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQTtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBSUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBRVEsd0NBQWM7Ozs7O0FDOUJ2QjtJQUFBO0lBUUEsQ0FBQztJQU5HLDBCQUFJLEdBQUo7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFTCxrQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBRVEsa0NBQVc7Ozs7O0FDWnBCLGNBQWM7QUFDZCwrREFBOEQ7QUFFOUQsV0FBVztBQUNYLHNEQUFxRDtBQUVyRCxpREFBaUQ7QUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFcEMsY0FBYztBQUNkLElBQUksY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FFbkMsV0FBVyxDQUNkLENBQUM7QUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGVzdFNlcnZpY2VcIjtcblxuY2xhc3MgQmFzZUNvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXN0U2VydmljZTogSVRlc3RTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGVzdFNlcnZpY2U6IElUZXN0U2VydmljZVxuICAgICAgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudGVzdFNlcnZpY2UgPSB0ZXN0U2VydmljZTtcbiAgICB9XG5cbiAgICBpbml0KFxuICAgICAgICBcbiAgICApIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAkKCgpID0+IHtcblxuICAgICAgICAgICAgc2VsZi50ZXN0U2VydmljZS50ZXh0KCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgICAgXG59XG5cbmV4cG9ydCB7IEJhc2VDb250cm9sbGVyIH07IiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRlc3RTZXJ2aWNlXCI7XG5cbmNsYXNzIFRlc3RTZXJ2aWNlIGltcGxlbWVudHMgSVRlc3RTZXJ2aWNlIHtcblxuICAgIHRleHQoKSA6IHZvaWQge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBhcHAgMlwiKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBUZXN0U2VydmljZSB9OyIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4vU2VydmljZXMvdGVzdFNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRlc3RTZXJ2aWNlID0gbmV3IFRlc3RTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcbihcbiAgICB0ZXN0U2VydmljZVxuKTtcblxuYmFzZUNvbnRyb2xsZXIuaW5pdCgpOyJdfQ==
