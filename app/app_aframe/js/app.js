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
                this.el.addEventListener('cursor-navigate-navigated', function (evt) {
                    console.log(evt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudC50cyIsIkNvbXBvbmVudHMvTmF2aWdhdGVDb21wb25lbnQudHMiLCJDb21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQudHMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBO0lBQUE7SUFlQSxDQUFDO0lBZEcsMENBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRSxVQUFVLEdBQWU7b0JBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrRUFBMkI7Ozs7O0FDQXhDO0lBTUksNEJBQVksUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBb0I7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7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LGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQ3JDLHlCQUF5QixFQUN6QixpQkFBaUIsRUFDakIsMkJBQTJCLENBQzFCLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1cnNvci1jb2xvci1jaGFuZ2VcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBjb2xvdXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjdXJzb3ItbmF2aWdhdGUtbmF2aWdhdGVkJywgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBjb2xvdXJzLmxlbmd0aDsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG91cnNbbGFzdEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIFxuICAgIHByaXZhdGUgY2FtZXJhSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG9uRXZlbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhSWQ6IHN0cmluZywgb25FdmVudDogc3RyaW5nLCB5Q29uc3RyYWludDogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy5vbkV2ZW50ID0gb25FdmVudDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJuYXZpZ2F0ZVwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoc2VsZi5vbkV2ZW50LCBmdW5jdGlvbiAoZTpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitzZWxmLmNhbWVyYUlkKVxuICAgICAgICAgICAgICAgICAgICBpZihjYW1lcmEgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGUuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAwLjcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBjb29yZHMueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gIXNlbGYueUNvbnN0cmFpbnQgPyBjb29yZHMueSA6IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHk6IHBvc2l0aW9uOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJblNpbmU7IHN0YXJ0RXZlbnRzOiBuYXZpZ2F0ZS1hbmltYXRlOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHorXCI7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcIm5hdmlnYXRlLW5hdmlnYXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcInRyYWNrcGFkLWxpc3RlbmVyXCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYWNrcGFkZG93blwiLCAoZTpDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcInRyYWNrIGRvd25cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHByaXZhdGUgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudDtcbiAgICBwcml2YXRlIG5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuICAgIHByaXZhdGUgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQsXG4gICAgICAgIGN1cnNvck5hdmlnYXRlQ29tcG9uZW50OiBJQ29tcG9uZW50LFxuICAgICAgICBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQ6SUNvbXBvbmVudFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQgPSBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgPSBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMubmF2aWdhdGVDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLmN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL05hdmlnYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudFwiO1xuLy8gQ29tcG9uZW50c1xuXG5sZXQgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IG5ldyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50KCk7XG5sZXQgbmF2aWdhdGVDb21wb25lbnQgPSBuZXcgTmF2aWdhdG9yQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW1lcmFcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xubGV0IGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCA9IG5ldyBDdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKFxuICAgIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQsXG4gICAgbmF2aWdhdGVDb21wb25lbnQsXG4gICAgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50XG4gICAgKTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7Il19
