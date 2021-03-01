"use strict;"

export const getDisplayAge = (age = 0) => {

    let displayAge = "today";
    displayAge = age === 1 ? `${age} day ago` : age > 1 ? `${age} days ago` : displayAge;

    return displayAge;
}