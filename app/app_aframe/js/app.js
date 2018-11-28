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
                    camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInSine; startEvents: animateThis; to:" + x + " " + y + " " + z + ";");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUFBO0lBc0JBLENBQUM7SUFyQkcsc0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFlO29CQUNyRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN0QyxNQUFNLEdBQUcsSUFBSSxFQUNiLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFFMUIsTUFBTSxDQUFDLFlBQVksQ0FDZixXQUFXLEVBQ1gsa0dBQWtHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQ2pJLENBQUM7b0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSwwREFBdUI7Ozs7O0FDQXBDO0lBQUE7SUFVQSxDQUFDO0lBVEcsd0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsVUFBQyxDQUFPO29CQUM3QyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQ0FBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksOERBQXlCOzs7OztBQ0F0QztJQUtJLHlCQUNJLHlCQUFxQyxFQUNyQyx1QkFBbUM7UUFHbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSwwQ0FBZTs7Ozs7QUNENUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxhQUFhO0FBQ2Isb0ZBQW1GO0FBQ25GLGdGQUErRTtBQUMvRSxhQUFhO0FBRWIsSUFBSSx5QkFBeUIsR0FBRyxJQUFJLHFEQUF5QixFQUFFLENBQUM7QUFDaEUsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixFQUFFLENBQUM7QUFFNUQsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyx5QkFBeUIsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzdGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FtZXJhXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAwLjcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGNvb3Jkcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGNvb3Jkcy55LFxuICAgICAgICAgICAgICAgICAgICAgICAgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRpcjogYWx0ZXJuYXRlOyBkdXI6IDIwMDA7IGVhc2luZzogZWFzZUluU2luZTsgc3RhcnRFdmVudHM6IGFuaW1hdGVUaGlzOyB0bzpcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHorXCI7XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwiYW5pbWF0ZVRoaXNcIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KFwidHJhY2twYWQtbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwidHJhY2twYWRkb3duXCIsIChlOkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidHJhY2sgZG93blwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50O1xuICAgIHByaXZhdGUgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnRcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvckxpc3RlbmVyQ29tcG9uZW50ID0gY3Vyc29yTGlzdGVuZXJDb21wb25lbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIHRoaXMuY3Vyc29yTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQnO1xuLy8gQ29tcG9uZW50c1xuXG5sZXQgdHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IG5ldyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50KCk7XG5sZXQgY3Vyc29yTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyKHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQsY3Vyc29yTGlzdGVuZXJDb21wb25lbnQpO1xuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiXX0=
