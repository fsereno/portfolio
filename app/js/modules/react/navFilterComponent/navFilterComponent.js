"use strict;"

import React, { useState, useEffect } from 'react';
import { ApplicationsContext } from '../applicationsContextProvider';
import { ConfigContext } from '../configContextProvider';
import { SearchBar } from '../searchBarComponent/searchBar';

export function NavFilterComponent({path}) {

    const context = React.useContext(ApplicationsContext);
    const configContext = React.useContext(ConfigContext);

    const config = configContext.config;
    const applications = context.applications;
    const isHomeActive = path === '/index.html' || '/';

    return (
        <>
            <SearchBar 
                searchBarId="searchBarNav" 
                searchInputId="searchInputNav"
                cancelBtnId="cancelBtnNav"
                openFilterBtnId="openFilterBtnNav"
                filterContainerId="filterContainerNav" />
            {applications.map((application, index) => {
                if (application.active && application.include) {
                    const appPath = `/${config.prefix}${application.folder}/index.html`;
                    const isActive = appPath === path;
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

/*
.dropdown-menu.dropdown-menu-right(aria-labelledby='navbarDropdownMenuLink')
                each application, index in htmlWebpackPlugin.options.locals.config.applications
                    if (application.active !== false && application.include !== false)
                        a(class=(htmlWebpackPlugin.options.locals.application.folder === application.folder
                        ? "active"
                        : "") + " dropdown-item",
                        href=directory+htmlWebpackPlugin.options.locals.config.prefix+application.folder+"/index.html")= application.name
                .dropdown-divider
                a(class=(htmlWebpackPlugin.options.locals.config.entry === htmlWebpackPlugin.options.locals.application.folder
                ? "active"
                : "") + " dropdown-item",
                href=directory+"index.html")
                    | Home
                    i.fa.fa-home.ml-2
*/