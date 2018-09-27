import Nightmare  = require("nightmare");
import { expect } from "chai";

describe("app_home", () => {
    
        var url = 'http://localhost:8080/app_dictionaryFinder/index.html';
        
        describe('Start page', () => {
            it('should show form when loaded', () => {
                new Nightmare({show:true})
                    .goto(url)
                    .type('form#inputForm input[name="input"]', "Sleep")
                    .click('form#inputForm button[type="submit"]')
                    
                    .evaluate(() => {
                        return jQuery("#result").text().length;
                    })
                    .then((result)=>{
                        expect(result).to.be.equal(358);
                    })
                    .catch((error) => {
                        console.log("ERROR")
                    })
                    
            });

            
        });
    
});