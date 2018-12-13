import { IPlayerModel } from "./IPlayerModel";
export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    getCubeCount(): number;
}