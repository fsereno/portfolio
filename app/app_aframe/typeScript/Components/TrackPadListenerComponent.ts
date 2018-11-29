import {IComponent} from "../Interfaces/IComponent";

export class TrackPadListenerComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent("trackpad-listener", {
            init: function() {
                this.el.addEventListener("trackpaddown", (e:CustomEvent) => {
                    alert("track down");
                });
            }
        });
    }
}