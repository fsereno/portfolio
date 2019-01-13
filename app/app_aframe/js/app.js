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
                var scene = document.querySelector("#scene"), feedbackTextElement = document.querySelector("#" + self.object.feedbackTextElementId);
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
                            feedbackTextElement.setAttribute("visible", "true");
                        }
                    }
                    cube.setAttribute("visible", "false");
                    if (cube.classList.contains("spawn")) {
                        var spwanAmount = self.randomGeneratorService.Generate(20);
                        var _loop_1 = function (a) {
                            var entity = document.createElement('a-box'), currentPosition = cube.getAttributeNode("position").textContent, currentPositionArray = currentPosition.split(" "), newPosition = "";
                            //Give the same attributes
                            for (var i = 0; i < cube.attributes.length; i++) {
                                entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                            }
                            //Set new position
                            currentPositionArray.forEach(function (position) {
                                var offSet = self.randomGeneratorService.Generate(15);
                                newPosition += offSet + " ";
                            });
                            //Enforce these attributes
                            entity.setAttribute("position", newPosition);
                            entity.classList.remove("error");
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
        this.Generate = function (target) { return Math.floor(Math.random() * target + 1); };
        this.stringService = stringService;
        this.randomGeneratorRepository = randomGeneratorRepository;
        this.Alphas = this.randomGeneratorRepository.Alphas;
        this.Numerics = this.randomGeneratorRepository.Numerics;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
    }
    RandomGeneratorService.prototype.GenerateRandomString = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.stringService.ToArray(criterion);
                array.forEach(function (char, i) {
                    var indexToPush = _this.Generate(array.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNNQTtJQU9JLHdCQUNJLE1BQVMsRUFDVCxZQUEyQixFQUMzQixhQUE2QixFQUM3QixzQkFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3pELENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUM7Z0JBQ0QsSUFBSSxDQUFDLGFB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QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSxvQ0FBWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5pbXBvcnQgeyBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JTZXJ2aWNlJztcbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudDxUIGV4dGVuZHMgSUN1YmlrTW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiwgSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICB0aW1lclNlcnZpY2U6IElUaW1lclNlcnZpY2U7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZSxcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSB0aW1lclNlcnZpY2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IHJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdWJpay1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwiY3ViaWstY29sbGVjdGFibGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHsgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NlbmVcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK3NlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQ6Q3VzdG9tRXZlbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IGV2dC5zcmNFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIWN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5wbGF5ZXIuaW5jcmVtZW50VXNlclNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSA9PT0gc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYudGltZXJTZXJ2aWNlLmNvdW50ZXIgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCwgc2VsZi5vYmplY3Quc3VjY2Vzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1YmUuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoY3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzcGF3blwiKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHdhbkFtb3VudCA9IHNlbGYucmFuZG9tR2VuZXJhdG9yU2VydmljZS5HZW5lcmF0ZSgyMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBzcHdhbkFtb3VudDsgYSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1ib3gnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gY3ViZS5nZXRBdHRyaWJ1dGVOb2RlKFwicG9zaXRpb25cIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5ID0gY3VycmVudFBvc2l0aW9uLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBcIlwiOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vR2l2ZSB0aGUgc2FtZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8Y3ViZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShjdWJlLmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWUsIGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IG5ldyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5LmZvckVhY2gocG9zaXRpb24gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZTZXQgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGUoMTUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24rPW9mZlNldCtcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRW5mb3JjZSB0aGVzZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QuYWRkKFwicmV3YXJkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcImdyZWVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFwcGVuZENoaWxkKGVudGl0eSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnQ8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4ge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD5cbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwibmF2aWdhdGUtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5ldmVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlU2VydmljZS5pbml0KHNlbGYub2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IElDdWJpa01vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrTW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+O1xuICAgIHByaXZhdGUgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPixcbiAgICAgICAgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+XG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudCA9IG5hdmlnYXRlQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1YmlrQ29tcG9uZW50ID0gY3ViaWtDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLmN1YmlrQ29tcG9uZW50LmluaXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUN1YmlrTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtNb2RlbFwiXG5pbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XG5leHBvcnQgY2xhc3MgQ3ViaWtNb2RlbCBpbXBsZW1lbnRzIElDdWJpa01vZGVsIHtcbiAgICBjdWJlQ2xhc3M6IHN0cmluZztcbiAgICBzY29yZUlkOiBzdHJpbmc7XG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICBjdWJlQ291bnQ6IG51bWJlcjtcbiAgICBwbGF5ZXI6IElQbGF5ZXJNb2RlbDtcbiAgICBmZWVkYmFja1RleHRFbGVtZW50SWQ6IHN0cmluZztcbiAgICBzdWNjZXNzVGV4dDogc3RyaW5nO1xuICAgIGZhaWxlZFRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjdWJlQ291bnQ6IG51bWJlcixcbiAgICAgICAgcGxheWVyOiBJUGxheWVyTW9kZWwsXG4gICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnRJZDogc3RyaW5nLFxuICAgICAgICBzdWNjZXNzVGV4dDogc3RyaW5nLFxuICAgICAgICBmYWlsZWRUZXh0OiBzdHJpbmdcbiAgICApe1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICAgICAgdGhpcy5mZWVkYmFja1RleHRFbGVtZW50SWQgPSBmZWVkYmFja1RleHRFbGVtZW50SWRcbiAgICAgICAgdGhpcy5zdWNjZXNzVGV4dCA9IHN1Y2Nlc3NUZXh0O1xuICAgICAgICB0aGlzLmZhaWxlZFRleHQgPSBmYWlsZWRUZXh0O1xuXG4gICAgfVxuICAgIGdldEN1YmVDb3VudCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmN1YmVDbGFzcytcIi5yZXdhcmRcIikubGVuZ3RoO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIlxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRNb2RlbCBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIHtcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBjYW1lcmFJZDogc3RyaW5nLFxuICAgICAgICB5Q29uc3RyYWludDogYm9vbGVhbixcbiAgICAgICAgb25FdmVudHM6IHN0cmluZ1tdXG4gICAgKXtcbiAgICAgICAgdGhpcy5jYW1lcmFJZCA9IGNhbWVyYUlkO1xuICAgICAgICB0aGlzLnlDb25zdHJhaW50ID0geUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub25FdmVudHMgPSBvbkV2ZW50cztcbiAgICB9XG59IiwiaW1wb3J0IHsgSVBsYXllck1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JUGxheWVyTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyTW9kZWwgaW1wbGVtZW50cyBJUGxheWVyTW9kZWwge1xuICAgIFxuICAgIG5hbWU6IHN0cmluZztcbiAgICBzY29yZTogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHNjb3JlOiBudW1iZXJcbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50VXNlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlKys7XG4gICAgZGVjcmVhc2VVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUtLTtcbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPiB7XG4gICAgcHVibGljIGluaXQob2JqZWN0OiBUKSB7XG4gICAgICAgIGxldCBjYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgb2JqZWN0LmNhbWVyYUlkKTtcbiAgICAgICAgaWYgKGNhbWVyYSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IG9iamVjdC5ldmVudC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LCBvZmZzZXQgPSAwLjcwLCB4ID0gY29vcmRzLngsIHkgPSAhb2JqZWN0LnlDb25zdHJhaW50ID8gY29vcmRzLnkgOiAwLjAsIHogPSBjb29yZHMueiArIG9mZnNldDtcbiAgICAgICAgICAgIGNhbWVyYS5zZXRBdHRyaWJ1dGUoXCJhbmltYXRpb25cIiwgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluT3V0U2luZTsgc3RhcnRFdmVudHM6IG5hdmlnYXRlLWFuaW1hdGU7IHRvOlwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeiArIFwiO1wiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtYW5pbWF0ZVwiKTtcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtbmF2aWdhdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVXBkYXRlU2VydmljZSBpbXBsZW1lbnRzIElVcGRhdGVTZXJ2aWNlIHtcbiAgICB1cGRhdGUoaWQ6IHN0cmluZywgdmFsdWU6YW55KTogdm9pZCB7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2lkKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCB2YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmlzaWJsZVwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiLCB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFJlcG9zaXRvcmllc1xuaW1wb3J0IHsgUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvUmVwb3NpdG9yaWVzL1JhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnknO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UnO1xuaW1wb3J0IHsgVXBkYXRlU2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvdXBkYXRlU2VydmljZSc7XG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlJztcbmltcG9ydCB7IFN0cmluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2UnO1xuXG4vL01vZGVsc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgQ3ViaWtNb2RlbCB9IGZyb20gJy4vTW9kZWxzL0N1YmlrTW9kZWwnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29tcG9uZW50JztcblxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tICcuL01vZGVscy9QbGF5ZXJNb2RlbCc7XG5cbi8vIFJlcG9zaXRvcmllc1xubGV0IHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgPSBuZXcgUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSgpO1xuXG4vLyBTZXJ2aWVzXG5sZXQgbmF2aWdhdGVTZXJ2aWNlID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSgpO1xubGV0IHVwZGF0ZVNlcnZpY2UgPSBuZXcgVXBkYXRlU2VydmljZSgpO1xubGV0IHRpbWVyU2VydmljZSA9IG5ldyBUaW1lclNlcnZpY2UoXG4gICAgMTAsIFxuICAgIFwidGltZXJcIixcbiAgICBcImZlZWRiYWNrVGV4dFwiLCBcbiAgICBcIkdhbWUgT3ZlclwiLCBcbiAgICB1cGRhdGVTZXJ2aWNlKTtcbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2UoKTtcbmxldCByYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gbmV3IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UoXG4gICAgc3RyaW5nU2VydmljZSwgXG4gICAgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSk7XG5cbi8vIE1vZGVsc1xubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcbiAgICBcInBsYXllclwiLCBcbiAgICBmYWxzZSwgXG4gICAgW1wiY2xpY2tcIl1cbik7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyTW9kZWwoXCJKb2UgQmxvZ2dzXCIsIDApO1xuXG5sZXQgY3ViaWtNb2RlbCA9IG5ldyBDdWJpa01vZGVsKFxuICAgIFwiY3ViZVwiLFxuICAgIFwic2NvcmVcIixcbiAgICBcInRhcmdldFwiLFxuICAgIDAsXG4gICAgcGxheWVyLFxuICAgIFwiZmVlZGJhY2tUZXh0XCIsXG4gICAgXCJMRVZFTCBDT01QTEVURSFcIixcbiAgICBcIllPVSBGQUlMRUQhXCJcbik7XG4gICAgICAgICBcbi8vQ29tcG9uZW50c1xubGV0IG5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50KFxuICAgIG5hdmlnYXRlQ29tcG9uZW50TW9kZWwsIFxuICAgIG5hdmlnYXRlU2VydmljZVxuKTtcblxubGV0IGN1YmlrQ29tcG9uZW50ID0gbmV3IEN1YmlrQ29tcG9uZW50KFxuICAgIGN1YmlrTW9kZWwsXG4gICAgdGltZXJTZXJ2aWNlLFxuICAgIHVwZGF0ZVNlcnZpY2UsXG4gICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZVxuKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIG5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1YmlrQ29tcG9uZW50XG4gICAgKTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBBbHBoYXM6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMuQWxwaGFzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNzID0gXCIwMTIzNDU2Nzg5XCI7XG4gICAgICAgIHRoaXMuQ29uc3RvbmFudHMgPSBcIkJDREZHSEpLTE1OUFFSU1RWWFpXWVwiXG4gICAgICAgIHRoaXMuVm93ZWxzID0gXCJBRUlPVVwiO1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yU2VydmljZSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXG57XG4gICAgcHVibGljIEFscGhhczogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljczogc3RyaW5nO1xuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcbiAgICBwcml2YXRlIHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeTogSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSxcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeTogSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcbiAgICApe1xuXG4gICAgICAgIHRoaXMuc3RyaW5nU2VydmljZSA9IHN0cmluZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSA9IHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuQWxwaGFzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkFscGhhcztcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5OdW1lcmljcztcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkuVm93ZWxzO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgR2VuZXJhdGVSYW5kb21TdHJpbmcoY3JpdGVyaWE6IHN0cmluZ1tdLCBsZW5ndGg6bnVtYmVyKSA6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXVxuXG4gICAgICAgIHdoaWxlKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcblxuICAgICAgICAgICAgY3JpdGVyaWEuZm9yRWFjaChjcml0ZXJpb24gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5zdHJpbmdTZXJ2aWNlLlRvQXJyYXkoY3JpdGVyaW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IHRoaXMuR2VuZXJhdGUoYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIEdlbmVyYXRlID0gKHRhcmdldDogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldCArIDEpO1xufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuXG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBcbiAgICAgICAgLy8gQ29uc2lkZXJpbmcgdGhlIGJlc3Qgd2F5IG9mIGhhbmRsaW5nIHVuZGVmaW5lZCBwYXJhbXMgdGhhdCB3aWxsIGFsbG93IGZvciB1bmhhcHB5IHRlc3QgcGF0aHMgd2l0aCBNb2NhaC9DaGFpXG4gICAgICAgIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIFBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5leHBvcnQgY2xhc3MgVGltZXJTZXJ2aWNlIGltcGxlbWVudHMgSVRpbWVyU2VydmljZSB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBjb3VudGVyOiBudW1iZXI7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmc7XG4gICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICBpbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICAgICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmcsXG4gICAgICAgIGNvbXBsZXRpb25NZXNzYWdlOiBzdHJpbmcsXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlXG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uVGFyZ2V0SWQgPSBjb21wbGV0aW9uVGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbk1lc3NhZ2UgPSBjb21wbGV0aW9uTWVzc2FnZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICB9XG4gICAgU3RhcnQoKTogdm9pZCAge1xuICAgICAgICBsZXQgaW50ZXJuYWxDb3VudGVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhcmdldCxpbnRlcm5hbENvdW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGludGVybmFsQ291bnRlcjtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICBpZihpbnRlcm5hbENvdW50ZXIgPCAwICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMuY29tcGxldGlvblRhcmdldElkLHRoaXMuY29tcGxldGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG59Il19
