"use strict;"

export const setEmailToRead = (id, messages, read = true) => {

    let collection = [...messages];

    collection = collection.map( item => {
        if (item.id === id) {
            item.read = read;
        }
        return item;
    });

    return collection;
}