"use strict;"

export const setEmailToRead = (id, context) => {

    let collection = [...context.inbox];

    collection = collection.map( item => {
        if (item.id === id) {
            item.read = true;
        }
        return item;
    });

    return collection;
}