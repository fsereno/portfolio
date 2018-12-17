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
                            self.updateService.update(self.object.feedbackTextElementId, self.object.failedText);
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
var CubikComponent_1 = require("./Components/CubikComponent");
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
    function TimerService(duration, target, completionMessage, updateService) {
        this.duration = duration;
        this.counter = 0;
        this.target = target;
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
                _this.updateService.update(_this.target, _this.completionMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBO0lBTUksd0JBQ0ksTUFBUyxFQUNULFlBQTJCLEVBQzNCLGFBQTZCO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUM7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxD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NkI7UUFHN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQUEsaUJBV0M7UUFWRyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkQsS0FBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7WUFDL0IsZUFBZSxFQUFFLENBQUM7WUFDbEIsSUFBRyxlQUFlLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNqRTtZQUFBLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELDJCQUFJLEdBQUo7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxtQkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUN1YmlrTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtNb2RlbFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRpbWVyU2VydmljZVwiO1xuaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5leHBvcnQgY2xhc3MgQ3ViaWtDb21wb25lbnQ8VCBleHRlbmRzIElDdWJpa01vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4sIElDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZSxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSB0aW1lclNlcnZpY2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdWJpay1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwiY3ViaWstY29sbGVjdGFibGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHsgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NlbmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGZlZWRiYWNrVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK3NlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQ6Q3VzdG9tRXZlbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IGV2dC5zcmNFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIWN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5wbGF5ZXIuaW5jcmVtZW50VXNlclNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSA9PT0gc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYudGltZXJTZXJ2aWNlLmNvdW50ZXIgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCwgc2VsZi5vYmplY3Quc3VjY2Vzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5mZWVkYmFja1RleHRFbGVtZW50SWQsIHNlbGYub2JqZWN0LmZhaWxlZFRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdWJlLnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Bhd25cIikpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZXJlIHdpbGwgYmUgYW4gYW1vdW50IHRvIHNwd2FuLCB0aGVyZSBjb3VsZCBiZSBtb3JlIHRoYW4gMS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYm94JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gY3ViZS5nZXRBdHRyaWJ1dGVOb2RlKFwicG9zaXRpb25cIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkgPSBjdXJyZW50UG9zaXRpb24uc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9HaXZlIHRoZSBzYW1lIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPGN1YmUuYXR0cmlidXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShjdWJlLmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWUsIGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBuZXcgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5LmZvckVhY2gocG9zaXRpb24gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGJlY29tZSBhIHJhbmRvbSBudW1iZXIgZXZlbnR1YWxseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRqdXN0bWVudCA9IE51bWJlcihwb3NpdGlvbikgKyAwLjE7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uKz1hZGp1c3RtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRW5mb3JjZSB0aGVzZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiLCBcInNwYXduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgXCJncmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFwcGVuZENoaWxkKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+XG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcIm5hdmlnYXRlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5vbkV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QuZXZlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0ZVNlcnZpY2UuaW5pdChzZWxmLm9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXG4gICAgICAgIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa01vZGVsPlxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBuYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudCA9IGN1YmlrQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElDdWJpa01vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrTW9kZWxcIlxuaW1wb3J0IHsgSVBsYXllck1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JUGxheWVyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIEN1YmlrTW9kZWwgaW1wbGVtZW50cyBJQ3ViaWtNb2RlbCB7XG4gICAgY3ViZUNsYXNzOiBzdHJpbmc7XG4gICAgc2NvcmVJZDogc3RyaW5nO1xuICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG4gICAgcGxheWVyOiBJUGxheWVyTW9kZWw7XG4gICAgZmVlZGJhY2tUZXh0RWxlbWVudElkOiBzdHJpbmc7XG4gICAgc3VjY2Vzc1RleHQ6IHN0cmluZztcbiAgICBmYWlsZWRUZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgY3ViZUNsYXNzOiBzdHJpbmcsXG4gICAgICAgIHNjb3JlSWQ6IHN0cmluZyxcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZyxcbiAgICAgICAgY3ViZUNvdW50OiBudW1iZXIsXG4gICAgICAgIHBsYXllcjogSVBsYXllck1vZGVsLFxuICAgICAgICBmZWVkYmFja1RleHRFbGVtZW50SWQ6IHN0cmluZyxcbiAgICAgICAgc3VjY2Vzc1RleHQ6IHN0cmluZyxcbiAgICAgICAgZmFpbGVkVGV4dDogc3RyaW5nXG4gICAgKXtcbiAgICAgICAgdGhpcy5jdWJlQ2xhc3MgPSBjdWJlQ2xhc3M7XG4gICAgICAgIHRoaXMuc2NvcmVJZCA9IHNjb3JlSWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy5jdWJlQ291bnQgPSBjdWJlQ291bnQ7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tUZXh0RWxlbWVudElkID0gZmVlZGJhY2tUZXh0RWxlbWVudElkXG4gICAgICAgIHRoaXMuc3VjY2Vzc1RleHQgPSBzdWNjZXNzVGV4dDtcbiAgICAgICAgdGhpcy5mYWlsZWRUZXh0ID0gZmFpbGVkVGV4dDtcblxuICAgIH1cbiAgICBnZXRDdWJlQ291bnQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jdWJlQ2xhc3MrXCIucmV3YXJkXCIpLmxlbmd0aDtcbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCJcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB7XG4gICAgY2FtZXJhSWQ6IHN0cmluZztcbiAgICB5Q29uc3RyYWludDogYm9vbGVhbjtcbiAgICBldmVudDogQ3VzdG9tRXZlbnQ8YW55PjtcbiAgICBvbkV2ZW50czogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcbiAgICAgICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW4sXG4gICAgICAgIG9uRXZlbnRzOiBzdHJpbmdbXVxuICAgICl7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XG4gICAgfVxufSIsImltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBsYXllck1vZGVsIGltcGxlbWVudHMgSVBsYXllck1vZGVsIHtcbiAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBzY29yZTogbnVtYmVyXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIH1cblxuICAgIGluY3JlbWVudFVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZSsrO1xuICAgIGRlY3JlYXNlVXNlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlLS07XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD4ge1xuICAgIHB1YmxpYyBpbml0KG9iamVjdDogVCkge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iamVjdC5jYW1lcmFJZCk7XG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBvYmplY3QuZXZlbnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCwgb2Zmc2V0ID0gMC43MCwgeCA9IGNvb3Jkcy54LCB5ID0gIW9iamVjdC55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJVXBkYXRlU2VydmljZSB7XG4gICAgdXBkYXRlKGlkOiBzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2lkKS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgfVxufSIsIlxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IFRpbWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IFVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL3VwZGF0ZVNlcnZpY2UnO1xuXG4vL01vZGVsc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgQ3ViaWtNb2RlbCB9IGZyb20gJy4vTW9kZWxzL0N1YmlrTW9kZWwnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29tcG9uZW50JztcblxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tICcuL01vZGVscy9QbGF5ZXJNb2RlbCc7XG5cbi8vIFNlcnZpZXNcbmxldCBuYXZpZ2F0ZVNlcnZpY2UgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlKCk7XG5sZXQgdXBkYXRlU2VydmljZSA9IG5ldyBVcGRhdGVTZXJ2aWNlKCk7XG5sZXQgdGltZXJTZXJ2aWNlID0gbmV3IFRpbWVyU2VydmljZShcbiAgICAxMCwgXG4gICAgXCJ0aW1lclwiLCBcbiAgICBcIlRpbWUgaXMgdXAhXCIsIFxuICAgIHVwZGF0ZVNlcnZpY2UpO1xuXG4vLyBNb2RlbHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwoXG4gICAgXCJwbGF5ZXJcIiwgXG4gICAgZmFsc2UsIFxuICAgIFtcImNsaWNrXCJdXG4pO1xuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllck1vZGVsKFwiSm9lIEJsb2dnc1wiLCAwKTtcblxubGV0IGN1YmlrTW9kZWwgPSBuZXcgQ3ViaWtNb2RlbChcbiAgICBcImN1YmVcIixcbiAgICBcInNjb3JlXCIsXG4gICAgXCJ0YXJnZXRcIixcbiAgICAwLFxuICAgIHBsYXllcixcbiAgICBcImZlZWRiYWNrVGV4dFwiLFxuICAgIFwiTEVWRUwgQ09NUExFVEUhXCIsXG4gICAgXCJZT1UgRkFJTEVEIVwiXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbXBvbmVudCA9IG5ldyBDdWJpa0NvbXBvbmVudChcbiAgICBjdWJpa01vZGVsLFxuICAgIHRpbWVyU2VydmljZSxcbiAgICB1cGRhdGVTZXJ2aWNlXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3ViaWtDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5leHBvcnQgY2xhc3MgVGltZXJTZXJ2aWNlIGltcGxlbWVudHMgSVRpbWVyU2VydmljZSB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBjb3VudGVyOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBpbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICAgICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25NZXNzYWdlID0gY29tcGxldGlvbk1lc3NhZ2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFN0YXJ0KCk6IHZvaWQgIHtcbiAgICAgICAgbGV0IGludGVybmFsQ291bnRlciA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZS51cGRhdGUodGhpcy50YXJnZXQsaW50ZXJuYWxDb3VudGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBpbnRlcm5hbENvdW50ZXI7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxDb3VudGVyLS07XG4gICAgICAgICAgICAgICAgaWYoaW50ZXJuYWxDb3VudGVyIDwgMCApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCx0aGlzLmNvbXBsZXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIFN0b3AoKTogdm9pZCB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxufSJdfQ==
