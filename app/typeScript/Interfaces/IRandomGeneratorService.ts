
export interface IRandomGeneratorService  {
    AlphaString: string;
    NumericString: string;
    Constonants: string;
    Vowels: string;
    GenerateRandom(criteria: string[], length:number) : string;
}