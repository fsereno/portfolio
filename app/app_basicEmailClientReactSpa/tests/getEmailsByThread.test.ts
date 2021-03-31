"use strict;"

import { expect } from 'chai';
import { getEmailsByThread } from '../src/utils/getEmailsByThread';
import { INBOX, OUTBOX } from "../src/globalConstants";

describe("getEmailsByThread", () => {
    it("Should return 2 items in the array when the thread contains all the args passed in any order", () => {

        const messages = [
            {
                thread: "from@mail.com_to@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 2",
                dir: INBOX,
                time: 1616625116244
            } ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX,
            time: 1616625116244
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(2);
    });

    it("Should return an empty array when nothing matches", () => {

        const messages = [
            {
                thread: "test@mail.com_test@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
            {
                thread: "test@mail.com_test@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
        ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX,
            time: 1616625116244
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(0);
    });

    it("Should return an empty array when nothing passed", () => {
        const result = getEmailsByThread();
        expect(result.length).to.equal(0);
    });

    it("Should return only items from the Inbox when Inbox passed", () => {
        const messages = [
            {
                thread: "from@mail.com_to@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 1",
                dir: OUTBOX,
                time: 1616625116244
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 2",
                dir: INBOX,
                time: 1616625116244
            } ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX,
            time: 1616625116244
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(1);
    });
    it ("Should return expected from outbox", () => {

        const messages = JSON.parse(
            '[{"id":0,"from":"james@hsbc.co.uk","to":"me@portfolio.co.uk","subject":"Subject 1","thread":"james@hsbc.co.uk_me@portfolio.co.uk_Subject 1","body":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","age":1,"read":false,"dir":"/inbox","time":1617203306037},{"id":1,"from":"sarah@ford.co.uk","to":"me@portfolio.co.uk","subject":"Subject 2","thread":"sarah@ford.co.uk_me@portfolio.co.uk_Subject 2","body":"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.","age":2,"read":false,"dir":"/inbox","time":1617203306037},{"id":2,"from":"tim.jones@hmrc.co.uk","to":"me@portfolio.co.uk","subject":"Subject 3","thread":"tim.jones@hmrc.co.uk_me@portfolio.co.uk_Subject 3","body":"Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC","age":3,"read":false,"dir":"/inbox","time":1617203306037},{"id":3,"from":"tim.jones@hmrc.co.uk","to":"me@portfolio.co.uk","subject":"Subject 3","thread":"tim.jones@hmrc.co.uk_me@portfolio.co.uk_Subject 3","body":"Some reply","age":3,"read":false,"dir":"/outbox","time":1617203306037}]'
        )

        console.log("MESSAGES")
        console.log(messages);

        const selected = JSON.parse('{"subject":"Subject 1","thread":"me@portfolio.co.uk_james@hsbc.co.uk_Subject 1","id":6.602995766946053,"from":"me@portfolio.co.uk","to":"james@hsbc.co.uk","body":"This is a new reply","age":0,"dir":"/outbox","time":1617203334069}')
        
        console.log("SELECTED")
        console.log(selected);

        const result = getEmailsByThread(messages, selected);

        expect(result.length).to.equal(2);
    });
});