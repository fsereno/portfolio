export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    timeId: string;
    userScore: number;
    timeRemaining: Date;
    cubeCount: number;
    getCubeCount(): number;
}