/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, into, textBox, text, button, waitFor } from 'taiko';

beforeAll(async () => {
  await openBrowser({
    headless: true,
    slowMo: 250,
    args: ['--no-sandbox']
  });
});

describe('app_awsDotNetCoreAsyncCoffeeMachine', () => {
  test('Should run the process asynchronously', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html");
    await write('5', into(textBox({id:'answerInput'}),{force:true}));
    await click(button({id:'submitPuzzle'}));
    await waitFor(2000);
    await click(button({id:'runAsync'}));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
  test('Should run the process synchronously', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html");
    await write('5', into(textBox({id:'answerInput'}),{force:true}));
    await click(button({id:'submitPuzzle'}));
    await waitFor(2000);
    await click(button({id:'runSync'}));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
});

afterAll(() => {
  closeBrowser();
});