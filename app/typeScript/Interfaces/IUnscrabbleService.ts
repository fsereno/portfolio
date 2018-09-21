
export interface IUnscrabbleService  {

    Unscrabble(findThis: string, inThis: string) : boolean;
    unscrabbleAll(randomString: string) : string[];

}