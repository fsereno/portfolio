"use strict;"

import React, { useState } from 'react';
import { StringSearchUtil } from '../../../typeScript/Utils/stringSearchUtil/dist';
import { ApplicationsContext } from '../contexts';

export function SearchBar() {

    const context = React.useContext(ApplicationsContext);
    const [ showClear, setShowClear ] = useState(false);

    const handleSubmit = (event) => event.preventDefault();

    const onSearchHandler = (event) => {
        let searchTerm = event.target.value;

        if (searchTerm.length > 0) { // perhaps map over instead here changing a prop to show or not
            const filteredApplications = context.applications.filter( application => {

                const criterions = [
                    application.name,
                    application.subHeading,
                    application.description,
                    application.searchTerms
                ]

                return application.active && application.include
                    ? StringSearchUtil.searchCriterions(criterions, searchTerm)
                    : false
            });
            setShowClear(true);
            context.setApplications(filteredApplications);

        } else {
            setShowClear(false);
            context.setApplications(context.unmodified);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="searchBar" className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Search applications..." id="searchInput" onChange={onSearchHandler}/>
                {showClear &&
                    <div className="input-group-append" id="cancelBtn">
                        <button className="btn" type="button" >
                            <span className="lr">
                                <span className="rl"></span>
                            </span>
                        </button>
                    </div>
                }
            <div className="input-group-append">
                    <button id="openFilterBtn" className="btn btn-dark" type="button" data-toggle="collapse" data-target="#filterContainer" aria-expanded="false" aria-controls="filterContainer">
                        <i className="fa fa-filter"></i>
                    </button>
                </div>
            </div>
            <div className="collapse" id="filterContainer">
                <div className="pb-3">
                    <label className="d-flex flex-row justify-content-center">Quick search</label>
                    <div className="btn-group d-flex flex-row justify-content-center">
                        <button type="button" className="btn btn-outline-dark flex-grow-0" value="React" >React</button>
                        <button type="button" className="btn btn-outline-dark flex-grow-0" value="TypeScript" >TypeScript</button>
                        <button type="button" className="btn btn-outline-dark flex-grow-0" value=".NET Core" >.NET Core</button>
                    </div>
                </div>
            </div>
        </form>
    )
}