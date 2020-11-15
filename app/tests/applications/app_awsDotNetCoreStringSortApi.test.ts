import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_awsDotNetCoreStringSortApi";

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
                .type('#puzzleModal_input', '11')
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
    describe("Sort string", () => {
        it("Should enter a string of 'C,B,A,10,1' and sort to '1,10,A,B,C'.", function(){
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(2000)
                .type('#puzzleModal_input', '11')
                .click('#puzzleModal_submit')
                .wait(2000)
                .type('#valuesInput', 'C,B,A,10,1')
                .click('#sort_submit')
                .wait(3000)
                .end()
                .evaluate(() => {
                    let sortedValue = jQuery("#resultOutput").text();
                    return sortedValue === "1,10,A,B,C";
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    })
});