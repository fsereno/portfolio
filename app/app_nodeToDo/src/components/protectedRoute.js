"use strict;"

import React, { useEffect, useState} from 'react';
import { LoginContext } from '../contexts';
import { Unauthorised } from './pages/unauthorised';
import { SpinnerContext } from '../../../js/modules/react/spinnerComponent';

export const ProtectedRoute = ({Component}) => {

    const loginContext = React.useContext(LoginContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const [ show, setShow ] = useState(false);

    useEffect(() => {

        spinnerContext.showSpinner();

        const timeout = setTimeout(() => {

            setShow(true)
            spinnerContext.hideSpinner();

        }, 500);

        return () => clearTimeout(timeout);

    }, []);

    return (
        <>
            {show && loginContext.authenticated &&
                <Component />
            }
            {show && !loginContext.authenticated &&
                <Unauthorised />
            }
        </>
    );
}