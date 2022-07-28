"use strict;"

import React, { useState } from 'react';
import { StringSearchUtil } from '../../../../typeScript/Utils/stringSearchUtil/dist/index';
import { ApplicationsContext } from '../applicationsContextProvider';
import { ConfigContext } from '../configContextProvider';

import './searchBar.scss';

export function SearchBar({searchBarId, searchInputId, cancelBtnId, openFilterBtnId, filterContainerId}) {

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
        } else {
            const search = StringSearchUtil.removeSearchTerm(searchValue, searchTerm);
            setSearcValue(search);
            handleSearch(search);
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

                application.active = application.include ? StringSearchUtil.searchCriteria(criterions, searchTerm) : false;

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
            <div id={searchBarId} className="input-group mb-3 shadow searchBar">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control searchInput" placeholder="Search applications..." id={searchInputId} value={searchValue} onChange={onSearchHandler} />
                {showClear &&
                    <div className="input-group-append cancelBtn" id={cancelBtnId}>
                        <button className="btn" type="button" onClick={resetApplications}>
                            <span className="lr">
                                <span className="rl"></span>
                            </span>
                        </button>
                    </div>}
                <div className="input-group-append">
                    <button id={openFilterBtnId} className="btn btn-dark openFilterBtn" type="button" data-toggle="collapse" data-target={`#${filterContainerId}`} aria-expanded="false" aria-controls={filterContainerId}>
                        <i className="fa fa-filter"></i>
                    </button>
                </div>
            </div>
            <div className="collapse filterContainer" id={filterContainerId}>
                <div className="pb-3">
                    <label className="d-flex flex-row justify-content-center">Quick search</label>
                    <div className="quick-search-filters d-flex justify-content-center">
                        {configContext.config.quickSearch.map(term => <button key={term} type="button" className="btn btn-outline-dark ml-2 p-0" value={term} onClick={handleQuickFilter}>{term}</button>)}
                    </div>
                </div>
            </div>
        </form>
    )
}