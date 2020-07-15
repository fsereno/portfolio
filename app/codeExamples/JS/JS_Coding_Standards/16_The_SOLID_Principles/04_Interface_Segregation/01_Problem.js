let mathFactory = (function() {
    const add = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;

    const subtract = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;

    const multiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;

    // lets add a new method because an existing method does not already do what we want
    const greetingMessage = (name) => console.log(`Hello ${name}`);

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        greetingMessage: greetingMessage

    }
})();

mathFactory.greetingMessage("James");