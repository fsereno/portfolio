class MathFactory {
    add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;
}

class GreetingFactory {
    greet = (name) => console.log(`Hello ${name}`);
}

let greetingUtil = new GreetingFactory();
greetingUtil.greet("James");