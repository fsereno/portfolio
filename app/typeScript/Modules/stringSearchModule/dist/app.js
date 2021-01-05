export class StringSearchModule {
    constructor() {
        this.searchDoesNotExist = (existingValue = "", searchTerm = "") => (existingValue || "").toUpperCase().indexOf((searchTerm || "").toUpperCase()) === -1;
        this.combineSearchTerms = (existingValue = "", searchTerm = "") => {
            let result = `${existingValue} ${searchTerm}`;
            return result.trim();
        };
    }
    searchCriterions(criterions = [], searchTerm = "") {
        let searchResult = criterions.length > 0 ? criterions.filter(criterion => {
            let searchTerms = searchTerm.split(" ").filter(x => x);
            let searchTermSearch = searchTerms.filter((term) => {
                return criterion.toUpperCase().indexOf(term.toUpperCase()) !== -1;
            });
            return searchTermSearch.length > 0;
        }) : [];
        let result = searchResult.length > 0;
        return result;
    }
}
//# sourceMappingURL=app.js.map