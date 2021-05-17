"use strict;"

import React, { useEffect, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';
import { EDIT, HIDE, SHOW } from '../constants';
import { collapseReducer } from '../reducers/collapseReducer';

export const ListItems = () => {

    const history = useHistory();

    const initialCompleteState = { show: true, text: "Show", class: "bi-plus-square" };

    const itemsContext = React.useContext(ItemsContext);

    const [ version, setVersion ] = useState(0);

    const [ collapseRemaining, collapseRemainingDistpach ] = useReducer(collapseReducer, initialCompleteState);
    const [ collapseDone, collapseDoneDistpach ] = useReducer(collapseReducer, initialCompleteState);

    const onHideRemainingClick = (event) => {
        event.preventDefault();
        collapseRemaining.show ? collapseRemainingDistpach({type: HIDE }) : collapseRemainingDistpach({type: SHOW});
    }

    const onHideDoneClick = (event) => {
        event.preventDefault();
        collapseDone.show ? collapseDoneDistpach({type: HIDE }) : collapseDoneDistpach({type: SHOW});
    }

    const onEditClick = (id) => {
        itemsContext.selectedId.current = id;
        history.push(EDIT);
    }

    const onDoneClick = (id) => {
        itemsContext.selectedId.current = id;
        itemsContext.itemDone(successCallback);
    }

    const onDeleteClick = (id) => {
        itemsContext.selectedId.current = id;
        itemsContext.deleteItem(successCallback);
    }

    const successCallback = () => {
        setVersion(version + 1);
    }

    useEffect(() => {
        itemsContext.getItems();
    }, [version]);

    const items = itemsContext.items.filter( x => !x.done);
    const doneItems = itemsContext.items.filter( x => x.done);

    return (
        <>
            {items.length === 0 &&
                <Row className="justify-content-md-center">
                    <Col lg={10}>
                        <h4>You have no items</h4>
                    </Col>
                </Row>
            }
            {items.length > 0 &&
                <Row className="justify-content-md-center">
                    <Col lg={10}>
                        <h4>Remaining items <a className="float-right text-dark" href="#" onClick={onHideRemainingClick}>{collapseRemaining.text}<i className={`bi ${collapseRemaining.class} mx-2`}></i></a></h4>
                        {collapseRemaining.show &&
                            <ul className="list-group">
                                {items.map( x => <Item key={x.id} item={x} onDoneClick={onDoneClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/> )}
                            </ul>
                        }
                    </Col>
                </Row>
            }
            {doneItems.length > 0 &&
                <Row className="justify-content-md-center mt-3">
                    <Col lg={10}>
                        <h4>Completed items <a className="float-right text-dark" href="#" onClick={onHideDoneClick}>{collapseDone.text}<i className={`bi ${collapseDone.class} mx-2`}></i></a></h4>
                        {collapseDone.show &&
                            <ul className="list-group">
                                {doneItems.map( x => <Item key={x.id} item={x} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/> )}
                            </ul>
                        }
                    </Col>
                </Row>
            }
        </>
    );
}