"use strict;"

import React from 'react';
import { ApplicationsContext } from '../contexts';

export function IntroContainer() {

    const context = React.useContext(ApplicationsContext);

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
              <button type="button" className="btn btn-outline-light">View Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    );
  }