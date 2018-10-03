//let chai = require("chai");
//let chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised)
//let expect = chai.expect;

import Nightmare  = require("nightmare");

//let nightmare =  new Nightmare({show:true});

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

const should = chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

// Function to test
const simple = {
  test: async (input) => {
    return input;
  }
}

// Test
describe('#Test', () => {
  it('test', () => {
    return simple.test(1).should.eventually.equal(1);
  });
});

/*
//https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
describe("app_dictionaryFinder", () => {
    
        var url = 'http://localhost:8080/app_dictionaryFinder/index.html';
        
        describe('Dictionary Finder', function(){
            it("Should return a string of length 358 when searching for 'Sleep'", function() {
                
                return expect(
                    new Nightmare({show:true})
                    .goto(url)
                    .type('form#inputForm input[name="input"]', "Sleep")
                    .click('form#inputForm button[type="submit"]')
                    .evaluate(() => {
                        return jQuery("#result").text().length;
                    })
                    .end()
                
                ).to.eventually.deep.equal(358);
                
                //.to.eventually.deep.equal(358)
            });
            
            /*it("Should return a string of length 358 when searching for 'Sleep'", function() {
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
});*/