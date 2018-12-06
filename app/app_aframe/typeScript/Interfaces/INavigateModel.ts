export interface INavigateModel {
    cameraId: string;
    yConstraint: boolean;
    event: CustomEvent<any>;
    onEvents: string[];
}