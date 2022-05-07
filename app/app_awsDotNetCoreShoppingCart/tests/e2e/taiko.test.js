/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, button, waitFor, evaluate } from 'taiko';

const APPLICATION = "app_awsDotNetCoreShoppingCart";
const URL = `http://localhost:8080/${APPLICATION}/index.html`;

beforeAll(async () => {
    await openBrowser({
        headless: true,
        slowMo: 250,
        args: ['--no-sandbox']
    });
});

describe(APPLICATION, () => {
    test('Should get all items when no value is passed', async () => {
        await goto(URL);
        await write('15', into(textBox({ id: 'answerInput' }), { force: true }));
        await click(button({ id: 'submitPuzzle' }));
        await waitFor(2000);
        await click(button({ id: 'get_submit' }));
        await waitFor(2000);
        const result = await evaluate($('#basketItems'), (element) => element.innerText);
        expect(result).toBe("Apple\nBanana");
    }, 100000);
    test('Should get the correct single item when a position is passed', async () => {
        await goto(URL);
        await write('15', into(textBox({ id: 'answerInput' }), { force: true }));
        await click(button({ id: 'submitPuzzle' }));
        await waitFor(2000);
        await write('2', into(textBox({id:'get'})));
        await click(button({ id: 'get_submit' }));
        await waitFor(2000);
        const result = await evaluate($('#basketItems'), (element) => element.innerText);
        expect(result).toBe("Banana");
    }, 100000);
    test('Should add a single item to the existing collection', async () => {
        await goto(URL);
        await write('15', into(textBox({ id: 'answerInput' }), { force: true }));
        await click(button({ id: 'submitPuzzle' }));
        await waitFor(2000);
        await write('Bread', into(textBox({id:'add'})));
        await click(button({ id: 'add_submit' }));
        await waitFor(2000);
        const result = await evaluate($('#basketItems'), (element) => element.innerText);
        expect(result).toBe("Apple\nBanana\nBread");
    }, 100000);
    test('Should delete the correct item when a position is passed', async () => {
        await goto(URL);
        await write('15', into(textBox({ id: 'answerInput' }), { force: true }));
        await click(button({ id: 'submitPuzzle' }));
        await waitFor(2000);
        await write('2', into(textBox({id:'delete'})));
        await click(button({ id: 'delete_submit' }));
        await waitFor(2000);
        const result = await evaluate($('#basketItems'), (element) => element.innerText);
        expect(result).toBe("Apple");
    }, 100000);
    test('Should update a single item in the existing collection', async () => {
        await goto(URL);
        await write('15', into(textBox({ id: 'answerInput' }), { force: true }));
        await click(button({ id: 'submitPuzzle' }));
        await waitFor(2000);
        await write('2', into(textBox({id:'update_position'})));
        await write('Wine', into(textBox({id:'update_value'})));
        await click(button({ id: 'update_submit' }));
        await waitFor(2000);
        const result = await evaluate($('#basketItems'), (element) => element.innerText);
        expect(result).toBe("Apple\nWine");
    }, 100000);
});
afterAll(() => {
    closeBrowser();
});