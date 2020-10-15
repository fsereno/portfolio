import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_home";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/index.html";

describe(application, () => {
    describe("Search", () => {
        it(`Should return at least 7 or more when TypeScript is passed`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'TypeScript')
                .end()
                .evaluate(() => {
                    return jQuery("#applicationsContainer").children().length >= 7;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
        it(`Should return at least 10 or more when TypeScript and .Net Core are passed`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'TypeScript .Net Core')
                .end()
                .evaluate(() => {
                    return jQuery("#applicationsContainer").children().length >= 10;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
    });
    describe("Quick Search", () => {
        it(`Should return at least 7 or more when TypeScript is passed from Quick Search`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .click("#openFilterBtn")
                .click("button[value='TypeScript']")
                .end()
                .evaluate(() => {
                    return jQuery("#applicationsContainer").children().length >= 7;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
        it(`Should return at least 10 or more when TypeScript and .Net Core are passed from Quick Search`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .click("#openFilterBtn")
                .click("button[value='TypeScript']")
                .click("button[value='.Net Core']")
                .end()
                .evaluate(() => {
                    return jQuery("#applicationsContainer").children().length >= 10;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
    });
    describe("Clear Button", () => {
        it("Should clear search input when clicked", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:true})
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'TypeScript')
                .click("#cancelBtn button")
                .end()
                .evaluate(() => {
                    let hasApplications = jQuery("#applicationsContainer").children().length > 0;
                    let hasNoSearchValue = jQuery("#searchInput").val() === "";
                    return hasApplications && hasNoSearchValue;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
    })
});