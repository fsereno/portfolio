let valueA = "abc";
let valueB = 1;
let result = 0;
if(!isNaN(valueA) && !isNaN(valueB)) {
  result = valueA * valueB;
}
console.log(result);

valueA = 2;
valueB = 2;
if(!isNaN(valueA) && !isNaN(valueB)) {
  result = valueA * valueB;
}
console.log(result);