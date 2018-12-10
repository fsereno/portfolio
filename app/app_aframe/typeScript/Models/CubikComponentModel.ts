import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel"
import { IPlayer } from '../Interfaces/IPlayer';
export class CubikComponentModel implements ICubikComponentModel {
        
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    timeId: string;
    timeRemaining: Date;
    cubeCount: number;
    player: IPlayer;

    constructor
    (
        name: string,
        cubeClass: string,
        scoreId: string,
        targetId: string,
        timeId: string,
        timeRemaining: Date,
        cubeCount: number,
        player: IPlayer
    ){
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.timeId = timeId;
        this.timeRemaining = timeRemaining;
        this.cubeCount = cubeCount;
        this.player = player;
    }

    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
    populateScoreOutput(): void {
        document.querySelector("#"+this.scoreId).setAttribute(
            "text", "value", this.player.score
        );
    };
    populateTargetOutput(): void {
        document.querySelector("#"+this.targetId).setAttribute(
            "text", "value", this.getCubeCount()
          );
    };
}