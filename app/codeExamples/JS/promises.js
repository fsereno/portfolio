"use strict";

// Change from true to false to trigger the catch error.
var isApplictionSuccessful = true;

// The Promise
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
            // If fulfilled then log out the decision.
            console.log(fulfilled);
        })
        .catch((error) => {
            // If not successful, then output the error.
            console.log(error.message);
        });
}

askBank();