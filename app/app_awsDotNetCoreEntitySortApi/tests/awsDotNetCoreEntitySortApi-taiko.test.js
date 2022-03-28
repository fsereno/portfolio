/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, tableCell, evaluate, button, waitFor } from 'taiko';

beforeAll(async () => {
  await openBrowser({
    headless: true,
    slowMo: 250,
    args: ['--no-sandbox']
  });
});

describe('app_awsDotNetCoreEntitySortApi', () => {
  test('Shold sort table ascending', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreEntitySortApi/index.html");
    await write('15', into(textBox({id:'answerInput'}),{force:true}));
    await click(button({id:'submitPuzzle'}));
    await waitFor(2000);
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
    await goto("http://localhost:8080/app_awsDotNetCoreEntitySortApi/index.html");
    await write('15', into(textBox({id:'answerInput'}),{force:true}));
    await click(button({id:'submitPuzzle'}));
    await waitFor(2000);
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