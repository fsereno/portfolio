import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should();
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/app_dictionaryFinder/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('form#inputForm input[name="input"]', "Sleep")
                .click('form#inputForm button[type="submit"]')
                .evaluate(() => {
                    return jQuery("#result").text().length;
                })
                .end();
            }
        }

describe("app_dictionaryFinder", () => {
    it("Should return string of length '358', when searching for 'Sleep'", function () {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(358)
    });
});