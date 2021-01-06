"use strict;"

import React from 'react';

export let SpinnerComponent = function(props) {
    let showSpinner = props.show || false;
    let hideClass = !showSpinner ? "d-none" : "";
    return (
        <div>
            <div id="spinner" className={`${hideClass} spinner-container overlay`}>
            </div>
            <div id="loader" className={`${hideClass} item loading`}>
                <div className="spinner">
                    <div className="circle circle-1">
                        <div className="circle-inner"></div>
                    </div>
                    <div className="circle circle-2">
                        <div className="circle-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};