"use strict;"

import React, { useState } from 'react';

export const SpinnerContext = React.createContext();

export function SpinnerComponent(props) {
    const showSpinner = props.show || false;
    const hideClass = !showSpinner ? "d-none" : "";
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

export function SpinnerContextProvider({children}) {

    const [ show, setShow ] = useState(false);

    const context = { show, setShow }

    return (
        <SpinnerContext.Provider value={context}>
            {children}
            <SpinnerComponent show={context.show}/>
        </SpinnerContext.Provider>
    )
}