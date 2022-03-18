/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, write, click, closeBrowser, evaluate, $, into, textBox, waitFor, assert } from 'taiko';

beforeAll(async () => {
  await openBrowser({
    headless: true,
    slowMo: 250,
    args: ['--no-sandbox']
  });
});

describe('app_awsDotNetCoreAsyncCoffeeMachine', () => {
  test('The Puzzle Modal is rendered', async () => {
    await goto("http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html");
    await write('5', into(textBox({id:'answerInput'}),{force:true}));
    await click($('#submitPuzzle'));
    const result = await evaluate($('#puzzleModal'), (element) => element.hidden);
    console.log(result);
  }, 100000)
});

afterAll(() => {
  closeBrowser();
});