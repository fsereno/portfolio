(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLFNBQVM7QUFFVDtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBSUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTCxxQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUFFUSx3Q0FBYzs7OztBQ3BDdkIsY0FBYztBQUNkLCtEQUE4RDtBQUU5RCxXQUFXO0FBQ1gscUVBQW9FO0FBRXBFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVwQyxjQUFjO0FBQ2QsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUVuQyxXQUFXLENBQ2QsQ0FBQztBQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztBQ2J0QjtJQUFBO0lBVUEsQ0FBQztJQVJHLDBCQUFJLEdBQUo7UUFFSSxJQUFJLElBQUksR0FBRywyQkFBMkIsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUVRLGtDQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xyXG5cclxuLy8gTW9kZWxzXHJcblxyXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xyXG4gICAgXHJcbiAgICB0ZXN0U2VydmljZTogSVRlc3RTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHRlc3RTZXJ2aWNlOiBJVGVzdFNlcnZpY2VcclxuICAgICAgXHJcbiAgICApIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVzdFNlcnZpY2UgPSB0ZXN0U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KFxyXG4gICAgICAgIFxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc2VsZi50ZXN0U2VydmljZS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VDb250cm9sbGVyIH07IiwiXHJcbi8vIENvbnRyb2xsZXJzXHJcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXJcIjtcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGVzdFNlcnZpY2VcIjtcclxuXHJcbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cclxubGV0IHRlc3RTZXJ2aWNlID0gbmV3IFRlc3RTZXJ2aWNlKCk7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5sZXQgYmFzZUNvbnRyb2xsZXIgPSBuZXcgQmFzZUNvbnRyb2xsZXJcclxuKFxyXG4gICAgdGVzdFNlcnZpY2VcclxuKTtcclxuXHJcbmJhc2VDb250cm9sbGVyLmluaXQoKTsiLCIvLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IElUZXN0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXN0U2VydmljZVwiO1xyXG5cclxuY2xhc3MgVGVzdFNlcnZpY2UgaW1wbGVtZW50cyBJVGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIHRleHQoKSA6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0ID0gXCJUaGlzIGZyb20gdGhlIHRlc3RTZXJ2aWNlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgVGVzdFNlcnZpY2UgfTsiXX0=
