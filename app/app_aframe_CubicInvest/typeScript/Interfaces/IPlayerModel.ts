export interface IPlayerModel {
    name: string;
    score: number;
    incrementUserScore(): number;
    decreaseUserScore(): number;
}