"use strict;"
export class DictionaryResultModel {
    public result: boolean;
    public description: string;
    public word: string

    constructor(
        result: boolean,
        description: string,
        word: string) {
        this.result = result;
        this.description = description;
        this.word = word;
    }
}