import { IPlayerModel } from "./IPlayerModel";
export interface ICubikModel {
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    getCubeCount(): number;
}