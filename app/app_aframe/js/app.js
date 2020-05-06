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
                var availableColours = ["green", "red", "blue", "yellow", "purple", "orange"], cubeClickHandler = function (e) {
                    var cube = e.srcElement, feedbackTextElement = document.querySelector("#" + self.object.feedbackTextElementId);
                    if (cube.classList.contains("reward")) {
                        cube.setAttribute("visible", "false");
                        self.object.player.incrementUserScore();
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                    }
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
                };
                this.el.addEventListener('click', function (evt) {
                    var scene = document.querySelector("#scene"), cube = evt.srcElement, spawnLimit = Number(cube.getAttributeNode("data-spawn-limit").textContent) || 0, timeValue = Number(cube.getAttributeNode("data-time-value").textContent) || 0, spwanAmount = self.randomGeneratorService.Generate(spawnLimit);
                    if (cube.classList.contains("start")) {
                        cube.setAttribute("visible", "false");
                        var _loop_1 = function (a) {
                            var entity = document.createElement('a-box'), currentPosition = cube.getAttributeNode("position").textContent, currentPositionArray = currentPosition.split(" "), newPosition = "", colourIndex = self.randomGeneratorService.Generate(availableColours.length) - 1;
                            for (var i = 0; i < cube.attributes.length; i++) {
                                entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                            }
                            currentPositionArray.forEach(function () {
                                var offSet = self.randomGeneratorService.Generate(15);
                                newPosition += offSet + " ";
                            });
                            entity.setAttribute("position", newPosition);
                            entity.classList.remove("error", "start");
                            entity.classList.add("reward");
                            entity.setAttribute("color", availableColours[colourIndex]);
                            entity.addEventListener("click", function (e) {
                                cubeClickHandler(e);
                            });
                            scene.appendChild(entity);
                            self.timerService.duration = self.timerService.duration + timeValue;
                        };
                        for (var a = 0; a < spwanAmount; a++) {
                            _loop_1(a);
                        }
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                        self.timerService.Start();
                    }
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
var StringRepository_1 = require("../../typeScript/Repositories/StringRepository");
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
var stringRepository = new StringRepository_1.StringRepository();
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService("timer", "feedbackText", "Game Over", updateService);
var stringService = new StringService_1.StringService(stringRepository);
var randomGeneratorService = new RandomGeneratorService_1.RandomGeneratorService(stringService);
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

},{"../../typeScript/Repositories/StringRepository":10,"../../typeScript/Services/RandomGeneratorService":11,"../../typeScript/Services/StringService":12,"../../typeScript/Services/TimerService":13,"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikModel":4,"./Models/NavigateComponentModel":5,"./Models/PlayerModel":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringRepository = /** @class */ (function () {
    function StringRepository() {
        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return StringRepository;
}());
exports.StringRepository = StringRepository;

},{}],11:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorService = /** @class */ (function () {
    function RandomGeneratorService(stringService) {
        this.Generate = function (target) { return Math.floor(Math.random() * target + 1); };
        this.stringService = stringService;
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
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService(stringRepository) {
        this.stringRepository = stringRepository;
        this.Alphas = this.stringRepository.Alphas;
        this.Numerics = this.stringRepository.Numerics;
        this.Vowels = this.stringRepository.Vowels;
        this.Constonants = this.stringRepository.Constonants;
    }
    StringService.prototype.Concat = function (a, b) {
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
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerService = /** @class */ (function () {
    function TimerService(target, completionTargetId, completionMessage, updateService) {
        this.counter = 0;
        this.target = target;
        this.completionTargetId = completionTargetId;
        this.completionMessage = completionMessage;
        this.updateService = updateService;
        this.duration = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvU3RyaW5nUmVwb3NpdG9yeS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNPQTtJQU9JLHdCQUNJLE1BQVMsRUFDVCxZQUEyQixFQUMzQixhQUE2QixFQUM3QixzQkFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3pELENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUV4QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxN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LElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQztZQUNsQixJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDOUU7WUFBQSxDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELDJCQUFJLEdBQUo7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxtQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUN1YmlrTW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtNb2RlbFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRpbWVyU2VydmljZVwiO1xuaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDdWJpa0NvbXBvbmVudDxUIGV4dGVuZHMgSUN1YmlrTW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiwgSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnQge1xuXG4gICAgb2JqZWN0OiBUO1xuICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZTtcbiAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZTtcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIHRpbWVyU2VydmljZTogSVRpbWVyU2VydmljZSxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2UsXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2U6IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMudGltZXJTZXJ2aWNlID0gdGltZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdWJpay1jb21wb25lbnRcIiwge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlQ29sb3VycyA9IFtcImdyZWVuXCIsIFwicmVkXCIsIFwiYmx1ZVwiLCBcInllbGxvd1wiLCBcInB1cnBsZVwiLCBcIm9yYW5nZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgY3ViZUNsaWNrSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZS5zcmNFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK3NlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmV3YXJkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZS5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QucGxheWVyLmluY3JlbWVudFVzZXJTY29yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpID09PSBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnRpbWVyU2VydmljZS5jb3VudGVyID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkLCBzZWxmLm9iamVjdC5zdWNjZXNzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0OiBhbnkpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjZW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3ViZSA9IGV2dC5zcmNFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25MaW1pdCA9IE51bWJlcihjdWJlLmdldEF0dHJpYnV0ZU5vZGUoXCJkYXRhLXNwYXduLWxpbWl0XCIpLnRleHRDb250ZW50KSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVZhbHVlID0gTnVtYmVyKGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcImRhdGEtdGltZS12YWx1ZVwiKS50ZXh0Q29udGVudCkgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwd2FuQW1vdW50ID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlKHNwYXduTGltaXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhcnRcIikpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJmYWxzZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IHNwd2FuQW1vdW50OyBhKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWJveCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBjdWJlLmdldEF0dHJpYnV0ZU5vZGUoXCJwb3NpdGlvblwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkgPSBjdXJyZW50UG9zaXRpb24uc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG91ckluZGV4ID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlKGF2YWlsYWJsZUNvbG91cnMubGVuZ3RoKSAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDxjdWJlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc2V0QXR0cmlidXRlKGN1YmUuYXR0cmlidXRlc1tpXS5ub2RlTmFtZSwgY3ViZS5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uQXJyYXkuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZTZXQgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGUoMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbis9b2ZmU2V0K1wiIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIsIFwic3RhcnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIGF2YWlsYWJsZUNvbG91cnNbY29sb3VySW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBDdXN0b21FdmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZUNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFwcGVuZENoaWxkKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuZHVyYXRpb24gPSBzZWxmLnRpbWVyU2VydmljZS5kdXJhdGlvbiArIHRpbWVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC50YXJnZXRJZCwgc2VsZi5vYmplY3QuZ2V0Q3ViZUNvdW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+XG4gICAgKXtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcIm5hdmlnYXRlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5vbkV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QuZXZlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0ZVNlcnZpY2UuaW5pdChzZWxmLm9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+LFxuICAgICAgICBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtNb2RlbD5cbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gbmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCJcbmltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcbmV4cG9ydCBjbGFzcyBDdWJpa01vZGVsIGltcGxlbWVudHMgSUN1YmlrTW9kZWwge1xuICAgIGN1YmVDbGFzczogc3RyaW5nO1xuICAgIHNjb3JlSWQ6IHN0cmluZztcbiAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIGN1YmVDb3VudDogbnVtYmVyO1xuICAgIHBsYXllcjogSVBsYXllck1vZGVsO1xuICAgIGZlZWRiYWNrVGV4dEVsZW1lbnRJZDogc3RyaW5nO1xuICAgIHN1Y2Nlc3NUZXh0OiBzdHJpbmc7XG4gICAgZmFpbGVkVGV4dDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBjdWJlQ2xhc3M6IHN0cmluZyxcbiAgICAgICAgc2NvcmVJZDogc3RyaW5nLFxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjdWJlQ291bnQ6IG51bWJlcixcbiAgICAgICAgcGxheWVyOiBJUGxheWVyTW9kZWwsXG4gICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnRJZDogc3RyaW5nLFxuICAgICAgICBzdWNjZXNzVGV4dDogc3RyaW5nLFxuICAgICAgICBmYWlsZWRUZXh0OiBzdHJpbmdcbiAgICApe1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLmN1YmVDb3VudCA9IGN1YmVDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICAgICAgdGhpcy5mZWVkYmFja1RleHRFbGVtZW50SWQgPSBmZWVkYmFja1RleHRFbGVtZW50SWRcbiAgICAgICAgdGhpcy5zdWNjZXNzVGV4dCA9IHN1Y2Nlc3NUZXh0O1xuICAgICAgICB0aGlzLmZhaWxlZFRleHQgPSBmYWlsZWRUZXh0O1xuXG4gICAgfVxuICAgIGdldEN1YmVDb3VudCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmN1YmVDbGFzcytcIi5yZXdhcmRcIikubGVuZ3RoO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIlxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRNb2RlbCBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIHtcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHlDb25zdHJhaW50OiBib29sZWFuO1xuICAgIGV2ZW50OiBDdXN0b21FdmVudDxhbnk+O1xuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcbiAgICAgICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW4sXG4gICAgICAgIG9uRXZlbnRzOiBzdHJpbmdbXVxuICAgICl7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XG4gICAgfVxufSIsImltcG9ydCB7IElQbGF5ZXJNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllck1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBsYXllck1vZGVsIGltcGxlbWVudHMgSVBsYXllck1vZGVsIHtcbiAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZVVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVwZGF0ZVNlcnZpY2Uge1xuICAgIHVwZGF0ZShpZDogc3RyaW5nLCB2YWx1ZTphbnkpOiB2b2lkIHtcblxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIraWQpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwidGV4dFwiLCBcInZhbHVlXCIsIHZhbHVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCIsIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gUmVwb3NpdG9yaWVzXG5pbXBvcnQgeyBTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvU3RyaW5nUmVwb3NpdG9yeSc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL05hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBUaW1lclNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1RpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy91cGRhdGVTZXJ2aWNlJztcbmltcG9ydCB7IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1JhbmRvbUdlbmVyYXRvclNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZSc7XG5cbi8vTW9kZWxzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvTmF2aWdhdGVDb21wb25lbnRNb2RlbCc7XG5pbXBvcnQgeyBDdWJpa01vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvQ3ViaWtNb2RlbCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3ViaWtDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQ3ViaWtDb21wb25lbnQnO1xuXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQbGF5ZXJNb2RlbCB9IGZyb20gJy4vTW9kZWxzL1BsYXllck1vZGVsJztcblxuLy8gUmVwb3NpdG9yaWVzXG5sZXQgc3RyaW5nUmVwb3NpdG9yeSA9IG5ldyBTdHJpbmdSZXBvc2l0b3J5KCk7XG5cbi8vIFNlcnZpZXNcbmxldCBuYXZpZ2F0ZVNlcnZpY2UgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlKCk7XG5sZXQgdXBkYXRlU2VydmljZSA9IG5ldyBVcGRhdGVTZXJ2aWNlKCk7XG5sZXQgdGltZXJTZXJ2aWNlID0gbmV3IFRpbWVyU2VydmljZShcbiAgICBcInRpbWVyXCIsXG4gICAgXCJmZWVkYmFja1RleHRcIiwgXG4gICAgXCJHYW1lIE92ZXJcIiwgXG4gICAgdXBkYXRlU2VydmljZSk7XG5sZXQgc3RyaW5nU2VydmljZSA9IG5ldyBTdHJpbmdTZXJ2aWNlKHN0cmluZ1JlcG9zaXRvcnkpO1xubGV0IHJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSBuZXcgUmFuZG9tR2VuZXJhdG9yU2VydmljZShcbiAgICBzdHJpbmdTZXJ2aWNlKTtcblxuLy8gTW9kZWxzXG5sZXQgbmF2aWdhdGVDb21wb25lbnRNb2RlbCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsKFxuICAgIFwicGxheWVyXCIsIFxuICAgIGZhbHNlLCBcbiAgICBbXCJjbGlja1wiXVxuKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMCk7XG5cbmxldCBjdWJpa01vZGVsID0gbmV3IEN1YmlrTW9kZWwoXG4gICAgXCJjdWJlXCIsXG4gICAgXCJzY29yZVwiLFxuICAgIFwidGFyZ2V0XCIsXG4gICAgMCxcbiAgICBwbGF5ZXIsXG4gICAgXCJmZWVkYmFja1RleHRcIixcbiAgICBcIkxFVkVMIENPTVBMRVRFIVwiLFxuICAgIFwiWU9VIEZBSUxFRCFcIlxuKTtcbiAgICAgICAgIFxuLy9Db21wb25lbnRzXG5sZXQgbmF2aWdhdGVDb21wb25lbnQgPSBuZXcgTmF2aWdhdGVDb21wb25lbnQoXG4gICAgbmF2aWdhdGVDb21wb25lbnRNb2RlbCwgXG4gICAgbmF2aWdhdGVTZXJ2aWNlXG4pO1xuXG5sZXQgY3ViaWtDb21wb25lbnQgPSBuZXcgQ3ViaWtDb21wb25lbnQoXG4gICAgY3ViaWtNb2RlbCxcbiAgICB0aW1lclNlcnZpY2UsXG4gICAgdXBkYXRlU2VydmljZSxcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3ViaWtDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1JlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1JlcG9zaXRvcnkgaW1wbGVtZW50cyBJU3RyaW5nUmVwb3NpdG9yeSB7XG5cbiAgICBwdWJsaWMgQWxwaGFzOiBzdHJpbmc7XG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuQWxwaGFzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNzID0gXCIwMTIzNDU2Nzg5XCI7XG4gICAgICAgIHRoaXMuQ29uc3RvbmFudHMgPSBcIkJDREZHSEpLTE1OUFFSU1RWWFpXWVwiXG4gICAgICAgIHRoaXMuVm93ZWxzID0gXCJBRUlPVVwiO1xuICAgIH1cbn0iLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZSB7XG4gICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSkge1xuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgIH1cblxuICAgIEdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnN0cmluZ1NlcnZpY2UuVG9BcnJheShjcml0ZXJpb24pO1xuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gdGhpcy5HZW5lcmF0ZShhcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IG91dHB1dC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgR2VuZXJhdGUgPSAodGFyZ2V0OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0ICsgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0O1wiXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdTZXJ2aWNlIGltcGxlbWVudHMgSVN0cmluZ1NlcnZpY2Uge1xuICAgIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5O1xuICAgIEFscGhhczogc3RyaW5nO1xuICAgIE51bWVyaWNzOiBzdHJpbmc7XG4gICAgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBWb3dlbHM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5KSB7XG4gICAgICAgIHRoaXMuc3RyaW5nUmVwb3NpdG9yeSA9IHN0cmluZ1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuQWxwaGFzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkFscGhhcztcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5OdW1lcmljcztcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuVm93ZWxzO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBDb25jYXQoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmRlZmluZWQgUGFyYW1ldGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLFxuICAgICAgICBpblRoaXM6IHN0cmluZyxcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc2VhcmNoUmVnZXggPSBuZXcgUmVnRXhwKGZpbmRUaGlzLCBcImdcIiksXG4gICAgICAgICAgICByZXBsYWNlUmVnZXggPSBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGZpbmRUaGlzICsgXCJcXFxcYlwiKSxcbiAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKHJlcGxhY2VSZWdleCwgcmVwbGFjZVdpdGhUaGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsIlwidXNlIHN0cmljdDtcIlxuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVRpbWVyU2VydmljZSc7XG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2UnO1xuZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElUaW1lclNlcnZpY2Uge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgY291bnRlcjogbnVtYmVyO1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIGNvbXBsZXRpb25UYXJnZXRJZDogc3RyaW5nO1xuICAgIGNvbXBsZXRpb25NZXNzYWdlOiBzdHJpbmc7XG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XG4gICAgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdGFyZ2V0OiBzdHJpbmcsXG4gICAgICAgIGNvbXBsZXRpb25UYXJnZXRJZDogc3RyaW5nLFxuICAgICAgICBjb21wbGV0aW9uTWVzc2FnZTogc3RyaW5nLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uVGFyZ2V0SWQgPSBjb21wbGV0aW9uVGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGlvbk1lc3NhZ2UgPSBjb21wbGV0aW9uTWVzc2FnZTtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlID0gdXBkYXRlU2VydmljZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgfVxuICAgIFN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBsZXQgaW50ZXJuYWxDb3VudGVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZS51cGRhdGUodGhpcy50YXJnZXQsIGludGVybmFsQ291bnRlcik7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBpbnRlcm5hbENvdW50ZXI7XG4gICAgICAgICAgICBpbnRlcm5hbENvdW50ZXItLTtcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbENvdW50ZXIgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJ2aWNlLnVwZGF0ZSh0aGlzLmNvbXBsZXRpb25UYXJnZXRJZCwgdGhpcy5jb21wbGV0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG59Il19
