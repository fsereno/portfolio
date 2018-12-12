(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubikComponent = /** @class */ (function () {
    function CubikComponent(object) {
        this.object = object;
    }
    CubikComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function () {
                var cubes = document.getElementsByClassName("cube");
                self.object.updateService.update(self.object.scoreId, self.object.player.score);
                self.object.updateService.update(self.object.targetId, self.object.getCubeCount());
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
                    self.object.updateService.update(self.object.scoreId, self.object.player.score);
                });
                self.object.timerService.Start();
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
    function CubikComponentModel(name, cubeClass, scoreId, targetId, cubeCount, player, timerService, updateService) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass + ".reward").length; };
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player;
        this.timerService = timerService;
        this.updateService = updateService;
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
var Player = /** @class */ (function () {
    function Player(name, score) {
        var _this = this;
        this.incrementUserScore = function () { return _this.score++; };
        this.decreaseuUerScore = function () { return _this.score--; };
        this.name = name;
        this.score = score;
    }
    return Player;
}());
exports.Player = Player;

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
var Player_1 = require("./Models/Player");
// Servies
var navigateService = new NavigateComponentService_1.NavigateComponentService();
var updateService = new updateService_1.UpdateService();
var timerService = new TimerService_1.TimerService(10, "timer", updateService);
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("navigate-component", "player", false, ["click"]);
var player = new Player_1.Player("Joe Bloggs", 0);
var cubikComponentModel = new CubikComponentModel_1.CubikComponentModel("cubik-component", "cube", "score", "target", 0, player, timerService, updateService);
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikComponentModel);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"../../typeScript/Services/TimerService":10,"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikComponentModel":4,"./Models/NavigateComponentModel":5,"./Models/Player":6,"./Services/NavigateComponentService":7,"./Services/updateService":8}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyLnRzIiwiU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlLnRzIiwiU2VydmljZXMvdXBkYXRlU2VydmljZS50cyIsImFwcC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUlJLHdCQUNJLE1BQVM7UUFFVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFFO2dCQUVGLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUVuRixL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QixDQUN6QyxzQkFBc0IsRUFDdEIsZUFBZSxDQUNsQixDQUFDO0FBRUYsSUFBSSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUNuQyxtQkFBbUIsQ0FDdEIsQ0FBQztBQUVGLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQ3JDLGlCQUFpQixFQUNqQixjQUFjLENBQ2IsQ0FBQztBQUNOLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUN4RHZCO0lBSUksc0JBRUksUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGFBQTZCO1FBRzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFYRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUN2QixRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtZQUM5QyxPQUFPLEVBQUUsQ0FBQztZQUVWLElBQUcsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDWixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDOUI7WUFBQSxDQUFDO1FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxtQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50PFQgZXh0ZW5kcyBJQ3ViaWtDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFQ+IHtcbiAgICBcbiAgICBvYmplY3Q6IFQ7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG9iamVjdDogVCxcbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGN1YmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImN1YmVcIik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC51cGRhdGVTZXJ2aWNlLnVwZGF0ZShzZWxmLm9iamVjdC5zY29yZUlkLCBzZWxmLm9iamVjdC5wbGF5ZXIuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LnVwZGF0ZVNlcnZpY2UudXBkYXRlKHNlbGYub2JqZWN0LnRhcmdldElkLCBzZWxmLm9iamVjdC5nZXRDdWJlQ291bnQoKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxjdWJlcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY3ViZXNbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdWJlXCIraSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3ViZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGU6Q3VzdG9tRXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdWJlID0gZS5zcmNFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpID8gIHNlbGYub2JqZWN0LnBsYXllci5kZWNyZWFzZXVVZXJTY29yZSgpIDogc2VsZi5vYmplY3QucGxheWVyLmluY3JlbWVudFVzZXJTY29yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnNldEF0dHJpYnV0ZShcInZpc2libGVcIiwgXCJmYWxzZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitjdWJlLmdldEF0dHJpYnV0ZShcImlkXCIpKS5lbWl0KFwiY29sbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb2xsZWN0ZWRcIiwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vYmplY3QudXBkYXRlU2VydmljZS51cGRhdGUoc2VsZi5vYmplY3Quc2NvcmVJZCwgc2VsZi5vYmplY3QucGxheWVyLnNjb3JlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LnRpbWVyU2VydmljZS5TdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnQ8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4ge1xuICAgIFxuICAgIG9iamVjdDogVDtcbiAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgb2JqZWN0OiBULFxuICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD5cbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KHNlbGYub2JqZWN0Lm5hbWUsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0Lm9uRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5ldmVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlU2VydmljZS5pbml0KHNlbGYub2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsJztcbmltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD47XG4gICAgcHJpdmF0ZSBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ8SU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+LFxuICAgICAgICBjdWJpa0NvbXBvbmVudDogSUNvbXBvbmVudDxJQ3ViaWtDb21wb25lbnRNb2RlbD5cbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gbmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQgPSBjdWJpa0NvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3ViaWtDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDdWJpa0NvbXBvbmVudE1vZGVsXCJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXInO1xuaW1wb3J0IHsgSVRpbWVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZVwiO1xuZXhwb3J0IGNsYXNzIEN1YmlrQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJQ3ViaWtDb21wb25lbnRNb2RlbCB7XG4gICAgICAgIFxuICAgIG5hbWU6IHN0cmluZztcbiAgICBjdWJlQ2xhc3M6IHN0cmluZztcbiAgICBzY29yZUlkOiBzdHJpbmc7XG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICBjdWJlQ291bnQ6IG51bWJlcjtcbiAgICBwbGF5ZXI6IElQbGF5ZXI7XG4gICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgY3ViZUNsYXNzOiBzdHJpbmcsXG4gICAgICAgIHNjb3JlSWQ6IHN0cmluZyxcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZyxcbiAgICAgICAgY3ViZUNvdW50OiBudW1iZXIsXG4gICAgICAgIHBsYXllcjogSVBsYXllcixcbiAgICAgICAgdGltZXJTZXJ2aWNlOiBJVGltZXJTZXJ2aWNlLFxuICAgICAgICB1cGRhdGVTZXJ2aWNlOiBJVXBkYXRlU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY3ViZUNsYXNzID0gY3ViZUNsYXNzO1xuICAgICAgICB0aGlzLnNjb3JlSWQgPSBzY29yZUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuY3ViZUNvdW50ID0gY3ViZUNvdW50O1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSB0aW1lclNlcnZpY2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2VydmljZSA9IHVwZGF0ZVNlcnZpY2U7XG4gICAgfVxuICAgIGdldEN1YmVDb3VudCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmN1YmVDbGFzcytcIi5yZXdhcmRcIikubGVuZ3RoO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIlxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRNb2RlbCBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2FtZXJhSWQ6IHN0cmluZztcbiAgICB5Q29uc3RyYWludDogYm9vbGVhbjtcbiAgICBldmVudDogQ3VzdG9tRXZlbnQ8YW55PjtcbiAgICBvbkV2ZW50czogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBjYW1lcmFJZDogc3RyaW5nLFxuICAgICAgICB5Q29uc3RyYWludDogYm9vbGVhbixcbiAgICAgICAgb25FdmVudHM6IHN0cmluZ1tdXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYW1lcmFJZCA9IGNhbWVyYUlkO1xuICAgICAgICB0aGlzLnlDb25zdHJhaW50ID0geUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub25FdmVudHMgPSBvbkV2ZW50cztcbiAgICB9XG59IiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBJUGxheWVyIHtcbiAgICBcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBzY29yZTogbnVtYmVyXG4gICAgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIH1cblxuICAgIGluY3JlbWVudFVzZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZSsrO1xuICAgIGRlY3JlYXNldVVlclNjb3JlID0gKCk6IG51bWJlciA9PiB0aGlzLnNjb3JlLS07XG59IiwiaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTmF2aWdhdGVDb21wb25lbnRNb2RlbFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VCBleHRlbmRzIElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2U8VD4ge1xuICAgIHB1YmxpYyBpbml0KG9iamVjdDogVCkge1xuICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iamVjdC5jYW1lcmFJZCk7XG4gICAgICAgIGlmIChjYW1lcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBvYmplY3QuZXZlbnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCwgb2Zmc2V0ID0gMC43MCwgeCA9IGNvb3Jkcy54LCB5ID0gIW9iamVjdC55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLCB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFwiYW5pbWF0aW9uXCIsIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHogKyBcIjtcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVXBkYXRlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVVwZGF0ZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBJVXBkYXRlU2VydmljZSB7XG4gICAgdXBkYXRlKGlkOiBzdHJpbmcsIHZhbHVlOmFueSk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2lkKS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgfVxufSIsIlxuLy8gU2VydmljZXNcbmltcG9ydCB7IE5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlJztcbmltcG9ydCB7IFRpbWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IFVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VzL3VwZGF0ZVNlcnZpY2UnO1xuXG4vL01vZGVsc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL0N1YmlrQ29tcG9uZW50TW9kZWwnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29tcG9uZW50JztcblxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9Nb2RlbHMvUGxheWVyJztcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcbmxldCB1cGRhdGVTZXJ2aWNlID0gbmV3IFVwZGF0ZVNlcnZpY2UoKTtcbmxldCB0aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKDEwLCBcInRpbWVyXCIsIHVwZGF0ZVNlcnZpY2UpO1xuXG4vLyBNb2RlbHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsID0gbmV3IE5hdmlnYXRlQ29tcG9uZW50TW9kZWwoXG4gICAgXCJuYXZpZ2F0ZS1jb21wb25lbnRcIixcbiAgICBcInBsYXllclwiLCBcbiAgICBmYWxzZSwgXG4gICAgW1wiY2xpY2tcIl1cbik7XG5cbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiSm9lIEJsb2dnc1wiLCAwKTtcblxubGV0IGN1YmlrQ29tcG9uZW50TW9kZWwgPSBuZXcgQ3ViaWtDb21wb25lbnRNb2RlbChcbiAgICBcImN1YmlrLWNvbXBvbmVudFwiLFxuICAgIFwiY3ViZVwiLFxuICAgIFwic2NvcmVcIixcbiAgICBcInRhcmdldFwiLFxuICAgIDAsXG4gICAgcGxheWVyLFxuICAgIHRpbWVyU2VydmljZSxcbiAgICB1cGRhdGVTZXJ2aWNlXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbXBvbmVudCA9IG5ldyBDdWJpa0NvbXBvbmVudChcbiAgICBjdWJpa0NvbXBvbmVudE1vZGVsXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3ViaWtDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGltZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGltZXJTZXJ2aWNlJztcbmltcG9ydCB7IElVcGRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVXBkYXRlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lclNlcnZpY2UgaW1wbGVtZW50cyBJVGltZXJTZXJ2aWNlIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIHVwZGF0ZVNlcnZpY2U6IElVcGRhdGVTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IHN0cmluZyxcbiAgICAgICAgdXBkYXRlU2VydmljZTogSVVwZGF0ZVNlcnZpY2VcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2UgPSB1cGRhdGVTZXJ2aWNlO1xuICAgIH1cbiAgICBTdGFydCgpOiB2b2lkICB7XG5cbiAgICAgICAgbGV0IGNvdW50ZXIgPSB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZS51cGRhdGUodGhpcy50YXJnZXQsY291bnRlcilcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihjb3VudGVyIDwgMCApe1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lIGlzIHVwIScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0iXX0=
