"use strict";

// Basic Recursion Example
var rec = (num) => {
    //Fail Safe
    if (num < 0){return};
    // Target
    if (num === 0){return 1};
    // Recursion
    return num + rec(num - 1);
}
console.log("Basic " + rec(2));

// First Factorial Example
function FirstFactorial(num) { 
  if(num === 0){
      return 1;
  }
  return num * FirstFactorial(num - 1)
}
console.log("FirstFactorial " + FirstFactorial(8));

// Complex Recursion Example
function ChessboardTraveling(str) {
  var   x = str[1], 
        y = str[3],
        a = str[6],
        b = str[8];

  var   xDiff = a - x, 
        yDiff = b - y;
        
  return recur(xDiff, yDiff);
  
  function recur(xDiff, yDiff) {
 
    if (xDiff === 0) { return 1; }
    if (yDiff === 0) { return 1; }

    var x = recur(xDiff - 1, yDiff),
        y = recur(xDiff, yDiff - 1),
        sum = x + y;
    return sum;
  }
}
console.log("Complex " + ChessboardTraveling("(2 2)(4 3)"));