/**
 * @jest-environment jsdom
 */

import puppeteer from 'puppeteer';

//create global variables to be used in the beforeAll function
let browser
let page

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch(
    {
      headless: true, // headless mode set to false so browser opens up with visual feedback
      slowMo: 250, // how slow actions should be
      args: ['--no-sandbox']
    }
  )
  // creates a new page in the opened browser
  page = await browser.newPage()
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
    // hmm dont think this is hitting the outside world.
  }, 10000);
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})