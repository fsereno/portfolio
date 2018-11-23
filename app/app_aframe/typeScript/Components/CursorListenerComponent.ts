import {IComponent} from "../Interfaces/IComponent";

export class CursorListenerComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent('cursor-listener', {
            init: function () {
              var lastIndex = -1;
              var COLORS = ['red', 'green', 'blue'];
              this.el.addEventListener('click', function (evt:CustomEvent) {
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
                    setTimeout(()=>{
                        cameraAnimate.setAttribute("to", x + " " + y + " " + z);
                        cameraAnimate.emit("animateThis");
                        //camera.setAttribute("position", x + " " + y + " " + z)
                    }, 2000)
              });
            }
        });
    }
}