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
        it("Should show the modal after clicking on an Inbox message.", function() {
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
    describe("Reply", () => {
        it("Should submit a reply and confirm in Outbox.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:true})
                .goto(`${url}#/inbox`)
                .wait(2000)
                .click('#id_0')
                .wait(2000)
                .click('#replyBtn')
                .wait(2000)
                .type('textarea#body', 'This is a reply')
                .click('#submit')
                .wait(2000)
                .click("a[href='#/outbox']")
                .wait(2000)
                .click('.list-group-item')
                .wait(2000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");
                    const hasCorrectBody = $(".fade.modal.show:contains('This is a reply')");

                    return modal.length > 0 && hasCorrectBody.length > 0
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("New", () => {
        it("Should submit a new message and confirm in Outbox.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:true})
                .goto(url)
                .wait(2000)
                .click('#new')
                .wait(2000)
                .type('#to', 'test@email.co.uk')
                .type('#subject', 'This is a new Subject')
                .type('#body', 'This is a new message')
                .click("#submit")
                .wait(2000)
                .click("a[href='#/outbox']")
                .wait(2000)
                .click('.list-group-item')
                .wait(2000)
                .end()
                .evaluate(() => {

                    const modal = $(".fade.modal.show");
                    const hasCorrectTo = $(".fade.modal.show:contains('test@email.co.uk')");
                    const hasCorrectSubject = $(".fade.modal.show:contains('This is a new Subject')");
                    const hasCorrectBody = $(".fade.modal.show:contains('This is a new message')");

                    return modal.length > 0 && hasCorrectTo.length > 0 && hasCorrectBody.length > 0 && hasCorrectSubject.length > 0
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
    describe("Verify Dashboard", () => {
        it("Should submit a new message and confirm the Dashboard is correct and updated.", function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:true})
                .goto(url)
                .wait(2000)
                .click('#new')
                .wait(2000)
                .type('#to', 'test@email.co.uk')
                .type('#subject', 'This is a new Subject')
                .type('#body', 'This is a new message')
                .click("#submit")
                .wait(2000)
                .click("a[href='#/home']")
                .wait(2000)
                .end()
                .evaluate(() => {

                    const inboxCounter  = $("#inboxCounter span").text();
                    const outboxCounter  = $("#outboxCounter span").text();

                    return inboxCounter === '3' && outboxCounter === '1';
                })
                .end();
            }
            return  test(url).should.eventually.equal(true)
        });
    });
});