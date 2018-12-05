import {IComponent} from "../Interfaces/IComponent";

export class TrackPadListenerComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent("trackpad-listener", {
            init: function() {

                alert("trackpad comp");
                this.el.addEventListener("trackpaddown", (e:CustomEvent) => {

                    let coords = e.detail.intersection.point,
                        //offset = 0.70,
                        x = coords.x;
                        //y = !self.yConstraint ? coords.y : 0.0,
                        //z = coords.z + offset;

                    alert("x coords " + x);
                });
            }
        });
    }
}