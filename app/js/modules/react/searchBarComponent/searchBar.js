"use strict;"

import React, { useState } from 'react';
import { StringSearchUtil } from '../../../../typeScript/Utils/stringSearchUtil/dist/index';
import { ApplicationsContext } from '../applicationsContextProvider';
import { ConfigContext } from '../configContextProvider';

import './searchBar.scss';

export function SearchBar({
    searchBarId,
    searchInputId,
    cancelBtnId,
    openFilterBtnId,
    filterContainerId,
    showQuickFilters = true}) {

    const configContext = React.useContext(ConfigContext);
    const context = React.useContext(ApplicationsContext);
    const [showClear, setShowClear] = useState(false);
    const [searchValue, setSearcValue] = useState("");

    const noQuickFiltersClass = !showQuickFilters ? 'no-quick-filters' : '';
    const noClearWhenNoQuickFiltersClass = !showClear && !showQuickFilters ? 'no-show-clear' : '';

    const resetApplications = (e) => {
        if (e) {
            e.stopPropagation();
        }
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
                <div className="input-group-text">
                    <i className="fa fa-search"></i>
                </div>
                <input
                    type="text"
                    className={`form-control searchInput ${noClearWhenNoQuickFiltersClass}`}
                    placeholder="Search applications..."
                    id={searchInputId}
                    value={searchValue}
                    onChange={onSearchHandler} />
                {showClear &&
                    <div className={`input-group-text cancelBtn ${noQuickFiltersClass}`} id={cancelBtnId}>
                        <button type="button" onClick={resetApplications}>
                            <span className="lr">
                                <span className="rl"></span>
                            </span>
                        </button>
                    </div>}
                {showQuickFilters &&
                    <div className="input-group-text openFilterBtn">
                        <button id={openFilterBtnId} type="button" data-bs-toggle="collapse" data-bs-target={`#${filterContainerId}`} aria-expanded="false" aria-controls={filterContainerId}>
                            <i className="fa fa-filter"></i>
                        </button>
                    </div>
                }
            </div>
            {showQuickFilters &&
                <div className="collapse filterContainer" id={filterContainerId}>
                    <div className="pb-3">
                        <label className="d-flex flex-row justify-content-center mb-2">Quick search</label>
                        <div className="quick-search-filters d-flex justify-content-center">
                            {configContext.config.quickSearch.map(term => <button key={term} type="button" className="btn btn-outline-dark me-2 p-0" value={term} onClick={handleQuickFilter}>{term}</button>)}
                        </div>
                    </div>
                </div>
            }
        </form>
    )
}