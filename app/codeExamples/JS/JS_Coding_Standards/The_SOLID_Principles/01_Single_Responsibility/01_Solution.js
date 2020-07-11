const add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

const subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

const multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;

let result = add(1, 2);
console.log(result);

result = subtract(2, 1);
console.log(result);

result = multiply(1, 2);
console.log(result);