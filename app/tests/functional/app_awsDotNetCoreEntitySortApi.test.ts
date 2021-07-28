import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_awsDotNetCoreEntitySortApi";

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
                .type('#puzzleModal input[type=text]', '15')
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
                .type('#puzzleModal input[type=text]', '11')
                .click('#submitPuzzle')
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
        it("Should add a single row to the Employee table", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '15')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#nameInput', 'James Bond')
                .type('#salaryInput', '95000')
                .click('#addEmployee_submit')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let collection = document.querySelector("#employeeTable tbody").children;
                    let hasCorrectNumberOfItems = collection.length === 2;
                    let isExpectedItem = collection[1].children[0].innerHTML === "James Bond";
                    return hasCorrectNumberOfItems && isExpectedItem;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Sort table ascending", () => {
        it("Should add a single row to the Employee table and sort salary ascending", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '15')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#nameInput', 'James Bond')
                .type('#salaryInput', '95000')
                .click('#addEmployee_submit')
                .wait(2000)
                .click('#sortAsc')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let collection = document.querySelector("#employeeTable tbody").children;
                    let isExpectedItem = collection[1].children[1].innerHTML === "£95,000.00";
                    return isExpectedItem;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
    describe("Sort table descending", () => {
        it("Should add a single row to the Employee table and sort salary descending", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal input[type=text]', '15')
                .click('#submitPuzzle')
                .wait(2000)
                .type('#nameInput', 'James Bond')
                .type('#salaryInput', '95000')
                .click('#addEmployee_submit')
                .wait(2000)
                .click('#sortDesc')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let collection = document.querySelector("#employeeTable tbody").children;
                    let isExpectedItem = collection[1].children[1].innerHTML === "£10,000.00";
                    return isExpectedItem;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
});