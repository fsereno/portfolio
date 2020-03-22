"use strict";

const add = function(numberToAdd) {
    return (numberToAddTo) => {
        return numberToAdd + numberToAddTo;
    };
}

const addFunction = add(5);
const result = addFunction(1);
console.log(result === 6);