(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikComponent = /** @class */ (function () {
    function CubikComponent(object) {
        this.object = object;
    }
    CubikComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function () {
                document.querySelector("#" + self.object.scoreId).setAttribute("text", "value", self.object.userScore);
                document.querySelector("#" + self.object.targetId).setAttribute("text", "value", self.object.getCubeCount());
                this.el.addEventListener("navigate-navigated", function (e) {
                    document.querySelector("#" + self.object.scoreId).setAttribute("text", "value", self.object.getScore());
                });
            }
        });
    };
    return CubikComponent;
}());
exports.CubikComponent = CubikComponent;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateComponent = /** @class */ (function () {
    function NavigateComponent(object, navigateService) {
        this.object = object;
        this.navigateService = navigateService;
    }
    NavigateComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent(self.object.name, {
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
    return NavigateComponent;
}());
exports.NavigateComponent = NavigateComponent;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(navigateComponent, cubikComponent) {
        this.navigateComponent = navigateComponent;
        this.cubikComponent = cubikComponent;
    }
    IndexController.prototype.init = function () {
        this.navigateComponent.init();
        this.cubikComponent.init();
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikComponentModel = /** @class */ (function () {
    function CubikComponentModel(name, cubeClass, scoreId, targetId, timeId, userScore, // need a dedicated player
    timeRemaining, cubeCount) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass).length; };
        this.getScore = function () { return document.querySelectorAll("." + _this.cubeClass + "[visible]").length; };
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.timeId = timeId;
        this.userScore = userScore;
        this.timeRemaining = timeRemaining;
        this.cubeCount = cubeCount;
    }
    return CubikComponentModel;
}());
exports.CubikComponentModel = CubikComponentModel;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateComponentModel = /** @class */ (function () {
    function NavigateComponentModel(name, cameraId, yConstraint, onEvents) {
        this.name = name;
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvents = onEvents;
    }
    return NavigateComponentModel;
}());
exports.NavigateComponentModel = NavigateComponentModel;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateComponentService = /** @class */ (function () {
    function NavigateComponentService() {
    }
    NavigateComponentService.prototype.init = function (object) {
        var camera = document.querySelector("#" + object.cameraId);
        if (camera !== null) {
            var coords = object.event.detail.intersection.point, offset = 0.70, x = coords.x, y = !object.yConstraint ? coords.y : 0.0, z = coords.z + offset;
            camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
            camera.emit("navigate-animate");
            camera.emit("navigate-navigated");
        }
    };
    return NavigateComponentService;
}());
exports.NavigateComponentService = NavigateComponentService;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Services
var NavigateComponentService_1 = require("./Services/NavigateComponentService");
//Models
var NavigateComponentModel_1 = require("./Models/NavigateComponentModel");
var CubikComponentModel_1 = require("./Models/CubikComponentModel");
// Components
var NavigateComponent_1 = require("./Components/NavigateComponent");
var CubikComponent_1 = require("./Components/CubikComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("navigate-component", "player", false, ["click"]);
var cubikComponentModel = new CubikComponentModel_1.CubikComponentModel("cubik-component", "cube", "score", "target", "time", 0, new Date(), 0);
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikComponentModel);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikComponentModel":4,"./Models/NavigateComponentModel":5,"./Services/NavigateComponentService":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBO0lBSUksd0JBQ0ksTUFBUztRQUVULElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QyxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQ3hELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3pDLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQzNELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FDNUMsQ0FBQztnQkFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBYTtvQkFDbEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQ3hELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FDMUMsQ0FBQztnQkFDTixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLHdDQUFjOzs7OztBQ0MzQjtJQUtJLDJCQUNJLE1BQVMsRUFDVCxlQUE2QztRQUU3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFFO2dCQUFBLGlCQU9MO2dCQU5HLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7b0JBQzlCLEtBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBYTt3QkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx3QkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksOENBQWlCOzs7OztBQ0E5QjtJQUtJLHlCQUNJLGlCQUFzRCxFQUN0RCxjQUFnRDtRQUdoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDBDQUFlOzs7OztBQ0Y1QjtJQVdJLDZCQUVJLElBQVksRUFDWixTQUFpQixFQUNqQixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLFNBQWlCLEVBQUUsMEJBQTBCO0lBQzdDLGFBQW1CLEVBQ25CLFNBQWlCO1FBVHJCLGlCQW1CQztRQUVELGlCQUFZLEdBQUcsY0FBYyxPQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBcEQsQ0FBb0QsQ0FBQztRQUNsRixhQUFRLEdBQUcsY0FBYyxPQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQWhFLENBQWdFLENBQUM7UUFYdEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUlMLDBCQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSxrREFBbUI7Ozs7O0FDQWhDO0lBT0ksZ0NBRUksSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFdBQW9CLEVBQ3BCLFFBQWtCO1FBRWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTCw2QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksd0RBQXNCOzs7OztBQ0NuQztJQUFBO0lBVUEsQ0FBQztJQVRVLHVDQUFJLEdBQVgsVUFBWSxNQUFTO1FBQ2pCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDbEosTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsMEdBQTBHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzSyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw0REFBd0I7Ozs7O0FDRnJDLFdBQVc7QUFDWCxnRkFBK0U7QUFFL0UsUUFBUTtBQUNSLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFFbkUsYUFBYTtBQUNiLG9FQUFtRTtBQUNuRSw4REFBNkQ7QUFFN0QsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxVQUFVO0FBQ1YsSUFBSSxlQUFlLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO0FBRXJELFNBQVM7QUFDVCxJQUFJLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLENBQ25ELG9CQUFvQixFQUNwQixRQUFRLEVBQ1IsS0FBSyxFQUNMLENBQUMsT0FBTyxDQUFDLENBQ1osQ0FBQztBQUVGLElBQUksbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsQ0FDN0MsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLE1BQU0sRUFDTixDQUFDLEVBQ0QsSUFBSSxJQUFJLEVBQUUsRUFDVixDQUFDLENBQ0osQ0FBQztBQUVGLFlBQVk7QUFDWixJQUFJLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQ3pDLHNCQUFzQixFQUN0QixlQUFlLENBQ2xCLENBQUM7QUFFRixJQUFJLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBQ25DLG1CQUFtQixDQUN0QixDQUFDO0FBRUYsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FDckMsaUJBQWlCLEVBQ2pCLGNBQWMsQ0FDYixDQUFDO0FBQ04sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBUXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KHNlbGYub2JqZWN0Lm5hbWUsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5vYmplY3Quc2NvcmVJZCkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCBzZWxmLm9iamVjdC51c2VyU2NvcmVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5vYmplY3QudGFyZ2V0SWQpLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgIFwidGV4dFwiLCBcInZhbHVlXCIsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIiwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitzZWxmLm9iamVjdC5zY29yZUlkKS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCBzZWxmLm9iamVjdC5nZXRTY29yZSgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPlxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3Qub25FdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXG4gICAgICAgIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPlxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBuYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudCA9IGN1YmlrQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIlxuXG5leHBvcnQgY2xhc3MgQ3ViaWtDb21wb25lbnRNb2RlbCBpbXBsZW1lbnRzIElDdWJpa0NvbXBvbmVudE1vZGVsIHtcbiAgICAgICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGN1YmVDbGFzczogc3RyaW5nO1xuICAgIHNjb3JlSWQ6IHN0cmluZztcbiAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIHRpbWVJZDogc3RyaW5nO1xuICAgIHVzZXJTY29yZTogbnVtYmVyOyAvLyBuZWVkIGEgZGVkaWNhdGVkIHBsYXllclxuICAgIHRpbWVSZW1haW5pbmc6IERhdGU7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICB0aW1lSWQ6IHN0cmluZyxcbiAgICAgICAgdXNlclNjb3JlOiBudW1iZXIsIC8vIG5lZWQgYSBkZWRpY2F0ZWQgcGxheWVyXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IERhdGUsXG4gICAgICAgIGN1YmVDb3VudDogbnVtYmVyXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jdWJlQ2xhc3MgPSBjdWJlQ2xhc3M7XG4gICAgICAgIHRoaXMuc2NvcmVJZCA9IHNjb3JlSWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy50aW1lSWQgPSB0aW1lSWQ7XG4gICAgICAgIHRoaXMudXNlclNjb3JlID0gdXNlclNjb3JlO1xuICAgICAgICB0aGlzLnRpbWVSZW1haW5pbmcgPSB0aW1lUmVtYWluaW5nO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICB9XG5cbiAgICBnZXRDdWJlQ291bnQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jdWJlQ2xhc3MpLmxlbmd0aDtcbiAgICBnZXRTY29yZSA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmN1YmVDbGFzcytcIlt2aXNpYmxlXVwiKS5sZW5ndGg7XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPiB7XG4gICAgcHVibGljIGluaXQob2JqZWN0OiBUKSB7XG4gICAgICAgIGxldCBjYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgb2JqZWN0LmNhbWVyYUlkKTtcbiAgICAgICAgaWYgKGNhbWVyYSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IG9iamVjdC5ldmVudC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LCBvZmZzZXQgPSAwLjcwLCB4ID0gY29vcmRzLngsIHkgPSAhb2JqZWN0LnlDb25zdHJhaW50ID8gY29vcmRzLnkgOiAwLjAsIHogPSBjb29yZHMueiArIG9mZnNldDtcbiAgICAgICAgICAgIGNhbWVyYS5zZXRBdHRyaWJ1dGUoXCJhbmltYXRpb25cIiwgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluT3V0U2luZTsgc3RhcnRFdmVudHM6IG5hdmlnYXRlLWFuaW1hdGU7IHRvOlwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeiArIFwiO1wiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtYW5pbWF0ZVwiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtbmF2aWdhdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcblxuLy9Nb2RlbHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWJpa0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdWJpa0NvbXBvbmVudCc7XG5cbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcblxuLy8gTW9kZWxzXG5sZXQgbmF2aWdhdGVDb21wb25lbnRNb2RlbCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsKFxuICAgIFwibmF2aWdhdGUtY29tcG9uZW50XCIsXG4gICAgXCJwbGF5ZXJcIiwgXG4gICAgZmFsc2UsIFxuICAgIFtcImNsaWNrXCJdXG4pO1xuXG5sZXQgY3ViaWtDb21wb25lbnRNb2RlbCA9IG5ldyBDdWJpa0NvbXBvbmVudE1vZGVsKFxuICAgIFwiY3ViaWstY29tcG9uZW50XCIsXG4gICAgXCJjdWJlXCIsXG4gICAgXCJzY29yZVwiLFxuICAgIFwidGFyZ2V0XCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgMCxcbiAgICBuZXcgRGF0ZSgpLFxuICAgIDBcbik7XG4gICAgICAgICBcbi8vQ29tcG9uZW50c1xubGV0IG5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50KFxuICAgIG5hdmlnYXRlQ29tcG9uZW50TW9kZWwsIFxuICAgIG5hdmlnYXRlU2VydmljZVxuKTtcblxubGV0IGN1YmlrQ29tcG9uZW50ID0gbmV3IEN1YmlrQ29tcG9uZW50KFxuICAgIGN1YmlrQ29tcG9uZW50TW9kZWxcbik7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcihcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudCxcbiAgICBjdWJpa0NvbXBvbmVudFxuICAgICk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyJdfQ==
