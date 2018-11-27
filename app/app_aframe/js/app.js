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
                    camera.setAttribute("animation", "property: position; delay: 2000; dir: alternate; dur: 2000; easing: easeInSine; startEvents: animateThis; to: " + x + " " + y + " " + z + ";");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckxpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50LnRzIiwiQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUFBO0lBc0JBLENBQUM7SUFyQkcsc0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFlO29CQUNyRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN0QyxNQUFNLEdBQUcsSUFBSSxFQUNiLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFFMUIsTUFBTSxDQUFDLFlBQVksQ0FDZixXQUFXLEVBQ1gsZ0hBQWdILEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQy9JLENBQUM7b0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSwwREFBdUI7Ozs7O0FDQXBDO0lBQUE7SUFVQSxDQUFDO0lBVEcsd0NBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsVUFBQyxDQUFPO29CQUM3QyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQ0FBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksOERBQXlCOzs7OztBQ0F0QztJQUtJLHlCQUNJLHlCQUFxQyxFQUNyQyx1QkFBbUM7UUFHbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSwwQ0FBZTs7Ozs7QUNENUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxhQUFhO0FBQ2Isb0ZBQW1GO0FBQ25GLGdGQUErRTtBQUMvRSxhQUFhO0FBRWIsSUFBSSx5QkFBeUIsR0FBRyxJQUFJLHFEQUF5QixFQUFFLENBQUM7QUFDaEUsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixFQUFFLENBQUM7QUFFNUQsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyx5QkFBeUIsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzdGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7SUNvbXBvbmVudH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgQ3Vyc29yTGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItbGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FtZXJhXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAwLjcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGNvb3Jkcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGNvb3Jkcy55LFxuICAgICAgICAgICAgICAgICAgICAgICAgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eTogcG9zaXRpb247IGRlbGF5OiAyMDAwOyBkaXI6IGFsdGVybmF0ZTsgZHVyOiAyMDAwOyBlYXNpbmc6IGVhc2VJblNpbmU7IHN0YXJ0RXZlbnRzOiBhbmltYXRlVGhpczsgdG86IFwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeitcIjtcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmVtaXQoXCJhbmltYXRlVGhpc1wiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJ0cmFja3BhZC1saXN0ZW5lclwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFja3BhZGRvd25cIiwgKGU6RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ0cmFjayBkb3duXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBjdXJzb3JMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50LFxuICAgICAgICBjdXJzb3JMaXN0ZW5lckNvbXBvbmVudDogSUNvbXBvbmVudFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMudHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCA9IHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3Vyc29yTGlzdGVuZXJDb21wb25lbnQgPSBjdXJzb3JMaXN0ZW5lckNvbXBvbmVudDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdXJzb3JMaXN0ZW5lckNvbXBvbmVudC5pbml0KCk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBUcmFja1BhZExpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9UcmFja1BhZExpc3RlbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXJzb3JMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9DdXJzb3JMaXN0ZW5lckNvbXBvbmVudCc7XG4vLyBDb21wb25lbnRzXG5cbmxldCB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50ID0gbmV3IFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQoKTtcbmxldCBjdXJzb3JMaXN0ZW5lckNvbXBvbmVudCA9IG5ldyBDdXJzb3JMaXN0ZW5lckNvbXBvbmVudCgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXIodHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCxjdXJzb3JMaXN0ZW5lckNvbXBvbmVudCk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyJdfQ==
