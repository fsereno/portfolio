import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_reactRedux";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Add Item", () => {
        it("Should add an item to the list.", function() {
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
        it("Should first add an item to the list and then delete it.", function() {
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
    describe("Undo Redo", () => {
        it("Should first add two items to the list, undo the last item and then redo adding the last item.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .type('#itemInput', 'Item 1')
                .click('#submit')
                .type('#itemInput', 'Item 2')
                .click('#submit')
                .click('#undo')
                .click('#redo')
                .end()
                .evaluate(() => {
                    return jQuery("#toDoList").children().length === 2;
                });
            }
            return test(url).should.eventually.equal(true);
        });
    });
});