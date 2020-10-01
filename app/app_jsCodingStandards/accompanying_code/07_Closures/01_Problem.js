var increment = function(prop) {
    return !isNaN(prop) ? prop + 1 : 0;
}

var increment = function(prop) {
    return !isNaN(prop) ? prop + 2 : 0;
}

// Imagine the above methods are declared in seperate scripts, but in the same global scope.
// The context of the add method has changed. We may not be aware of the new definition.

// Now when we use the method, we are using the latter definition.
// Not our intention.

increment(0); // This will return 2