"useStrict;"

import React, { useState, useLayoutEffect } from "react";
import { SpinnerContext } from "../../../js/modules/react/spinnerComponent";
import { getElementFadeClass } from "../../../js/modules/utils/getElementFadeClass";
import { WebGLCheckerUtil } from "../../../js/modules/utils/webGLCheckerUtil";
import { FAUX_LOADING_TIME } from "../constants";
import { HomeThreeModule } from "../homeThreeModule";
import { addNavbarTransScrollEventListener } from "../utils/addNavbarTransScrollEventListener";

export const AppContainer = ({ children }) => {

    const isBrowserValid = WebGLCheckerUtil.isWebGL2Available() || WebGLCheckerUtil.isWebGLAvailable();
    const spinnerContext = React.useContext(SpinnerContext);
    const [fadeClass, setFadeClass] = useState(getElementFadeClass(false));

    const loadHandler = () => {
        setTimeout(() => {
            setFadeClass(getElementFadeClass(true));
            spinnerContext.setShow(false);
        }, FAUX_LOADING_TIME);
    }

    useLayoutEffect(() => {
        spinnerContext.setShow(true);
        addNavbarTransScrollEventListener();
        if (isBrowserValid) {
            HomeThreeModule.then((homeThreeModule) => {
                homeThreeModule.init();
                loadHandler();
            });
        } else {
            loadHandler();
        }
    }, []);

    return (
        <div className={fadeClass}>
            {children}
        </div>
    )
}