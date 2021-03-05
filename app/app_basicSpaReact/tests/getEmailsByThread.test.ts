"use strict;"

import { expect } from 'chai';
import { getEmailsByThread } from '../src/utils/getEmailsByThread';

describe("getEmailsByThread", () => {
    it("Should return 2 items in the array when the thread contains all the args passed in any order", () => {

        const messages = [
            {
                thread: "from@mail.com_to@mail.com_Subject 1"
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 1"
            },
            {
                thread: "to@mail.com_from@mail.com_Subject 2"
            } ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1"
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(2);
    });

    it("Should return an empty array when nothing matches", () => {

        const messages = [
            {
                thread: "test@mail.com_test@mail.com_Subject 1"
            },
            {
                thread: "test@mail.com_test@mail.com_Subject 1"
            },
        ];

        const selected = {
            from: "from@mail.com",
            to: "to@mail.com",
            subject: "Subject 1"
        }

        const result = getEmailsByThread(messages, selected);
        expect(result.length).to.equal(0);
    });

    it("Should return an empty array when nothing passed", () => {
        const result = getEmailsByThread();
        expect(result.length).to.equal(0);
    });
});