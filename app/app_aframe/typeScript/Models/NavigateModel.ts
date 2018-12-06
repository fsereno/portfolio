import { INavigateModel } from "../Interfaces/INavigateModel"

export class NavigateModel implements INavigateModel {

    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];

    constructor
    (
        cameraId: string,
        yConstraint: boolean,
        onEvents: string[]
    ){
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvents = onEvents;
    }
}