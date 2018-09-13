export interface IWiktionaryService  {
    api: string;
    Find(word: string): Promise<string[]>;
}