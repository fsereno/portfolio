
import { openBrowser, near, link, goto, write, click, closeBrowser, $, text, into, textBox, button, waitFor, evaluate } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

// This is a WIP - it appears running these tests on an ARM machine will alwasys fail - need to wait for some deps to be released.

const APPLICATION = "app_nodeToDo";
const CONFIG = ConfigUtil.get();
const URL = `http://${CONFIG.dockerHost}/${APPLICATION}/index.html`;
const browserPath = '/usr/bin/chromium';

beforeAll(async () => {
    try {
        await openBrowser({
            //executablePath: browserPath,
            //headless: true,
            //slowMo: 250,
            args: [
                //'--disable-gpu',
                //'--disable-dev-shm-usage',
                //'--disable-setuid-sandbox',
                //'--no-first-run',
                //'--no-sandbox',
                //'--no-zygote'
            ]
        });
        console.log("AFTER")
    } catch (error) {
        console.error(error);
    }
});

describe(APPLICATION, () => {
    test('Should be able to test this application', () => {
        expect(true).toBeTruthy();
    });
    /*test('Should not login successfully when an invalid user is passed', async () => {
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
    test('Should be able to add and remove an item', async () => {
        await goto(URL);
        await write('TestUser', into(textBox({ id: 'username' })));
        await write('Password-1', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        await write('A test to do item', into(textBox({id: 'description'})));
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        const remainingItems = await text('Remaining items').exists();
        const remainingItemText = await evaluate($('.list-group'), (element) => element.innerText);
        expect(remainingItems).toBeTruthy();
        expect(remainingItemText).toBe('A test to do item');
        await click($('.delete-item'));
        const emptyListState = await text('You have no items to complete').exists();
        expect(emptyListState).toBeTruthy();
        await click($('#logoutNavLink'));
        await waitFor(2000);
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        manageExists = await text('Describe a task to do:').exists();
        expect(manageExists).toBeFalsy();
    }, 100000);
    test('Should be able to move an item to Completed items', async () => {
        await goto(URL);
        await write('TestUser', into(textBox({ id: 'username' })));
        await write('Password-1', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        await write('A test to do item 2', into(textBox({id: 'description'})));
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        const remainingItems = await text('Remaining items').exists();
        const remainingItemText = await evaluate($('.list-group'), (element) => element.innerText);
        expect(remainingItems).toBeTruthy();
        expect(remainingItemText).toBe('A test to do item 2');
        await click(text('A test to do item 2'));
        const emptyListState = await text('You have no items to complete').exists();
        expect(emptyListState).toBeTruthy();
        await click($('#logoutNavLink'));
        await waitFor(2000);
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        manageExists = await text('Describe a task to do:').exists();
        expect(manageExists).toBeFalsy();
    }, 100000);*/
});

afterAll(() => {
    closeBrowser();
});