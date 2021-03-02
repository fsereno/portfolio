"use strict;"

export const setEmailToRead = (id, inbox, read = true) => {

    let collection = [...inbox];

    collection = collection.map( item => {
        if (item.id === id) {
            item.read = read;
        }
        return item;
    });

    return collection;
}