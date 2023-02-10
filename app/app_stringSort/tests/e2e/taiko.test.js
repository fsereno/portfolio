/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, button, waitFor, evaluate } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

const APPLICATION = "app_awsDotNetCoreStringSortApi";
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
  test('Should add an item', async () => {
    await goto(URL);
    await write('11', into(textBox({ id: 'answerInput' }), { force: true }));
    await click(button({ id: 'submitPuzzle' }));
    await waitFor(2000);
    await write('C,B,A,10,1', into(textBox({ id: 'valuesInput' })));
    await click(button({ id: 'sort_submit' }));
    const result = await evaluate($('#resultOutput'), (element) => element.innerText);
    expect(result).toBe('1,10,A,B,C');
  }, 100000);
});

afterAll(() => {
  closeBrowser();
});