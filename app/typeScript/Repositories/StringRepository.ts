"use strict;"
import { IStringRepository } from "../Interfaces/IStringRepository";

export class StringRepository implements IStringRepository {

    public Alphas: string;
    public Numerics: string;
    public Constonants: string;
    public Vowels: string;

    constructor() {
        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY"
        this.Vowels = "AEIOU";
    }
}