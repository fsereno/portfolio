/**
 * @jest-environment jsdom
 */

 import { openBrowser, goto, write, click, closeBrowser, $, into, textBox, button, waitFor, evaluate, text } from 'taiko';

 const APPLICATION = "app_AzureDotNetCoreDataStructuresApi";
 const URL = `http://localhost/${APPLICATION}/index.html`;

 beforeAll(async () => {
   await openBrowser({
     headless: true,
     slowMo: 250,
     args: ['--no-sandbox']
   });
 });

 describe(APPLICATION, () => {
    test('Should not add an item to the queue', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await click(button({id:'queueInput_submit'}));
        const error = await $('.was-validated .form-control:invalid').exists();
        const result = await evaluate($('#queueList'), (element) => element.innerText);
        expect(error).toBeTruthy();
        expect(result).toBe("");
    }, 100000);
    test('Should not add an item to the stack', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await click(button({id:'stackInput_submit'}));
        const error = await $('.was-validated .form-control:invalid').exists();
        const result = await evaluate($('#stackList'), (element) => element.innerText);
        expect(error).toBeTruthy();
        expect(result).toBe("");
    }, 100000);
    test('Should add an item to the queue', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await write('Item 1', into(textBox({id:'queueInput'})));
        await click(button({id:'queueInput_submit'}));
        const result = await evaluate($('#queueList'), (element) => element.innerText);
        expect(result).toBe('Item 1');
   }, 100000);
   test('Should remove an item to the queue', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await write('Item 1', into(textBox({id:'queueInput'})));
        await click(button({id:'queueInput_submit'}));
        await waitFor(2000);
        await write('Item 2', into(textBox({id:'queueInput'})));
        await click(button({id:'queueInput_submit'}));
        await waitFor(2000);
        await click(button({id:'queueInput_remove'}));
        const result = await evaluate($('#queueList'), (element) => element.innerText);
        expect(result).toBe('Item 2');
  }, 100000);
  test('Should add an item to the stack', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await write('Item 1', into(textBox({id:'stackInput'})));
        await click(button({id:'stackInput_submit'}));
        const result = await evaluate($('#stackList'), (element) => element.innerText);
        expect(result).toBe('Item 1');
   }, 100000);
   test('Should remove an item to the queue', async () => {
        await goto(URL);
        await write('5', into(textBox({id:'answerInput'}),{force:true}));
        await click(button({id:'submitPuzzle'}));
        await waitFor(2000);
        await write('Item 1', into(textBox({id:'stackInput'})));
        await click(button({id:'stackInput_submit'}));
        await waitFor(2000);
        await write('Item 2', into(textBox({id:'stackInput'})));
        await click(button({id:'stackInput_submit'}));
        await waitFor(2000);
        await click(button({id:'stackInput_remove'}));
        const result = await evaluate($('#stackList'), (element) => element.innerText);
        expect(result).toBe('Item 1');
  }, 100000);
 });

 afterAll(() => {
   closeBrowser();
 });