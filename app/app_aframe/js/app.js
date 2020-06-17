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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa01vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyTW9kZWwudHMiLCJTZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UudHMiLCJTZXJ2aWNlcy91cGRhdGVTZXJ2aWNlLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvU3RyaW5nUmVwb3NpdG9yeS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZS50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNPQTtJQU9JLHdCQUNJLE1BQVMsRUFDVCxZQUEyQixFQUMzQixhQUE2QixFQUM3QixzQkFBK0M7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3pELENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUV4QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxN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QUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQztZQUNsQixJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDOUU7WUFBQSxDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELDJCQUFJLEdBQUo7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxtQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XHJcbmltcG9ydCB7IElDdWJpa0NvbGxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29sbGVjdGFibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRpbWVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+LCBJQ3ViaWtDb2xsZWN0YWJsZUNvbXBvbmVudCB7XHJcblxyXG4gICAgb2JqZWN0OiBUO1xyXG4gICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlO1xyXG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XHJcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBvYmplY3Q6IFQsXHJcbiAgICAgICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlLFxyXG4gICAgICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlLFxyXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2U6IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMudGltZXJTZXJ2aWNlID0gdGltZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gcmFuZG9tR2VuZXJhdG9yU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwiY3ViaWstY29tcG9uZW50XCIsIHtcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3QudGFyZ2V0SWQsIHNlbGYub2JqZWN0LmdldEN1YmVDb3VudCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGVDb2xvdXJzID0gW1wiZ3JlZW5cIiwgXCJyZWRcIiwgXCJibHVlXCIsIFwieWVsbG93XCIsIFwicHVycGxlXCIsIFwib3JhbmdlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1YmVDbGlja0hhbmRsZXIgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZS5zcmNFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5vYmplY3QuZmVlZGJhY2tUZXh0RWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmV3YXJkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LnBsYXllci5pbmNyZW1lbnRVc2VyU2NvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSA9PT0gc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYudGltZXJTZXJ2aWNlLmNvdW50ZXIgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LmZlZWRiYWNrVGV4dEVsZW1lbnRJZCwgc2VsZi5vYmplY3Quc3VjY2Vzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQ6IGFueSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjZW5lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlID0gZXZ0LnNyY0VsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduTGltaXQgPSBOdW1iZXIoY3ViZS5nZXRBdHRyaWJ1dGVOb2RlKFwiZGF0YS1zcGF3bi1saW1pdFwiKS50ZXh0Q29udGVudCkgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVZhbHVlID0gTnVtYmVyKGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcImRhdGEtdGltZS12YWx1ZVwiKS50ZXh0Q29udGVudCkgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3B3YW5BbW91bnQgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGUoc3Bhd25MaW1pdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhcnRcIikpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3ViZS5zZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIsIFwiZmFsc2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgc3B3YW5BbW91bnQ7IGErKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWJveCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGN1YmUuZ2V0QXR0cmlidXRlTm9kZShcInBvc2l0aW9uXCIpLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbkFycmF5ID0gY3VycmVudFBvc2l0aW9uLnNwbGl0KFwiIFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3VySW5kZXggPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGUoYXZhaWxhYmxlQ29sb3Vycy5sZW5ndGgpIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDxjdWJlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5zZXRBdHRyaWJ1dGUoY3ViZS5hdHRyaWJ1dGVzW2ldLm5vZGVOYW1lLCBjdWJlLmF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb25BcnJheS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2ZmU2V0ID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlKDE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbis9b2ZmU2V0K1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIiwgXCJzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jbGFzc0xpc3QuYWRkKFwicmV3YXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIGF2YWlsYWJsZUNvbG91cnNbY29sb3VySW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEN1c3RvbUV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVDbGlja0hhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hcHBlbmRDaGlsZChlbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclNlcnZpY2UuZHVyYXRpb24gPSBzZWxmLnRpbWVyU2VydmljZS5kdXJhdGlvbiArIHRpbWVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJTZXJ2aWNlLlN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XHJcbiAgICBcclxuICAgIG9iamVjdDogVDtcclxuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBvYmplY3Q6IFQsXHJcbiAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+XHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJuYXZpZ2F0ZS1jb21wb25lbnRcIiwge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QuZXZlbnQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlU2VydmljZS5pbml0KHNlbGYub2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xyXG5pbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcclxuXHJcbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcclxuICAgIHByaXZhdGUgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXHJcbiAgICAgICAgY3ViaWtDb21wb25lbnQ6IElDb21wb25lbnQ8SUN1YmlrTW9kZWw+XHJcbiAgICApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudCA9IG5hdmlnYXRlQ29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ3ViaWtNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa01vZGVsXCJcclxuaW1wb3J0IHsgSVBsYXllck1vZGVsIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JUGxheWVyTW9kZWwnO1xyXG5leHBvcnQgY2xhc3MgQ3ViaWtNb2RlbCBpbXBsZW1lbnRzIElDdWJpa01vZGVsIHtcclxuICAgIGN1YmVDbGFzczogc3RyaW5nO1xyXG4gICAgc2NvcmVJZDogc3RyaW5nO1xyXG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcclxuICAgIGN1YmVDb3VudDogbnVtYmVyO1xyXG4gICAgcGxheWVyOiBJUGxheWVyTW9kZWw7XHJcbiAgICBmZWVkYmFja1RleHRFbGVtZW50SWQ6IHN0cmluZztcclxuICAgIHN1Y2Nlc3NUZXh0OiBzdHJpbmc7XHJcbiAgICBmYWlsZWRUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIGN1YmVDbGFzczogc3RyaW5nLFxyXG4gICAgICAgIHNjb3JlSWQ6IHN0cmluZyxcclxuICAgICAgICB0YXJnZXRJZDogc3RyaW5nLFxyXG4gICAgICAgIGN1YmVDb3VudDogbnVtYmVyLFxyXG4gICAgICAgIHBsYXllcjogSVBsYXllck1vZGVsLFxyXG4gICAgICAgIGZlZWRiYWNrVGV4dEVsZW1lbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgZmFpbGVkVGV4dDogc3RyaW5nXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuY3ViZUNsYXNzID0gY3ViZUNsYXNzO1xyXG4gICAgICAgIHRoaXMuc2NvcmVJZCA9IHNjb3JlSWQ7XHJcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xyXG4gICAgICAgIHRoaXMuY3ViZUNvdW50ID0gY3ViZUNvdW50O1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXHJcbiAgICAgICAgdGhpcy5mZWVkYmFja1RleHRFbGVtZW50SWQgPSBmZWVkYmFja1RleHRFbGVtZW50SWRcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NUZXh0ID0gc3VjY2Vzc1RleHQ7XHJcbiAgICAgICAgdGhpcy5mYWlsZWRUZXh0ID0gZmFpbGVkVGV4dDtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdWJlQ291bnQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jdWJlQ2xhc3MrXCIucmV3YXJkXCIpLmxlbmd0aDtcclxufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB7XHJcbiAgICBjYW1lcmFJZDogc3RyaW5nO1xyXG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XHJcbiAgICBldmVudDogQ3VzdG9tRXZlbnQ8YW55PjtcclxuICAgIG9uRXZlbnRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcclxuICAgICAgICB5Q29uc3RyYWludDogYm9vbGVhbixcclxuICAgICAgICBvbkV2ZW50czogc3RyaW5nW11cclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFJZCA9IGNhbWVyYUlkO1xyXG4gICAgICAgIHRoaXMueUNvbnN0cmFpbnQgPSB5Q29uc3RyYWludDtcclxuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJUGxheWVyTW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXJNb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyTW9kZWwgaW1wbGVtZW50cyBJUGxheWVyTW9kZWwge1xyXG4gICAgXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHNjb3JlOiBudW1iZXJcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50VXNlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlKys7XHJcbiAgICBkZWNyZWFzZVVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xyXG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xyXG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD4ge1xyXG4gICAgcHVibGljIGluaXQob2JqZWN0OiBUKSB7XHJcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xyXG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IG9iamVjdC5ldmVudC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LCBvZmZzZXQgPSAwLjcwLCB4ID0gY29vcmRzLngsIHkgPSAhb2JqZWN0LnlDb25zdHJhaW50ID8gY29vcmRzLnkgOiAwLjAsIHogPSBjb29yZHMueiArIG9mZnNldDtcclxuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xyXG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XHJcbiAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtbmF2aWdhdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJVXBkYXRlU2VydmljZSB7XHJcbiAgICB1cGRhdGUoaWQ6IHN0cmluZywgdmFsdWU6YW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitpZCk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwidGV4dFwiLCBcInZhbHVlXCIsIHZhbHVlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2aXNpYmxlXCIpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiLCB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gUmVwb3NpdG9yaWVzXHJcbmltcG9ydCB7IFN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5JztcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcclxuaW1wb3J0IHsgVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9UaW1lclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy91cGRhdGVTZXJ2aWNlJztcclxuaW1wb3J0IHsgUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZSc7XHJcbmltcG9ydCB7IFN0cmluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2UnO1xyXG5cclxuLy9Nb2RlbHNcclxuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xyXG5pbXBvcnQgeyBDdWJpa01vZGVsIH0gZnJvbSAnLi9Nb2RlbHMvQ3ViaWtNb2RlbCc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdWJpa0NvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdWJpa0NvbXBvbmVudCc7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tICcuL01vZGVscy9QbGF5ZXJNb2RlbCc7XHJcblxyXG4vLyBSZXBvc2l0b3JpZXNcclxubGV0IHN0cmluZ1JlcG9zaXRvcnkgPSBuZXcgU3RyaW5nUmVwb3NpdG9yeSgpO1xyXG5cclxuLy8gU2Vydmllc1xyXG5sZXQgbmF2aWdhdGVTZXJ2aWNlID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSgpO1xyXG5sZXQgdXBkYXRlU2VydmljZSA9IG5ldyBVcGRhdGVTZXJ2aWNlKCk7XHJcbmxldCB0aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKFxyXG4gICAgXCJ0aW1lclwiLFxyXG4gICAgXCJmZWVkYmFja1RleHRcIiwgXHJcbiAgICBcIkdhbWUgT3ZlclwiLCBcclxuICAgIHVwZGF0ZVNlcnZpY2UpO1xyXG5sZXQgc3RyaW5nU2VydmljZSA9IG5ldyBTdHJpbmdTZXJ2aWNlKHN0cmluZ1JlcG9zaXRvcnkpO1xyXG5sZXQgcmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IG5ldyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlKFxyXG4gICAgc3RyaW5nU2VydmljZSk7XHJcblxyXG4vLyBNb2RlbHNcclxubGV0IG5hdmlnYXRlQ29tcG9uZW50TW9kZWwgPSBuZXcgTmF2aWdhdGVDb21wb25lbnRNb2RlbChcclxuICAgIFwicGxheWVyXCIsIFxyXG4gICAgZmFsc2UsIFxyXG4gICAgW1wiY2xpY2tcIl1cclxuKTtcclxuXHJcbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyTW9kZWwoXCJKb2UgQmxvZ2dzXCIsIDApO1xyXG5cclxubGV0IGN1YmlrTW9kZWwgPSBuZXcgQ3ViaWtNb2RlbChcclxuICAgIFwiY3ViZVwiLFxyXG4gICAgXCJzY29yZVwiLFxyXG4gICAgXCJ0YXJnZXRcIixcclxuICAgIDAsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBcImZlZWRiYWNrVGV4dFwiLFxyXG4gICAgXCJMRVZFTCBDT01QTEVURSFcIixcclxuICAgIFwiWU9VIEZBSUxFRCFcIlxyXG4pO1xyXG4gICAgICAgICBcclxuLy9Db21wb25lbnRzXHJcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcclxuICAgIG5hdmlnYXRlQ29tcG9uZW50TW9kZWwsIFxyXG4gICAgbmF2aWdhdGVTZXJ2aWNlXHJcbik7XHJcblxyXG5sZXQgY3ViaWtDb21wb25lbnQgPSBuZXcgQ3ViaWtDb21wb25lbnQoXHJcbiAgICBjdWJpa01vZGVsLFxyXG4gICAgdGltZXJTZXJ2aWNlLFxyXG4gICAgdXBkYXRlU2VydmljZSxcclxuICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2VcclxuKTtcclxuXHJcbi8vIENvbnRyb2xsZXJzXHJcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxyXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXHJcbiAgICBjdWJpa0NvbXBvbmVudFxyXG4gICAgKTtcclxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcclxuaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1JlcG9zaXRvcnkgaW1wbGVtZW50cyBJU3RyaW5nUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgcHVibGljIEFscGhhczogc3RyaW5nO1xyXG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkFscGhhcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuICAgICAgICB0aGlzLk51bWVyaWNzID0gXCIwMTIzNDU2Nzg5XCI7XHJcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcclxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdDtcIlxyXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2Uge1xyXG4gICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnN0cmluZ1NlcnZpY2UuVG9BcnJheShjcml0ZXJpb24pO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IHRoaXMuR2VuZXJhdGUoYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGUgPSAodGFyZ2V0OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0ICsgMSk7XHJcbn0iLCJcInVzZSBzdHJpY3Q7XCJcclxuaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nU2VydmljZSBpbXBsZW1lbnRzIElTdHJpbmdTZXJ2aWNlIHtcclxuICAgIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5O1xyXG4gICAgQWxwaGFzOiBzdHJpbmc7XHJcbiAgICBOdW1lcmljczogc3RyaW5nO1xyXG4gICAgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIFZvd2Vsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdSZXBvc2l0b3J5ID0gc3RyaW5nUmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLkFscGhhcyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5BbHBoYXM7XHJcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5OdW1lcmljcztcclxuICAgICAgICB0aGlzLlZvd2VscyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Wb3dlbHM7XHJcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Db25zdG9uYW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ29uY2F0KGE6IHN0cmluZywgYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBQYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxyXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsXHJcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcsXHJcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcclxuICAgICAgICAgICAgcmVwbGFjZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBmaW5kVGhpcyArIFwiXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKHJlcGxhY2VSZWdleCwgcmVwbGFjZVdpdGhUaGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluVGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVG9BcnJheShpbnB1dDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlucHV0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdDtcIlxyXG5pbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgSVVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lVcGRhdGVTZXJ2aWNlJztcclxuZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSBpbXBsZW1lbnRzIElUaW1lclNlcnZpY2Uge1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIGNvdW50ZXI6IG51bWJlcjtcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmc7XHJcbiAgICBjb21wbGV0aW9uTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2U7XHJcbiAgICBpbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGFyZ2V0OiBzdHJpbmcsXHJcbiAgICAgICAgY29tcGxldGlvblRhcmdldElkOiBzdHJpbmcsXHJcbiAgICAgICAgY29tcGxldGlvbk1lc3NhZ2U6IHN0cmluZyxcclxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uVGFyZ2V0SWQgPSBjb21wbGV0aW9uVGFyZ2V0SWQ7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uTWVzc2FnZSA9IGNvbXBsZXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICB9XHJcbiAgICBTdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW50ZXJuYWxDb3VudGVyID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMudGFyZ2V0LCBpbnRlcm5hbENvdW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBpbnRlcm5hbENvdW50ZXI7XHJcbiAgICAgICAgICAgIGludGVybmFsQ291bnRlci0tO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxDb3VudGVyIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UudXBkYXRlKHRoaXMuY29tcGxldGlvblRhcmdldElkLCB0aGlzLmNvbXBsZXRpb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIFN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxufSJdfQ==
