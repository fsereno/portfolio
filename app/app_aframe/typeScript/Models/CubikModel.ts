import { ICubikModel } from "../Interfaces/ICubikModel"
import { IPlayerModel } from '../Interfaces/IPlayerModel';
export class CubikModel implements ICubikModel {
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    feedbackTextElementId: string;
    successText: string;
    failedText: string;

    constructor
    (
        cubeClass: string,
        scoreId: string,
        targetId: string,
        cubeCount: number,
        player: IPlayerModel,
        feedbackTextElementId: string,
        successText: string,
        failedText: string
    ){
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player
        this.feedbackTextElementId = feedbackTextElementId
        this.successText = successText;
        this.failedText = failedText;

    }
    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
}