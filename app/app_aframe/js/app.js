(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursorNavigateComponent = /** @class */ (function () {
    function CursorNavigateComponent(object, navigateService) {
        this.object = object;
        this.navigateService = navigateService;
    }
    CursorNavigateComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent("cursor-navigate-component", {
            init: function () {
                var _this = this;
                self.object.onEvents.forEach(function (event) {
                    //console.log(event);
                    _this.el.addEventListener(event, function (e) {
                        self.object.event = e;
                        self.navigateService.init(self.object);
                    });
                });
            }
        });
    };
    return CursorNavigateComponent;
}());
exports.CursorNavigateComponent = CursorNavigateComponent;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    //private cursorColourChangeComponent: IComponent;
    function IndexController(
    //trackPadListenerComponent: IComponent,
    cursorNavigateComponent) {
        //this.trackPadListenerComponent = trackPadListenerComponent;
        this.cursorNavigateComponent = cursorNavigateComponent;
        //this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    IndexController.prototype.init = function () {
        // this.trackPadListenerComponent.init();
        this.cursorNavigateComponent.init();
        // this.cursorColourChangeComponent.init();
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateModel = /** @class */ (function () {
    function NavigateModel(cameraId, yConstraint, onEvents) {
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvents = onEvents;
    }
    return NavigateModel;
}());
exports.NavigateModel = NavigateModel;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateService = /** @class */ (function () {
    function NavigateService() {
    }
    NavigateService.prototype.init = function (object) {
        var camera = document.querySelector("#" + object.cameraId);
        if (camera !== null) {
            console.log(object);
            var coords = object.event.detail.intersection.point, offset = 0.70, x = coords.x, y = !object.yConstraint ? coords.y : 0.0, z = coords.z + offset;
            camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
            camera.emit("navigate-animate");
            camera.emit("navigate-navigated");
        }
    };
    return NavigateService;
}());
exports.NavigateService = NavigateService;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Services
var NavigateService_1 = require("./Services/NavigateService");
// Components
//import { TrackPadListenerComponent } from "./Components/TrackPadListenerComponent";
var CursorNavigateComponent_1 = require("./Components/CursorNavigateComponent");
//import { CursorNavigateComponent } from "./Components/CursorNavigateComponent";
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var NavigateModel_1 = require("./Models/NavigateModel");
// Servies
var navigateService = new NavigateService_1.NavigateService();
// Components
var cursorNavigateComponentModel = new NavigateModel_1.NavigateModel("camera", false, ["click"]);
var cursorNavigateComponent = new CursorNavigateComponent_1.CursorNavigateComponent(cursorNavigateComponentModel, navigateService);
// Controllers
var indexController = new IndexController_1.IndexController(
//trackPadListenerComponent,
cursorNavigateComponent);
indexController.init();

},{"./Components/CursorNavigateComponent":1,"./Controllers/IndexController":2,"./Models/NavigateModel":3,"./Services/NavigateService":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvck5hdmlnYXRlQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiTW9kZWxzL05hdmlnYXRlTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZVNlcnZpY2UudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBO0lBS0ksaUNBQ0ksTUFBUyxFQUNULGVBQW9DO1FBR3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQ0FBSSxHQUFKO1FBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRTtZQUNsRCxJQUFJLEVBQUU7Z0JBQUEsaUJBVUw7Z0JBVEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFFOUIscUJBQXFCO29CQUVyQixLQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQWE7d0JBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBV0wsOEJBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNZLDBEQUF1Qjs7Ozs7QUNEcEM7SUFJSSxrREFBa0Q7SUFFbEQ7SUFDSSx3Q0FBd0M7SUFDeEMsdUJBQW1EO1FBSW5ELDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFDdkQsaUVBQWlFO0lBQ3JFLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0cseUNBQXlDO1FBQ3hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQywyQ0FBMkM7SUFDOUMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSwwQ0FBZTs7Ozs7QUNENUI7SUFPSSx1QkFFSSxRQUFnQixFQUNoQixXQUFvQixFQUNwQixRQUFrQjtRQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLHNDQUFhOzs7OztBQ0MxQjtJQUFBO0lBWUEsQ0FBQztJQVhVLDhCQUFJLEdBQVgsVUFBWSxNQUFTO1FBQ2pCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUNsSixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSwwR0FBMEcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDBDQUFlOzs7OztBQ0Y1QixXQUFXO0FBQ1gsOERBQTZEO0FBRTdELGFBQWE7QUFDYixxRkFBcUY7QUFDckYsZ0ZBQStFO0FBQy9FLGlGQUFpRjtBQUVqRixjQUFjO0FBQ2QsaUVBQWdFO0FBQ2hFLHdEQUF1RDtBQUV2RCxVQUFVO0FBQ1YsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFFNUMsYUFBYTtBQUNiLElBQUksNEJBQTRCLEdBQUcsSUFBSSw2QkFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRWpGLElBQUksdUJBQXVCLEdBQUcsSUFBSSxpREFBdUIsQ0FDckQsNEJBQTRCLEVBQzVCLGVBQWUsQ0FDbEIsQ0FBQztBQUVGLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlO0FBQ3JDLDRCQUE0QjtBQUM1Qix1QkFBdUIsQ0FDdEIsQ0FBQztBQUNOLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlU2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZU1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlTW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUXG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVTZXJ2aWNlPFQ+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZVNlcnZpY2U8VD5cbiAgICAgICAgXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItbmF2aWdhdGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qcHJpdmF0ZSBuZXdNZXRob2Qoc2VsZjogdGhpcywgZTogQ3VzdG9tRXZlbnQ8YW55Pikge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHNlbGYuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gZS5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LCBvZmZzZXQgPSAwLjcwLCB4ID0gY29vcmRzLngsIHkgPSAhc2VsZi55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH0qL1xufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICAvL3ByaXZhdGUgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudDtcbiAgICBwcml2YXRlIGN1cnNvck5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZU1vZGVsPjtcbiAgICAvL3ByaXZhdGUgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIC8vdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yTmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlTW9kZWw+LFxuICAgICAgICAvL2N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudDpJQ29tcG9uZW50XG4gICAgKVxuICAgIHtcbiAgICAgICAgLy90aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvck5hdmlnYXRlQ29tcG9uZW50ID0gY3Vyc29yTmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIC8vdGhpcy5jdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgPSBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgLy8gdGhpcy50cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgLy8gdGhpcy5jdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZU1vZGVsXCJcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlTW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVNb2RlbCB7XG5cbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBjYW1lcmFJZDogc3RyaW5nLFxuICAgICAgICB5Q29uc3RyYWludDogYm9vbGVhbixcbiAgICAgICAgb25FdmVudHM6IHN0cmluZ1tdXG4gICAgKXtcbiAgICAgICAgdGhpcy5jYW1lcmFJZCA9IGNhbWVyYUlkO1xuICAgICAgICB0aGlzLnlDb25zdHJhaW50ID0geUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub25FdmVudHMgPSBvbkV2ZW50cztcbiAgICB9XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVNb2RlbFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZVNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZU1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZVNlcnZpY2U8VD4ge1xuICAgIHB1YmxpYyBpbml0KG9iamVjdDogVCkge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iamVjdC5jYW1lcmFJZCk7XG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBvYmplY3QuZXZlbnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCwgb2Zmc2V0ID0gMC43MCwgeCA9IGNvb3Jkcy54LCB5ID0gIW9iamVjdC55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL05hdmlnYXRlU2VydmljZSc7XG5cbi8vIENvbXBvbmVudHNcbi8vaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL0N1cnNvck5hdmlnYXRlQ29tcG9uZW50XCI7XG4vL2ltcG9ydCB7IEN1cnNvck5hdmlnYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9DdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudFwiO1xuXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZU1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvTmF2aWdhdGVNb2RlbCc7XG5cbi8vIFNlcnZpZXNcbmxldCBuYXZpZ2F0ZVNlcnZpY2UgPSBuZXcgTmF2aWdhdGVTZXJ2aWNlKCk7XG5cbi8vIENvbXBvbmVudHNcbmxldCBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsID0gbmV3IE5hdmlnYXRlTW9kZWwoXCJjYW1lcmFcIiwgZmFsc2UsIFtcImNsaWNrXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxubGV0IGN1cnNvck5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IEN1cnNvck5hdmlnYXRlQ29tcG9uZW50KFxuICAgIGN1cnNvck5hdmlnYXRlQ29tcG9uZW50TW9kZWwsIFxuICAgIG5hdmlnYXRlU2VydmljZVxuKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIC8vdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCxcbiAgICBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudCxcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
