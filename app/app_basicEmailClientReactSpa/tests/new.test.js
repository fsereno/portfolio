/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import { ToasterContextProvider } from "../../js/modules/react/toasterComponent";
import { EmailContextProvider } from "../src/components/contextProviders/emailContextProvider";
import { New } from "../src/components/pages/new";

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
                <New />
            </EmailContextProvider>
        </ToasterContextProvider>
    )
}

it("should not show success message if not a valid submit", () => {
    const wrapper = mount(<App/>);
    const form = wrapper.find('form');
    form.simulate('submit');
    const toastHeader = wrapper.find('.toast-header strong');
    expect(toastHeader.length).toEqual(0);
});

it("should show a successful message if new message is valid", () => {
    const wrapper = mount(<App/>);
    const toInput = wrapper.find('input#to');
    toInput.simulate('change', { target: { value: 'some@email.com' } } );
    const subjectInput = wrapper.find('input#subject');
    subjectInput.simulate('change', { target: { value: 'Some subject' } } );
    const replyWindow = wrapper.find('textarea#body');
    replyWindow.simulate('change', { target: { value: 'This is a reply' } } );
    const form = wrapper.find('form');
    form.simulate('submit');
    const toastHeader = wrapper.find('.toast-header strong');
    expect(toastHeader.text()).toEqual('Sent successfully!')
});