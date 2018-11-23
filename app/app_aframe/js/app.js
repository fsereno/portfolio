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
                    var cameraAnimate = document.querySelector("#cameraMove");
                    var camera = document.querySelector("#camera");
                    var coords = evt.detail.intersection.point;
                    var offset = 0.70;
                    var x = coords.x;
                    var y = coords.y;
                    var z = coords.z + offset;
                    //this.setAttribute('color', COLORS[lastIndex]);
                    setTimeout(function () {
                        cameraAnimate.setAttribute("to", x + " " + y + " " + z);
                        cameraAnimate.emit("animateThis");
                        //camera.setAttribute("position", x + " " + y + " " + z)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUFBO0lBMEJBLENBQUM7SUF6Qkcsc0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFlO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQiw4Q0FBOEM7b0JBQzlDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztvQkFDM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsZ0RBQWdEO29CQUNoRCxVQUFVLENBQUM7d0JBQ1AsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNsQyx3REFBd0Q7b0JBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLDBEQUF1Qjs7Ozs7QUNBcEM7SUFBQTtJQVVBLENBQUM7SUFURyx3Q0FBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1lBQzFDLElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLENBQU87b0JBQzdDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw4REFBeUI7Ozs7O0FDQXRDO0lBS0kseUJBQ0kseUJBQXFDLEVBQ3JDLHVCQUFtQztRQUduQyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQzNELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDBDQUFlOzs7OztBQ0Q1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLGFBQWE7QUFDYixvRkFBbUY7QUFDbkYsZ0ZBQStFO0FBQy9FLGFBQWE7QUFFYixJQUFJLHlCQUF5QixHQUFHLElBQUkscURBQXlCLEVBQUUsQ0FBQztBQUNoRSxJQUFJLHVCQUF1QixHQUFHLElBQUksaURBQXVCLEVBQUUsQ0FBQztBQUU1RCxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLHlCQUF5QixFQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDN0YsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3JMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnY3Vyc29yLWxpc3RlbmVyJywge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIHZhciBDT0xPUlMgPSBbJ3JlZCcsICdncmVlbicsICdibHVlJ107XG4gICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vbGFzdEluZGV4ID0gKGxhc3RJbmRleCArIDEpICUgQ09MT1JTLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbWVyYUFuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbWVyYU1vdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbWVyYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IGV2dC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMC43MDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHMueDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb29yZHMueTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHogPSBjb29yZHMueiArIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCBDT0xPUlNbbGFzdEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYUFuaW1hdGUuc2V0QXR0cmlidXRlKFwidG9cIiwgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmFBbmltYXRlLmVtaXQoXCJhbmltYXRlVGhpc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FtZXJhLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHopXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwidHJhY2twYWQtbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidHJhY2twYWRkb3duXCIsIChlOkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidHJhY2sgZG93blwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuICAgIHByaXZhdGUgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnRcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvckxpc3RlbmVyQ29tcG9uZW50ID0gY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3Vyc29yTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQnO1xuLy8gQ29tcG9uZW50c1xuXG5sZXQgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IG5ldyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50KCk7XG5sZXQgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQsY3Vyc29yTGlzdGVuZXJDb21wb25lbnQpO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
