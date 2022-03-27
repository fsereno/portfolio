/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, text } from 'taiko';

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
    await click($('#submitPuzzle'));
    await click($('#runAsync'));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
  test('Should run the process synchronously', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html");
    await write('5', into(textBox({id:'answerInput'}),{force:true}));
    await click($('#submitPuzzle'));
    await click($('#runSync'));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
});

afterAll(() => {
  closeBrowser();
});