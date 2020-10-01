const doMath = (firstNumber = 0, secondNumber = 0, operator = "+") => {
    let result = 0;
    if(operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "x") {
        result = firstNumber * secondNumber;
    }
    return result;
}


let result = doMath(1, 2, "+");
console.log(result);

result = doMath(2, 1, "-");
console.log(result);

result = doMath(1, 2, "x");
console.log(result);