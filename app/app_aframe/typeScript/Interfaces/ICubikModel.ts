import { IPlayerModel } from "./IPlayerModel";
export interface ICubikModel {
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    feedbackTextElementId: string;
    successText: string;
    failedText: string;
    getCubeCount(): number;
}