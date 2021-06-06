"use strict;"

import React, { useState } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

export const Item = ({item, onDeleteClick, onEditClick, onDoneClick}) => {

    const [checked, setChecked] = useState(false);

    const _doneOnClick = event => {
        event.preventDefault();
        setChecked(true);
        onDoneClick(item.id);
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
                            <ButtonGroup aria-label="Basic example">
                                <Button className="bg-dark btn btn-sm px-1 text-white border-0" size="sm" onClick={() => onEditClick(item.id)}>
                                    <i className="bi bi-pencil-square"></i>
                                </Button>
                                <Button className="bg-dark btn btn-sm px-1 text-white border-0" size="sm" onClick={() => onDeleteClick(item.id)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </ButtonGroup>
                        </>
                }
            </ListGroup.Item>
    );
}