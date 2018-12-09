import { INavigateComponentModel } from "../Interfaces/INavigateComponentModel"

export class NavigateComponentModel implements INavigateComponentModel {
    name: string;
    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];

    constructor
    (
        name: string,
        cameraId: string,
        yConstraint: boolean,
        onEvents: string[]
    ){
        this.name = name;
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvents = onEvents;
    }
}