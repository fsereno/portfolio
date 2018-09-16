import { DictionaryResultsModel } from "../Models/DictionaryResultsModel";

export interface IDictionaryService  {
    Find(word: string): DictionaryResultsModel;
}