let callback = true;

let get = (callback) => {

    if (typeof callback === "function") {
        callback();
    }
}

get(callback);