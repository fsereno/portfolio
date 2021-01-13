import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_AzureDotNetCoreDataStructuresApi";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Solve puzzle correctly", () => {
        it("Should accept the answer and close the modal when correct.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '5')
                .click('#submitPuzzle')
                .wait(2000)
                .end()
                .evaluate(() => {
                    return jQuery("#puzzleModal:visible").length === 0;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Solve puzzle incorrectly", () => {
        it("Should reject the answer and not close the modal when incorrect.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '10')
                .click('#puzzleModal #submitPuzzle')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let isVisible = jQuery("#puzzleModal:visible").length > 0;
                    let hasError = jQuery("#puzzleModal .invalid-feedback:visible").length > 0
                    return isVisible && hasError;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Queue Add", () => {
        it("Should add an item to the queue", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '5')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#queueInput', '1')
                .click('#queueInput_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let queueItems = jQuery("#queueList").children();
                    return queueItems.length === 1;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Queue Remove", () => {
        it("Should remove an item to the queue", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '5')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#queueInput', '1')
                .click('#queueInput_submit')
                .wait(3000)
                .type('#queueInput', '2')
                .click('#queueInput_submit')
                .wait(3000)
                .click('#queueInput_remove')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let queueItems = jQuery("#queueList").children();
                    return queueItems.length === 1;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Stack Add", () => {
        it("Should add an item to the stack", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '5')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#stackInput', '1')
                .click('#stackInput_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let queueItems = jQuery("#stackList").children();
                    return queueItems.length === 1;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Stack Add", () => {
        it("Should add an item to the stack", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '5')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#stackInput', '1')
                .click('#stackInput_submit')
                .wait(3000)
                .type('#stackInput', '2')
                .click('#stackInput_submit')
                .wait(3000)
                .click('#stackInput_remove')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let queueItems = jQuery("#stackList").children();
                    return queueItems.length === 1;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
});