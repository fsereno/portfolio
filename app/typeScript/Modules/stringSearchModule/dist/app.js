export class StringSearchModule {
    static searchCriterions(criterions = [], searchTerm = "") {
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
StringSearchModule.searchDoesNotExist = (existingValue = "", searchTerm = "") => (existingValue || "").toUpperCase().indexOf((searchTerm || "").toUpperCase()) === -1;
StringSearchModule.combineSearchTerms = (existingValue = "", searchTerm = "") => {
    let result = `${existingValue} ${searchTerm}`;
    return result.trim();
};
//# sourceMappingURL=app.js.map