"use strict;"

import React from 'react';

export function Age(props) {

    const getDisplayAge = (age) => {

        let displayAge = "today";
        displayAge = age === 1 ? `${age} day ago` : age > 1 ? `${age} days ago` : displayAge;

        return displayAge;
    }

    return(
        <small>
            {getDisplayAge(props.age)}
        </small>
    );
}