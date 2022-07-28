"use strict;"

import React, { useState, useEffect } from 'react';
import { ConfigContext } from '../configContextProvider';

export function NavFilterComponent({path}) {

    const context = React.useContext(ConfigContext);
    const config = context.config;
    const applications = context.config.applications;
    const isHomeActive = path === '/index.html' || '/';
    
    console.log(context.config.applications);

    return (
        <>
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