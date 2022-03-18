/**
 * @jest-environment jsdom
 */

import puppeteer from 'puppeteer';

let browser
let page
let evaluateResult;

beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: true,
      slowMo: 250,
      args: ['--no-sandbox']
    }
  )
  page = await browser.newPage();
  evaluateResult = async (page, aHandle) => {
    const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
    const result = await resultHandle.jsonValue();
    await resultHandle.dispose();
    return result;
  }
})

describe('app_awsDotNetCoreAsyncCoffeeMachine', () => {
  test('The Puzzle Modal is rendered', async () => {
    await page.goto('http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html');
    await page.waitForSelector('#puzzleModal');
  }, 10000);
  test('Solve puzzle correctly and close the Puzzle modal', async () => {
    await page.goto('http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html');
    await page.waitForSelector('#puzzleModal');
    await page.type('#puzzleModal input[type=text]', '5');
    await page.click('#submitPuzzle');
    await page.waitForSelector('#puzzleModal', { hidden: true });
  }, 10000);
  test('Should run the process synchronously', async () => {
    await page.goto('http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html');
    await page.waitForSelector('#puzzleModal');
    await page.type('#puzzleModal input[type=text]', '5');
    await page.click('#submitPuzzle');
    await page.waitForSelector('#puzzleModal', { hidden: true });
    await page.click('#runSync')
    await page.waitForSelector('#resultOutput li');
    const aHandle = await page.evaluateHandle(() => document.querySelector('#resultOutput'));
    const result = await evaluateResult(page, aHandle)
    expect(result).not.toBe(null);;
  }, 100000);
  test('Should run the process asynchronously', async () => {
    await page.goto('http://localhost:8080/app_awsDotNetCoreAsyncCoffeeMachine/index.html');
    await page.waitForSelector('#puzzleModal');
    await page.type('#puzzleModal input[type=text]', '5');
    await page.click('#submitPuzzle');
    await page.waitForSelector('#puzzleModal', { hidden: true });
    await page.click('#runAsync')
    await page.waitForSelector('#resultOutput li');
    const aHandle = await page.evaluateHandle(() => document.querySelector('#resultOutput'));
    const result = await evaluateResult(page, aHandle)
    expect(result).not.toBe(null);
  }, 100000);
});
afterAll(() => {
  browser.close()
});