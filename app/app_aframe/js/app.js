(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikCollectableComponent = /** @class */ (function () {
    function CubikCollectableComponent(object, timerService, updateService) {
        this.object = object;
        this.timerService = timerService;
        this.updateService = updateService;
    }
    CubikCollectableComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent("cubik-component", {
            init: function () {
                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());
                self.timerService.Start();
            }
        });
        AFRAME.registerComponent("cubik-collectable-component", {
            init: function () {
                var scene = document.querySelector("#scene");
                this.el.addEventListener('click', function (evt) {
                    var cube = evt.srcElement;
                    if (!cube.classList.contains("error"))
                        self.object.player.incrementUserScore();
                    cube.setAttribute("visible", "false");
                    if (cube.classList.contains("spawn")) {
                        //there will be an amount to spwan, there could be more than 1...
                        var entity = document.createElement('a-box'), currentPosition = cube.getAttributeNode("position").textContent, currentPositionArray = currentPosition.split(" "), newPosition_1 = "";
                        //Give the same attributes
                        for (var i = 0; i < cube.attributes.length; i++) {
                            entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                        }
                        //Set new position
                        currentPositionArray.forEach(function (position) {
                            // this will become a random number eventually.
                            var adjustment = Number(position) + 0.1;
                            newPosition_1 += adjustment;
                        });
                        //Enforce these attributes
                        entity.setAttribute("position", newPosition_1);
                        entity.classList.remove("error", "spawn");
                        entity.classList.add("reward");
                        entity.setAttribute("color", "green");
                        scene.appendChild(entity);
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                    }
                    self.updateService.update(self.object.scoreId, self.object.player.score);
                    self.updateService.update(self.object.targetId, self.object.getCubeCount());
                });
            }
        });
    };
    return CubikCollectableComponent;
}());
exports.CubikCollectableComponent = CubikCollectableComponent;

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
        AFRAME.registerComponent("navigate-component", {
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
var CubikModel = /** @class */ (function () {
    function CubikModel(cubeClass, scoreId, targetId, cubeCount, player) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass + ".reward").length; };
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player;
    }
    return CubikModel;
}());
exports.CubikModel = CubikModel;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigateComponentModel = /** @class */ (function () {
    function NavigateComponentModel(cameraId, yConstraint, onEvents) {
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
        this.decreaseUserScore = function () { return _this.score--; };
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
var CubikModel_1 = require("./Models/CubikModel");
// Components
var NavigateComponent_1 = require("./Components/NavigateComponent");
var CubikCollectableComponent_1 = require("./Components/CubikCollectableComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var PlayerModel_1 = require("./Models/PlayerModel");
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService(10, "timer", "Time is up!", updateService);
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("player", false, ["click"]);
var player = new PlayerModel_1.PlayerModel("Joe Bloggs", 0);
var cubikModel = new CubikModel_1.CubikModel("cube", "score", "target", 0, player);
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikCollectableComponent = new CubikCollectableComponent_1.CubikCollectableComponent(cubikModel, timerService, updateService);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikCollectableComponent);
indexController.init();

},{"../../typeScript/Services/TimerService":10,"./Components/CubikCollectableComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikModel":4,"./Models/NavigateComponentModel":5,"./Models/PlayerModel":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerService = /** @class */ (function () {
    function TimerService(duration, target, completionMessage, updateService) {
        this.duration = duration;
        this.counter = 0;
        this.target = target;
        this.completionMessage = completionMessage;
        this.updateService = updateService;
    }
    TimerService.prototype.Start = function () {
        var _this = this;
        var internalCounter = this.duration, interval = setInterval(function () {
            _this.updateService.update(_this.target, internalCounter);
            _this.counter = internalCounter;
            internalCounter--;
            if (internalCounter < 0) {
                clearInterval(interval);
                _this.updateService.update(_this.target, _this.completionMessage);
            }
            ;
        }, 1000);
    };
    return TimerService;
}());
exports.TimerService = TimerService;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29sbGVjdGFibGVDb21wb25lbnQudHMiLCJDb21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiTW9kZWxzL0N1YmlrTW9kZWwudHMiLCJNb2RlbHMvTmF2aWdhdGVDb21wb25lbnRNb2RlbC50cyIsIk1vZGVscy9QbGF5ZXJNb2RlbC50cyIsIlNlcnZpY2VzL05hdmlnYXRlQ29tcG9uZW50U2VydmljZS50cyIsIlNlcnZpY2VzL3VwZGF0ZVNlcnZpY2UudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1RpbWVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7SUFNSSxtQ0FDSSxNQUFTLEVBQ1QsWUFBMkIsRUFDM0IsYUFBNkI7UUFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELHdDQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksRUFBQztnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dC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LGlCQUFpQixFQUNqQix5QkFBeUIsQ0FDeEIsQ0FBQztBQUNOLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUMzRHZCO0lBTUksc0JBRUksUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGlCQUF5QixFQUN6QixhQUE2QjtRQUc3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQy9CLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQztZQUNsQixJQUFHLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNqRTtZQUFBLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSxvQ0FBWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5pbXBvcnQgeyBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+LCBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZTtcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2UsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMudGltZXJTZXJ2aWNlID0gdGltZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwiY3ViaWstY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnNjb3JlSWQsIHNlbGYub2JqZWN0LnBsYXllci5zY29yZSk7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1YmlrLWNvbGxlY3RhYmxlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjZW5lXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0OkN1c3RvbUV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBldnQuc3JjRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjdWJlLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QucGxheWVyLmluY3JlbWVudFVzZXJTY29yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1YmUuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoY3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzcGF3blwiKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlcmUgd2lsbCBiZSBhbiBhbW91bnQgdG8gc3B3YW4sIHRoZXJlIGNvdWxkIGJlIG1vcmUgdGhhbiAxLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1ib3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBjdWJlLmdldEF0dHJpYnV0ZU5vZGUoXCJwb3NpdGlvblwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb25BcnJheSA9IGN1cnJlbnRQb3NpdGlvbi5zcGxpdChcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0dpdmUgdGhlIHNhbWUgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8Y3ViZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlTmFtZSwgY3ViZS5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IG5ldyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkuZm9yRWFjaChwb3NpdGlvbiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgYmVjb21lIGEgcmFuZG9tIG51bWJlciBldmVudHVhbGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGp1c3RtZW50ID0gTnVtYmVyKHBvc2l0aW9uKSArIDAuMTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24rPWFkanVzdG1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9FbmZvcmNlIHRoZXNlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIsIFwic3Bhd25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY2xhc3NMaXN0LmFkZChcInJld2FyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcImdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuYXBwZW5kQ2hpbGQoZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnQ8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4ge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD5cbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwibmF2aWdhdGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5ldmVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlU2VydmljZS5pbml0KHNlbGYub2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IElDdWJpa01vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrTW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+O1xuICAgIHByaXZhdGUgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPixcbiAgICAgICAgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+XG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudCA9IG5hdmlnYXRlQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1YmlrQ29tcG9uZW50ID0gY3ViaWtDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLmN1YmlrQ29tcG9uZW50LmluaXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUN1YmlrTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtNb2RlbFwiXG5pbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5leHBvcnQgY2xhc3MgQ3ViaWtNb2RlbCBpbXBsZW1lbnRzIElDdWJpa01vZGVsIHtcbiAgICBjdWJlQ2xhc3M6IHN0cmluZztcbiAgICBzY29yZUlkOiBzdHJpbmc7XG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICBjdWJlQ291bnQ6IG51bWJlcjtcbiAgICBwbGF5ZXI6IElQbGF5ZXJNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjdWJlQ291bnQ6IG51bWJlcixcbiAgICAgICAgcGxheWVyOiBJUGxheWVyTW9kZWxcbiAgICApe1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICB9XG4gICAgZ2V0Q3ViZUNvdW50ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY3ViZUNsYXNzK1wiLnJld2FyZFwiKS5sZW5ndGg7XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwge1xuICAgIGNhbWVyYUlkOiBzdHJpbmc7XG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT47XG4gICAgb25FdmVudHM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJNb2RlbCBpbXBsZW1lbnRzIElQbGF5ZXJNb2RlbCB7XG4gICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZVVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVwZGF0ZVNlcnZpY2Uge1xuICAgIHVwZGF0ZShpZDogc3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitpZCkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgdmFsdWVcbiAgICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL05hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBUaW1lclNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1RpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy91cGRhdGVTZXJ2aWNlJztcblxuLy9Nb2RlbHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IEN1YmlrTW9kZWwgfSBmcm9tICcuL01vZGVscy9DdWJpa01vZGVsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29sbGVjdGFibGVDb21wb25lbnQnO1xuXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQbGF5ZXJNb2RlbCB9IGZyb20gJy4vTW9kZWxzL1BsYXllck1vZGVsJztcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcbmxldCB1cGRhdGVTZXJ2aWNlID0gbmV3IFVwZGF0ZVNlcnZpY2UoKTtcbmxldCB0aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKFxuICAgIDEwLCBcbiAgICBcInRpbWVyXCIsIFxuICAgIFwiVGltZSBpcyB1cCFcIiwgXG4gICAgdXBkYXRlU2VydmljZSk7XG5cbi8vIE1vZGVsc1xubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcbiAgICBcInBsYXllclwiLCBcbiAgICBmYWxzZSwgXG4gICAgW1wiY2xpY2tcIl1cbik7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyTW9kZWwoXCJKb2UgQmxvZ2dzXCIsIDApO1xuXG5sZXQgY3ViaWtNb2RlbCA9IG5ldyBDdWJpa01vZGVsKFxuICAgIFwiY3ViZVwiLFxuICAgIFwic2NvcmVcIixcbiAgICBcInRhcmdldFwiLFxuICAgIDAsXG4gICAgcGxheWVyXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50ID0gbmV3IEN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQoXG4gICAgY3ViaWtNb2RlbCxcbiAgICB0aW1lclNlcnZpY2UsXG4gICAgdXBkYXRlU2VydmljZVxuKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIG5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1YmlrQ29sbGVjdGFibGVDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5leHBvcnQgY2xhc3MgVGltZXJTZXJ2aWNlIGltcGxlbWVudHMgSVRpbWVyU2VydmljZSB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBjb3VudGVyOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgdGFyZ2V0OiBzdHJpbmcsXG4gICAgICAgIGNvbXBsZXRpb25NZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlXG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uTWVzc2FnZSA9IGNvbXBsZXRpb25NZXNzYWdlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBTdGFydCgpOiB2b2lkICB7XG4gICAgICAgIGxldCBpbnRlcm5hbENvdW50ZXIgPSB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCxpbnRlcm5hbENvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGludGVybmFsQ291bnRlcjtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBpZihpbnRlcm5hbENvdW50ZXIgPCAwICl7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMudGFyZ2V0LHRoaXMuY29tcGxldGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59Il19
