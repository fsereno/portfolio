import Nightmare  = require("nightmare");

const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        application = "app_koTypeScript",
        url = "http://localhost:8080/"+application+"/index.html";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

describe(application, () => {
    describe("Add Item", () => {
        it("Should add a single item to the table a when clicking 'Add item', entering a Name and Age, and clicking Save Changes. Table rows length should increase by 1", 
            function() {
                this.timeout(0);
                    let test = async (url) => {
                        return new Nightmare({show:false})
                        .goto(url)
                        .click("#addItem")
                        .wait(1000)
                        .type('#name', 'Todd Terry')
                        .type('#age', '')
                        .type('#age', '45')
                        .click("#saveChanges")
                        .wait(1000)
                        .end()
                        .evaluate(() => {
                            return jQuery("#items tr").length;
                        })
                        .end();
                }
            return test(url).should.eventually.equal(4);
        });
    });
    describe("Delete Item", () => {
        it("Should remove a single item, when the delete button is clicks, and confirmation is given. Table rows length should decrease by 1", 
            function() {
                this.timeout(0);
                    let test = async (url) => {
                        return new Nightmare({show:false})
                        .goto(url)
                        .click("[data-target='#deleteModal']")
                        .wait(1000)
                        .click("#deleteConfirm")
                        .wait(1000)
                        .evaluate(() => {
                            return jQuery("#items tr").length;
                        });
                    }

            return test(url).should.eventually.equal(2);
        });
    });
});