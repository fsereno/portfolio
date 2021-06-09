"use strict;"

import React, { useState} from 'react';

export const ItemToDo = ({item, onDeleteClick, onEditClick, onDoneClick}) => {

    const [checked, setChecked] = useState(false);

    const _doneOnClick = event => {
        event.preventDefault();
        onDoneClick(item.id);
    }

    const _onDeleteClick = event => {
        event.preventDefault();
        onDeleteClick(item.id);
    }

    const _onEditClick = event => {
        event.preventDefault();
        onEditClick(item.id);
    }

    return (
        <>
        {!item.done &&
            <>
                <a href="#" className="lead flex-fill my-0"
                    onClick={_doneOnClick}
                    onMouseEnter={() => setChecked(true)}
                    onTouchStart={() => setChecked(true)}
                    onTouchEnd={() => setChecked(false)}
                    onMouseLeave={() => setChecked(false)}>
                    <input className="mr-2" type="checkbox" checked={checked} onChange={_doneOnClick} />
                    {item.description}
                </a>
                <div>
                    <a herf="#" className="bg-dark btn btn-sm px-2 mr-2 text-white border-0" size="sm" onClick={_onEditClick}>
                        <i className="bi bi-pencil-square"></i>
                    </a>
                    <a href="#" className="bg-dark btn btn-sm px-2 mr-2 text-white border-0" size="sm" onClick={_onDeleteClick}>
                        <i className="bi bi-x-square"></i>
                    </a>
                </div>
            </>
        }
        </>
    )
}