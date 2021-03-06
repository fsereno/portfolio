"use strict;"

import React, { useState } from 'react';
import { StringSearchUtil } from '../../../typeScript/Utils/stringSearchUtil/dist';
import { ApplicationsContext, ConfigContext } from '../contexts';

export function SearchBar() {

    const configContext = React.useContext(ConfigContext);
    const context = React.useContext(ApplicationsContext);
    const [showClear, setShowClear] = useState(false);

    const [searchValue, setSearcValue] = useState("");

    const resetApplications = () => {
        setShowClear(false);
        setSearcValue("");
        const resetApplications = context.applications.map(application => {
            application.active = application.include ? true : false;
            return application;
        });
        context.setApplications(resetApplications);
    }

    const handleSubmit = (event) => event.preventDefault();

    const onSearchHandler = (event) => {
        const searchTerm = event.target.value;
        setSearcValue(searchTerm)
        handleSearch(searchTerm);
    }

    const handleQuickFilter = (event) => {
        const searchTerm = event.target.value;

        if (StringSearchUtil.searchDoesNotExist(searchValue, searchTerm)) {
            const combinedSearch = StringSearchUtil.combineSearchTerms(searchValue, searchTerm);
            setSearcValue(combinedSearch);
            handleSearch(combinedSearch);
        }
    }

    const handleSearch = (searchTerm = "") => {
        if (searchTerm.length > 0) {
            const filteredApplications = context.applications.map(application => {

                const criterions = [
                    application.name,
                    application.subHeading,
                    application.description,
                    application.searchTerms
                ]

                application.active = application.include ? StringSearchUtil.searchCriterions(criterions, searchTerm) : false;

                return application;
            });
            setShowClear(true);
            context.setApplications(filteredApplications);

        } else {
            resetApplications();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="searchBar" className="input-group mb-3 shadow">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Search applications..." id="searchInput" value={searchValue} onChange={onSearchHandler} />
                {showClear &&
                    <div className="input-group-append" id="cancelBtn">
                        <button className="btn" type="button" onClick={resetApplications}>
                            <span className="lr">
                                <span className="rl"></span>
                            </span>
                        </button>
                    </div>}
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
                        {configContext.config.quickSearch.map(term => <button key={term} type="button" className="btn btn-outline-dark flex-grow-0" value={term} onClick={handleQuickFilter}>{term}</button>)}
                    </div>
                </div>
            </div>
        </form>
    )
}