const methodFactory = function() {
    return function(prop) {
        return !isNaN(prop) ? prop + 1 : 0;
    }
}

let increment = methodFactory();

increment(0); // This will return 1