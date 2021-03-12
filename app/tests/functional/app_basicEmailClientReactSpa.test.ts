import Nightmare  = require("nightmare");
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let sinonChai = require('sinon-chai');
let should = chai.should();
let application = "app_basicEmailClientReactSpa";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Open Read Modal", () => {
        it("Should add an item to the list.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:true})
                .goto(url)
                .wait(2000)
                .click('#id_0')
                .wait(2000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");

                    return modal.length > 0
                })
                .end();
            }
            return  test(`${url}#/inbox`).should.eventually.equal(true)
        });
    });
});