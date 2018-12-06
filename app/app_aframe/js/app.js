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
    function IndexController(cursorNavigateComponent) {
        this.cursorNavigateComponent = cursorNavigateComponent;
    }
    IndexController.prototype.init = function () {
        this.cursorNavigateComponent.init();
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
var CursorNavigateComponent_1 = require("./Components/CursorNavigateComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var NavigateModel_1 = require("./Models/NavigateModel");
// Servies
var navigateService = new NavigateService_1.NavigateService();
// Components
var cursorNavigateComponentModel = new NavigateModel_1.NavigateModel("camera", false, ["click"]);
var cursorNavigateComponent = new CursorNavigateComponent_1.CursorNavigateComponent(cursorNavigateComponentModel, navigateService);
// Controllers
var indexController = new IndexController_1.IndexController(cursorNavigateComponent);
indexController.init();

},{"./Components/CursorNavigateComponent":1,"./Controllers/IndexController":2,"./Models/NavigateModel":3,"./Services/NavigateService":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvck5hdmlnYXRlQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiTW9kZWxzL05hdmlnYXRlTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZVNlcnZpY2UudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBO0lBS0ksaUNBQ0ksTUFBUyxFQUNULGVBQW9DO1FBR3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQ0FBSSxHQUFKO1FBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRTtZQUNsRCxJQUFJLEVBQUU7Z0JBQUEsaUJBT0w7Z0JBTkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFDOUIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFhO3dCQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSwwREFBdUI7Ozs7O0FDRHBDO0lBSUkseUJBQ0ksdUJBQW1EO1FBR25ELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDBDQUFlOzs7OztBQ0Q1QjtJQU1JLHVCQUVJLFFBQWdCLEVBQ2hCLFdBQW9CLEVBQ3BCLFFBQWtCO1FBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTCxvQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksc0NBQWE7Ozs7O0FDQzFCO0lBQUE7SUFVQSxDQUFDO0lBVFUsOEJBQUksR0FBWCxVQUFZLE1BQVM7UUFDakIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNqQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUNsSixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSwwR0FBMEcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDBDQUFlOzs7OztBQ0Y1QixXQUFXO0FBQ1gsOERBQTZEO0FBRTdELGFBQWE7QUFDYixnRkFBK0U7QUFFL0UsY0FBYztBQUNkLGlFQUFnRTtBQUNoRSx3REFBdUQ7QUFFdkQsVUFBVTtBQUNWLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRTVDLGFBQWE7QUFDYixJQUFJLDRCQUE0QixHQUFHLElBQUksNkJBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUVqRixJQUFJLHVCQUF1QixHQUFHLElBQUksaURBQXVCLENBQ3JELDRCQUE0QixFQUM1QixlQUFlLENBQ2xCLENBQUM7QUFFRixjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUNyQyx1QkFBdUIsQ0FDdEIsQ0FBQztBQUNOLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlU2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZU1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlTW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUXG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVTZXJ2aWNlPFQ+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZVNlcnZpY2U8VD5cbiAgICAgICAgXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItbmF2aWdhdGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5ldmVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlU2VydmljZS5pbml0KHNlbGYub2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIGN1cnNvck5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZU1vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVNb2RlbD4sXG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5jdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudCA9IGN1cnNvck5hdmlnYXRlQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmN1cnNvck5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZU1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlTW9kZWwge1xuICAgIGNhbWVyYUlkOiBzdHJpbmc7XG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT47XG4gICAgb25FdmVudHM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZU1vZGVsXCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlU2VydmljZTxUIGV4dGVuZHMgSU5hdmlnYXRlTW9kZWw+IGltcGxlbWVudHMgSU5hdmlnYXRlU2VydmljZTxUPiB7XG4gICAgcHVibGljIGluaXQob2JqZWN0OiBUKSB7XG4gICAgICAgIGxldCBjYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgb2JqZWN0LmNhbWVyYUlkKTtcbiAgICAgICAgaWYgKGNhbWVyYSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IG9iamVjdC5ldmVudC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LCBvZmZzZXQgPSAwLjcwLCB4ID0gY29vcmRzLngsIHkgPSAhb2JqZWN0LnlDb25zdHJhaW50ID8gY29vcmRzLnkgOiAwLjAsIHogPSBjb29yZHMueiArIG9mZnNldDtcbiAgICAgICAgICAgIGNhbWVyYS5zZXRBdHRyaWJ1dGUoXCJhbmltYXRpb25cIiwgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluT3V0U2luZTsgc3RhcnRFdmVudHM6IG5hdmlnYXRlLWFuaW1hdGU7IHRvOlwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeiArIFwiO1wiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtYW5pbWF0ZVwiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtbmF2aWdhdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVTZXJ2aWNlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ3Vyc29yTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL0N1cnNvck5hdmlnYXRlQ29tcG9uZW50XCI7XG5cbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRlTW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZU1vZGVsJztcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZVNlcnZpY2UoKTtcblxuLy8gQ29tcG9uZW50c1xubGV0IGN1cnNvck5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVNb2RlbChcImNhbWVyYVwiLCBmYWxzZSwgW1wiY2xpY2tcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5sZXQgY3Vyc29yTmF2aWdhdGVDb21wb25lbnQgPSBuZXcgQ3Vyc29yTmF2aWdhdGVDb21wb25lbnQoXG4gICAgY3Vyc29yTmF2aWdhdGVDb21wb25lbnRNb2RlbCwgXG4gICAgbmF2aWdhdGVTZXJ2aWNlXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgY3Vyc29yTmF2aWdhdGVDb21wb25lbnQsXG4gICAgKTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7Il19
