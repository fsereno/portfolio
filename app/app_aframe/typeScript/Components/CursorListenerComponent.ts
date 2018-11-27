import {IComponent} from "../Interfaces/IComponent";

export class CursorListenerComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent("cursor-listener", {
            init: function () {              
              this.el.addEventListener("click", function (evt:CustomEvent) {
                    var camera = document.querySelector("#camera"),
                        coords = evt.detail.intersection.point,
                        offset = 0.70,
                        x = coords.x,
                        y = coords.y,
                        z = coords.z + offset;
                    
                    camera.setAttribute(
                        "animation", 
                        "property: position; delay: 2000; dir: alternate; dur: 2000; easing: easeInSine; startEvents: animateThis; to:" + x + " 0.5"+ " " + z+";"
                    );
                    
                    camera.emit("animateThis");
              });
            }
        });
    }
}