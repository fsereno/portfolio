"use strict;"

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { ConfigContext } from '../contexts';

export function ApplicationCard(props) {

    const configContext = React.useContext(ConfigContext);

    if (props.condition) {
        return (
            <Card className="grid-item" key={`${props.application.name}`}>
                <Card.Body>
                    <Card.Title>
                        {props.application.name}
                    </Card.Title>
                    <Card.Text>
                        {props.application.subHeading}
                    </Card.Text>
                    <Card.Link className="btn btn-outline-dark btn-sm card-link" href={`${configContext.config.prefix}${props.application.folder}/index.html`}>View application</Card.Link>
                    <Row className="mt-3">
                        <Col>
                            {props.application.labels ? props.application.labels.map(x => {
                                const label = configContext.config.labels[x];
                                return (
                                    <Badge key={x} variant={label.class} className="text-light mr-2">{label.name}</Badge>
                                )
                            }) : null}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    } else {
        return null;
    }
}
