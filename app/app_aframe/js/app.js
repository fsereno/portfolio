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
                var _this = this;
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
                        if (cube.classList.contains("spawn")) {
                            var entity = document.createElement('a-box'), currentPosition = cube.getAttributeNode("position").textContent, currentPositionArray = currentPosition.split(" "), newPosition_1 = "";
                            for (var i_1 = 0; i_1 < cube.attributes.length; i_1++) {
                                entity.setAttribute(cube.attributes[i_1].nodeName, cube.attributes[i_1].nodeValue);
                            }
                            //Set new position
                            currentPositionArray.forEach(function (position) {
                                // this will become a random number eventually.
                                var adjustment = Number(position) + 0.1;
                                newPosition_1 += adjustment;
                            });
                            //Enforce these attributes
                            entity.setAttribute("position", newPosition_1);
                            entity.setAttribute("color", "blue");
                            _this.el.appendChild(entity);
                        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBO0lBTUksd0JBQ0ksTUFBUyxFQUNULFlBQTJCLEVBQzNCLGFBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QyxJQUFJLEVBQUU7Z0JBQUEsaUJBcURMO2dCQW5ERyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXBELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsYUFB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QUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FDckMsaUJBQWlCLEVBQ2pCLGNBQWMsQ0FDYixDQUFDO0FBQ04sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ3pEdkI7SUFJSSxzQkFFSSxRQUFnQixFQUNoQixNQUFjLEVBQ2QsYUFBNkI7UUFHN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtZQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUcsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDWixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDOUI7WUFBQSxDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxtQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudDxUIGV4dGVuZHMgSUN1YmlrQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiwgSUN1YmlrQ29tcG9uZW50IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZSxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSB0aW1lclNlcnZpY2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KHNlbGYub2JqZWN0Lm5hbWUsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjdWJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjdWJlXCIpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGN1YmVzLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgICAgICAgICBjdWJlc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1YmVcIitpKTtcblxuICAgICAgICAgICAgICAgICAgICBjdWJlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZTpDdXN0b21FdmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikgPyAgc2VsZi5vYmplY3QucGxheWVyLmRlY3JlYXNldVVlclNjb3JlKCkgOiBzZWxmLm9iamVjdC5wbGF5ZXIuaW5jcmVtZW50VXNlclNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcImZhbHNlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2N1YmUuZ2V0QXR0cmlidXRlKFwiaWRcIikpLmVtaXQoXCJjb2xsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Bhd25cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWJveCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBjdWJlLmdldEF0dHJpYnV0ZU5vZGUoXCJwb3NpdGlvblwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkgPSBjdXJyZW50UG9zaXRpb24uc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDxjdWJlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlTmFtZSwgY3ViZS5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgbmV3IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkuZm9yRWFjaChwb3NpdGlvbiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGJlY29tZSBhIHJhbmRvbSBudW1iZXIgZXZlbnR1YWxseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkanVzdG1lbnQgPSBOdW1iZXIocG9zaXRpb24pICsgMC4xOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24rPWFkanVzdG1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0VuZm9yY2UgdGhlc2UgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwiYmx1ZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY29sbGVjdGVkXCIsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPlxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3Qub25FdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD47XG4gICAgcHJpdmF0ZSBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+LFxuICAgICAgICBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD5cbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gbmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudE1vZGVsXCJcbmltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSUN1YmlrQ29tcG9uZW50TW9kZWwge1xuICAgICAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3ViZUNsYXNzOiBzdHJpbmc7XG4gICAgc2NvcmVJZDogc3RyaW5nO1xuICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG4gICAgcGxheWVyOiBJUGxheWVyTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjdWJlQ291bnQ6IG51bWJlcixcbiAgICAgICAgcGxheWVyOiBJUGxheWVyTW9kZWxcbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICB9XG4gICAgZ2V0Q3ViZUNvdW50ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY3ViZUNsYXNzK1wiLnJld2FyZFwiKS5sZW5ndGg7XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJNb2RlbCBpbXBsZW1lbnRzIElQbGF5ZXJNb2RlbCB7XG4gICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZXVVZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVwZGF0ZVNlcnZpY2Uge1xuICAgIHVwZGF0ZShpZDogc3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitpZCkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgdmFsdWVcbiAgICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL05hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBUaW1lclNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1RpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy91cGRhdGVTZXJ2aWNlJztcblxuLy9Nb2RlbHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWJpa0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdWJpa0NvbXBvbmVudCc7XG5cbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBsYXllck1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvUGxheWVyTW9kZWwnO1xuXG4vLyBTZXJ2aWVzXG5sZXQgbmF2aWdhdGVTZXJ2aWNlID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSgpO1xubGV0IHVwZGF0ZVNlcnZpY2UgPSBuZXcgVXBkYXRlU2VydmljZSgpO1xubGV0IHRpbWVyU2VydmljZSA9IG5ldyBUaW1lclNlcnZpY2UoMTAsIFwidGltZXJcIiwgdXBkYXRlU2VydmljZSk7XG5cbi8vIE1vZGVsc1xubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcbiAgICBcIm5hdmlnYXRlLWNvbXBvbmVudFwiLFxuICAgIFwicGxheWVyXCIsIFxuICAgIGZhbHNlLCBcbiAgICBbXCJjbGlja1wiXVxuKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMCk7XG5cbmxldCBjdWJpa0NvbXBvbmVudE1vZGVsID0gbmV3IEN1YmlrQ29tcG9uZW50TW9kZWwoXG4gICAgXCJjdWJpay1jb21wb25lbnRcIixcbiAgICBcImN1YmVcIixcbiAgICBcInNjb3JlXCIsXG4gICAgXCJ0YXJnZXRcIixcbiAgICAwLFxuICAgIHBsYXllclxuKTtcbiAgICAgICAgIFxuLy9Db21wb25lbnRzXG5sZXQgbmF2aWdhdGVDb21wb25lbnQgPSBuZXcgTmF2aWdhdGVDb21wb25lbnQoXG4gICAgbmF2aWdhdGVDb21wb25lbnRNb2RlbCwgXG4gICAgbmF2aWdhdGVTZXJ2aWNlXG4pO1xuXG5sZXQgY3ViaWtDb21wb25lbnQgPSBuZXcgQ3ViaWtDb21wb25lbnQoXG4gICAgY3ViaWtDb21wb25lbnRNb2RlbCxcbiAgICB0aW1lclNlcnZpY2UsXG4gICAgdXBkYXRlU2VydmljZVxuKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIG5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1YmlrQ29tcG9uZW50XG4gICAgKTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVRpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2UnO1xuZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElUaW1lclNlcnZpY2Uge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRhcmdldDogc3RyaW5nLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZVxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFN0YXJ0KCk6IHZvaWQgIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCxjb3VudGVyKVxuICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyIDwgMCApe1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWUgaXMgdXAhJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0iXX0=
