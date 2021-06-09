"use strict;"

import React from 'react';

export const DoneItem = ({item}) => {
    return (
        <>
            {item.done &&
                <>
                    <input type="checkbox" checked disabled />
                    <p className="lead flex-fill ml-3 my-0"><del>{item.description}</del></p>
                </>
            }
        </>
    )
}