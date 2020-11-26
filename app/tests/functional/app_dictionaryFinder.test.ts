import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult:Number = 358,
        application = "app_dictionaryFinder";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/"+application+"/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('form#inputForm input[name="input"]', "Sleep")
                .click('form#inputForm button#submit')
                .evaluate(() => {
                    return jQuery("#result").text().length;
                })
                .end();
            }
        }

describe(application, () => {
    it("Should return string of length '"+expectedResult+"', when searching for 'Sleep'", function() {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(expectedResult)
    });
});