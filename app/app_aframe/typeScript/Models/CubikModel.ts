import { ICubikModel } from "../Interfaces/ICubikModel"
import { IPlayerModel } from '../Interfaces/IPlayerModel';
export class CubikModel implements ICubikModel {
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;

    constructor
    (
        cubeClass: string,
        scoreId: string,
        targetId: string,
        cubeCount: number,
        player: IPlayerModel
    ){
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player
    }
    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
}