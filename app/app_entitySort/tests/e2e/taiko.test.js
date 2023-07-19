/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, into, textBox, tableCell, button, link } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

const APPLICATION = "app_entitySort";
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
    await write('James Bond', into(textBox({id:'nameInput'})));
    await write('95000', into(textBox({id:'salaryInput'})));
    await click(button({id:'addEmployee_submit'}));
    const rowOneColOne = await tableCell({row:1, col:1}).text();
    const rowOneColTwo = await tableCell({row:1, col:2}).text();
    const rowTwoColOne = await tableCell({row:2, col:1}).text();
    const rowTwoColTwo = await tableCell({row:2, col:2}).text();
    expect(rowOneColOne).toBe("John Doe");
    expect(rowOneColTwo).toBe("£10,000.00");
    expect(rowTwoColOne).toBe("James Bond");
    expect(rowTwoColTwo).toBe("£95,000.00");
  }, 100000);
  test('Should remove an item', async () => {
    await goto(URL);
    await click(link('delete'));
    const result = await tableCell({row:1, col:1}).exists();
    expect(result).toBeFalsy();
  }, 100000);
  test('Shold sort table ascending', async () => {
    await goto(URL);
    await write('James Bond', into(textBox({id:'nameInput'})));
    await write('95000', into(textBox({id:'salaryInput'})));
    await click(button({id:'addEmployee_submit'}));
    await click(button({id:'sortAsc'}));
    const rowOneColOne = await tableCell({row:1, col:1}).text();
    const rowOneColTwo = await tableCell({row:1, col:2}).text();
    const rowTwoColOne = await tableCell({row:2, col:1}).text();
    const rowTwoColTwo = await tableCell({row:2, col:2}).text();
    expect(rowOneColOne).toBe("John Doe");
    expect(rowOneColTwo).toBe("£10,000.00");
    expect(rowTwoColOne).toBe("James Bond");
    expect(rowTwoColTwo).toBe("£95,000.00");
  }, 100000);
  test('Shold sort table ascending', async () => {
    await goto(URL);
    await write('James Bond', into(textBox({id:'nameInput'})));
    await write('95000', into(textBox({id:'salaryInput'})));
    await click(button({id:'addEmployee_submit'}));
    await click(button({id:'sortDesc'}));
    const rowOneColOne = await tableCell({row:1, col:1}).text();
    const rowOneColTwo = await tableCell({row:1, col:2}).text();
    const rowTwoColOne = await tableCell({row:2, col:1}).text();
    const rowTwoColTwo = await tableCell({row:2, col:2}).text();
    expect(rowOneColOne).toBe("James Bond");
    expect(rowOneColTwo).toBe("£95,000.00");
    expect(rowTwoColOne).toBe("John Doe");
    expect(rowTwoColTwo).toBe("£10,000.00");
  }, 100000);
});

afterAll(() => {
  closeBrowser();
});