let callback = () => console.log("This is our callback");

let get = (callback) => {

    if (typeof callback === "function") {
        callback();
    }
}

get(callback);