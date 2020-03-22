import { INavigateComponentModel } from "../Interfaces/INavigateComponentModel"

export class NavigateComponentModel implements INavigateComponentModel {
    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];

    constructor (
        cameraId: string,
        yConstraint: boolean,
        onEvents: string[]
    ){
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvents = onEvents;
    }
}