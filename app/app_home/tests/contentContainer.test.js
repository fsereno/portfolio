/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { mount } from 'enzyme';
 import { ContentContainer } from "../src/components/contentContainer";
 import { ConfigContextProvider } from "../src/components/contextProviders/configContextProvider";
 import { ApplicationsContextProvider } from "../src/components/contextProviders/applicationsContextProvider";

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
            "Cloud"
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
            }
        ]
    }
 });

 beforeEach(() => {});
 afterEach(() => {});

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
    searchBar.simulate('change', { target: { value: 'React'} } );
    expect(wrapper.find('.grid-item.card')).toHaveLength(2);
  });
