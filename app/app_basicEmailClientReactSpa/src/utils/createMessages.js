"use strict;"

import { MY_ADDRESS } from '../constants';
import { getRandomInt } from '../../../js/modules/utils/randomUtil';
import getBodies from '../data/bodies';
import getEmailAddresses from '../data/emailAddresses';

export function createMessages(numberOf, dir) {

    const result = [];
    const bodies = getBodies();
    const emailAddresses = getEmailAddresses();

    for (let i = 0; i < numberOf; i++) {

        const emailBodyRandomInt = getRandomInt(0, 2);
        const emailsRandomInt = getRandomInt(0, 3);
        const dummyEmail = emailAddresses[emailsRandomInt];

        result.push(
            {
                id: i,
                from: dummyEmail,
                to: MY_ADDRESS,
                subject: `Subject ${i}`,
                thread: `${dummyEmail}_${MY_ADDRESS}_Subject ${i}`,
                body: bodies[emailBodyRandomInt],
                age: 0,
                read: false,
                dir: dir,
                time: new Date().getTime()
            },
        )
    }

    return result;
}