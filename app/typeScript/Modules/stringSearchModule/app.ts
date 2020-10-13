export class StringSearchModule {
    searchCriterions(criterions:string[] = [], searchTerm = "") {
        let searchResult = criterions.length > 0 ? criterions.filter(criterion => {
            return criterion.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
        }) : []

        let result = searchResult.length > 0;
        return result;
    }
}