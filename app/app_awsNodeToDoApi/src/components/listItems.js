"use strict;"


import React, { useEffect } from 'react';
import { ConfigContext } from '../../../js/modules/react/configContextProvider';
import { ItemsContext } from '../contexts';
import { Item } from './item';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { POOL_DATA } from '../constants';
import { XmlHttpRequestUtil } from '../../../js/modules/utils/XMLHttpRequestUtil';
import { Col, Row } from 'react-bootstrap';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export const ListItems = () => {

    const configContext = React.useContext(ConfigContext);
    const itemsContext = React.useContext(ItemsContext);
    const spinnerContext = React.useContext(SpinnerContext);

    const endpoints = configContext.appConfig.endpoints;
    const API_ENDPOINT = `${endpoints.base}/${endpoints.api}`;

    const getItems = () => {

        const userPool = new CognitoUserPool(POOL_DATA);

        const currentUser = userPool.getCurrentUser();

        if (currentUser != null ) {

            currentUser.getSession(err => {

                if (err != null ) {

                    console.error(err.message);

                } else {

                    spinnerContext.setShow(true);

                    const idToken = currentUser.signInUserSession.idToken.jwtToken;

                    const xhttp = new XMLHttpRequest();

                    xhttp.onreadystatechange = (result) => {

                        const data = result.currentTarget;

                        if (XmlHttpRequestUtil.isDone(data.status, data.readyState)) {
                            const items = JSON.parse(data.response);

                            console.log(items);

                            itemsContext.setItems(items);
                            spinnerContext.setShow(false);
                        } else if (XmlHttpRequestUtil.isFail(data.status, data.readyState)) {
                            spinnerContext.setShow(false);
                        }
                    }

                    xhttp.open("GET", API_ENDPOINT);
                    xhttp.setRequestHeader("Authorization", idToken);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send();
                }
            });
        }
    }

    useEffect(() => {

        if (itemsContext.hasNoItems()) {
            getItems();
        }

    }, []);

    return (
        <Row>
            <Col lg={6}>
                <ul className="list-group">
                    {itemsContext.items.map( x => <Item key={x.id} item={x}/> )}
                </ul>
            </Col>
        </Row>
    );
}