import { INavigateComponentModel } from "../Interfaces/INavigateComponentModel";
import { INavigateComponentService } from '../Interfaces/INavigateComponentService';

export class NavigateComponentService<T extends INavigateComponentModel> implements INavigateComponentService<T> {
    public init(object: T) {
        let camera = document.querySelector("#" + object.cameraId);
        if (camera !== null) {
            let coords = object.event.detail.intersection.point, offset = 0.70, x = coords.x, y = !object.yConstraint ? coords.y : 0.0, z = coords.z + offset;
            camera.setAttribute("animation", "property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:" + x + " " + y + " " + z + ";");
            camera.emit("navigate-animate");
            camera.emit("navigate-navigated");
        }
    }
}