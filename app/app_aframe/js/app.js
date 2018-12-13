(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikComponent = /** @class */ (function () {
    function CubikComponent(object, timerService, updateService) {
        this.object = object;
        this.timerService = timerService;
        this.updateService = updateService;
    }
    CubikComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function () {
                var cubes = document.getElementsByClassName("cube");
                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());
                for (var i = 0; i < cubes.length; i++) {
                    cubes[i].setAttribute("id", "cube" + i);
                    cubes[i].addEventListener("click", function (e) {
                        var cube = e.srcElement;
                        cube.classList.contains("error") ? self.object.player.decreaseuUerScore() : self.object.player.incrementUserScore();
                        cube.setAttribute("visible", "false");
                        document.querySelector("#" + cube.getAttribute("id")).emit("collected");
                    });
                }
                this.el.addEventListener("collected", function (e) {
                    self.updateService.update(self.object.scoreId, self.object.player.score);
                });
                self.timerService.Start();
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
    function CubikComponentModel(name, cubeClass, scoreId, targetId, cubeCount, player) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass + ".reward").length; };
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player;
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
var PlayerModel = /** @class */ (function () {
    function PlayerModel(name, score) {
        var _this = this;
        this.incrementUserScore = function () { return _this.score++; };
        this.decreaseuUerScore = function () { return _this.score--; };
        this.name = name;
        this.score = score;
    }
    return PlayerModel;
}());
exports.PlayerModel = PlayerModel;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateService = /** @class */ (function () {
    function UpdateService() {
    }
    UpdateService.prototype.update = function (id, value) {
        document.querySelector("#" + id).setAttribute("text", "value", value);
    };
    return UpdateService;
}());
exports.UpdateService = UpdateService;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Services
var NavigateComponentService_1 = require("./Services/NavigateComponentService");
var TimerService_1 = require("../../typeScript/Services/TimerService");
var updateService_1 = require("./Services/updateService");
//Models
var NavigateComponentModel_1 = require("./Models/NavigateComponentModel");
var CubikComponentModel_1 = require("./Models/CubikComponentModel");
// Components
var NavigateComponent_1 = require("./Components/NavigateComponent");
var CubikComponent_1 = require("./Components/CubikComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var PlayerModel_1 = require("./Models/PlayerModel");
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService(10, "timer", updateService);
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("navigate-component", "player", false, ["click"]);
var player = new PlayerModel_1.PlayerModel("Joe Bloggs", 0);
var cubikComponentModel = new CubikComponentModel_1.CubikComponentModel("cubik-component", "cube", "score", "target", 0, player);
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikComponentModel, timerService, updateService);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"../../typeScript/Services/TimerService":10,"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikComponentModel":4,"./Models/NavigateComponentModel":5,"./Models/PlayerModel":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerService = /** @class */ (function () {
    function TimerService(duration, target, updateService) {
        this.duration = duration;
        this.target = target;
        this.updateService = updateService;
    }
    TimerService.prototype.Start = function () {
        var _this = this;
        var counter = this.duration, interval = setInterval(function () {
            console.log(counter);
            _this.updateService.update(_this.target, counter);
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                console.log('Time is up!');
            }
            ;
        }, 1000);
    };
    return TimerService;
}());
exports.TimerService = TimerService;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBO0lBTUksd0JBQ0ksTUFBUyxFQUNULFlBQTJCLEVBQzNCLGFBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QyxJQUFJLEVBQUU7Z0JBRUYsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENB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QUFHLElBQUksK0JBQWMsQ0FDbkMsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixhQUFhLENBQ2hCLENBQUM7QUFFRixjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUNyQyxpQkFBaUIsRUFDakIsY0FBYyxDQUNiLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDeER2QjtJQUlJLHNCQUVJLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxhQUE2QjtRQUc3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUFBLGlCQWFDO1FBWEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFDdkIsUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLENBQUE7WUFDOUMsT0FBTyxFQUFFLENBQUM7WUFFVixJQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzlCO1lBQUEsQ0FBQztRQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLG9DQUFZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElDdWJpa0NvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRpbWVyU2VydmljZVwiO1xuaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5leHBvcnQgY2xhc3MgQ3ViaWtDb21wb25lbnQ8VCBleHRlbmRzIElDdWJpa0NvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4sIElDdWJpa0NvbXBvbmVudCB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZTtcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2UsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMudGltZXJTZXJ2aWNlID0gdGltZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChzZWxmLm9iamVjdC5uYW1lLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgY3ViZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY3ViZVwiKTtcblxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxjdWJlcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY3ViZXNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdWJlXCIraSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3ViZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGU6Q3VzdG9tRXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZS5zcmNFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpID8gIHNlbGYub2JqZWN0LnBsYXllci5kZWNyZWFzZXVVZXJTY29yZSgpIDogc2VsZi5vYmplY3QucGxheWVyLmluY3JlbWVudFVzZXJTY29yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJmYWxzZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitjdWJlLmdldEF0dHJpYnV0ZShcImlkXCIpKS5lbWl0KFwiY29sbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb2xsZWN0ZWRcIiwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+XG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChzZWxmLm9iamVjdC5uYW1lLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5vbkV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QuZXZlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0ZVNlcnZpY2UuaW5pdChzZWxmLm9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBJQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudE1vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXG4gICAgICAgIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPlxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBuYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudCA9IGN1YmlrQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIlxuaW1wb3J0IHsgSVBsYXllck1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JUGxheWVyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJQ3ViaWtDb21wb25lbnRNb2RlbCB7XG4gICAgICAgIFxuICAgIG5hbWU6IHN0cmluZztcbiAgICBjdWJlQ2xhc3M6IHN0cmluZztcbiAgICBzY29yZUlkOiBzdHJpbmc7XG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICBjdWJlQ291bnQ6IG51bWJlcjtcbiAgICBwbGF5ZXI6IElQbGF5ZXJNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGN1YmVDbGFzczogc3RyaW5nLFxuICAgICAgICBzY29yZUlkOiBzdHJpbmcsXG4gICAgICAgIHRhcmdldElkOiBzdHJpbmcsXG4gICAgICAgIGN1YmVDb3VudDogbnVtYmVyLFxuICAgICAgICBwbGF5ZXI6IElQbGF5ZXJNb2RlbFxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY3ViZUNsYXNzID0gY3ViZUNsYXNzO1xuICAgICAgICB0aGlzLnNjb3JlSWQgPSBzY29yZUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY3ViZUNvdW50ID0gY3ViZUNvdW50O1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllclxuICAgIH1cbiAgICBnZXRDdWJlQ291bnQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jdWJlQ2xhc3MrXCIucmV3YXJkXCIpLmxlbmd0aDtcbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCJcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNhbWVyYUlkOiBzdHJpbmc7XG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT47XG4gICAgb25FdmVudHM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcbiAgICAgICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW4sXG4gICAgICAgIG9uRXZlbnRzOiBzdHJpbmdbXVxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XG4gICAgfVxufSIsImltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBsYXllck1vZGVsIGltcGxlbWVudHMgSVBsYXllck1vZGVsIHtcbiAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBzY29yZTogbnVtYmVyXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIH1cblxuICAgIGluY3JlbWVudFVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZSsrO1xuICAgIGRlY3JlYXNldVVlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlLS07XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD4ge1xuICAgIHB1YmxpYyBpbml0KG9iamVjdDogVCkge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iamVjdC5jYW1lcmFJZCk7XG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBvYmplY3QuZXZlbnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCwgb2Zmc2V0ID0gMC43MCwgeCA9IGNvb3Jkcy54LCB5ID0gIW9iamVjdC55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJVXBkYXRlU2VydmljZSB7XG4gICAgdXBkYXRlKGlkOiBzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2lkKS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgfVxufSIsIlxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IFRpbWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IFVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL3VwZGF0ZVNlcnZpY2UnO1xuXG4vL01vZGVsc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL0N1YmlrQ29tcG9uZW50TW9kZWwnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29tcG9uZW50JztcblxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tICcuL01vZGVscy9QbGF5ZXJNb2RlbCc7XG5cbi8vIFNlcnZpZXNcbmxldCBuYXZpZ2F0ZVNlcnZpY2UgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlKCk7XG5sZXQgdXBkYXRlU2VydmljZSA9IG5ldyBVcGRhdGVTZXJ2aWNlKCk7XG5sZXQgdGltZXJTZXJ2aWNlID0gbmV3IFRpbWVyU2VydmljZSgxMCwgXCJ0aW1lclwiLCB1cGRhdGVTZXJ2aWNlKTtcblxuLy8gTW9kZWxzXG5sZXQgbmF2aWdhdGVDb21wb25lbnRNb2RlbCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsKFxuICAgIFwibmF2aWdhdGUtY29tcG9uZW50XCIsXG4gICAgXCJwbGF5ZXJcIiwgXG4gICAgZmFsc2UsIFxuICAgIFtcImNsaWNrXCJdXG4pO1xuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllck1vZGVsKFwiSm9lIEJsb2dnc1wiLCAwKTtcblxubGV0IGN1YmlrQ29tcG9uZW50TW9kZWwgPSBuZXcgQ3ViaWtDb21wb25lbnRNb2RlbChcbiAgICBcImN1YmlrLWNvbXBvbmVudFwiLFxuICAgIFwiY3ViZVwiLFxuICAgIFwic2NvcmVcIixcbiAgICBcInRhcmdldFwiLFxuICAgIDAsXG4gICAgcGxheWVyXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbXBvbmVudCA9IG5ldyBDdWJpa0NvbXBvbmVudChcbiAgICBjdWJpa0NvbXBvbmVudE1vZGVsLFxuICAgIHRpbWVyU2VydmljZSxcbiAgICB1cGRhdGVTZXJ2aWNlXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3ViaWtDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lclNlcnZpY2UgaW1wbGVtZW50cyBJVGltZXJTZXJ2aWNlIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBTdGFydCgpOiB2b2lkICB7XG5cbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZS51cGRhdGUodGhpcy50YXJnZXQsY291bnRlcilcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihjb3VudGVyIDwgMCApe1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGlzIHVwIScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0iXX0=
