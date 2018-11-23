(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursorListenerComponent = /** @class */ (function () {
    function CursorListenerComponent() {
    }
    CursorListenerComponent.prototype.init = function () {
        AFRAME.registerComponent('cursor-listener', {
            init: function () {
                var lastIndex = -1;
                var COLORS = ['red', 'green', 'blue'];
                this.el.addEventListener('click', function (evt) {
                    console.log(evt);
                    //lastIndex = (lastIndex + 1) % COLORS.length;
                    var coords = evt.detail.intersection.point;
                    var offset = 0.70;
                    var x = coords.x;
                    var y = coords.y;
                    var z = coords.z + offset;
                    //this.setAttribute('color', COLORS[lastIndex]);
                    setTimeout(function () {
                        document.getElementById("camera").setAttribute("position", x + " " + y + " " + z);
                    }, 2000);
                });
            }
        });
    };
    return CursorListenerComponent;
}());
exports.CursorListenerComponent = CursorListenerComponent;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrackPadListenerComponent = /** @class */ (function () {
    function TrackPadListenerComponent() {
    }
    TrackPadListenerComponent.prototype.init = function () {
        AFRAME.registerComponent("trackpad-listener", {
            init: function () {
                this.el.addEventListener("trackpaddown", function (e) {
                    alert("track down");
                });
            }
        });
    };
    return TrackPadListenerComponent;
}());
exports.TrackPadListenerComponent = TrackPadListenerComponent;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(trackPadListenerComponent, cursorListenerComponent) {
        this.trackPadListenerComponent = trackPadListenerComponent;
        this.cursorListenerComponent = cursorListenerComponent;
    }
    IndexController.prototype.init = function () {
        this.trackPadListenerComponent.init();
        this.cursorListenerComponent.init();
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Components
var TrackPadListenerComponent_1 = require("./Components/TrackPadListenerComponent");
var CursorListenerComponent_1 = require("./Components/CursorListenerComponent");
// Components
var trackPadListenerComponent = new TrackPadListenerComponent_1.TrackPadListenerComponent();
var cursorListenerComponent = new CursorListenerComponent_1.CursorListenerComponent();
// Controllers
var indexController = new IndexController_1.IndexController(trackPadListenerComponent, cursorListenerComponent);
indexController.init();

},{"./Components/CursorListenerComponent":1,"./Components/TrackPadListenerComponent":2,"./Controllers/IndexController":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUFBO0lBc0JBLENBQUM7SUFyQkcsc0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFlO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQiw4Q0FBOEM7b0JBQzlDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztvQkFDM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsZ0RBQWdEO29CQUNoRCxVQUFVLENBQUM7d0JBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEYsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCw4QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksMERBQXVCOzs7OztBQ0FwQztJQUFBO0lBVUEsQ0FBQztJQVRHLHdDQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFVBQUMsQ0FBTztvQkFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDhEQUF5Qjs7Ozs7QUNBdEM7SUFLSSx5QkFDSSx5QkFBcUMsRUFDckMsdUJBQW1DO1FBR25DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7SUFDM0QsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDTCxzQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksMENBQWU7Ozs7O0FDRDVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsYUFBYTtBQUNiLG9GQUFtRjtBQUNuRixnRkFBK0U7QUFDL0UsYUFBYTtBQUViLElBQUkseUJBQXlCLEdBQUcsSUFBSSxxREFBeUIsRUFBRSxDQUFDO0FBQ2hFLElBQUksdUJBQXVCLEdBQUcsSUFBSSxpREFBdUIsRUFBRSxDQUFDO0FBRTVELGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMseUJBQXlCLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3RixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEN1cnNvckxpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjdXJzb3ItbGlzdGVuZXInLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgdmFyIENPTE9SUyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcbiAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZ0KTtcbiAgICAgICAgICAgICAgICAgICAgLy9sYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBDT0xPUlMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwLjcwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkcy54O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvb3Jkcy55O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0QXR0cmlidXRlKCdjb2xvcicsIENPTE9SU1tsYXN0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW1lcmFcIikuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwidHJhY2twYWQtbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidHJhY2twYWRkb3duXCIsIChlOkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidHJhY2sgZG93blwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuICAgIHByaXZhdGUgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnRcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvckxpc3RlbmVyQ29tcG9uZW50ID0gY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3Vyc29yTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQnO1xuLy8gQ29tcG9uZW50c1xuXG5sZXQgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IG5ldyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50KCk7XG5sZXQgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQsY3Vyc29yTGlzdGVuZXJDb21wb25lbnQpO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
