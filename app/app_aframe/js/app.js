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
                self.object.populateScoreOutput();
                self.object.populateTargetOutput();
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
                    self.object.populateScoreOutput();
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
    function CubikComponentModel(name, cubeClass, scoreId, targetId, timeId, timeRemaining, cubeCount, player) {
        var _this = this;
        this.getCubeCount = function () { return document.querySelectorAll("." + _this.cubeClass + ".reward").length; };
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.timeId = timeId;
        this.timeRemaining = timeRemaining;
        this.cubeCount = cubeCount;
        this.player = player;
    }
    CubikComponentModel.prototype.populateScoreOutput = function () {
        document.querySelector("#" + this.scoreId).setAttribute("text", "value", this.player.score);
    };
    ;
    CubikComponentModel.prototype.populateTargetOutput = function () {
        document.querySelector("#" + this.targetId).setAttribute("text", "value", this.getCubeCount());
    };
    ;
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
// Services
var NavigateComponentService_1 = require("./Services/NavigateComponentService");
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
// Models
var navigateComponentModel = new NavigateComponentModel_1.NavigateComponentModel("navigate-component", "player", false, ["click"]);
var player = new Player_1.Player("Joe Bloggs", 0);
var cubikComponentModel = new CubikComponentModel_1.CubikComponentModel("cubik-component", "cube", "score", "target", "time", new Date(), 0, player);
//Components
var navigateComponent = new NavigateComponent_1.NavigateComponent(navigateComponentModel, navigateService);
var cubikComponent = new CubikComponent_1.CubikComponent(cubikComponentModel);
// Controllers
var indexController = new IndexController_1.IndexController(navigateComponent, cubikComponent);
indexController.init();

},{"./Components/CubikComponent":1,"./Components/NavigateComponent":2,"./Controllers/IndexController":3,"./Models/CubikComponentModel":4,"./Models/NavigateComponentModel":5,"./Models/Player":6,"./Services/NavigateComponentService":7}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1YmlrQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudC50cyIsIkNvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIk1vZGVscy9DdWJpa0NvbXBvbmVudE1vZGVsLnRzIiwiTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwudHMiLCJNb2RlbHMvUGxheWVyLnRzIiwiU2VydmljZXMvTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQTtJQUlJLHdCQUNJLE1BQVM7UUFFVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxFQUFFO2dCQUVGLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBRW5DLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO29CQUU3QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXRDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBQyxDQUFhO3dCQUU1QyxJ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LFdBQVc7QUFDWCxnRkFBK0U7QUFFL0UsUUFBUTtBQUNSLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFFbkUsYUFBYTtBQUNiLG9FQUFtRTtBQUNuRSw4REFBNkQ7QUFFN0QsY0FBYztBQUNkLGlFQUFnRTtBQUNoRSwwQ0FBeUM7QUFFekMsVUFBVTtBQUNWLElBQUksZUFBZSxHQUFHLElBQUksbURBQXdCLEVBQUUsQ0FBQztBQUVyRCxTQUFTO0FBQ1QsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixDQUNuRCxvQkFBb0IsRUFDcEIsUUFBUSxFQUNSLEtBQUssRUFDTCxDQUFDLE9BQU8sQ0FBQyxDQUNaLENBQUM7QUFFRixJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFekMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixDQUM3QyxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksSUFBSSxFQUFFLEVBQ1YsQ0FBQyxFQUNELE1BQU0sQ0FDVCxDQUFDO0FBRUYsWUFBWTtBQUNaLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FDekMsc0JBQXNCLEVBQ3RCLGVBQWUsQ0FDbEIsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FDbkMsbUJBQW1CLENBQ3RCLENBQUM7QUFFRixjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUNyQyxpQkFBaUIsRUFDakIsY0FBYyxDQUNiLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgQ3ViaWtDb21wb25lbnQ8VCBleHRlbmRzIElDdWJpa0NvbXBvbmVudE1vZGVsPiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VD4ge1xuICAgIFxuICAgIG9iamVjdDogVDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFRcbiAgICApe1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGN1YmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImN1YmVcIik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5wb3B1bGF0ZVNjb3JlT3V0cHV0KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3QucG9wdWxhdGVUYXJnZXRPdXRwdXQoKTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGN1YmVzLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgICAgICAgICBjdWJlc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1YmVcIitpKTtcblxuICAgICAgICAgICAgICAgICAgICBjdWJlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZTpDdXN0b21FdmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXJyb3JcIikgPyAgc2VsZi5vYmplY3QucGxheWVyLmRlY3JlYXNldVVlclNjb3JlKCkgOiBzZWxmLm9iamVjdC5wbGF5ZXIuaW5jcmVtZW50VXNlclNjb3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUuc2V0QXR0cmlidXRlKFwidmlzaWJsZVwiLCBcImZhbHNlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2N1YmUuZ2V0QXR0cmlidXRlKFwiaWRcIikpLmVtaXQoXCJjb2xsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvbGxlY3RlZFwiLCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9iamVjdC5wb3B1bGF0ZVNjb3JlT3V0cHV0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSU5hdmlnYXRlQ29tcG9uZW50TW9kZWw+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUPiB7XG4gICAgXG4gICAgb2JqZWN0OiBUO1xuICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBvYmplY3Q6IFQsXG4gICAgICAgIG5hdmlnYXRlU2VydmljZTogSU5hdmlnYXRlQ29tcG9uZW50U2VydmljZTxUPlxuICAgICl7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoc2VsZi5vYmplY3QubmFtZSwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vYmplY3Qub25FdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JqZWN0LmV2ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGVTZXJ2aWNlLmluaXQoc2VsZi5vYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgSUN1YmlrQ29tcG9uZW50TW9kZWwgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ3ViaWtDb21wb25lbnRNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50PElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsPjtcbiAgICBwcml2YXRlIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDxJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4sXG4gICAgICAgIGN1YmlrQ29tcG9uZW50OiBJQ29tcG9uZW50PElDdWJpa0NvbXBvbmVudE1vZGVsPlxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBuYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudCA9IGN1YmlrQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdWJpa0NvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElDdWJpa0NvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUN1YmlrQ29tcG9uZW50TW9kZWxcIlxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVBsYXllcic7XG5leHBvcnQgY2xhc3MgQ3ViaWtDb21wb25lbnRNb2RlbCBpbXBsZW1lbnRzIElDdWJpa0NvbXBvbmVudE1vZGVsIHtcbiAgICAgICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGN1YmVDbGFzczogc3RyaW5nO1xuICAgIHNjb3JlSWQ6IHN0cmluZztcbiAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIHRpbWVJZDogc3RyaW5nO1xuICAgIHRpbWVSZW1haW5pbmc6IERhdGU7XG4gICAgY3ViZUNvdW50OiBudW1iZXI7XG4gICAgcGxheWVyOiBJUGxheWVyO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgY3ViZUNsYXNzOiBzdHJpbmcsXG4gICAgICAgIHNjb3JlSWQ6IHN0cmluZyxcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZyxcbiAgICAgICAgdGltZUlkOiBzdHJpbmcsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IERhdGUsXG4gICAgICAgIGN1YmVDb3VudDogbnVtYmVyLFxuICAgICAgICBwbGF5ZXI6IElQbGF5ZXJcbiAgICApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmN1YmVDbGFzcyA9IGN1YmVDbGFzcztcbiAgICAgICAgdGhpcy5zY29yZUlkID0gc2NvcmVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLnRpbWVJZCA9IHRpbWVJZDtcbiAgICAgICAgdGhpcy50aW1lUmVtYWluaW5nID0gdGltZVJlbWFpbmluZztcbiAgICAgICAgdGhpcy5jdWJlQ291bnQgPSBjdWJlQ291bnQ7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIH1cblxuICAgIGdldEN1YmVDb3VudCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLmN1YmVDbGFzcytcIi5yZXdhcmRcIikubGVuZ3RoO1xuICAgIHBvcHVsYXRlU2NvcmVPdXRwdXQoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrdGhpcy5zY29yZUlkKS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInRleHRcIiwgXCJ2YWx1ZVwiLCB0aGlzLnBsYXllci5zY29yZVxuICAgICAgICApO1xuICAgIH07XG4gICAgcG9wdWxhdGVUYXJnZXRPdXRwdXQoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrdGhpcy50YXJnZXRJZCkuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgdGhpcy5nZXRDdWJlQ291bnQoKVxuICAgICAgICAgICk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsXCJcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQ29tcG9uZW50TW9kZWwgaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNhbWVyYUlkOiBzdHJpbmc7XG4gICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT47XG4gICAgb25FdmVudHM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgY2FtZXJhSWQ6IHN0cmluZyxcbiAgICAgICAgeUNvbnN0cmFpbnQ6IGJvb2xlYW4sXG4gICAgICAgIG9uRXZlbnRzOiBzdHJpbmdbXVxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9uRXZlbnRzID0gb25FdmVudHM7XG4gICAgfVxufSIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lQbGF5ZXInO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XG4gICAgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc2NvcmU6IG51bWJlclxuICAgICl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRVc2VyU2NvcmUgPSAoKTogbnVtYmVyID0+IHRoaXMuc2NvcmUrKztcbiAgICBkZWNyZWFzZXVVZXJTY29yZSA9ICgpOiBudW1iZXIgPT4gdGhpcy5zY29yZS0tO1xufSIsImltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU5hdmlnYXRlQ29tcG9uZW50TW9kZWxcIjtcbmltcG9ydCB7IElOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBJTmF2aWdhdGVDb21wb25lbnRNb2RlbD4gaW1wbGVtZW50cyBJTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlPFQ+IHtcbiAgICBwdWJsaWMgaW5pdChvYmplY3Q6IFQpIHtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmplY3QuY2FtZXJhSWQpO1xuICAgICAgICBpZiAoY2FtZXJhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRzID0gb2JqZWN0LmV2ZW50LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsIG9mZnNldCA9IDAuNzAsIHggPSBjb29yZHMueCwgeSA9ICFvYmplY3QueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCwgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcImFuaW1hdGlvblwiLCBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5PdXRTaW5lOyBzdGFydEV2ZW50czogbmF2aWdhdGUtYW5pbWF0ZTsgdG86XCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCIgKyB6ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1hbmltYXRlXCIpO1xuICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJuYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9OYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UnO1xuXG4vL01vZGVsc1xuaW1wb3J0IHsgTmF2aWdhdGVDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL05hdmlnYXRlQ29tcG9uZW50TW9kZWwnO1xuaW1wb3J0IHsgQ3ViaWtDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vTW9kZWxzL0N1YmlrQ29tcG9uZW50TW9kZWwnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1YmlrQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1YmlrQ29tcG9uZW50JztcblxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9Nb2RlbHMvUGxheWVyJztcblxuLy8gU2Vydmllc1xubGV0IG5hdmlnYXRlU2VydmljZSA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudFNlcnZpY2UoKTtcblxuLy8gTW9kZWxzXG5sZXQgbmF2aWdhdGVDb21wb25lbnRNb2RlbCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudE1vZGVsKFxuICAgIFwibmF2aWdhdGUtY29tcG9uZW50XCIsXG4gICAgXCJwbGF5ZXJcIiwgXG4gICAgZmFsc2UsIFxuICAgIFtcImNsaWNrXCJdXG4pO1xuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihcIkpvZSBCbG9nZ3NcIiwgMCk7XG5cbmxldCBjdWJpa0NvbXBvbmVudE1vZGVsID0gbmV3IEN1YmlrQ29tcG9uZW50TW9kZWwoXG4gICAgXCJjdWJpay1jb21wb25lbnRcIixcbiAgICBcImN1YmVcIixcbiAgICBcInNjb3JlXCIsXG4gICAgXCJ0YXJnZXRcIixcbiAgICBcInRpbWVcIixcbiAgICBuZXcgRGF0ZSgpLFxuICAgIDAsXG4gICAgcGxheWVyXG4pO1xuICAgICAgICAgXG4vL0NvbXBvbmVudHNcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0ZUNvbXBvbmVudChcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudE1vZGVsLCBcbiAgICBuYXZpZ2F0ZVNlcnZpY2Vcbik7XG5cbmxldCBjdWJpa0NvbXBvbmVudCA9IG5ldyBDdWJpa0NvbXBvbmVudChcbiAgICBjdWJpa0NvbXBvbmVudE1vZGVsXG4pO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3ViaWtDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
