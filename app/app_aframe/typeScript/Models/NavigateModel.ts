import { INavigateModel } from "../Interfaces/INavigateModel"

export class NavigateModel implements INavigateModel {

    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvent: string;

    constructor
    (
        cameraId: string,
        yConstraint: boolean,
        onEvent: string
    ){
        this.cameraId = cameraId;
        this.yConstraint = yConstraint;
        this.onEvent = onEvent;
    }
}