"use strict;"

export const StringSearchModule = function() {
    let searchCriterions = (criterions = [], searchTerm = "") => {
        let searchResult = criterions.length > 0 ? criterions.filter(criterion => {
            return criterion.toUpperCase().includes(searchTerm.toUpperCase());
        }) : []

        let result = searchResult.length > 0;
        return result;
    }
    return {  searchCriterions : searchCriterions }
}