let callback = true;

let get = (callback) => {

    if (callback) {
        callback();
    }
}

get(callback);