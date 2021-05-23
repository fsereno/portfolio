"use strict;"

import "regenerator-runtime/runtime";
import React, { useEffect, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';
import { EDIT, HIDE, SHOW, COLLAPSE_STATE_SHOW, COLLAPSE_STATE_HIDE } from '../constants';
import { collapseReducer } from '../reducers/collapseReducer';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export const ListItems = () => {

    const history = useHistory();

    const itemsContext = React.useContext(ItemsContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const [ version, setVersion ] = useState(0);
    const [ collapseRemaining, collapseRemainingDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_SHOW);
    const [ collapseDone, collapseDoneDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_HIDE);

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

    const onDoneClick = (id) => itemsContext.itemDone({
        id,
        beforeCallback: spinnerContext.showSpinner,
        doneCallback,
        failCallback
    });

    const onDeleteClick = (id) => itemsContext.deleteItem({
        id,
        beforeCallback: spinnerContext.showSpinner,
        doneCallback,
        failCallback
    });

    const doneCallback = () => {
        spinnerContext.hideSpinner();
        setVersion(version + 1);
    }

    const failCallback = () => {
        spinnerContext.hideSpinner();
        itemsContext.setShowFeedback(true);
    }

    useEffect(() => {
        spinnerContext.showSpinner();
        itemsContext.getItems()
            .then(response => {
                spinnerContext.hideSpinner();
                itemsContext.setItems(response.data);
            }).catch(() => failCallback());
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
                        <hr className="border-dark" />
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
                        <hr className="border-dark" />
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