import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel"
import { IPlayerModel } from '../Interfaces/IPlayerModel';
export class CubikComponentModel implements ICubikComponentModel {
        
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;

    constructor
    (
        name: string,
        cubeClass: string,
        scoreId: string,
        targetId: string,
        cubeCount: number,
        player: IPlayerModel
    ){
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player
    }
    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
}