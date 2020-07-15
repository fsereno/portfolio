let userDataFactory = (function() {
    const get = () => {
        // this object would typically come from an API call
        let data =  {
            name: "Anna",
            colour: "Blue"
        }
        return data;
    }
    const printFavouriteColour = (data) => console.log(`Hello ${data.name}, your favourite colour is ${data.colour}`);
    const printName = (data) => console.log(`Hello ${data.name}`);
    return {
        get: get,
        printFavouriteColour: printFavouriteColour,
        printName: printName
    }
})();

let user = userDataFactory.get();
userDataFactory.printName();
userDataFactory.printFavouriteColour();