import { DictionaryResultModel } from "../Models/DictionaryResultModel";

export interface IDictionaryService  {
    Find(word: string): DictionaryResultModel;
}