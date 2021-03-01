"use strict;"

export const setEmailToRead = (id, context, read = true) => {

    let collection = [...context.inbox];

    collection = collection.map( item => {
        if (item.id === id) {
            item.read = read;
        }
        return item;
    });

    return collection;
}