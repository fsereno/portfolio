import { IStringRepository } from "../Interfaces/IStringRepository";

export class StringRepository implements IStringRepository {

    public AlphaString: string;
    public NumericString: string;
    public Constonants: string;
    public Vowels: string;

    constructor(){

        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY"
        this.Vowels = "AEIOU";
        
    }
}