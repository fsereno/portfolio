"use strict;"

import React, { useState, useEffect } from 'react';
import { getElementFadeClass } from "../../utils/getElementFadeClass";

import "./topScrollComponent.scss";

export function TopScrollComponent({threshold = 0}) {

    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[fadeClass]);

    const handleOnClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition >= threshold) {
            setFadeClass(getElementFadeClass(true));
        } else {
            setFadeClass(getElementFadeClass(false));
        }
    }

    return (
        <>
            <button
                className={`btn btn-dark fade-element ${fadeClass}`}
                id="topScrollBtn"
                onClick={handleOnClick}>
                <i className="fa fa-3x fa-angle-up"></i>
            </button>
        </>
    )
}