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
                var feedbackTextElement = document.querySelector("#" + self.object.feedbackTextElementId);
                this.el.addEventListener('click', function (evt) {
                    var cube = evt.srcElement;
                    if (!cube.classList.contains("error"))
                        self.object.player.incrementUserScore();
                    if (self.object.getCubeCount() === self.object.player.score) {
                        self.timerService.Stop();
                        if (self.timerService.counter > 0) {
                            self.updateService.update(self.object.feedbackTextElementId, self.object.successText);
                            feedbackTextElement.setAttribute("visible", "true");
                        }
                        else {
                            //self.updateService.update(self.object.feedbackTextElementId, self.object.failedText);
                            feedbackTextElement.setAttribute("visible", "true");
                        }
                    }
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
    function CubikModel(cubeClass, scoreId, targetId, cubeCount, player, feedbackTextElementId, successText, failedText) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass + ".reward").length; };
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player;
        this.feedbackTextElementId = feedbackTextElementId;
        this.successText = successText;
        this.failedText = failedText;
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
        var element = document.querySelector("#" + id);
        element.setAttribute("text", "value", value);
        if (element.getAttribute("visible") === false) {
            element.setAttribute("visible", true);
        }
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
var CubikComponent_1 = require("./Components/CubikComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var PlayerModel_1 = require("./Models/PlayerModel");
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService(10, "timer", "feedbackText", "Game Over", updateService);
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("player", false, ["click"]);
var player = new PlayerModel_1.PlayerModel("Joe Bloggs", 0);
var cubikModel = new CubikModel_1.CubikModel("cube", "score", "target", 0, player, "feedbackText", "LEVEL COMPLETE!", "YOU FAILED!");
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikModel, timerService, updateService);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"../../typeScript/Services/TimerService":10,"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikModel":4,"./Models/NavigateComponentModel":5,"./Models/PlayerModel":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerService = /** @class */ (function () {
    function TimerService(duration, target, completionTargetId, completionMessage, updateService) {
        this.duration = duration;
        this.counter = 0;
        this.target = target;
        this.completionTargetId = completionTargetId;
        this.completionMessage = completionMessage;
        this.updateService = updateService;
    }
    TimerService.prototype.Start = function () {
        var _this = this;
        var internalCounter = this.duration;
        this.interval = setInterval(function () {
            _this.updateService.update(_this.target, internalCounter);
            _this.counter = internalCounter;
            internalCounter--;
            if (internalCounter < 0) {
                _this.Stop();
                _this.updateService.update(_this.completionTargetId, _this.completionMessage);
            }
            ;
        }, 1000);
    };
    TimerService.prototype.Stop = function () {
        clearInterval(this.interval);
    };
    return TimerService;
}());
exports.TimerService = TimerService;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBO0lBTUksd0JBQ0ksTUFBUyxFQUNULFlBQTJCLEVBQzNCLGFBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUM7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxD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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5pbXBvcnQgeyBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudDxUIGV4dGVuZHMgSUN1YmlrTW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiwgSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2U7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnRpbWVyU2VydmljZSA9IHRpbWVyU2VydmljZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1YmlrLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyU2VydmljZS5TdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdWJpay1jb2xsZWN0YWJsZS1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY2VuZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZmVlZGJhY2tUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZXZ0LnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZighY3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LnBsYXllci5pbmNyZW1lbnRVc2VyU2NvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpID09PSBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi50aW1lclNlcnZpY2UuY291bnRlciA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkLCBzZWxmLm9iamVjdC5zdWNjZXNzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkLCBzZWxmLm9iamVjdC5mYWlsZWRUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFja1RleHRFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3ViZS5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihjdWJlLmNsYXNzTGlzdC5jb250YWlucyhcInNwYXduXCIpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVyZSB3aWxsIGJlIGFuIGFtb3VudCB0byBzcHdhbiwgdGhlcmUgY291bGQgYmUgbW9yZSB0aGFuIDEuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWJveCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcInBvc2l0aW9uXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5ID0gY3VycmVudFBvc2l0aW9uLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vR2l2ZSB0aGUgc2FtZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDxjdWJlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoY3ViZS5hdHRyaWJ1dGVzW2ldLm5vZGVOYW1lLCBjdWJlLmF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgbmV3IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb25BcnJheS5mb3JFYWNoKHBvc2l0aW9uID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZWNvbWUgYSByYW5kb20gbnVtYmVyIGV2ZW50dWFsbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkanVzdG1lbnQgPSBOdW1iZXIocG9zaXRpb24pICsgMC4xOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbis9YWRqdXN0bWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0VuZm9yY2UgdGhlc2UgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIiwgXCJzcGF3blwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QuYWRkKFwicmV3YXJkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwiZ3JlZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hcHBlbmRDaGlsZChlbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnNjb3JlSWQsIHNlbGYub2JqZWN0LnBsYXllci5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnNjb3JlSWQsIHNlbGYub2JqZWN0LnBsYXllci5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPlxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJuYXZpZ2F0ZS1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3Qub25FdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgSUN1YmlrTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD47XG4gICAgcHJpdmF0ZSBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtNb2RlbD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+LFxuICAgICAgICBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtNb2RlbD5cbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gbmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCJcbmltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcbmV4cG9ydCBjbGFzcyBDdWJpa01vZGVsIGltcGxlbWVudHMgSUN1YmlrTW9kZWwge1xuICAgIGN1YmVDbGFzczogc3RyaW5nO1xuICAgIHNjb3JlSWQ6IHN0cmluZztcbiAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIGN1YmVDb3VudDogbnVtYmVyO1xuICAgIHBsYXllcjogSVBsYXllck1vZGVsO1xuICAgIGZlZWRiYWNrVGV4dEVsZW1lbnRJZDogc3RyaW5nO1xuICAgIHN1Y2Nlc3NUZXh0OiBzdHJpbmc7XG4gICAgZmFpbGVkVGV4dDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGN1YmVDbGFzczogc3RyaW5nLFxuICAgICAgICBzY29yZUlkOiBzdHJpbmcsXG4gICAgICAgIHRhcmdldElkOiBzdHJpbmcsXG4gICAgICAgIGN1YmVDb3VudDogbnVtYmVyLFxuICAgICAgICBwbGF5ZXI6IElQbGF5ZXJNb2RlbCxcbiAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudElkOiBzdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsXG4gICAgICAgIGZhaWxlZFRleHQ6IHN0cmluZ1xuICAgICl7XG4gICAgICAgIHRoaXMuY3ViZUNsYXNzID0gY3ViZUNsYXNzO1xuICAgICAgICB0aGlzLnNjb3JlSWQgPSBzY29yZUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY3ViZUNvdW50ID0gY3ViZUNvdW50O1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllclxuICAgICAgICB0aGlzLmZlZWRiYWNrVGV4dEVsZW1lbnRJZCA9IGZlZWRiYWNrVGV4dEVsZW1lbnRJZFxuICAgICAgICB0aGlzLnN1Y2Nlc3NUZXh0ID0gc3VjY2Vzc1RleHQ7XG4gICAgICAgIHRoaXMuZmFpbGVkVGV4dCA9IGZhaWxlZFRleHQ7XG5cbiAgICB9XG4gICAgZ2V0Q3ViZUNvdW50ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY3ViZUNsYXNzK1wiLnJld2FyZFwiKS5sZW5ndGg7XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwge1xuICAgIGNhbWVyYUlkOiBzdHJpbmc7XG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT47XG4gICAgb25FdmVudHM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGNhbWVyYUlkOiBzdHJpbmcsXG4gICAgICAgIHlDb25zdHJhaW50OiBib29sZWFuLFxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cbiAgICApe1xuICAgICAgICB0aGlzLmNhbWVyYUlkID0gY2FtZXJhSWQ7XG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5vbkV2ZW50cyA9IG9uRXZlbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJNb2RlbCBpbXBsZW1lbnRzIElQbGF5ZXJNb2RlbCB7XG4gICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZVVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVwZGF0ZVNlcnZpY2Uge1xuICAgIHVwZGF0ZShpZDogc3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcblxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIraWQpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwidGV4dFwiLCBcInZhbHVlXCIsIHZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCIsIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UnO1xuaW1wb3J0IHsgVXBkYXRlU2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvdXBkYXRlU2VydmljZSc7XG5cbi8vTW9kZWxzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBDdWJpa01vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvQ3ViaWtNb2RlbCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3ViaWtDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQ3ViaWtDb21wb25lbnQnO1xuXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQbGF5ZXJNb2RlbCB9IGZyb20gJy4vTW9kZWxzL1BsYXllck1vZGVsJztcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcbmxldCB1cGRhdGVTZXJ2aWNlID0gbmV3IFVwZGF0ZVNlcnZpY2UoKTtcbmxldCB0aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKFxuICAgIDEwLCBcbiAgICBcInRpbWVyXCIsXG4gICAgXCJmZWVkYmFja1RleHRcIiwgXG4gICAgXCJHYW1lIE92ZXJcIiwgXG4gICAgdXBkYXRlU2VydmljZSk7XG5cbi8vIE1vZGVsc1xubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcbiAgICBcInBsYXllclwiLCBcbiAgICBmYWxzZSwgXG4gICAgW1wiY2xpY2tcIl1cbik7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyTW9kZWwoXCJKb2UgQmxvZ2dzXCIsIDApO1xuXG5sZXQgY3ViaWtNb2RlbCA9IG5ldyBDdWJpa01vZGVsKFxuICAgIFwiY3ViZVwiLFxuICAgIFwic2NvcmVcIixcbiAgICBcInRhcmdldFwiLFxuICAgIDAsXG4gICAgcGxheWVyLFxuICAgIFwiZmVlZGJhY2tUZXh0XCIsXG4gICAgXCJMRVZFTCBDT01QTEVURSFcIixcbiAgICBcIllPVSBGQUlMRUQhXCJcbik7XG4gICAgICAgICBcbi8vQ29tcG9uZW50c1xubGV0IG5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50KFxuICAgIG5hdmlnYXRlQ29tcG9uZW50TW9kZWwsIFxuICAgIG5hdmlnYXRlU2VydmljZVxuKTtcblxubGV0IGN1YmlrQ29tcG9uZW50ID0gbmV3IEN1YmlrQ29tcG9uZW50KFxuICAgIGN1YmlrTW9kZWwsXG4gICAgdGltZXJTZXJ2aWNlLFxuICAgIHVwZGF0ZVNlcnZpY2Vcbik7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcihcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudCxcbiAgICBjdWJpa0NvbXBvbmVudFxuICAgICk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUaW1lclNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lUaW1lclNlcnZpY2UnO1xuaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlJztcbmV4cG9ydCBjbGFzcyBUaW1lclNlcnZpY2UgaW1wbGVtZW50cyBJVGltZXJTZXJ2aWNlIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIGNvdW50ZXI6IG51bWJlcjtcbiAgICB0YXJnZXQ6IHN0cmluZztcbiAgICBjb21wbGV0aW9uVGFyZ2V0SWQ6IHN0cmluZztcbiAgICBjb21wbGV0aW9uTWVzc2FnZTogc3RyaW5nO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuICAgIGludGVydmFsOiBOb2RlSlMuVGltZXI7XG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRhcmdldDogc3RyaW5nLFxuICAgICAgICBjb21wbGV0aW9uVGFyZ2V0SWQ6IHN0cmluZyxcbiAgICAgICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25UYXJnZXRJZCA9IGNvbXBsZXRpb25UYXJnZXRJZDtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uTWVzc2FnZSA9IGNvbXBsZXRpb25NZXNzYWdlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBTdGFydCgpOiB2b2lkICB7XG4gICAgICAgIGxldCBpbnRlcm5hbENvdW50ZXIgPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMudGFyZ2V0LGludGVybmFsQ291bnRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gaW50ZXJuYWxDb3VudGVyO1xuICAgICAgICAgICAgICAgIGludGVybmFsQ291bnRlci0tO1xuICAgICAgICAgICAgICAgIGlmKGludGVybmFsQ291bnRlciA8IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZS51cGRhdGUodGhpcy5jb21wbGV0aW9uVGFyZ2V0SWQsdGhpcy5jb21wbGV0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBTdG9wKCk6IHZvaWQge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbn0iXX0=
