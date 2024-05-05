
import { openBrowser, goto, write, click, closeBrowser, $, text, into, textBox, button, waitFor, evaluate } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

const APPLICATION = "app_nodeToDo";
const CONFIG = ConfigUtil.get();
const URL = `http://${CONFIG.dockerHost}/${APPLICATION}/index.html`;

beforeAll(async () => {
    await openBrowser({
      headless: true,
      slowMo: 250,
      args: ['--no-sandbox']
    });
  });

describe(APPLICATION, () => {
    test('Should be able to test this application', () => {
        expect(true).toBeTruthy();
    });
    test('Should not login successfully when an invalid user is passed', async () => {
        await goto(URL);
        await write('Someuser123', into(textBox({ id: 'username' })));
        await write('SomePassword123', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        await $('.text-danger').exists();
        const error = await text('Username or password does not match.').exists();
        expect(error).toBeTruthy();
    }, 100000);
    test('Should login successfully with tester', async () => {
        let exists = false;
        await goto(URL);
        await write('tester', into(textBox({ id: 'username' })));
        await write('password', into(textBox({ id: 'password' })));
        await click(button({ id: 'submit' }));
        await waitFor(2000);
        const error = await text('Username or password does not match.').exists();
        expect(error).toBeFalsy();
        exists = await text('Describe a task to do:').exists();
        expect(exists).toBeTruthy();
        await click($('#logoutNavLink'));
        await waitFor(2000);
        await click(button({ id: 'submit'}));
        await waitFor(2000);
        exists = await text('Describe a task to do:').exists();
        expect(exists).toBeFalsy();
    }, 100000);
    test('Should be able to add and remove an item', async () => {
        let exists = false;
        await goto(URL);
        await write('tester', into(textBox({ id: 'username' })));
        await write('password', into(textBox({ id: 'password' })));
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
        exists = await text('Describe a task to do:').exists();
        expect(exists).toBeFalsy();
    }, 100000);
    test('Should be able to move an item to Completed items', async () => {
        let exists = false;
        await goto(URL);
        await write('tester', into(textBox({ id: 'username' })));
        await write('password', into(textBox({ id: 'password' })));
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
        exists = await text('Describe a task to do:').exists();
        expect(exists).toBeFalsy();
    }, 100000);
});

afterAll(() => {
    closeBrowser();
});