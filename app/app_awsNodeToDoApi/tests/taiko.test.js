/**
 * @jest-environment jsdom
 */

import { openBrowser, near, goto, write, click, closeBrowser, $, text, into, textBox, button, waitFor, evaluate } from 'taiko';

const APPLICATION = "app_awsNodeToDoApi";
const URL = `http://localhost:8080/${APPLICATION}/index.html`;

beforeAll(async () => {
    await openBrowser({
        headless: true,
        slowMo: 250,
        args: ['--no-sandbox']
    });
});

describe(APPLICATION, () => {
    test('Should not login successfully when an invalid user is passed', async () => {
        await goto(URL);
        await write('Someuser123', into(textBox({ id: 'username' })));
        await write('SomePassword123', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        await $('.text-danger').exists();
        const error = await text('Incorrect username or password.').exists();
        expect(error).toBeTruthy();
    }, 100000);
    test('Should login successfully with TestUser', async () => {
        let manageExists = false;
        await goto(URL);
        await write('TestUser', into(textBox({ id: 'username' })));
        await write('Password-1', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        const error = await text('Incorrect username or password.').exists();
        expect(error).toBeFalsy();
        manageExists = await text('Describe a task to do:').exists();
        expect(manageExists).toBeTruthy();
        await click($('#logoutNavLink'));
        await waitFor(2000);
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        manageExists = await text('Describe a task to do:').exists();
        expect(manageExists).toBeFalsy();
    }, 100000);
});

afterAll(() => {
    closeBrowser();
});