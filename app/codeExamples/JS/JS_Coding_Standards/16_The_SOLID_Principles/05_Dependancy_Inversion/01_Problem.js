let userDataFactory = (function() {
    const get = () => {
        // this object would typically come from an API call
        let data =  {
            name: "Anna",
            colour: "Blue"
        }
        printFavouriteColour(data);
    }
    const printFavouriteColour = (data) => console.log(`Hello ${data.name}, your favourite colour is ${data.colour}`);
    return {
        get: get
    }
})();

userDataFactory.get();