
"use strict;"

import React from 'react';
import { SearchBar } from '../../../js/modules/react/searchBarComponent/searchBar';
import { ConfigContext } from '../../../js/modules/react/configContextProvider';
import { CardsContainer } from './cardsContainer';
import { TopScrollComponent } from '../../../js/modules/react/topScrollComponent/topScrollComponent';

export function ContentContainer() {

  const res = fetch("/api");


  res.then(r => { console.log(r) });

  console.log(res)
  console.log("test");

  const context = React.useContext(ConfigContext);

  const topScrollComponentThreshold = 270;

  return (
    <div className={`container-fluid pt-4 bg-white`} id="contentContainer">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="display-4">{context.appConfig.name}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h5>{context.appConfig.subHeading}</h5>
          <p className="text-muted">{context.appConfig.description}</p>
          <hr />
        </div>
      </div>
      <SearchBar
        searchBarId="searchBar"
        searchInputId="searchInput"
        cancelBtnId="cancelBtn"
        openFilterBtnId="openFilterBtn"
        filterContainerId="filterContainer"
      />
      <CardsContainer />
      <TopScrollComponent threshold={topScrollComponentThreshold} />
    </div>
  );
}