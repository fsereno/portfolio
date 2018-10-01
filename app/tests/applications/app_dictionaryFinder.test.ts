import Nightmare  = require("nightmare");
import { expect } from "chai";
//https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
describe("app_dictionaryFinder", () => {
    
        var url = 'http://localhost:8080/app_dictionaryFinder/index.html';
        
        describe('Dictionary Finder', function(){
            it("Should return a string of length 358 when searching for 'Sleep'", function() {
                this.timeout(10000);
                return new Nightmare({show:false})
                    .goto(url)
                    .type('form#inputForm input[name="input"]', "Sleep")
                    .click('form#inputForm button[type="submit"]')
                    .evaluate(() => {
                        return jQuery("#result").text().length;
                    })
                    .end()
                    .then((result)=>{
                        expect(result).to.be.equal(358);
                    })
            });
        });
});