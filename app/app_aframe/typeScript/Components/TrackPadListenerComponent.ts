import {IComponent} from "../Interfaces/IComponent";

export class TrackPadListenerComponent<T> implements IComponent<T> {
    
    object: T

    init(): void {
        AFRAME.registerComponent("trackpad-listener", {
            init: function() {
                this.el.addEventListener("mousedown", (e:any) => {
                    alert("track down again");
                });
            }
        });
    }
}