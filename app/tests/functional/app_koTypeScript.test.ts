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
                        return new Nightmare()
                        .goto(url)
                        .click("#addItem")
                        .wait(1000)
                        .type('#addName', 'Todd Terry')
                        .type('#addAge', '45')
                        .click("#addUser")
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
                    .end()
                    .evaluate(() => {
                        return jQuery("#items tr").length;
                    })
                    .end();
                }
            return test(url).should.eventually.equal(2);
        });
    });
    describe("Edit item", () => {
        it("Should change the first item in the table to 'Name' = 'Home Simpson', 'Age' = '52'", 
            function(){
                this.timeout(0);
                let test = async (url) => {
                    return new Nightmare({show:false})
                    .goto(url)
                    .click("#items tr[data-name='James Bond'] button[data-target='#editModal']")
                    .wait(1000)
                    .type('#name', '')
                    .type('#name', 'Homer Simpson')
                    .type('#age', '')
                    .type('#age', '52')
                    .click("#saveChanges")
                    .wait(1000)
                    .end()
                    .evaluate(()=>{
                        return jQuery("#items tr:nth(1) td:nth(0)").text() + " " + jQuery("#items tr:nth(1) td:nth(1)").text();
                    })
                    .end();
                }
            return test(url).should.eventually.equal("Homer Simpson 52");         
        });
    });
    describe("Change Status", () => {
        it("Should change the status of the item from 'Active' to 'Inactive', when the switch is clicked", 
            function(){
                this.timeout(0);
                let test = async (url) => {
                    return new Nightmare({show:false})
                    .goto(url)
                    .evaluate(()=>{
                        return jQuery("#items tr[data-name='James Bond'] select.statusSelect option[value='Active']").prop("selected", true)
                    })
                    .wait(1000)
                    .end()
                    .evaluate(()=>{
                        return jQuery("#items tr[data-name='James Bond'] select.statusSelect option[value='Inactive']").prop("selected")
                    })
                    .end();
                }
            return test(url).should.eventually.equal(false);         
        });
    });
});