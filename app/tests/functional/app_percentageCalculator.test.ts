import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult:Number = 1331.25,
        application = "app_percentageCalculator";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

const   url = "http://localhost:8080/"+application+"/index.html",
        nightmare = {
            test: async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#percentageInput', '0.75')
                .type('#percentageOfInput', '177500')
                .click('#submit')
                .end()
                .evaluate(() => {
                    return Number(jQuery("#result").text());
                })
                .end();
            }
        }

describe(application, () => {
    it("Should return "+ expectedResult + ", when input is 0.75 and 177500.", function() {
        this.timeout(0);
        return  nightmare.test(url).should.eventually.equal(expectedResult)
    });
});