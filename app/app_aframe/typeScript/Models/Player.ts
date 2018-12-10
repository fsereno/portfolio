import { IPlayer } from '../Interfaces/IPlayer';

export class Player implements IPlayer {
    
    name: string;
    score: number;
    
    constructor(
        name: string,
        score: number
    ){
        this.name = name;
        this.score = score;
    }

    incrementUserScore = (): number => this.score++;
    decreaseuUerScore = (): number => this.score--;
}