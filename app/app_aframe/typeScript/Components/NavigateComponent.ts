import {IComponent} from "../Interfaces/IComponent";

export class NavigatorComponent implements IComponent {
    
    private cameraId: string;
    private onEvent: string;
    private yConstraint: boolean;

    constructor(cameraId: string, onEvent: string, yConstraint: boolean){
        this.cameraId = cameraId;
        this.onEvent = onEvent;
        this.yConstraint = yConstraint;
    }
    
    init(): void {

        let self = this;

        AFRAME.registerComponent("navigate", {
            init: function() {              
              this.el.addEventListener(self.onEvent, function (e:CustomEvent) {
                    let camera = document.querySelector("#"+self.cameraId)
                    if(camera !== null){
                        let coords = e.detail.intersection.point,
                            offset = 0.70,
                            x = coords.x,
                            y = !self.yConstraint ? coords.y : 0.0,
                            z = coords.z + offset;
                        camera.setAttribute(
                            "animation", 
                            "property: position; dir: alternate; dur: 2000; easing: easeInSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z+";"
                        );
                        camera.emit("navigate-animate");
                        camera.emit("navigate-navigated");
                    }
              });
            }
        });
    }
}