"use strict;"

import React from 'react';
import { LoginContext } from '../contexts';
import { Unauthorised } from './pages/unauthorised';

export const ProtectedRoute = ({Component}) => {

    const loginContext = React.useContext(LoginContext);

    return (
        <>
            {loginContext.authenticated &&
                <Component />
            }
            {!loginContext.authenticated &&
                <Unauthorised />
            }
        </>
    )
}