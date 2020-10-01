let mathFactory = (function() {
    const add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    const subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    const multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
    }
})();

// Make a new module
let greetingFactory = (function() {

    const greet = (name) => console.log(`Hello ${name}`);

    return {
        greet: greet
    }
})();

greetingFactory.greet("James");