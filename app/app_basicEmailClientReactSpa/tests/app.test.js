/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ToasterContextProvider } from "../../js/modules/react/toasterComponent";
import { EmailContextProvider } from "../src/components/contextProviders/emailContextProvider";
import { Router } from "../src/components/router";
import { ContentContainer } from '../src/components/contentContainer.js'

jest.mock('../src/data/bodies.js', () => {
    return function getBodies() {
        return [
            "This is a body text.",
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC"
        ];
    }
});

jest.mock('../src/data/emailAddresses.js', () => {
    return function getEmailAddresses() {
        return [
            "test@test.co.uk",
            "bob@jones.co.uk",
            "joe@bloggs.co.uk",
            "tom@jones.co.uk",
        ]
    };
});

beforeEach(() => { });
afterEach(() => { });

const App = () => {
    return (
        <ToasterContextProvider>
            <EmailContextProvider>
                <Router />
            </EmailContextProvider>
        </ToasterContextProvider>
    )
}

it("can render", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(<ContentContainer />)).toBeTruthy();
});

it("can populate the reading pane when item selected.", () => {
    const wrapper = mount(<App />);
    const inboxLink = wrapper.find('a#inboxNavLink')
    inboxLink.simulate('click');
    const item = wrapper.find('#browserPane');

    console.log(wrapper.debug());

   // expect(item).toBeTruthy();
    /*item.simulate('click');
    const bodyTextElement = wrapper.find('#bodyText');
    const bodyText = bodyTextElement.text();*/
    //expect("").toEqual('This is a body text');
});

/*
it("can search", () => {
const wrapper = mount(<App />);
const searchBar = wrapper.find('input#searchInput');
searchBar.simulate('change', { target: { value: 'React'} } );
expect(wrapper.find('.grid-item.card')).toHaveLength(2);
});

it("can search multiple", () => {
const wrapper = mount(<App />);
const searchBar = wrapper.find('input#searchInput');
searchBar.simulate('change', { target: { value: 'React .NET'} } );
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
searchBar.simulate('change', { target: { value: 'React'} } );
const cancelBtn = wrapper.find('#cancelBtn button');
cancelBtn.simulate('click');
const children = wrapper.find('.grid-item.card');
const value = searchBar.instance().value;
expect(value).toEqual("");
expect(children).toHaveLength(5);
});
*/