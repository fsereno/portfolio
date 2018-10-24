"use strict";

var arrayToUseNumeric = [2,7,5,1,7,4,6,3,4,6,8,7],
    arrayToUseAlpha = ["A","B","A","G","X","I","A","G","X","Z"];

// Initial solution, uses nested for loop. But this could be expensive with large amount of data.
var findDuplicatesV1 = (array) => {

    var resultArray = [],
        duplicates = {};

    for(var i = 0; i < array.length; i++){
        for(var d = 0; d < array.length; d++){
            if (d !== i && array[i] === array[d] && duplicates[array[i]] === undefined){
                duplicates[array[i]] = true;
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray.join(",");
}

// Improved solution, removing the need for nested for loops.
var findDuplicatesV2 = (array) => {

    var checked = {},
        duplicates = {},
        resultArray = [];

    for(var i = 0; i < array.length; i++){
        if(checked[array[i]] === undefined){
            checked[array[i]] = true;
        } else {
            if(duplicates[array[i]] === undefined) {
                duplicates[array[i]] = true;
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray.join(",");
}

console.log(findDuplicatesV1(arrayToUseNumeric));
console.log(findDuplicatesV1(arrayToUseAlpha));
console.log(findDuplicatesV2(arrayToUseNumeric));
console.log(findDuplicatesV2(arrayToUseAlpha));