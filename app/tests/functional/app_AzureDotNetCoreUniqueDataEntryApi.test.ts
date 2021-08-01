import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_AzureDotNetCoreUniqueDataEntryApi";

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
                .type('#puzzleModal input[type=text]', '14')
                .click('#submitPuzzle')
                .wait(2000)
                .end()
                .evaluate(() => {
                    return document.querySelector("#puzzleModal") === null;
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
                    let isVisible = document.querySelector("#puzzleModal") !== null;
                    let hasError = document.querySelector("#puzzleModal .invalid-feedback").innerText.length > 0;
                    return isVisible && hasError;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Add item", () => {
        it("Should add an item to the table", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '14')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#firstNameInput', 'James')
                .type('#secondNameInput', 'Brown')
                .type('#contactInput', '(000) 111 222')
                .type('#postCodeInput', 'AB10 0CD')
                .click("#submit")
                .wait(3000)
                .end()
                .evaluate(() => {
                    let items = document.querySelector("#itemTable tbody").children.length;
                    return items === 2;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Add duplicate item", () => {
        it("Should not add a duplicate item to the table", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '14')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#firstNameInput', 'John')
                .type('#secondNameInput', 'Doe')
                .type('#contactInput', '000000000')
                .type('#postCodeInput', 'AB101CD')
                .click("#submit")
                .wait(3000)
                .end()
                .evaluate(() => {
                    let isOnlySingleItem = document.querySelector("#itemTable tbody").children.length === 1;
                    let isErrorModalVisible = document.getElementById("duplicateEntryErrorModule") !== null;
                    return isOnlySingleItem && isErrorModalVisible;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Delete item", () => {
        it("Should remove an item to the table", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '14')
                .click('#submitPuzzle')
                .wait(2000)
                .click("a.delete[data-index='0']")
                .wait(2000)
                .end()
                .evaluate(() => {
                    let items = document.querySelector("#itemTable tbody").children.length;
                    return items === 0;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
});