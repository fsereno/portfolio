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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBO0lBTUksd0JBQ0ksTUFBUyxFQUNULFlBQTJCLEVBQzNCLGFBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QyxJQUFJLEVBQUU7Z0JBRUYsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENB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QUFHLElBQUksK0JBQWMsQ0FDbkMsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixhQUFhLENBQ2hCLENBQUM7QUFFRixjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUNyQyxpQkFBaUIsRUFDakIsY0FBYyxDQUNiLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDekR2QjtJQUlJLHNCQUVJLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxhQUE2QjtRQUc3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUFBLGlCQVVDO1FBVEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFDdkIsUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzlDLE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM5QjtZQUFBLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxvQ0FBWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudE1vZGVsXCI7XG5pbXBvcnQgeyBJQ3ViaWtDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRcIjtcbmltcG9ydCB7IElUaW1lclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUaW1lclNlcnZpY2VcIjtcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZVwiO1xuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+LCBJQ3ViaWtDb21wb25lbnQge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2U7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnRpbWVyU2VydmljZSA9IHRpbWVyU2VydmljZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGN1YmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImN1YmVcIik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnNjb3JlSWQsIHNlbGYub2JqZWN0LnBsYXllci5zY29yZSk7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8Y3ViZXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICAgICAgICAgIGN1YmVzW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3ViZVwiK2kpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1YmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlOkN1c3RvbUV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IGUuc3JjRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSA/ICBzZWxmLm9iamVjdC5wbGF5ZXIuZGVjcmVhc2V1VWVyU2NvcmUoKSA6IHNlbGYub2JqZWN0LnBsYXllci5pbmNyZW1lbnRVc2VyU2NvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3ViZS5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwiZmFsc2VcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrY3ViZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkuZW1pdChcImNvbGxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY29sbGVjdGVkXCIsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPlxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3Qub25FdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD47XG4gICAgcHJpdmF0ZSBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+LFxuICAgICAgICBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD5cbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gbmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudE1vZGVsXCJcbmltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSUN1YmlrQ29tcG9uZW50TW9kZWwge1xuICAgICAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3ViZUNsYXNzOiBzdHJpbmc7XG4gICAgc2NvcmVJZDogc3RyaW5nO1xuICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG4gICAgcGxheWVyOiBJUGxheWVyTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjdWJlQ291bnQ6IG51bWJlcixcbiAgICAgICAgcGxheWVyOiBJUGxheWVyTW9kZWxcbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICB9XG4gICAgZ2V0Q3ViZUNvdW50ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY3ViZUNsYXNzK1wiLnJld2FyZFwiKS5sZW5ndGg7XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJNb2RlbCBpbXBsZW1lbnRzIElQbGF5ZXJNb2RlbCB7XG4gICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZXVVZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVwZGF0ZVNlcnZpY2Uge1xuICAgIHVwZGF0ZShpZDogc3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitpZCkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgdmFsdWVcbiAgICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL05hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBUaW1lclNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1RpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy91cGRhdGVTZXJ2aWNlJztcblxuLy9Nb2RlbHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWJpa0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdWJpa0NvbXBvbmVudCc7XG5cbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBsYXllck1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvUGxheWVyTW9kZWwnO1xuXG4vLyBTZXJ2aWVzXG5sZXQgbmF2aWdhdGVTZXJ2aWNlID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSgpO1xubGV0IHVwZGF0ZVNlcnZpY2UgPSBuZXcgVXBkYXRlU2VydmljZSgpO1xubGV0IHRpbWVyU2VydmljZSA9IG5ldyBUaW1lclNlcnZpY2UoMTAsIFwidGltZXJcIiwgdXBkYXRlU2VydmljZSk7XG5cbi8vIE1vZGVsc1xubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcbiAgICBcIm5hdmlnYXRlLWNvbXBvbmVudFwiLFxuICAgIFwicGxheWVyXCIsIFxuICAgIGZhbHNlLCBcbiAgICBbXCJjbGlja1wiXVxuKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMCk7XG5cbmxldCBjdWJpa0NvbXBvbmVudE1vZGVsID0gbmV3IEN1YmlrQ29tcG9uZW50TW9kZWwoXG4gICAgXCJjdWJpay1jb21wb25lbnRcIixcbiAgICBcImN1YmVcIixcbiAgICBcInNjb3JlXCIsXG4gICAgXCJ0YXJnZXRcIixcbiAgICAwLFxuICAgIHBsYXllclxuKTtcbiAgICAgICAgIFxuLy9Db21wb25lbnRzXG5sZXQgbmF2aWdhdGVDb21wb25lbnQgPSBuZXcgTmF2aWdhdGVDb21wb25lbnQoXG4gICAgbmF2aWdhdGVDb21wb25lbnRNb2RlbCwgXG4gICAgbmF2aWdhdGVTZXJ2aWNlXG4pO1xuXG5sZXQgY3ViaWtDb21wb25lbnQgPSBuZXcgQ3ViaWtDb21wb25lbnQoXG4gICAgY3ViaWtDb21wb25lbnRNb2RlbCxcbiAgICB0aW1lclNlcnZpY2UsXG4gICAgdXBkYXRlU2VydmljZVxuKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIG5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1YmlrQ29tcG9uZW50XG4gICAgKTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVRpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2UnO1xuZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElUaW1lclNlcnZpY2Uge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRhcmdldDogc3RyaW5nLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZVxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFN0YXJ0KCk6IHZvaWQgIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCxjb3VudGVyKVxuICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyIDwgMCApe1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgaXMgdXAhJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0iXX0=
