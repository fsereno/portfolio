"use strict;"

import React, { useState, useLayoutEffect } from 'react';
import { WebGLCheckerUtil } from '../../../js/modules/utils/webGLCheckerUtil';
import { CONTENT_CONTAINER_ID, FAUX_LOADING_TIME } from '../constants';
import { ConfigContext, SpinnerContext } from '../contexts';
import { HomeThreeModule } from '../homeThreeModule';
import { addNavbarTransScrollEventListener } from '../utils/addNavbarTransScrollEventListener';
import { getElementFadeClass } from '../../../js/modules/utils/getElementFadeClass';
import { removeDarkClass } from '../utils/removeDarkClass';

export function IntroContainer() {

    const isBrowserValid = WebGLCheckerUtil.isWebGL2Available() || WebGLCheckerUtil.isWebGLAvailable();
    const context = React.useContext(ConfigContext);
    const spinnerContext = React.useContext(SpinnerContext);
    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    const handleScrollBtnClick = (event) => {
      event.preventDefault();
      const container = document.getElementById(CONTENT_CONTAINER_ID);
      window.scrollTo({top: container.offsetTop - 50,left: 0, behavior: "smooth"});
    }

    const loadHandler = () => {
      setTimeout(() => {
        removeDarkClass();
        setFadeClass(getElementFadeClass(true));
        spinnerContext.setShow(false);
      }, FAUX_LOADING_TIME);
    }

    useLayoutEffect(() => {
      addNavbarTransScrollEventListener();
      if (isBrowserValid) {
        HomeThreeModule.then((homeThreeModule) => {
          homeThreeModule.init();
          loadHandler();
        });
      } else {
        loadHandler();
      }
    },[]);

    return (
      <div className="bg-dark" id="introContainer">
        <div id="introContent" className={fadeClass}>
          <div id="canvasContainer"></div>
          <div id="introContentInner">
            <div id="introImage" className="text-center element">
              <img className="img-fluid" src="images/FSLogo.png" alt="Logo" />
            </div>
            <div id="introHeadings" className="text-center element">
              <h1 className="display-4 mb-0">{context.config.author}</h1>
              <h4 className="display-4 sub-heading lead text-white">{context.config.role}</h4>
            </div>
            <div id="btnContainer" className="text-center element pt-2">
              <button type="button" className="btn btn-outline-light" onClick={handleScrollBtnClick}>View Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    );
  }