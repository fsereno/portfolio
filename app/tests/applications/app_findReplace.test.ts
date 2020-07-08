import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult:string = 'Find this X word in this sentence and replace it with this different word. Try finding - "this".',
        application = "app_findReplace";

chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/"+application+"/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#findInput', 'a')
                .type('#replaceInput', 'this')
                .click('#submit')
                .end()
                .evaluate(() => {
                    return jQuery("#result").text();
                })
                .end();
            }
        }

describe(application, () => {
    it("Should return string of '"+ expectedResult + "', when input is 'a' and 'this'.", function() {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(expectedResult)
    });
});