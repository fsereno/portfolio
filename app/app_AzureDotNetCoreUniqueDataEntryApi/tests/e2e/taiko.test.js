/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, button, waitFor, evaluate, text } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

const APPLICATION = "app_AzureDotNetCoreUniqueDataEntryApi";
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
  test('Should add an item to the table', async () => {
    await goto(URL);
    await write('14', into(textBox({ id: 'answerInput' }), { force: true }));
    await click(button({ id: 'submitPuzzle' }));
    await waitFor(2000);
    await write('James', into(textBox({ id: 'firstNameInput' })));
    await write('Brown', into(textBox({ id: 'secondNameInput' })));
    await write('(000) 111 222', into(textBox({ id: 'contactInput' })));
    await write('AB10 0CD', into(textBox({ id: 'postCodeInput' })));
    await click(button({ id: 'submit' }));
    await waitFor(2000);
    const result = await evaluate($('#itemTable'), (element) => element.innerText);
    expect(result).toContain('James\tBrown\t(000) 111 222\tAB10 0CD\tDelete');
  }, 100000);
  test('Should not add a duplicate item to the table', async () => {
    await goto(URL);
    await write('14', into(textBox({ id: 'answerInput' }), { force: true }));
    await click(button({ id: 'submitPuzzle' }));
    await waitFor(2000);
    await write('John', into(textBox({ id: 'firstNameInput' })));
    await write('Doe', into(textBox({ id: 'secondNameInput' })));
    await write('000000000', into(textBox({ id: 'contactInput' })));
    await write('AB101CD', into(textBox({ id: 'postCodeInput' })));
    await click(button({ id: 'submit' }));
    await waitFor(2000);
    await click($('#duplicateEntryErrorModule button'));
    await waitFor(2000);
    const exists = await $('#duplicateEntryErrorModule').exists();
    const result = await evaluate($('#itemTable'), (element) => element.innerText);
    expect(exists).toBeFalsy();
    expect(result).toBe('First name\tSecond name\tContact\tPostcode\tAction\nJohn\tDoe\t000000000\tAB101CD\tDelete');
  }, 100000);
  test('Should remove an item to the table', async () => {
    await goto(URL);
    await write('14', into(textBox({ id: 'answerInput' }), { force: true }));
    await click(button({ id: 'submitPuzzle' }));
    await waitFor(2000);
    await click($('a.delete[data-index="0"]'));
    const result = await evaluate($('#itemTable'), (element) => element.innerText);
    expect(result).toBe('First name\tSecond name\tContact\tPostcode\tAction');
  }, 100000);
});

afterAll(() => {
  closeBrowser();
});