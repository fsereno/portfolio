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
var CursorNavigatorComponent = /** @class */ (function () {
    function CursorNavigatorComponent(cameraId, onEvent, yConstraint) {
        this.cameraId = cameraId;
        this.onEvent = onEvent;
        this.yConstraint = yConstraint;
    }
    CursorNavigatorComponent.prototype.init = function () {
        var self = this;
        AFRAME.registerComponent("cursor-navigate", {
            init: function () {
                this.el.addEventListener(self.onEvent, function (e) {
                    var camera = document.querySelector("#" + self.cameraId);
                    if (camera !== null) {
                        var coords = e.detail.intersection.point, offset = 0.70, x = coords.x, y = !self.yConstraint ? coords.y : 0.0, z = coords.z + offset;
                        camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInSine; startEvents: cursor-navigate-animate; to:" + x + " " + y + " " + z + ";");
                        camera.emit("cursor-navigate-animate");
                        camera.emit("cursor-navigate-navigated");
                    }
                });
            }
        });
    };
    return CursorNavigatorComponent;
}());
exports.CursorNavigatorComponent = CursorNavigatorComponent;

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
        this.cursorNavigateComponent = cursorNavigateComponent;
        this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    IndexController.prototype.init = function () {
        this.trackPadListenerComponent.init();
        this.cursorNavigateComponent.init();
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
var CursorNavigateComponent_1 = require("./Components/CursorNavigateComponent");
var CursorColourChangeComponent_1 = require("./Components/CursorColourChangeComponent");
// Components
var trackPadListenerComponent = new TrackPadListenerComponent_1.TrackPadListenerComponent();
var cursorNavigateComponent = new CursorNavigateComponent_1.CursorNavigatorComponent("camera", "click", false);
var cursorColourChangeComponent = new CursorColourChangeComponent_1.CursorColourChangeComponent();
// Controllers
var indexController = new IndexController_1.IndexController(trackPadListenerComponent, cursorNavigateComponent, cursorColourChangeComponent);
indexController.init();

},{"./Components/CursorColourChangeComponent":1,"./Components/CursorNavigateComponent":2,"./Components/TrackPadListenerComponent":3,"./Controllers/IndexController":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudC50cyIsIkNvbXBvbmVudHMvQ3Vyc29yTmF2aWdhdGVDb21wb25lbnQudHMiLCJDb21wb25lbnRzL1RyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQudHMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBO0lBQUE7SUFlQSxDQUFDO0lBZEcsMENBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRSxVQUFVLEdBQWU7b0JBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFNBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrRUFBMkI7Ozs7O0FDQXhDO0lBTUksa0NBQVksUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBb0I7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELHVDQUFJLEdBQUo7UUFFSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFhO29CQUN4RCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ3RELElBQUcsTUFBTSxLQUFLLElBQUksRUFBQzt3QkFDZixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQ3BDLE1BQU0sR0FBRyxJQUFJLEVBQ2IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUN0QyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxZQUFZLENBQ2YsV0FBVyxFQUNYLDhHQUE4RyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUM3SSxDQUFDO3dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO3FCQUM1QztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLDREQUF3Qjs7Ozs7QUNBckM7SUFBQTtJQVVBLENBQUM7SUFURyx3Q0FBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1lBQzFDLElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLENBQU87b0JBQzdDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw4REFBeUI7Ozs7O0FDQ3RDO0lBTUkseUJBQ0kseUJBQXFDLEVBQ3JDLHVCQUFtQyxFQUNuQywyQkFBc0M7UUFHdEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQTJCLENBQUM7SUFDbkUsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLDBDQUFlOzs7OztBQ0Y1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLGFBQWE7QUFDYixvRkFBbUY7QUFDbkYsZ0ZBQWdGO0FBQ2hGLHdGQUF1RjtBQUN2RixhQUFhO0FBRWIsSUFBSSx5QkFBeUIsR0FBRyxJQUFJLHFEQUF5QixFQUFFLENBQUM7QUFDaEUsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLGtEQUF3QixDQUN0QixRQUFRLEVBQ1IsT0FBTyxFQUNQLEtBQUssQ0FDUixDQUFDO0FBQ2xDLElBQUksMkJBQTJCLEdBQUcsSUFBSSx5REFBMkIsRUFBRSxDQUFDO0FBRXBFLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQ3JDLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsMkJBQTJCLENBQzFCLENBQUM7QUFDTixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIEFGUkFNRS5yZWdpc3RlckNvbXBvbmVudChcImN1cnNvci1jb2xvci1jaGFuZ2VcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBjb2xvdXJzID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjdXJzb3ItbmF2aWdhdGUtbmF2aWdhdGVkJywgZnVuY3Rpb24gKGV2dDpDdXN0b21FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBjb2xvdXJzLmxlbmd0aDsgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG91cnNbbGFzdEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEN1cnNvck5hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xuICAgIFxuICAgIHByaXZhdGUgY2FtZXJhSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG9uRXZlbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY2FtZXJhSWQ6IHN0cmluZywgb25FdmVudDogc3RyaW5nLCB5Q29uc3RyYWludDogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuY2FtZXJhSWQgPSBjYW1lcmFJZDtcbiAgICAgICAgdGhpcy5vbkV2ZW50ID0gb25FdmVudDtcbiAgICAgICAgdGhpcy55Q29uc3RyYWludCA9IHlDb25zdHJhaW50O1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJjdXJzb3ItbmF2aWdhdGVcIiwge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHNlbGYub25FdmVudCwgZnVuY3Rpb24gKGU6Q3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrc2VsZi5jYW1lcmFJZClcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FtZXJhICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBlLmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gMC43MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gY29vcmRzLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9ICFzZWxmLnlDb25zdHJhaW50ID8gY29vcmRzLnkgOiAwLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeiA9IGNvb3Jkcy56ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvblwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5OiBwb3NpdGlvbjsgZGlyOiBhbHRlcm5hdGU7IGR1cjogMjAwMDsgZWFzaW5nOiBlYXNlSW5TaW5lOyBzdGFydEV2ZW50czogY3Vyc29yLW5hdmlnYXRlLWFuaW1hdGU7IHRvOlwiICsgeCArIFwiIFwiICsgeSArIFwiIFwiICsgeitcIjtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5lbWl0KFwiY3Vyc29yLW5hdmlnYXRlLWFuaW1hdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuZW1pdChcImN1cnNvci1uYXZpZ2F0ZS1uYXZpZ2F0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQge0lDb21wb25lbnR9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoXCJ0cmFja3BhZC1saXN0ZW5lclwiLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFja3BhZGRvd25cIiwgKGU6RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ0cmFjayBkb3duXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtJQ29tcG9uZW50fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL0N1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQ6IElDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudDtcbiAgICBwcml2YXRlIGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudDogSUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50OiBJQ29tcG9uZW50LFxuICAgICAgICBjdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudDogSUNvbXBvbmVudCxcbiAgICAgICAgY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50OklDb21wb25lbnRcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmN1cnNvck5hdmlnYXRlQ29tcG9uZW50ID0gY3Vyc29yTmF2aWdhdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50ID0gY3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICB0aGlzLmN1cnNvck5hdmlnYXRlQ29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgdGhpcy5jdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQuaW5pdCgpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yTmF2aWdhdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9DdXJzb3JOYXZpZ2F0ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9DdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnRcIjtcbi8vIENvbXBvbmVudHNcblxubGV0IHRyYWNrUGFkTGlzdGVuZXJDb21wb25lbnQgPSBuZXcgVHJhY2tQYWRMaXN0ZW5lckNvbXBvbmVudCgpO1xubGV0IGN1cnNvck5hdmlnYXRlQ29tcG9uZW50ID0gbmV3IEN1cnNvck5hdmlnYXRvckNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FtZXJhXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbmxldCBjdXJzb3JDb2xvdXJDaGFuZ2VDb21wb25lbnQgPSBuZXcgQ3Vyc29yQ29sb3VyQ2hhbmdlQ29tcG9uZW50KCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlcihcbiAgICB0cmFja1BhZExpc3RlbmVyQ29tcG9uZW50LFxuICAgIGN1cnNvck5hdmlnYXRlQ29tcG9uZW50LFxuICAgIGN1cnNvckNvbG91ckNoYW5nZUNvbXBvbmVudFxuICAgICk7XG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyJdfQ==
