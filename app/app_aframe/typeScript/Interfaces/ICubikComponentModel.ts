import { IPlayer } from "./IPlayer";
export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    timeId: string;
    timeRemaining: Date;
    cubeCount: number;
    player: IPlayer;
    getCubeCount(): number;
    populateScoreOutput(): void;
    populateTargetOutput(): void;
}