"use strict;"

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Item } from './item';

export const ListContainer = ({items, title, hideItems, onHideClick, collapse}) => {
    return(
        <>
            {items.length > 0 &&
                <Row className={`justify-content-md-center mt-3 ${hideItems ? "d-none" : ""}`}>
                    <Col lg={10}>
                        <h4 className='d-flex justify-content-between align-items-center'>
                            {title}
                            <a className="float-right text-dark" href="#" onClick={onHideClick}>
                                {collapse.text}<i className={`bi ${collapse.class} mx-2`}></i>
                            </a>
                        </h4>
                        <hr className="border-dark" />
                        {collapse.show &&
                            <div className="list-group">
                                {items.map( x => <Item key={x.id} item={x}/>)}
                            </div>
                        }
                    </Col>
                </Row>
            }
        </>
    );
}