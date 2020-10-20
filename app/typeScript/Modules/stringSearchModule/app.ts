export class StringSearchModule {
    searchCriterions(criterions:string[] = [], searchTerm = "") {
        let searchResult = criterions.length > 0 ? criterions.filter(criterion => {
            let searchTerms = searchTerm.split(" ").filter(x => x);
            let searchTermSearch = searchTerms.filter((term) => {
              return criterion.toUpperCase().indexOf(term.toUpperCase()) !== -1
            })
            return searchTermSearch.length > 0;
        }) : []

        let result = searchResult.length > 0;
        return result;
    }
    searchDoesNotExist = (existingValue: string = "", searchTerm: string = "") => (existingValue || "").toUpperCase().indexOf((searchTerm || "").toUpperCase()) === -1;
    combineSearchTerms = (existingValue: string = "", searchTerm: string = "") => {
       let result = `${existingValue} ${searchTerm}`;
       return result.trim();
    }
}