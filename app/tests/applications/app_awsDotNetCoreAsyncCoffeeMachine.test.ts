import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_awsDotNetCoreAsyncCoffeeMachine";

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
                .type('#puzzleModal_input', '14')
                .click('#puzzleModal_submit')
                .wait(2000)
                .end()
                .evaluate(() => {
                    return jQuery("#puzzleModal").is(":hidden");
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
                .type('#puzzleModal_input', '10')
                .click('#puzzleModal_submit')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let isVisible = jQuery("#puzzleModal").is(":visible");
                    let hasError = jQuery("#puzzleModal_form .invalid-feedback").text().length > 0;
                    return isVisible && hasError;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Run Sync", () => {
        it("Should run the process synchronously.", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '14')
                .click('#puzzleModal_submit')
                .wait(2000)
                .click('#runSync')
                .wait(7000)
                .end()
                .evaluate(() => {
                    let resultOutput = jQuery("#resultOutput").children();
                    return resultOutput.length === 17;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Run Async", () => {
        it("Should run the process synchronously.", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '14')
                .click('#puzzleModal_submit')
                .wait(2000)
                .click('#runAsync')
                .wait(7000)
                .end()
                .evaluate(() => {
                    let resultOutput = jQuery("#resultOutput").children();
                    return resultOutput.length === 17;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
});