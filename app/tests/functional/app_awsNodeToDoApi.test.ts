import Nightmare  = require("nightmare");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const should = chai.should();
const application = "app_awsNodeToDoApi";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Login", () => {
        it("Should login successfully with TestUser.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .type("#username", "TestUser")
                .type("#password", "Password-1")
                .click("#submit")
                .wait(2000)
                .end()
                .evaluate(() => {

                    const element = document.getElementById("itemForm");

                    return element !== null;
                })
                .end();
            }
            return  test(`${url}#/login`).should.eventually.equal(true);
        });
        it("Should not login successfully when an invalid user is passed.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .type("#username", "Someuser123")
                .type("#password", "SomePassword123")
                .click("#submit")
                .wait(2000)
                .end()
                .evaluate(() => {

                    const element = document.getElementById("itemForm");
                    const error = document.getElementsByClassName("text-danger")[0].innerHTML;

                    return element === null && error.length > 0;
                })
                .end();
            }
            return  test(`${url}#/login`).should.eventually.equal(true);
        });
    });
    describe("Logout", () => {
        it("Should logout successfully.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .type("#username", "TestUser")
                .type("#password", "Password-1")
                .click("#submit")
                .wait(2000)
                .click("#logoutNavLink")
                .wait(1000)
                .click("#submit")
                .wait(2000)
                .end()
                .evaluate(() => {

                    const username = document.getElementById("username");
                    const password = document.getElementById("password");

                    return username !== null && password !== null;
                })
                .end();
            }
            return  test(`${url}#/login`).should.eventually.equal(true);
        });
    });
});