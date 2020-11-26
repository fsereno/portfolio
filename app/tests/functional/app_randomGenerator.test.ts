import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult:Number = 10,
        application = "app_randomGenerator";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/"+application+"/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#lengthInput', '10')
                .click('#submit')
                .end()
                .evaluate(() => {
                    return jQuery("#result").text().length;         
                })
                .end();
            }
        }

describe(application, () => {
    it("Should return a string of length "+ expectedResult + ", when input is 10.", function() {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(expectedResult)
    });
});