"use strict;"

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { ConfigContext } from '../../../js/modules/react/configContextProvider';

export const ApplicationCard = React.memo(({application, condition}) => {

    const configContext = React.useContext(ConfigContext);

    return (
        <>
            { condition &&
                <Card className="grid-item" key={`${application.name}`}>
                    <Card.Body>
                        <Card.Title>
                            {application.name}
                        </Card.Title>
                        <Card.Text>
                            {application.subHeading}
                        </Card.Text>
                        <Card.Link className="btn btn-outline-dark btn-sm card-link" href={`${configContext.config.prefix}${application.folder}/index.html`}>View application</Card.Link>
                        <Row className="mt-3">
                            <Col>
                                {application.labels ? application.labels.map(x => {
                                    const label = configContext.config.labels[x];
                                    return (
                                        <Badge key={x} variant={label.class} className="text-light mr-2">{label.name}</Badge>
                                    )
                                }) : null}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            }
        </>
    );
}, (prev, next) => prev.condition === next.condition);