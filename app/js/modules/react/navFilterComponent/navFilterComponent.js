"use strict;"

import React from 'react';
import { ApplicationsContext } from '../applicationsContextProvider';
import { ConfigContext } from '../configContextProvider';
import { SearchBar } from '../searchBarComponent/searchBar';
import './navFilterComponent.scss';

export function NavFilterComponent() {

    const context = React.useContext(ApplicationsContext);
    const configContext = React.useContext(ConfigContext);
    const config = configContext.config;
    const applications = context.applications;
    const isHomeActive = document.head.querySelector('[name="isRoot"]') !== null;
    const folder = document.head.querySelector('[name="folder"]').content;
    const dir = isHomeActive ? '.' : '..';

    return (
        <>
            <div className='mx-2 nav-filter-container'>
                <SearchBar
                    searchBarId="searchBarNav"
                    searchInputId="searchInputNav"
                    cancelBtnId="cancelBtnNav"
                    openFilterBtnId="openFilterBtnNav"
                    filterContainerId="filterContainerNav"
                    showQuickFilters={false} />
            </div>
            <div className='filter-scroller'>
                {applications.map((application, index) => {
                    if (application.active && application.include) {
                        const appPath = `${dir}/${config.prefix}${application.folder}/index.html`;
                        const isActive = folder === application.folder;
                        const activeClass = isActive ? 'active' : '';
                        return (
                            <a key={`${application.name}-${index}`} className={`${activeClass} dropdown-item`} href={appPath}>
                                {application.name}
                            </a>
                        )
                    }
                })}
                <div className='dropdown-divider'></div>
                <a className={`${isHomeActive ? 'active' : ''} dropdown-item`} href={`${dir}/index.html`}>
                    Home <i className='fa fa-home ml-2'></i>
                </a>
            </div>
        </>
    );
}