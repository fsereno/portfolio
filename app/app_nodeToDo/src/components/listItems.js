"use strict;"

import React, { useState, useEffect, useReducer } from 'react';
import { ItemsContext, ManageContext } from '../contexts';
import { Col, Row } from 'react-bootstrap';
import { HIDE, SHOW, COLLAPSE_STATE_SHOW, COLLAPSE_STATE_HIDE } from '../constants';
import { collapseReducer } from '../reducers/collapseReducer';
import { modifiedOnComparerDesc } from '../utils/modifiedOnComparerDesc';
import { ListContainer } from './listContainer';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export const ListItems = React.memo(({version}) => {

    const itemsContext = React.useContext(ItemsContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const manageContext = React.useContext(ManageContext);

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

    useEffect(() => {
        spinnerContext.showSpinner();
        itemsContext.getItems()
            .then(response => {

                const items = response.data || [];
                items.sort(modifiedOnComparerDesc);

                itemsContext.setItems(items);
                spinnerContext.hideSpinner();
                setHideItems(false);
            }).catch(() => manageContext.failCallback());
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
                title="Remaining items"
                hideItems={hideItems}
                onHideClick={onHideRemainingClick}
                collapse={collapseRemaining}
            />
            <ListContainer
                items={doneItems}
                title="Completed items"
                hideItems={hideItems}
                onHideClick={onHideDoneClick}
                collapse={collapseDone}
            />
        </>
    );
}, (prev, next) => prev.version === next.version);