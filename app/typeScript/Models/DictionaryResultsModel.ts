export class DictionaryResultsModel {

    public result: boolean;
    public description: string;

    constructor(
        result: boolean,
        description: string
    ){
        this.result = result;
        this.description = description;
    }

}