"use strict;"

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const collection = [
    {
        id: 0,
        from: "someone@email.co.uk",
        heading: "Some heading 1",
        body: "Some body text here 1",
    },
    {
        id: 1,
        from: "someone@email.co.uk",
        heading: "Some heading 2",
        body: "Some body text here 2",
    },
    {
        id: 2,
        from: "someone@email.co.uk",
        heading: "Some heading 3",
        body: "Some body text here 3",
    }
]

const EmailClientContext = React.createContext();

export function EmailClient() {

    const [ selected, setSelected ] = useState(collection[0]);

    const context = {
        collection,
        selected,
        setSelected
    }

    return(
        <EmailClientContext.Provider value={context}>
            <Row>
                <Col>
                    <BrowserPane />
                </Col>
                <Col>
                    <ReadingPane />
                </Col>
            </Row>
        </EmailClientContext.Provider>
    )
}

function ListItem(props) {

    const context = React.useContext(EmailClientContext);

    const handleClick = (event) => {
        event.preventDefault();
        context.setSelected({
            id: props.id,
            from: props.from,
            heading: props.heading,
            body: props.body,
        });
    }

    const activeClass = context.selected.id === props.id ? "active" : "";

    return (
        <a href="#" onClick={handleClick} className={`list-group-item list-group-item-action ${activeClass}`} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.from}</h5>
                <small>{props.age} days ago</small>
            </div>
            <p className="mb-1">{props.heading}</p>
            <small>{props.body}...</small>
        </a>
    )
}

function ReadingPane() {

    const context = React.useContext(EmailClientContext);

    return(
        <>
            {context.selected.body}
        </>
    )
}

function BrowserPane() {

    const context = React.useContext(EmailClientContext)

    return(
        <div className="list-group">
            {context.collection.map((email) => {
                return(
                    <ListItem
                        key={email.id}
                        id={email.id}
                        from={email.from}
                        age={3}
                        heading={email.heading}
                        body={email.body}
                    />
                )
            })}
        </div>
    )
}