"use strict;"

import { IStringService } from "./IStringService";
export interface IRandomGeneratorService  {
    stringService: IStringService;
    GenerateRandomString(criteria: string[], length:number) : string;
    Generate(target:number): number;
}