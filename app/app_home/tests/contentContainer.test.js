/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ContentContainer } from "../src/components/contentContainer";
import { ConfigContextProvider } from "../../js/modules/react/configContextProvider";
import { ApplicationsContextProvider } from "../../js/modules/react/applicationsContextProvider";

jest.mock('../../js/modules/react/searchBarComponent/searchBar.scss', () => '');
jest.mock('../../js/modules/react/topScrollComponent/topScrollComponent.scss', () => '');

jest.mock('../../../config.json', () => {
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
            <ApplicationsContextProvider>
                <ContentContainer />
            </ApplicationsContextProvider>
        </ConfigContextProvider>
    )
}

it("can render", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#contentContainer')).toBeTruthy();
});

it("can search", () => {
    const wrapper = mount(<App />);
    const searchBar = wrapper.find('input#searchInput');
    searchBar.simulate('change', { target: { value: 'React' } });
    expect(wrapper.find('.grid-item.card')).toHaveLength(2);
});

it("can search multiple", () => {
    const wrapper = mount(<App />);
    const searchBar = wrapper.find('input#searchInput');
    searchBar.simulate('change', { target: { value: 'React .NET' } });
    expect(wrapper.find('.grid-item.card')).toHaveLength(3);
});

it("can search using multiple quicksearch", () => {
    const wrapper = mount(<App />);
    const searchBar = wrapper.find('input#searchInput');
    const openFilterBtn = wrapper.find('#openFilterBtn')
    const quickSearchCloud = wrapper.find('button[value="Cloud"]');
    const quickSearchReact = wrapper.find('button[value="React"]');
    const quickSearchDummy = wrapper.find('button[value="ABC"]');
    openFilterBtn.simulate('click');
    quickSearchCloud.simulate('click');
    quickSearchReact.simulate('click');
    quickSearchDummy.simulate('click');
    searchBar.simulate('change');
    expect(wrapper.find('.grid-item.card')).toHaveLength(4);
});

it("can cancel a search", () => {
    const wrapper = mount(<App />);
    const searchBar = wrapper.find('input#searchInput');
    searchBar.simulate('change', { target: { value: 'React' } });
    const cancelBtn = wrapper.find('#cancelBtn button');
    cancelBtn.simulate('click');
    const children = wrapper.find('.grid-item.card');
    const value = searchBar.instance().value;
    expect(value).toEqual("");
    expect(children).toHaveLength(5);
});
