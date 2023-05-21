/**
 * @jest-environment jsdom
 */

import { openBrowser, goto, click, closeBrowser, text, button } from 'taiko';
import { ConfigUtil } from '../../../js/modules/utils/configUtil';

const APPLICATION = "app_coffeeMachine";
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
  test('Should run the process asynchronously', async () => {
    await goto(URL);
    await click(button({id:'runAsync'}));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
  test('Should run the process synchronously', async () => {
    await goto(URL);
    await click(button({id:'runSync'}));
    const result = await text("Log of tasks carried out").exists();
    const item = await text("Start boiling the kettle").exists();
    expect(result && item).toBeTruthy();
  }, 100000)
});

afterAll(() => {
  closeBrowser();
});