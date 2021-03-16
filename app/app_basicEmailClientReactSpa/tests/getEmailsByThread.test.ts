"use strict;"

import { expect } from 'chai';
import { getEmailsByThread } from '../src/utils/getEmailsByThread';
import { INBOX, OUTBOX } from "../src/globalConstants";

describe("getEmailsByThread", () => {
    it("Should return 2 items in the array when the thread contains all the args passed in any order", () => {

        const messages = [
            {
                thread: "from@mail.com_to@mail.com_Subject 1",
                dir: INBOX
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 1",
                dir: INBOX
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 2",
                dir: INBOX
            } ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(2);
    });

    it("Should return an empty array when nothing matches", () => {

        const messages = [
            {
                thread: "test@mail.com_test@mail.com_Subject 1",
                dir: INBOX
            },
            {
                thread: "test@mail.com_test@mail.com_Subject 1",
                dir: INBOX
            },
        ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX
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
                dir: INBOX
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 1",
                dir: OUTBOX
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 2",
                dir: INBOX
            } ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1",
            dir: INBOX
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(1);
    });
});