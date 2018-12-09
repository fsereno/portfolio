export interface INavigateComponentModel {
    name: string;
    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];
}