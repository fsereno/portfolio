"use strict;"

import { IStringService } from "../Interfaces/IStringService";
import { IRandomGeneratorService } from "../Interfaces/IRandomGeneratorService";

export class RandomGeneratorService implements IRandomGeneratorService {
    stringService: IStringService;

    constructor(stringService: IStringService) {
        this.stringService = stringService;
    }

    GenerateRandomString(criteria: string[], length: number): string {

        let output: string[] = [];

        while (output.length < length) {
            criteria.forEach(criterion => {
                let array = this.stringService.ToArray(criterion);
                array.forEach((char, i) => {
                    let indexToPush = this.Generate(array.length);
                    if (i === indexToPush && output.length < length) {
                        output.push(char);
                    }
                });
            });
        }

        let result = output.join("");

        return result;
    }

    Generate = (target: number): number => Math.floor(Math.random() * target + 1);
}