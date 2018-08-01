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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBR0ksV0FBeUI7UUFJekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFJSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsQ0FBQyxDQUFDO1lBRUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQUVRLHdDQUFjOzs7O0FDbEN2QixjQUFjO0FBQ2QsK0RBQThEO0FBRTlELFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBRW5DLFdBQVcsQ0FDZCxDQUFDO0FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0FDYnRCO0lBQUE7SUFVQSxDQUFDO0lBUkcsMEJBQUksR0FBSjtRQUVJLElBQUksSUFBSSxHQUFHLDJCQUEyQixDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFFTCxrQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBRVEsa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRlc3RTZXJ2aWNlXCI7XHJcblxyXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xyXG4gICAgXHJcbiAgICB0ZXN0U2VydmljZTogSVRlc3RTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2VcclxuICAgICAgXHJcbiAgICApIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVzdFNlcnZpY2UgPSB0ZXN0U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KFxyXG4gICAgICAgIFxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXN0U2VydmljZS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VDb250cm9sbGVyIH07IiwiXHJcbi8vIENvbnRyb2xsZXJzXHJcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2VcIjtcclxuXHJcbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cclxubGV0IHRlc3RTZXJ2aWNlID0gbmV3IFRlc3RTZXJ2aWNlKCk7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcclxuKFxyXG4gICAgdGVzdFNlcnZpY2VcclxuKTtcclxuXHJcbmJhc2VDb250cm9sbGVyLmluaXQoKTsiLCIvLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xyXG5cclxuY2xhc3MgVGVzdFNlcnZpY2UgaW1wbGVtZW50cyBJVGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIHRleHQoKSA6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0ID0gXCJUaGlzIGZyb20gdGhlIHRlc3RTZXJ2aWNlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgVGVzdFNlcnZpY2UgfTsiXX0=
