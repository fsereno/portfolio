"use strict;"

import React from 'react';
import { ApplicationsContext } from '../applicationsContextProvider';
import { ConfigContext } from '../configContextProvider';
import { SearchBar } from '../searchBarComponent/searchBar';

export function NavFilterComponent({path}) {

    const context = React.useContext(ApplicationsContext);
    const configContext = React.useContext(ConfigContext);
    const config = configContext.config;
    const applications = context.applications;
    const isHomeActive = document.head.querySelector('[name="isRoot"]') !== null;

    return (
        <>
            <div className='mx-2'>
                <SearchBar
                    searchBarId="searchBarNav"
                    searchInputId="searchInputNav"
                    cancelBtnId="cancelBtnNav"
                    openFilterBtnId="openFilterBtnNav"
                    filterContainerId="filterContainerNav"
                    showQuickFilters={false} />
            </div>
            {applications.map((application, index) => {
                if (application.active && application.include) {
                    const dir = isHomeActive ? '.' : '..';
                    const appPath = `${dir}/${config.prefix}${application.folder}/index.html`;
                    const isActive = appPath.includes(path) && !isHomeActive;
                    const activeClass = isActive ? 'active' : '';
                    return (
                        <a key={`${application.name}-${index}`} className={`${activeClass} dropdown-item`} href={appPath}>
                            {application.name}
                        </a>
                    )
                }
            })}
            <div className='dropdown-divider'></div>
            <a className={`${isHomeActive ? 'active' : ''} dropdown-item`} href='/index.html'>
                Home <i className='fa fa-home ml-2'></i>
            </a>
        </>
    );
}