
var arrayToUseNumeric = [2,7,5,1,7,4,6,3,4,6,8,7],
    arrayToUseAlpha = ["A","B","A","G","X","I","A","G","X","Z"];

var findDuplicates = (array) => {

    var checked = {},
        duplicate = {},
        resultArray = [];

    for(var i = 0; i < array.length; i++){
        if(checked[array[i]] === undefined){
            checked[array[i]] = true;
        } else {
            if(duplicate[array[i]] === undefined) {
                duplicate[array[i]] = true;
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray.join(",");
}

console.log(findDuplicates(arrayToUseNumeric));
console.log(findDuplicates(arrayToUseAlpha));