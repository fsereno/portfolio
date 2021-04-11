"use strict;"

import React from 'react';

function RenderClearBtn() {
    return (
        <div className="input-group-append" id="cancelBtn">
            <button className="btn" type="button" >
                <span className="lr">
                    <span className="rl"></span>
                </span>
            </button>
        </div>
    )
}

export function SearchBar() {
    return (
        <form>
            <div id="searchBar" className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Search applications..." id="searchInput" />
                <RenderClearBtn />
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