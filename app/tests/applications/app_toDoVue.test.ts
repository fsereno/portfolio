import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let expectedResult:boolean = true;
let application = "app_toDoVue";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Add Item", () => {
        it("Should return "+ expectedResult + ", when an item is added.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#itemInput', 'Item 1')
                .click('#submit')
                .end()
                .evaluate(() => {
                    return jQuery("#toDoList").children().length === 1;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Delete Item", () => {
        it("Should return "+ expectedResult + ", when an item is deleted.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#itemInput', 'Item 1')
                .click('#submit')
                .click('a.delete')
                .end()
                .evaluate(() => {
                    return jQuery("#toDoList").children().length === 0;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
});