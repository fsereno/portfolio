class MathFactory {
    add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;

    greetingMessage = (name) => console.log(`Hello ${name}`);
}

let mathUtil = new MathFactory();

mathUtil.greetingMessage("James");