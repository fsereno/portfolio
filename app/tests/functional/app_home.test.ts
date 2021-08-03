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
        it(`Should return at least 7 or more when React is passed`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'React')
                .wait(5000)
                .end()
                .evaluate(() => {
                    return document.getElementById("applicationsContainer").children.length > 0;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
        it(`Should return at least 10 or more when React and .NET are passed`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'React .NET')
                .end()
                .evaluate(() => {
                    return document.getElementById("applicationsContainer").children.length > 0;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
    });
    describe("Quick Search", () => {
        it(`Should return at least 10 or more when Cloud and React are passed from Quick Search`, function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .click("#openFilterBtn")
                .click("button[value='Cloud']")
                .click("button[value='React']")
                .end()
                .evaluate(() => {
                    return document.getElementById("applicationsContainer").children.length > 0;
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
                return new Nightmare({show:false})
                .goto(url)
                .wait(1500)
                .type('#searchInput', 'abcd')
                .click("#cancelBtn button")
                .end()
                .evaluate(() => {
                    const hasApplications = document.getElementById("applicationsContainer").children.length > 0;
                    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
                    let hasNoSearchValue = searchInput.value === "";
                    return hasApplications && hasNoSearchValue;
                })
                .end();
            }
            return test(url).should.eventually.equal(true)
        });
    })
});