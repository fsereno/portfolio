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
            $("#findReplaceForm").validate({
                submitHandler: function (form) {
                    var valid = $(form).valid();
                    console.log(valid);
                    console.log("form submitted");
                }
            });
            /*$("#findReplaceForm").on("submit", (e) => {

                e.preventDefault();
                console.log("form submitted");

            });*/
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
    TextService.prototype.Find = function (findThis, inThis) {
        return "test";
    };
    return TextService;
}());
exports.TextService = TextService;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBLFNBQVM7QUFFVDtJQUlJLHdCQUdJLFdBQXlCO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLENBQUMsQ0FBQztZQUVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUUzQixhQUFhLEVBQUUsVUFBQyxJQUFJO29CQUVoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFFbEMsQ0FBQzthQUVKLENBQUMsQ0FBQztZQUVIOzs7OztpQkFLSztRQUVULENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQUVRLHdDQUFjOzs7O0FDckR2QixjQUFjO0FBQ2QsK0RBQThEO0FBRTlELFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBRW5DLFdBQVcsQ0FDZCxDQUFDO0FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0FDZHRCO0lBQUE7SUFXQSxDQUFDO0lBVFUsNEJBQU0sR0FBYixVQUFjLENBQVMsRUFBQyxDQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBWSxRQUFnQixFQUFFLE1BQWM7UUFFeEMsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQ0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGV4dFNlcnZpY2VcIjtcclxuXHJcbi8vIE1vZGVsc1xyXG5cclxuY2xhc3MgQmFzZUNvbnRyb2xsZXIgIHtcclxuICAgIFxyXG4gICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvclxyXG4gICAgKFxyXG5cclxuICAgICAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlXHJcbiAgICAgIFxyXG4gICAgKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRleHQgPSBzZWxmLnRleHRTZXJ2aWNlLkNvbmNhdChcIkFwcGxpY2F0aW9uIFwiLCBcIk1hc3RlciBUZW1wbGF0ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNmaW5kUmVwbGFjZUZvcm1cIikudmFsaWRhdGUoe1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSAkKGZvcm0pLnZhbGlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWQpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcm0gc3VibWl0dGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyokKFwiI2ZpbmRSZXBsYWNlRm9ybVwiKS5vbihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXR0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IHsgQmFzZUNvbnRyb2xsZXIgfTsiLCJcclxuLy8gQ29udHJvbGxlcnNcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlclwiO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy90ZXh0U2VydmljZVwiO1xyXG5cclxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxyXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcclxuXHJcbi8vIENvbnRyb2xsZXJzXHJcbmxldCBiYXNlQ29udHJvbGxlciA9IG5ldyBCYXNlQ29udHJvbGxlclxyXG4oXHJcbiAgICB0ZXh0U2VydmljZVxyXG4pO1xyXG5cclxuYmFzZUNvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRTZXJ2aWNlIGltcGxlbWVudHMgSVRleHRTZXJ2aWNlXHJcbntcclxuICAgIHB1YmxpYyBDb25jYXQoYSA6c3RyaW5nLGI6c3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRmluZChmaW5kVGhpczogc3RyaW5nLCBpblRoaXM6IHN0cmluZyk6IHN0cmluZ3tcclxuXHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG5cclxuICAgIH1cclxufSJdfQ==
