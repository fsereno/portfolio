"use strict;"

import React, { useRef, useState } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

export const ToolTip = ({ message }) => {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const handler = () => {

        setShow(true);

        setTimeout(() => {

            setShow(false);

        }, 3000)
    }

    return (
        <>
            <i ref={target} onMouseEnter={handler} className="bi bi-info-square-fill"></i>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip {...props}>
                        {message}
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}