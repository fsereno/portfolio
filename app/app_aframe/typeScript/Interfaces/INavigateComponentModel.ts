import { IModelComponent } from "./IModelComponent";
export interface INavigateComponentModel extends IModelComponent {
    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];
}