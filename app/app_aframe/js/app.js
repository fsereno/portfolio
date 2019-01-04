(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikComponent = /** @class */ (function () {
    function CubikComponent(object, timerService, updateService, randomGeneratorService) {
        this.object = object;
        this.timerService = timerService;
        this.updateService = updateService;
        this.randomGeneratorService = randomGeneratorService;
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
                        var spwanAmount = Number(cube.getAttributeNode("data-spawn-amount").textContent), scope = Number(cube.getAttributeNode("height").textContent);
                        var _loop_1 = function (a) {
                            var entity = document.createElement('a-box'), currentPosition = cube.getAttributeNode("position").textContent, currentPositionArray = currentPosition.split(" "), newPosition = "";
                            var numeric = self.randomGeneratorService.Numerics, criteria = [numeric];
                            //Give the same attributes
                            for (var i = 0; i < cube.attributes.length; i++) {
                                entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                            }
                            //Set new position
                            currentPositionArray.forEach(function (position) {
                                var offSet = self.randomGeneratorService.GenerateRandom(criteria, 1);
                                newPosition += offSet + " ";
                            });
                            //Enforce these attributes
                            entity.setAttribute("position", newPosition);
                            entity.classList.remove("error", "spawn");
                            entity.classList.add("reward");
                            entity.setAttribute("color", "green");
                            scene.appendChild(entity);
                        };
                        for (var a = 0; a < spwanAmount; a++) {
                            _loop_1(a);
                        }
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
// Repositories
var RandomGeneratorRepository_1 = require("../../typeScript/Repositories/RandomGeneratorRepository");
// Services
var NavigateComponentService_1 = require("./Services/NavigateComponentService");
var TimerService_1 = require("../../typeScript/Services/TimerService");
var updateService_1 = require("./Services/updateService");
var RandomGeneratorService_1 = require("../../typeScript/Services/RandomGeneratorService");
var StringService_1 = require("../../typeScript/Services/StringService");
//Models
var NavigateComponentModel_1 = require("./Models/NavigateComponentModel");
var CubikModel_1 = require("./Models/CubikModel");
// Components
var NavigateComponent_1 = require("./Components/NavigateComponent");
var CubikComponent_1 = require("./Components/CubikComponent");
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
var PlayerModel_1 = require("./Models/PlayerModel");
// Repositories
var randomGeneratorRepository = new RandomGeneratorRepository_1.RandomGeneratorRepository();
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService(10, "timer", "feedbackText", "Game Over", updateService);
var stringService = new StringService_1.StringService();
var randomGeneratorService = new RandomGeneratorService_1.RandomGeneratorService(stringService, randomGeneratorRepository);
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("player", false, ["click"]);
var player = new PlayerModel_1.PlayerModel("Joe Bloggs", 0);
var cubikModel = new CubikModel_1.CubikModel("cube", "score", "target", 0, player, "feedbackText", "LEVEL COMPLETE!", "YOU FAILED!");
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikModel, timerService, updateService, randomGeneratorService);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"../../typeScript/Repositories/RandomGeneratorRepository":10,"../../typeScript/Services/RandomGeneratorService":11,"../../typeScript/Services/StringService":12,"../../typeScript/Services/TimerService":13,"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikModel":4,"./Models/NavigateComponentModel":5,"./Models/PlayerModel":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorRepository = /** @class */ (function () {
    function RandomGeneratorRepository() {
        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return RandomGeneratorRepository;
}());
exports.RandomGeneratorRepository = RandomGeneratorRepository;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorService = /** @class */ (function () {
    function RandomGeneratorService(stringService, randomGeneratorRepository) {
        this.stringService = stringService;
        this.randomGeneratorRepository = randomGeneratorRepository;
        this.Alphas = this.randomGeneratorRepository.Alphas;
        this.Numerics = this.randomGeneratorRepository.Numerics;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
    }
    RandomGeneratorService.prototype.GenerateRandom = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.stringService.ToArray(criterion);
                array.forEach(function (char, i) {
                    var indexToPush = Math.floor(Math.random() * array.length);
                    if (i === indexToPush && output.length < length) {
                        output.push(char);
                    }
                });
            });
        }
        var result = output.join("");
        return result;
    };
    return RandomGeneratorService;
}());
exports.RandomGeneratorService = RandomGeneratorService;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService() {
    }
    StringService.prototype.Concat = function (a, b) {
        // Considering the best way of handling undefined params that will allow for unhappy test paths with Mocah/Chai
        if (a === undefined || b === undefined) {
            throw new Error('Undefined Parameter');
        }
        return a + " " + b;
    };
    StringService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var searchRegex = new RegExp(findThis, "g"), replaceRegex = new RegExp("\\b" + findThis + "\\b"), count = (inThis.match(searchRegex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
        }
        return inThis;
    };
    StringService.prototype.ToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    return StringService;
}());
exports.StringService = StringService;

},{}],13:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNNQTtJQU9JLHdCQUNJLE1BQVMsRUFDVCxZQUEyQixFQUMzQixhQUE2QixFQUM3QixzQkFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3pELENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUM7Z0JBQ0QsSUFBSSxDQUFDLGFB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QWtCLEVBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDN0U7WUFBQSxDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLG9DQUFZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElDdWJpa01vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrTW9kZWxcIjtcbmltcG9ydCB7IElDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnRcIjtcbmltcG9ydCB7IElUaW1lclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUaW1lclNlcnZpY2VcIjtcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UnO1xuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+LCBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZTtcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2UsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlLFxuICAgICAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnRpbWVyU2VydmljZSA9IHRpbWVyU2VydmljZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICAgICAgdGhpcy5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gcmFuZG9tR2VuZXJhdG9yU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1YmlrLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyU2VydmljZS5TdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdWJpay1jb2xsZWN0YWJsZS1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY2VuZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZmVlZGJhY2tUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZXZ0LnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZighY3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LnBsYXllci5pbmNyZW1lbnRVc2VyU2NvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpID09PSBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi50aW1lclNlcnZpY2UuY291bnRlciA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkLCBzZWxmLm9iamVjdC5zdWNjZXNzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkLCBzZWxmLm9iamVjdC5mYWlsZWRUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFja1RleHRFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3ViZS5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihjdWJlLmNsYXNzTGlzdC5jb250YWlucyhcInNwYXduXCIpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwd2FuQW1vdW50ID0gTnVtYmVyKGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcImRhdGEtc3Bhd24tYW1vdW50XCIpLnRleHRDb250ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSA9IE51bWJlcihjdWJlLmdldEF0dHJpYnV0ZU5vZGUoXCJoZWlnaHRcIikudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgc3B3YW5BbW91bnQ7IGErKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtYm94JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcInBvc2l0aW9uXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb25BcnJheSA9IGN1cnJlbnRQb3NpdGlvbi5zcGxpdChcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1lcmljID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLk51bWVyaWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYSA9IFtudW1lcmljXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vR2l2ZSB0aGUgc2FtZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8Y3ViZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShjdWJlLmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWUsIGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IG5ldyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5LmZvckVhY2gocG9zaXRpb24gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZTZXQgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGVSYW5kb20oY3JpdGVyaWEsIDEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbis9b2ZmU2V0K1wiIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9FbmZvcmNlIHRoZXNlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIiwgXCJzcGF3blwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY2xhc3NMaXN0LmFkZChcInJld2FyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgXCJncmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hcHBlbmRDaGlsZChlbnRpdHkpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+XG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcIm5hdmlnYXRlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5vbkV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QuZXZlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0ZVNlcnZpY2UuaW5pdChzZWxmLm9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXG4gICAgICAgIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa01vZGVsPlxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBuYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudCA9IGN1YmlrQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElDdWJpa01vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrTW9kZWxcIlxuaW1wb3J0IHsgSVBsYXllck1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JUGxheWVyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIEN1YmlrTW9kZWwgaW1wbGVtZW50cyBJQ3ViaWtNb2RlbCB7XG4gICAgY3ViZUNsYXNzOiBzdHJpbmc7XG4gICAgc2NvcmVJZDogc3RyaW5nO1xuICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG4gICAgcGxheWVyOiBJUGxheWVyTW9kZWw7XG4gICAgZmVlZGJhY2tUZXh0RWxlbWVudElkOiBzdHJpbmc7XG4gICAgc3VjY2Vzc1RleHQ6IHN0cmluZztcbiAgICBmYWlsZWRUZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgY3ViZUNsYXNzOiBzdHJpbmcsXG4gICAgICAgIHNjb3JlSWQ6IHN0cmluZyxcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZyxcbiAgICAgICAgY3ViZUNvdW50OiBudW1iZXIsXG4gICAgICAgIHBsYXllcjogSVBsYXllck1vZGVsLFxuICAgICAgICBmZWVkYmFja1RleHRFbGVtZW50SWQ6IHN0cmluZyxcbiAgICAgICAgc3VjY2Vzc1RleHQ6IHN0cmluZyxcbiAgICAgICAgZmFpbGVkVGV4dDogc3RyaW5nXG4gICAgKXtcbiAgICAgICAgdGhpcy5jdWJlQ2xhc3MgPSBjdWJlQ2xhc3M7XG4gICAgICAgIHRoaXMuc2NvcmVJZCA9IHNjb3JlSWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy5jdWJlQ291bnQgPSBjdWJlQ291bnQ7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tUZXh0RWxlbWVudElkID0gZmVlZGJhY2tUZXh0RWxlbWVudElkXG4gICAgICAgIHRoaXMuc3VjY2Vzc1RleHQgPSBzdWNjZXNzVGV4dDtcbiAgICAgICAgdGhpcy5mYWlsZWRUZXh0ID0gZmFpbGVkVGV4dDtcblxuICAgIH1cbiAgICBnZXRDdWJlQ291bnQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jdWJlQ2xhc3MrXCIucmV3YXJkXCIpLmxlbmd0aDtcbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCJcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB7XG4gICAgY2FtZXJhSWQ6IHN0cmluZztcbiAgICB5Q29uc3RyYWludDogYm9vbGVhbjtcbiAgICBldmVudDogQ3VzdG9tRXZlbnQ8YW55PjtcbiAgICBvbkV2ZW50czogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcbiAgICAgICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW4sXG4gICAgICAgIG9uRXZlbnRzOiBzdHJpbmdbXVxuICAgICl7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XG4gICAgfVxufSIsImltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBsYXllck1vZGVsIGltcGxlbWVudHMgSVBsYXllck1vZGVsIHtcbiAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBzY29yZTogbnVtYmVyXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIH1cblxuICAgIGluY3JlbWVudFVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZSsrO1xuICAgIGRlY3JlYXNlVXNlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlLS07XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD4ge1xuICAgIHB1YmxpYyBpbml0KG9iamVjdDogVCkge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iamVjdC5jYW1lcmFJZCk7XG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBvYmplY3QuZXZlbnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCwgb2Zmc2V0ID0gMC43MCwgeCA9IGNvb3Jkcy54LCB5ID0gIW9iamVjdC55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJVXBkYXRlU2VydmljZSB7XG4gICAgdXBkYXRlKGlkOiBzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xuXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitpZCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgdmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBpZihlbGVtZW50LmdldEF0dHJpYnV0ZShcInZpc2libGVcIikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcInZpc2libGVcIiwgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBSZXBvc2l0b3JpZXNcbmltcG9ydCB7IFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9SYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IFRpbWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IFVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL3VwZGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZSc7XG5pbXBvcnQgeyBTdHJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlJztcblxuLy9Nb2RlbHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuL01vZGVscy9OYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IEN1YmlrTW9kZWwgfSBmcm9tICcuL01vZGVscy9DdWJpa01vZGVsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdWJpa0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdWJpa0NvbXBvbmVudCc7XG5cbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBsYXllck1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvUGxheWVyTW9kZWwnO1xuXG4vLyBSZXBvc2l0b3JpZXNcbmxldCByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5ID0gbmV3IFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkoKTtcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcbmxldCB1cGRhdGVTZXJ2aWNlID0gbmV3IFVwZGF0ZVNlcnZpY2UoKTtcbmxldCB0aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKFxuICAgIDEwLCBcbiAgICBcInRpbWVyXCIsXG4gICAgXCJmZWVkYmFja1RleHRcIiwgXG4gICAgXCJHYW1lIE92ZXJcIiwgXG4gICAgdXBkYXRlU2VydmljZSk7XG5sZXQgc3RyaW5nU2VydmljZSA9IG5ldyBTdHJpbmdTZXJ2aWNlKCk7XG5sZXQgcmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IG5ldyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlKFxuICAgIHN0cmluZ1NlcnZpY2UsIFxuICAgIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkpO1xuXG4vLyBNb2RlbHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwoXG4gICAgXCJwbGF5ZXJcIiwgXG4gICAgZmFsc2UsIFxuICAgIFtcImNsaWNrXCJdXG4pO1xuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllck1vZGVsKFwiSm9lIEJsb2dnc1wiLCAwKTtcblxubGV0IGN1YmlrTW9kZWwgPSBuZXcgQ3ViaWtNb2RlbChcbiAgICBcImN1YmVcIixcbiAgICBcInNjb3JlXCIsXG4gICAgXCJ0YXJnZXRcIixcbiAgICAwLFxuICAgIHBsYXllcixcbiAgICBcImZlZWRiYWNrVGV4dFwiLFxuICAgIFwiTEVWRUwgQ09NUExFVEUhXCIsXG4gICAgXCJZT1UgRkFJTEVEIVwiXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbXBvbmVudCA9IG5ldyBDdWJpa0NvbXBvbmVudChcbiAgICBjdWJpa01vZGVsLFxuICAgIHRpbWVyU2VydmljZSxcbiAgICB1cGRhdGVTZXJ2aWNlLFxuICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2Vcbik7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcihcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudCxcbiAgICBjdWJpa0NvbXBvbmVudFxuICAgICk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgaW1wbGVtZW50cyBJUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSB7XG5cbiAgICBwdWJsaWMgQWxwaGFzOiBzdHJpbmc7XG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLkFscGhhcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IFwiMDEyMzQ1Njc4OVwiO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gXCJCQ0RGR0hKS0xNTlBRUlNUVlhaV1lcIlxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZVxue1xuICAgIHB1YmxpYyBBbHBoYXM6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZTtcbiAgICBwcml2YXRlIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk6IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2UsXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk6IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XG4gICAgKXtcblxuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgPSByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLkFscGhhcyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5BbHBoYXM7XG4gICAgICAgIHRoaXMuTnVtZXJpY3MgPSB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkuTnVtZXJpY3M7XG4gICAgICAgIHRoaXMuVm93ZWxzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LlZvd2VscztcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5Db25zdG9uYW50cztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc3RyaW5nU2VydmljZS5Ub0FycmF5KGNyaXRlcmlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhUb1B1c2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihpPT09aW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuXG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBcbiAgICAgICAgLy8gQ29uc2lkZXJpbmcgdGhlIGJlc3Qgd2F5IG9mIGhhbmRsaW5nIHVuZGVmaW5lZCBwYXJhbXMgdGhhdCB3aWxsIGFsbG93IGZvciB1bmhhcHB5IHRlc3QgcGF0aHMgd2l0aCBNb2NhaC9DaGFpXG4gICAgICAgIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIFBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5leHBvcnQgY2xhc3MgVGltZXJTZXJ2aWNlIGltcGxlbWVudHMgSVRpbWVyU2VydmljZSB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBjb3VudGVyOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmc7XG4gICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBpbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICAgICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmcsXG4gICAgICAgIGNvbXBsZXRpb25NZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlXG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uVGFyZ2V0SWQgPSBjb21wbGV0aW9uVGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbk1lc3NhZ2UgPSBjb21wbGV0aW9uTWVzc2FnZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICB9XG4gICAgU3RhcnQoKTogdm9pZCAge1xuICAgICAgICBsZXQgaW50ZXJuYWxDb3VudGVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCxpbnRlcm5hbENvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGludGVybmFsQ291bnRlcjtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBpZihpbnRlcm5hbENvdW50ZXIgPCAwICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMuY29tcGxldGlvblRhcmdldElkLHRoaXMuY29tcGxldGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG59Il19
