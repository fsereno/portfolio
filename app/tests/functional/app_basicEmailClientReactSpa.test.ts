import Nightmare  = require("nightmare");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const should = chai.should();
const application = "app_basicEmailClientReactSpa";

chai.use(sinonChai);
chai.use(chaiAsPromised);

const url = "http://localhost:8080/"+application+"/index.html";

describe(application, () => {
    describe("Open Read Modal", () => {
        it("Should show the modal after clicking on an Inbox message.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .wait(1000)
                .click('#id_0')
                .wait(1000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");

                    return modal.length > 0;
                })
                .end();
            }
            return  test(`${url}#/inbox`).should.eventually.equal(true);
        });
    });
    describe("Reply", () => {
        it("Should submit a reply and confirm in Outbox.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(`${url}#/inbox`)
                .wait(1000)
                .click('#id_0')
                .wait(1000)
                .click('#replyBtn')
                .wait(1000)
                .type('textarea#body', 'This is a reply')
                .click('#submit')
                .wait(1000)
                .click("a[href='#/outbox']")
                .wait(1000)
                .click('.list-group-item')
                .wait(1000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");
                    const hasCorrectBody = $(".fade.modal.show:contains('This is a reply')");

                    return modal.length > 0 && hasCorrectBody.length > 0;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true);
        });
    });
    describe("New", () => {
        it("Should submit a new message and confirm in Outbox.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .wait(1000)
                .click('#new')
                .wait(1000)
                .type('#to', 'test@email.co.uk')
                .type('#subject', 'This is a new Subject')
                .type('#body', 'This is a new message')
                .click("#submit")
                .wait(1000)
                .click("a[href='#/outbox']")
                .wait(1000)
                .click('.list-group-item')
                .wait(1000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");
                    const hasCorrectTo = $(".fade.modal.show:contains('test@email.co.uk')");
                    const hasCorrectSubject = $(".fade.modal.show:contains('This is a new Subject')");
                    const hasCorrectBody = $(".fade.modal.show:contains('This is a new message')");

                    return modal.length > 0 && hasCorrectTo.length > 0 && hasCorrectBody.length > 0 && hasCorrectSubject.length > 0;
                })
                .end();
            }
            return  test(url).should.eventually.equal(true);
        });
    });
    describe("Verify Dashboard", () => {
        it("Should submit a new message and confirm the Dashboard is correct and updated.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare()
                .goto(url)
                .wait(1000)
                .click('#new')
                .wait(1000)
                .type('#to', 'test@email.co.uk')
                .type('#subject', 'This is a new Subject')
                .type('#body', 'This is a new message')
                .click("#submit")
                .wait(1000)
                .click("a[href='#/home']")
                .wait(1000)
                .end()
                .evaluate(() => {

                    const inboxCounter  = $("#inboxCounter span").text();
                    const outboxCounter  = $("#outboxCounter span").text();

                    return inboxCounter === '3' && outboxCounter === '1';
                })
                .end();
            }
            return  test(url).should.eventually.equal(true);
        });
    });
});