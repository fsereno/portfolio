"use strict;"

import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

export const Item = ({item, onDeleteClick, onEditClick, onDoneClick}) => {

    const [ done, setDone ] = useState(false);
    const [ doneClass, setDoneClass ] = useState("bi-square");

    const _doneOnClick = () => {
        setDoneClass("bi-check2-square");
        setDone(true);
    }

    useEffect( () => {
        if(done) {
            onDoneClick(item.id);
        }
    }, [doneClass])

    return (
            <ListGroup.Item variant={item.done ? "dark" : "" }className="d-flex justify-content-between align-items-center">
                <p className="lead m-1">{item.description}</p>
                {!item.done &&
                    <ButtonGroup aria-label="Basic example">
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={_doneOnClick}>
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