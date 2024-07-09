"use strict;"

import { getEmailsByThread } from '../src/utils/getEmailsByThread';
import { INBOX, OUTBOX } from "../src/constants";

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
        expect(result.length).toEqual(2);
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
        expect(result.length).toEqual(0);
    });

    it("Should return an empty array when nothing passed", () => {
        const result = getEmailsByThread();
        expect(result.length).toEqual(0);
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
        expect(result.length).toEqual(1);
    });
    it("Should not return similar subjects", () => {

        const messages = [
            {
                thread: "from@mail.com_to@mail.com_Subject 1",
                dir: INBOX,
                time: 1616625116244
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 10",
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
        expect(result.length).toEqual(1);
    });
});