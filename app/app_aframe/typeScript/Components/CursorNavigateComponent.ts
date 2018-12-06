import {IComponent} from "../Interfaces/IComponent";
import { INavigateService } from '../Interfaces/INavigateService';
import { INavigateModel } from "../Interfaces/INavigateModel";

export class CursorNavigateComponent<T extends INavigateModel> implements IComponent<T> {
    
    object: T
    navigateService: INavigateService<T>

    constructor(
        object: T,
        navigateService: INavigateService<T>
        
    ){
        this.object = object;
        this.navigateService = navigateService;
    }
    
    init(): void {

        let self = this;

        AFRAME.registerComponent("cursor-navigate-component", {
            init: function() {    
              this.el.addEventListener(self.object.onEvent, function (e:CustomEvent) {
                    self.object.event = e;
                    self.navigateService.init(self.object);
              });
            }
        });
    }

    /*private newMethod(self: this, e: CustomEvent<any>) {
        let camera = document.querySelector("#" + self.cameraId);
        if (camera !== null) {
            let coords = e.detail.intersection.point, offset = 0.70, x = coords.x, y = !self.yConstraint ? coords.y : 0.0, z = coords.z + offset;
            camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
            camera.emit("navigate-animate");
            camera.emit("navigate-navigated");
        }
    }*/
}