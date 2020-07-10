let mathFactory = (function() {
    const add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    const subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    const multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;

    return {
        add: add,
        subtract: subtract,
        multiply: multiply
    }
})();

mathFactory.divide = (firstNumber = 0, secondNumber = 0) => firstNumber / secondNumber;

let result = mathFactory.add(1, 2);
console.log(result);

result = mathFactory.subtract(2, 1);
console.log(result);

result = mathFactory.multiply(1, 2);
console.log(result);

result = mathFactory.divide(6, 2);
console.log(result);