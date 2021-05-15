"use strict;"

import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

export const Item = ({item, onDeleteClick, onEditClick, onDoneClick}) => {
    return (
            <ListGroup.Item variant={item.done ? "dark" : "" }className="d-flex justify-content-between align-items-center">
                <p className="lead m-1">{item.description}</p>
                {!item.done &&
                    <ButtonGroup aria-label="Basic example">
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={() => onDoneClick(item.id)}>
                            <i className="bi bi-check2-square"></i>
                        </Button>
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={() => onEditClick(item.id)}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button className="bg-dark btn btn-sm px-1 py-0 text-white border-0" size="sm" onClick={() => onDeleteClick(item.id)}>
                            <i className="bi bi-trash"></i>
                        </Button>
                    </ButtonGroup>
                }
            </ListGroup.Item>
    );
}

//list-group-item d-flex justify-content-between align-items-center