/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, text, tableCell } from 'taiko';

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
    await click($('#submitPuzzle'));
    await write('James Bond', into(textBox({id:'nameInput'}),{force:true}));
    await write('95000', into(textBox({id:'salaryInput'}),{force:true}));
    await click($('#addEmployee_submit'));
    //await click($('#sortAsc'))
    const name = await tableCell({row:1, col:1}).text();
    const salary = await tableCell({row:1, col:2}).text();

    const result = await text("James Bond").exists();

    console.log(result);

    expect(name).toBe("John Doe");
    expect(salary).toBe("£10,000.00");
  }, 100000);
  /*test('Shold sort table descending', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreEntitySortApi/index.html");
    await write('15', into(textBox({id:'answerInput'}),{force:true}));
    await click($('#submitPuzzle'));
    await write('James Bond', into(textBox({id:'nameInput'}),{force:true}));
    await write('95000', into(textBox({id:'salaryInput'}),{force:true}));
    await click($('#addEmployee_submit'));
    await click($('#sortDesc'))
    const name = await tableCell({row:2, col:1}).text();
    const salary = await tableCell({row:2, col:2}).text();
    console.log(name);
    console.log(salary);
    expect(name).toBe("James Bond");
    expect(salary).toBe("£95,000.00");
  }, 100000);*/
});

afterAll(() => {
  closeBrowser();
});