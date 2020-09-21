import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_awsDotNetCoreShoppingCart";

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
                .type('#puzzleModal_input', '15')
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
    describe("Get all items", () => {
        it("Should get all items when no value is passed.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '15')
                .click('#puzzleModal_submit')
                .wait(2000)
                .click('#get_form button#get_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    return jQuery("#basketItems").children().length === 2;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Get a single item", () => {
        it("Should get the correct single item when a position is passed.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '15')
                .click('#puzzleModal_submit')
                .wait(2000)
                .type('#get_form input', '2')
                .click('#get_form button#get_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let hasCorrectNumberOfItems = jQuery("#basketItems").children().length === 1;
                    let itemIsCorrect = jQuery("#basketItems").children()[0].innerText === "Banana";
                    return hasCorrectNumberOfItems && itemIsCorrect;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Add a single item", () => {
        it("Should add a single item to the existing collection.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '15')
                .click('#puzzleModal_submit')
                .wait(2000)
                .type('#add_form input', 'Bread')
                .click('#add_form button#add_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let hasCorrectNumberOfItems = jQuery("#basketItems").children().length === 3;
                    let addItemExists = jQuery("#basketItems").children()[2].innerText === "Bread";
                    return hasCorrectNumberOfItems && addItemExists;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Delete a single item", () => {
        it("Should delete the correct item when a position is passed.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '15')
                .click('#puzzleModal_submit')
                .wait(2000)
                .type('#delete_form input', '2')
                .click('#delete_form button#delete_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let hasCorrectNumberOfItems = jQuery("#basketItems").children().length === 1;
                    let itemIsCorrect = jQuery("#basketItems").children()[0].innerText === "Apple";
                    return hasCorrectNumberOfItems && itemIsCorrect;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Update an item", () => {
        it("Should update a single item in the existing collection.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '15')
                .click('#puzzleModal_submit')
                .wait(2000)
                .type('#update_form input#update_position', '2')
                .type('#update_form input#update_value', 'Wine')
                .click('#update_form button#update_submit')
                .wait(2000)
                .end()
                .evaluate(() => {
                    let hasCorrectNumberOfItems = jQuery("#basketItems").children().length === 2;
                    let updatedItemExists = jQuery("#basketItems").children()[1].innerText === "Wine";
                    return hasCorrectNumberOfItems && updatedItemExists;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
});