/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ToasterContextProvider } from "../../js/modules/react/toasterComponent";
import { EmailContextProvider } from "../src/components/contextProviders/emailContextProvider";
import { ContentContainer } from '../src/components/contentContainer.js'
import { Inbox } from "../src/components/pages/inbox";

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
    console.log(wrapper.debug());
    expect(wrapper.find(<ContentContainer />)).toBeTruthy();
});

it("has 3 items in the browser pane", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('#browserPane').children()).toHaveLength(3);
});