(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursorListenerComponent = /** @class */ (function () {
    function CursorListenerComponent() {
    }
    CursorListenerComponent.prototype.init = function () {
        AFRAME.registerComponent("cursor-listener", {
            init: function () {
                this.el.addEventListener("click", function (evt) {
                    var camera = document.querySelector("#camera"), coords = evt.detail.intersection.point, offset = 0.70, x = coords.x, y = coords.y, z = coords.z + offset;
                    camera.setAttribute("animation", "property: position; delay: 2000; dir: alternate; dur: 2000; easing: easeInSine; startEvents: animateThis; to:" + x + " 0.5" + " " + z + ";");
                    camera.emit("animateThis");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUFBO0lBc0JBLENBQUM7SUFyQkcsc0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFlO29CQUNyRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN0QyxNQUFNLEdBQUcsSUFBSSxFQUNiLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFFMUIsTUFBTSxDQUFDLFlBQVksQ0FDZixXQUFXLEVBQ1gsK0dBQStHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRSxHQUFHLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FDNUksQ0FBQztvQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDBEQUF1Qjs7Ozs7QUNBcEM7SUFBQTtJQVVBLENBQUM7SUFURyx3Q0FBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1lBQzFDLElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLENBQU87b0JBQzdDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw4REFBeUI7Ozs7O0FDQXRDO0lBS0kseUJBQ0kseUJBQXFDLEVBQ3JDLHVCQUFtQztRQUduQyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQzNELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDBDQUFlOzs7OztBQ0Q1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLGFBQWE7QUFDYixvRkFBbUY7QUFDbkYsZ0ZBQStFO0FBQy9FLGFBQWE7QUFFYixJQUFJLHlCQUF5QixHQUFHLElBQUkscURBQXlCLEVBQUUsQ0FBQztBQUNoRSxJQUFJLHVCQUF1QixHQUFHLElBQUksaURBQXVCLEVBQUUsQ0FBQztBQUU1RCxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLHlCQUF5QixFQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDN0YsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3JMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1cnNvci1saXN0ZW5lclwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW1lcmFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBldnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDAuNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gY29vcmRzLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gY29vcmRzLnksXG4gICAgICAgICAgICAgICAgICAgICAgICB6ID0gY29vcmRzLnogKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb25cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGVsYXk6IDIwMDA7IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluU2luZTsgc3RhcnRFdmVudHM6IGFuaW1hdGVUaGlzOyB0bzpcIiArIHggKyBcIiAwLjVcIisgXCIgXCIgKyB6K1wiO1wiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcImFuaW1hdGVUaGlzXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcInRyYWNrcGFkLWxpc3RlbmVyXCIsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYWNrcGFkZG93blwiLCAoZTpFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcInRyYWNrIGRvd25cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHByaXZhdGUgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudDtcbiAgICBwcml2YXRlIGN1cnNvckxpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQsXG4gICAgICAgIGN1cnNvckxpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50XG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy50cmFja1BhZExpc3RlbmVyQ29tcG9uZW50ID0gdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jdXJzb3JMaXN0ZW5lckNvbXBvbmVudCA9IGN1cnNvckxpc3RlbmVyQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLmN1cnNvckxpc3RlbmVyQ29tcG9uZW50LmluaXQoKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnRcIjtcbmltcG9ydCB7IEN1cnNvckxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50Jztcbi8vIENvbXBvbmVudHNcblxubGV0IHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCgpO1xubGV0IGN1cnNvckxpc3RlbmVyQ29tcG9uZW50ID0gbmV3IEN1cnNvckxpc3RlbmVyQ29tcG9uZW50KCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcih0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LGN1cnNvckxpc3RlbmVyQ29tcG9uZW50KTtcbmluZGV4Q29udHJvbGxlci5pbml0KCk7Il19
