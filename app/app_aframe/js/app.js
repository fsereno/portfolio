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
                alert("navigate comp");
                this.el.addEventListener(self.onEvent, function (e) {
                    var camera = document.querySelector("#" + self.cameraId);
                    if (camera !== null) {
                        var coords = e.detail.intersection.point, offset = 0.70, x = coords.x, y = !self.yConstraint ? coords.y : 0.0, z = coords.z + offset;
                        camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
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
                alert("trackpad comp");
                this.el.addEventListener("trackpaddown", function (e) {
                    var coords = e.detail.intersection.point, 
                    //offset = 0.70,
                    x = coords.x;
                    //y = !self.yConstraint ? coords.y : 0.0,
                    //z = coords.z + offset;
                    alert("x coords " + x);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudC50cyIsIkNvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnQudHMiLCJDb21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQudHMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBO0lBQUE7SUFjQSxDQUFDO0lBYkcsMENBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEdBQWU7b0JBQ3BFLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxrRUFBMkI7Ozs7O0FDQXhDO0lBTUksNEJBQVksUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBb0I7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMs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QWE7QUFFYixJQUFJLHlCQUF5QixHQUFHLElBQUkscURBQXlCLEVBQUUsQ0FBQztBQUNoRSxJQUFJLGlCQUFpQixHQUFHLElBQUksc0NBQWtCLENBQ1YsUUFBUSxFQUNSLE9BQU8sRUFDUCxLQUFLLENBQ1IsQ0FBQztBQUNsQyxJQUFJLDJCQUEyQixHQUFHLElBQUkseURBQTJCLEVBQUUsQ0FBQztBQUVwRSxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUNyQyx5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLDJCQUEyQixDQUMxQixDQUFDO0FBQ04sZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItY29sb3ItY2hhbmdlXCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHsgIFxuICAgICAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3VycyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbmF2aWdhdGUtbmF2aWdhdGVkJywgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBjb2xvdXJzLmxlbmd0aDsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG91cnNbbGFzdEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIFxuICAgIHByaXZhdGUgY2FtZXJhSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG9uRXZlbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhSWQ6IHN0cmluZywgb25FdmVudDogc3RyaW5nLCB5Q29uc3RyYWludDogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy5vbkV2ZW50ID0gb25FdmVudDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJuYXZpZ2F0ZVwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHsgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJuYXZpZ2F0ZSBjb21wXCIpO1xuICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoc2VsZi5vbkV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitzZWxmLmNhbWVyYUlkKVxuICAgICAgICAgICAgICAgICAgICBpZihjYW1lcmEgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGUuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAwLjcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBjb29yZHMueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gIXNlbGYueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJbk91dFNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHorXCI7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcInRyYWNrcGFkLWxpc3RlbmVyXCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJ0cmFja3BhZCBjb21wXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYWNrcGFkZG93blwiLCAoZTpDdXN0b21FdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBlLmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL29mZnNldCA9IDAuNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gY29vcmRzLng7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3kgPSAhc2VsZi55Q29uc3RyYWludCA/IGNvb3Jkcy55IDogMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy96ID0gY29vcmRzLnogKyBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ4IGNvb3JkcyBcIiArIHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDtcbiAgICBwcml2YXRlIGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudDogSUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50LFxuICAgICAgICBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50OklDb21wb25lbnRcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50ID0gY3Vyc29yTmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50ID0gY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9OYXZpZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9DdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnRcIjtcbi8vIENvbXBvbmVudHNcblxubGV0IHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCgpO1xubGV0IG5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IE5hdmlnYXRvckNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FtZXJhXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbmxldCBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgPSBuZXcgQ3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50KCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcihcbiAgICB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LFxuICAgIG5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudFxuICAgICk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyJdfQ==
