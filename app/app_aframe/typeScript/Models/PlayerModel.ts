import { IPlayerModel } from '../Interfaces/IPlayerModel';

export class PlayerModel implements IPlayerModel {
    
    name: string;
    score: number;
    
    constructor (
        name: string,
        score: number
    ){
        this.name = name;
        this.score = score;
    }

    incrementUserScore = (): number => this.score++;
    decreaseUserScore = (): number => this.score--;
}