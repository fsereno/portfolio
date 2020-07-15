class MathFactory {

    add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;
}

let mathUtil = new MathFactory();

MathFactory.prototype.divide = (firstNumber = 0, secondNumber = 0) => firstNumber / secondNumber;

let result = mathUtil.add(1, 2);
console.log(result);

result = mathUtil.subtract(2, 1);
console.log(result);

result = mathUtil.multiply(1, 2);
console.log(result);

result = mathUtil.divide(6, 2);
console.log(result);