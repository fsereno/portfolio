
"use strict;"

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SearchBar } from './searchBar';
import { ConfigContext } from '../contexts';
import { CardsContainer } from './cardsContainer';
import { getElementFadeClass } from '../../../js/modules/utils/getElementFadeClass';

export function ContentContainer() {

    const context = React.useContext(ConfigContext);
    const [ fadeClass, setFadeClass ] = useState(getElementFadeClass(false));

    useLayoutEffect(() => {
      setFadeClass(getElementFadeClass(true));
    },[])

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