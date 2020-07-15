(function () {
    function myFunction() {
        console.log("Local Scope");
    }
    myFunction();
})();

function myFunction() {
    console.log("Global Scope");
}
myFunction();