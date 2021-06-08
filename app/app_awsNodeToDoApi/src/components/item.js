"use strict;"

import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap';

export const Item = React.memo(({item, onDeleteClick, onEditClick, onDoneClick}) => {

    const [checked, setChecked] = useState(false);

    const _doneOnClick = event => {
        event.preventDefault();
        setChecked(true);
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
            <ListGroup.Item variant={item.done ? "dark" : "" } className="d-flex justify-content-between align-items-center">
                {item.done
                    ?
                        <>
                            <input type="checkbox" checked disabled />
                            <p className="lead flex-fill ml-3 my-0"><del>{item.description}</del></p>
                        </>
                    :   <>
                            <input type="checkbox" checked={checked} onChange={_doneOnClick} />
                            <a href="#" className="lead flex-fill ml-3 my-0" onClick={_doneOnClick}>{item.description}</a>
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
            </ListGroup.Item>
    );
},(prev, next) => {
    if(prev.item.done === next.item.done
    && prev.item.description === next.item.description
    && prev.item.targetDate === next.item.targetDate
    && prev.item.modifiedOn === next.item.modifiedOn) {
        return true;
    }

    return false;
});