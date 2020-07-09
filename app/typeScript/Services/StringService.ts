"use strict;"
import { IStringService } from "../Interfaces/IStringService";
import { IStringRepository } from "../Interfaces/IStringRepository";

export class StringService implements IStringService {
    stringRepository: IStringRepository;
    Alphas: string;
    Numerics: string;
    Constonants: string;
    Vowels: string;

    constructor(stringRepository: IStringRepository) {
        this.stringRepository = stringRepository;
        this.Alphas = this.stringRepository.Alphas;
        this.Numerics = this.stringRepository.Numerics;
        this.Vowels = this.stringRepository.Vowels;
        this.Constonants = this.stringRepository.Constonants;
    }

    public Concat(a: string, b: string): string {
        if (a === undefined || b === undefined) {
            throw new Error('Undefined Parameter');
        }
        return a + " " + b;
    }

    public FindReplace(
        findThis: string,
        inThis: string,
        replaceWithThis: string): string {
        let searchRegex = new RegExp(findThis, "g"),
            replaceRegex = new RegExp("\\b" + findThis + "\\b"),
            count = (inThis.match(searchRegex) || []).length;

        for (let index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
        }
        return inThis;
    }

    public ToArray(input: string): string[] {
        let result = [];
        for (let i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    }
}