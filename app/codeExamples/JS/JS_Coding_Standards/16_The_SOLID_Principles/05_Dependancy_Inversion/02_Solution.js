let userDataFactory = (function() {
    const get = (callback) => {
        // this object would typically come from an API call
        let data =  {
            name: "Anna",
            colour: "Blue"
        }
        if(typeof callback === "function") {
            callback(data);
        }
    }
    const printFavouriteColour = (data) => console.log(`Hello ${data.name}, your favourite colour is ${data.colour}`);
    const printName = (data) => console.log(`Hello ${data.name}`);
    return {
        get: get,
        printFavouriteColour: printFavouriteColour,
        printName: printName
    }
})();

userDataFactory.get(userDataFactory.printFavouriteColour);
userDataFactory.get(userDataFactory.printName);