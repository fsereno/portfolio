export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    timeId: string;
    userScore: number;
    timeRemaining: Date;
    cubeCount: number;
    getCubeCount(): number;
    incrementUserScore(): number;
    decreaseuUerScore(): number;
    populateScoreOutput(): void;
    populateTargetOutput(): void;
}