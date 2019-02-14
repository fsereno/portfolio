var createTableFromObjectArray = (array) => {
    let table = document.createElement("table");
    for(let r = 0; r < array.length; r++){
        let row = table.insertRow(r),
            obj = array[r];
        Object.keys(obj).forEach((key, i) => {
            row.insertCell(i).innerHTML = obj[key];
        });
    }
    let head = table.createTHead(),
        headerRow = head.insertRow(0),
        obj = array[0];
    Object.keys(obj).forEach((key, i) => {
        headerRow.insertCell(i).innerHTML = key;
    });
    return table;
}

var array = [];
array.push({"Column1": 0,"Column2": 2});
array.push({"Column1": 1,"Column2": 4});
array.push({"Column1": 2,"Column2": 6});

var table = createTableFromObjectArray(array);

console.log(table);