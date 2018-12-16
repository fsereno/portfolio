import { IPlayerModel } from "./IPlayerModel";
export interface ICubikModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    getCubeCount(): number;
}