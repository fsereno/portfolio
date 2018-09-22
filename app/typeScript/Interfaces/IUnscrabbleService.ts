
export interface IUnscrabbleService  {
    Unscrabble(findThis: string, inThis: string) : boolean;
    unscrabbleAll(randomString: string) : string[];
    winner(yourResults: string, unscrabblerResults: string) : string;
}