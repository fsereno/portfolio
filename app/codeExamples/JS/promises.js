"use strict";

var isApplictionSuccessful = true;

var canIAffordThisLoan = new Promise(
    (resolve, reject) => {
        if (isApplictionSuccessful) {
            var decision = {
                affordability: true,
                creditCheck: true
            };
            resolve(decision);
        } else {
            var reason = new Error('You cannot afford this loan.');
            reject(reason);
        }
    }
);

var askBank = () => {
    canIAffordThisLoan
        .then((fulfilled) => {
            console.log(fulfilled);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

askBank();