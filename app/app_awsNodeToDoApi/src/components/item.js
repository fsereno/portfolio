"use strict;"

import React, { useState } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { CHECKED_SQUARE, EMPTY_SQUARE } from '../constants';

export const Item = ({item, onDeleteClick, onEditClick, onDoneClick}) => {

    const [ doneClass, setDoneClass ] = useState(EMPTY_SQUARE);

    const _doneOnClick = () => onDoneClick(item.id);

    return (
            <ListGroup.Item variant={item.done ? "dark" : "" } className="d-flex justify-content-between align-items-center">
                <p className="lead m-1">{item.description}</p>
                {!item.done &&
                    <ButtonGroup aria-label="Basic example">
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={_doneOnClick} onMouseOver={() => setDoneClass(CHECKED_SQUARE)} onMouseOut={() => setDoneClass(EMPTY_SQUARE)}>
                            <i className={`bi ${doneClass}`}></i>
                        </Button>
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={() => onEditClick(item.id)}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={() => onDeleteClick(item.id)}>
                            <i className="bi bi-trash"></i>
                        </Button>
                    </ButtonGroup>
                }
                {item.done &&
                    <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" disabled>
                        <i className="bi bi-check2-square"></i>
                    </Button>
                }
            </ListGroup.Item>
    );
}