
"use strict;"

import React from 'react';
import { SearchBar } from './searchBar';
import { ApplicationsContext } from '../contexts';
import { CardsContainer } from './cardsContainer';

export function ContentContainer() {

    const context = React.useContext(ApplicationsContext);

    const getElementFadeClass = (condition = false) => {
        let fadeClass = "fade-element";
        fadeClass = condition ? `${fadeClass} in` : fadeClass;
        return fadeClass;
    }

    let fadeClass = getElementFadeClass(context.applications);

    return (
      <div className={`${fadeClass} container-fluid pt-4 mt-5`} id="contentContainer">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="display-4">{context.appConfig.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5>{context.appConfig.subHeading}</h5>
            <p className="text-muted">{context.appConfig.description}</p>
            <hr/>
          </div>
        </div>
        <SearchBar/>
        <CardsContainer />
      </div>
    );
  }