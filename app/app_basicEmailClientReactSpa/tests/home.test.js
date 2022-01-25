/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ToasterContextProvider } from "../../js/modules/react/toasterComponent";
import { EmailContextProvider } from "../src/components/contextProviders/emailContextProvider";
import { ContentContainer } from '../src/components/contentContainer.js'
import { Home } from "../src/components/pages/home";
import { Counter } from "../src/components/counter";
import { INBOX } from "../src/constants";

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
            <EmailContextProvider dir={INBOX}>
                <Home />
            </EmailContextProvider>
        </ToasterContextProvider>
    )
}

it("can render", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(<ContentContainer />)).toBeTruthy();
});

it("should have messages in the inbox", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(<Counter count={10}/>)).toBeTruthy();
});

it("should have no messages in the outbox", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(<Counter count={0}/>)).toBeTruthy();
});