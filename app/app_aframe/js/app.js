(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursorColourChangeComponent = /** @class */ (function () {
    function CursorColourChangeComponent() {
    }
    CursorColourChangeComponent.prototype.init = function () {
        AFRAME.registerComponent("cursor-color-change", {
            init: function () {
                var lastIndex = -1, colours = ['red', 'green', 'blue'];
                this.el.addEventListener('navigate-navigated', function (evt) {
                    lastIndex = (lastIndex + 1) % colours.length;
                    this.setAttribute('color', colours[lastIndex]);
                });
            }
        });
    };
    return CursorColourChangeComponent;
}());
exports.CursorColourChangeComponent = CursorColourChangeComponent;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent(cameraId, onEvent, yConstraint) {
        this.cameraId = cameraId;
        this.onEvent = onEvent;
        this.yConstraint = yConstraint;
    }
    NavigatorComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent("navigate", {
            init: function () {
                this.el.addEventListener(self.onEvent, function (e) {
                    var camera = document.querySelector("#" + self.cameraId);
                    if (camera !== null) {
                        var coords = e.detail.intersection.point, offset = 0.70, x = coords.x, y = !self.yConstraint ? coords.y : 0.0, z = coords.z + offset;
                        camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
                        camera.emit("navigate-animate");
                        camera.emit("navigate-navigated");
                    }
                });
            }
        });
    };
    return NavigatorComponent;
}());
exports.NavigatorComponent = NavigatorComponent;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(trackPadListenerComponent, cursorNavigateComponent, cursorColourChangeComponent) {
        this.trackPadListenerComponent = trackPadListenerComponent;
        this.navigateComponent = cursorNavigateComponent;
        this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    IndexController.prototype.init = function () {
        this.trackPadListenerComponent.init();
        this.navigateComponent.init();
        this.cursorColourChangeComponent.init();
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Components
var TrackPadListenerComponent_1 = require("./Components/TrackPadListenerComponent");
var NavigateComponent_1 = require("./Components/NavigateComponent");
var CursorColourChangeComponent_1 = require("./Components/CursorColourChangeComponent");
// Components
var trackPadListenerComponent = new TrackPadListenerComponent_1.TrackPadListenerComponent();
var navigateComponent = new NavigateComponent_1.NavigatorComponent("camera", "click", false);
var cursorColourChangeComponent = new CursorColourChangeComponent_1.CursorColourChangeComponent();
// Controllers
var indexController = new IndexController_1.IndexController(trackPadListenerComponent, navigateComponent, cursorColourChangeComponent);
indexController.init();

},{"./Components/CursorColourChangeComponent":1,"./Components/NavigateComponent":2,"./Components/TrackPadListenerComponent":3,"./Controllers/IndexController":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudC50cyIsIkNvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnQudHMiLCJDb21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQudHMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBO0lBQUE7SUFjQSxDQUFDO0lBYkcsMENBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEdBQWU7b0JBQ3BFLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxrRUFBMkI7Ozs7O0FDQXhDO0lBTUksNEJBQVksUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBb0I7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMs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LHlCQUF5QixFQUN6QixpQkFBaUIsRUFDakIsMkJBQTJCLENBQzFCLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1cnNvci1jb2xvci1jaGFuZ2VcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBjb2xvdXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCduYXZpZ2F0ZS1uYXZpZ2F0ZWQnLCBmdW5jdGlvbiAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IChsYXN0SW5kZXggKyAxKSAlIGNvbG91cnMubGVuZ3RoOyAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3Vyc1tsYXN0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgXG4gICAgcHJpdmF0ZSBjYW1lcmFJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgb25FdmVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgeUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihjYW1lcmFJZDogc3RyaW5nLCBvbkV2ZW50OiBzdHJpbmcsIHlDb25zdHJhaW50OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5jYW1lcmFJZCA9IGNhbWVyYUlkO1xuICAgICAgICB0aGlzLm9uRXZlbnQgPSBvbkV2ZW50O1xuICAgICAgICB0aGlzLnlDb25zdHJhaW50ID0geUNvbnN0cmFpbnQ7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcIm5hdmlnYXRlXCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihzZWxmLm9uRXZlbnQsIGZ1bmN0aW9uIChlOkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK3NlbGYuY2FtZXJhSWQpXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbWVyYSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gZS5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDAuNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGNvb3Jkcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSAhc2VsZi55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHogPSBjb29yZHMueiArIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb25cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluU2luZTsgc3RhcnRFdmVudHM6IG5hdmlnYXRlLWFuaW1hdGU7IHRvOlwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeitcIjtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtYW5pbWF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwibmF2aWdhdGUtbmF2aWdhdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwidHJhY2twYWQtbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidHJhY2twYWRkb3duXCIsIChlOkN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidHJhY2sgZG93blwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuICAgIHByaXZhdGUgbmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQ6IElDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yTmF2aWdhdGVDb21wb25lbnQ6IElDb21wb25lbnQsXG4gICAgICAgIGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudDpJQ29tcG9uZW50XG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy50cmFja1BhZExpc3RlbmVyQ29tcG9uZW50ID0gdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudCA9IGN1cnNvck5hdmlnYXRlQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCA9IGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50LmluaXQoKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvQ3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50XCI7XG4vLyBDb21wb25lbnRzXG5cbmxldCB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50ID0gbmV3IFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQoKTtcbmxldCBuYXZpZ2F0ZUNvbXBvbmVudCA9IG5ldyBOYXZpZ2F0b3JDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbWVyYVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5sZXQgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50ID0gbmV3IEN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIoXG4gICAgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCxcbiAgICBuYXZpZ2F0ZUNvbXBvbmVudCxcbiAgICBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnRcbiAgICApO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
