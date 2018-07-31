(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = /** @class */ (function () {
    function BaseController(textService) {
        this.textService = textService;
    }
    BaseController.prototype.init = function () {
        var self = this;
        $(function () {
            var text = self.textService.Concat("Application ", "1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBR0ksV0FBeUI7UUFJekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFJSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsQ0FBQyxDQUFDO1lBRUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBRVEsd0NBQWM7Ozs7O0FDbEN2QixjQUFjO0FBQ2QsK0RBQThEO0FBRTlELFdBQVc7QUFDWCxxRUFBb0U7QUFFcEUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXBDLGNBQWM7QUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBRW5DLFdBQVcsQ0FDZCxDQUFDO0FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R0QjtJQUFBO0lBS0EsQ0FBQztJQUhVLDRCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUMsQ0FBUTtRQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxrQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5jbGFzcyBCYXNlQ29udHJvbGxlciAge1xuICAgIFxuICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0U2VydmljZSA9IHRleHRTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoXG4gICAgICAgIFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICQoKCkgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNlbGYudGV4dFNlcnZpY2UuQ29uY2F0KFwiQXBwbGljYXRpb24gXCIsIFwiMVwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgICAgXG59XG5cbmV4cG9ydCB7IEJhc2VDb250cm9sbGVyIH07IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9iYXNlQ29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy90ZXh0U2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBiYXNlQ29udHJvbGxlciA9IG5ldyBCYXNlQ29udHJvbGxlclxuKFxuICAgIHRleHRTZXJ2aWNlXG4pO1xuXG5iYXNlQ29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2VydmljZSBpbXBsZW1lbnRzIElUZXh0U2VydmljZVxue1xuICAgIHB1YmxpYyBDb25jYXQoYSA6c3RyaW5nLGI6c3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XG4gICAgfVxufSJdfQ==
