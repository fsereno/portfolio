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
    return TextService;
}());
exports.TextService = TextService;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLFNBQVM7QUFFVDtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBRVEsd0NBQWM7Ozs7QUNsQ3ZCLGNBQWM7QUFDZCwrREFBOEQ7QUFFOUQsV0FBVztBQUNYLHFFQUFvRTtBQUVwRSxpREFBaUQ7QUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFcEMsY0FBYztBQUNkLElBQUksY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FFbkMsV0FBVyxDQUNkLENBQUM7QUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7QUNkdEI7SUFBQTtJQUtBLENBQUM7SUFIVSw0QkFBTSxHQUFiLFVBQWMsQ0FBUyxFQUFDLENBQVE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLGtDQUFXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xyXG5cclxuLy8gTW9kZWxzXHJcblxyXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xyXG4gICAgXHJcbiAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2VcclxuICAgICAgXHJcbiAgICApIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGV4dFNlcnZpY2UgPSB0ZXh0U2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgJCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNlbGYudGV4dFNlcnZpY2UuQ29uY2F0KFwiQXBwbGljYXRpb24gXCIsIFwiTWFzdGVyIFRlbXBsYXRlXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQ29udHJvbGxlciB9OyIsIlxyXG4vLyBDb250cm9sbGVyc1xyXG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL2Jhc2VDb250cm9sbGVyXCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlXCI7XHJcblxyXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXHJcbmxldCB0ZXh0U2VydmljZSA9IG5ldyBUZXh0U2VydmljZSgpO1xyXG5cclxuLy8gQ29udHJvbGxlcnNcclxubGV0IGJhc2VDb250cm9sbGVyID0gbmV3IEJhc2VDb250cm9sbGVyXHJcbihcclxuICAgIHRleHRTZXJ2aWNlXHJcbik7XHJcblxyXG5iYXNlQ29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2Vcclxue1xyXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xyXG4gICAgfVxyXG59Il19
