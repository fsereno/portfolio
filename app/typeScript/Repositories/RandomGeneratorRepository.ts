import { IRandomGeneratorRepository } from "../Interfaces/IRandomGeneratorRepository";

export class RandomGeneratorRepository implements IRandomGeneratorRepository {

    public Alphas: string;
    public Numerics: string;
    public Constonants: string;
    public Vowels: string;

    constructor(){

        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY"
        this.Vowels = "AEIOU";
        
    }
}