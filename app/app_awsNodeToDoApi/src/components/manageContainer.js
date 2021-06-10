"use strict;"

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { STANDARD_ERROR } from '../constants';
import { ItemsContext, ManageContext } from "../contexts";
import { ItemForm } from './itemForm';
import { ListItems } from './listItems';

export const ManageContainer = () => {

    const manageContext = React.useContext(ManageContext);
    const itemsContext = React.useContext(ItemsContext);

    return (
        <>
            <ItemForm
                state={manageContext.state}
                dispatch={manageContext.dispatch}
                submitHandler={itemsContext.createItem}
                doneCallback={manageContext.doneCallback}
            />

            <ListItems version={itemsContext.version}/>

            {manageContext.showError &&
                <Row className="justify-content-md-center">
                    <Col lg={10}>
                        <h5 className="text-danger items">{STANDARD_ERROR}</h5>
                    </Col>
                </Row>
            }
        </>
    );
}