"use strict;"

export class StringSearchUtil {

    public static searchCriteria(criteria:string[] = [], searchTerm = "") {
        let searchResult = criteria.length > 0 ? criteria.filter(criterion => {
            let searchTerms = searchTerm.split(" ").filter(x => x);
            let searchTermSearch = searchTerms.filter((term) => {
              return criterion.toUpperCase().indexOf(term.toUpperCase()) !== -1
            })
            return searchTermSearch.length > 0;
        }) : []

        let result = searchResult.length > 0;
        return result;
    }

    public static searchDoesNotExist = (existingValue: string = "", searchTerm: string = "") => (existingValue || "").toUpperCase().indexOf((searchTerm || "").toUpperCase()) === -1;

    public static combineSearchTerms = (existingValue: string = "", searchTerm: string = "") => {
       let result = `${existingValue} ${searchTerm}`;
       return result.trim();
    }

    public static removeSearchTerm = (existingValue: string = "", searchTerm: string = "" ) => {
        const searchTerms = existingValue.split(searchTerm);
        const result = searchTerms.map(x => x.trim());
        return result.join(' ').trim();
    }
}