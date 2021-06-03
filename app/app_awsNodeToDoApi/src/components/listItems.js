"use strict;"

import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { Col, Row } from 'react-bootstrap';
import { EDIT, HIDE, SHOW, COLLAPSE_STATE_SHOW, COLLAPSE_STATE_HIDE } from '../constants';
import { collapseReducer } from '../reducers/collapseReducer';
import { modifiedOnComparerDesc } from '../utils/modifiedOnComparerDesc';

export const ListItems = React.memo(({showSpinner, hideSpinner, version, doneCallback, failCallback}) => {

    const history = useHistory();

    const itemsContext = React.useContext(ItemsContext);
    const [ collapseRemaining, collapseRemainingDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_SHOW);
    const [ collapseDone, collapseDoneDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_HIDE);


    const [ hide, setHide ] = useState(true);

    const items = itemsContext.getRemainingItems();
    const doneItems = itemsContext.getDoneItems();

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
        showSpinner();
        itemsContext.itemDone(id)
            .then(() => doneCallback())
            .catch(() => failCallback());
    }

    const onDeleteClick = (id) => {
        showSpinner();
        itemsContext.deleteItem(id)
            .then(() => doneCallback())
            .catch(() => failCallback());
    }

    useEffect(() => {
        showSpinner();
        itemsContext.getItems()
            .then(response => {

                const items = response.data || [];
                items.sort(modifiedOnComparerDesc);

                itemsContext.setItems(items);
                hideSpinner();
                setHide(false);
            }).catch(() => failCallback());
    }, [version]);

    return (
        <>
            {items.length === 0 &&
                <Row className="justify-content-md-center">
                    <Col lg={10}>
                        <h4>You have no items to complete</h4>
                    </Col>
                </Row>
            }
            {items.length > 0 &&
                <Row className={`justify-content-md-center ${hide ? "d-none" : ""}`}>
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
                <Row className={`justify-content-md-center mt-3 ${hide ? "d-none" : ""}`}>
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
}, (prev, next) => prev.version === next.version);