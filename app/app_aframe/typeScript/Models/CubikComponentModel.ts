import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel"

export class CubikComponentModel implements ICubikComponentModel {
        
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    timeId: string;
    userScore: number; // need a dedicated player
    timeRemaining: Date;
    cubeCount: number;

    constructor
    (
        name: string,
        cubeClass: string,
        scoreId: string,
        targetId: string,
        timeId: string,
        userScore: number, // need a dedicated player
        timeRemaining: Date,
        cubeCount: number
    ){
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.timeId = timeId;
        this.userScore = userScore;
        this.timeRemaining = timeRemaining;
        this.cubeCount = cubeCount;
    }

    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
    incrementUserScore = (): number => this.userScore++;
    decreaseuUerScore = (): number => this.userScore--;
    populateScoreOutput(): void {
        document.querySelector("#"+this.scoreId).setAttribute(
            "text", "value", this.userScore
        );
    };
    populateTargetOutput(): void {
        document.querySelector("#"+this.targetId).setAttribute(
            "text", "value", this.getCubeCount()
          );
    };
}