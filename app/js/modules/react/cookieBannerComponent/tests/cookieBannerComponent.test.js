/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import { CookieBannerComponent } from '../cookieBannerComponent';
import { ConfigContextProvider } from '../../configContextProvider';

jest.mock('../../cookieBannerComponent/cookieBannerComponent.scss', () => '');

jest.mock('../../../../../../config.json', () => {
    return {
        "labels": [
            { "name": "JavaScript", "class": "warning" },
            { "name": "C#", "class": "info" },
            { "name": "Cloud", "class": "danger" }
        ],
        "quickSearch": [
            "React",
            ".NET",
            "Cloud",
            "ABC"
        ],
        "applications": [
            {
                "name": "To-Do List (React)",
                "subHeading": "A basic list builder using React",
                "description": "Using React, with Babel and Webpack.",
                "searchTerms": "JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS",
                "folder": "toDoReact",
                "active": true,
                "include": true,
                "labels": [0],
                "featured": false
            },
            {
                "name": "Azure Functions .NET, Unique Data Entry",
                "subHeading": "Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI",
                "description": "Using Azure Functions serverless compute and .NET, with a React user interface.",
                "searchTerms": "Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS",
                "folder": "AzureDotNetCoreUniqueDataEntryApi",
                "active": true,
                "include": true,
                "labels": [0, 1, 2],
                "featured": false
            },
            {
                "name": "Test .NET application",
                "subHeading": ".NET",
                "description": ".NET",
                "searchTerms": "dotnet,.net core,.netcore",
                "folder": "NET",
                "active": true,
                "include": true,
                "labels": [1, 2],
                "featured": false
            },
            {
                "name": "Test Cloud application",
                "subHeading": "Cloud",
                "description": "Cloud",
                "searchTerms": "some-framework,cloud,azure",
                "folder": "Cloud",
                "active": true,
                "include": true,
                "labels": [1, 2],
                "featured": false
            },
            {
                "name": "ABC application",
                "subHeading": "ABC",
                "description": "ABC",
                "searchTerms": "abc,azure",
                "folder": "ABCFolder",
                "active": true,
                "include": true,
                "labels": [1, 2],
                "featured": false
            }
        ]
    }
});

beforeEach(() => { });
afterEach(() => { });

const App = () => {
    return (
        <ConfigContextProvider>
                <CookieBannerComponent />
        </ConfigContextProvider>
    )
}

it('can render', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#cookieBannerComponent')).toBeTruthy();
});