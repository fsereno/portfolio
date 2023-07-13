/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import { CookieBannerComponent } from '../cookieBannerComponent';

jest.mock('../../cookieBannerComponent/cookieBannerComponent.scss', () => '');

jest.mock('../../../../../../config.json', () => {
    return {
        "deploymentTargetCookie": "fs_portfolio_deployment_target",
        "deploymentTargets": {
            "cloud": "cloud",
            "static": "static"
        }
    }
});

beforeEach(() => { });
afterEach(() => { });

const App = () => {
    return (
        <CookieBannerComponent />
    )
}

it('can render', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#cookieBannerComponent')).toBeTruthy();
});