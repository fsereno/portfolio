import {IComponent} from "../Interfaces/IComponent";

export class CursorListenerComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent('cursor-listener', {
            init: function () {
              var lastIndex = -1;
              var COLORS = ['red', 'green', 'blue'];
              this.el.addEventListener('click', function (evt:CustomEvent) {
                    console.log(evt);
                    lastIndex = (lastIndex + 1) % COLORS.length;
                    var coords = evt.detail.intersection.point;
                    var z = coords.z + 0.70;
                    //this.setAttribute('color', COLORS[lastIndex]);
                    setTimeout(()=>{
                        document.getElementById("camera").setAttribute("position", coords.x + " " + coords.y + " " + z);
                    }, 2000)
              });
            }
        });
    }
}