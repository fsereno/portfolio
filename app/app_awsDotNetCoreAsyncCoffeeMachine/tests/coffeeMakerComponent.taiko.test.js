/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, into, textBox, text, button, waitFor } from 'taiko';

const APPLICATION = "app_awsDotNetCoreAsyncCoffeeMachine";
const URL = `http://localhost:8080/${APPLICATION}/index.html`;

beforeAll(async () => {
  await openBrowser({
    headless: true,
    slowMo: 250,
    args: ['--no-sandbox']
  });
});

describe(APPLICATION, () => {
  test('Should run the process asynchronously', async () => {
    await goto(URL);
    await write('5', into(textBox({id:'answerInput'}),{force:true}));
    await click(button({id:'submitPuzzle'}));
    await waitFor(2000);
    await click(button({id:'runAsync'}));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
  test('Should run the process synchronously', async () => {
    await goto(URL);
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