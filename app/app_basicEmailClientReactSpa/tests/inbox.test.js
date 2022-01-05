/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ToasterContextProvider } from "../../js/modules/react/toasterComponent";
import { EmailContextProvider } from "../src/components/contextProviders/emailContextProvider";
import { ContentContainer } from '../src/components/contentContainer.js'
import { Inbox } from "../src/components/pages/inbox";

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
                <Inbox />
            </EmailContextProvider>
        </ToasterContextProvider>
    )
}

it("can render", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(<ContentContainer />)).toBeTruthy();
});

it("has 3 items in the browser pane", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('#browserPane').children()).toHaveLength(3);
});

it("can populate the reading pane, when article is clicked in the browser pane", () => {
    const wrapper = mount(<App/>);
    const item = wrapper.find('#id_0');
    item.simulate('click');
    console.log(wrapper.find('#readingPane').debug());
    expect(wrapper.find('#readingPane #bodyText').text().length).toBeGreaterThan(0);
});