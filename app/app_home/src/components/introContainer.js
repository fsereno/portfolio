"use strict;"

import React from 'react';
import { CONTENT_CONTAINER_ID } from '../constants';
import { ConfigContext } from '../contexts';

export function IntroContainer() {

  const context = React.useContext(ConfigContext);

  const handleScrollBtnClick = (event) => {
    event.preventDefault();
    const container = document.getElementById(CONTENT_CONTAINER_ID);
    window.scrollTo({ top: container.offsetTop - 50, left: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-dark" id="introContainer">
      <div id="introContent">
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
            <button type="button" className="btn btn-outline-light" onClick={handleScrollBtnClick}>View Portfolio Testing 125</button>
          </div>
        </div>
      </div>
    </div>
  );
}