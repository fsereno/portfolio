
var add = (()=>{

    var counter = 0;

    return ()=>{
        counter++;
        return counter
    };

})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());