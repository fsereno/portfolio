"use strict;"

import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import { Col, Row } from 'react-bootstrap';
import { EDIT, HIDE, SHOW, COLLAPSE_STATE_SHOW, COLLAPSE_STATE_HIDE } from '../constants';
import { collapseReducer } from '../reducers/collapseReducer';
import { modifiedOnComparerDesc } from '../utils/modifiedOnComparerDesc';
import { ListContainer } from './listContainer';

export const ListItems = React.memo(({showSpinner, hideSpinner, version, doneCallback, failCallback}) => {

    const history = useHistory();

    const itemsContext = React.useContext(ItemsContext);
    const [ collapseRemaining, collapseRemainingDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_SHOW);
    const [ collapseDone, collapseDoneDistpach ] = useReducer(collapseReducer, COLLAPSE_STATE_HIDE);
    const [ hideItems, setHideItems ] = useState(true);

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
                setHideItems(false);
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
            <ListContainer 
                items={items} 
                title="Remaining item" 
                hideItems={hideItems} 
                onHideClick={onHideRemainingClick} 
                collapse={collapseRemaining}
                onEditClick={onEditClick}
                onDoneClick={onDoneClick}
                onDeleteClick={onDeleteClick}
            />
            <ListContainer items={doneItems} title="Completed items" hideItems={hideItems} onHideClick={onHideDoneClick} collapse={collapseDone}/>
        </>
    );
}, (prev, next) => prev.version === next.version);