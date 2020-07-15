//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    const base = 0;

    const myMethod = function(prop) {
        return base + prop;
    }

    return {
        myMethod: myMethod
    };
});