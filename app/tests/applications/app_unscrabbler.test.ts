import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult:boolean = true,
        unscrabblerExpectedResults = 8564,
        application = "app_unscrabbler";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/"+application+"/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .evaluate(function() {
                    return jQuery("#scrabbleInput").val("").removeAttr("readonly");
                })
                .type('#scrabbleInput', 'CUMELTONQUAIFWE')
                .type('#findInput', 'Quit')
                .click('#submit')
                .end()
                .evaluate(() => {
                    return jQuery("#yourResults").text().length > 0;         
                })
                .end();
            }
        }

describe(application, () => {
    it("Should return "+ expectedResult + ", when input is 'CUMELTONQUAIFWE' and 'Quit'.", function() {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(expectedResult)
    });
});