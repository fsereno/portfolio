"use strict;"

export const modifiedOnComparerDesc = (a, b) => {

    if (a.modifiedOn < b.modifiedOn) {
        return 1;
    }

    if (a.modifiedOn > b.modifiedOn) {
        return -1;
    }

    return 0;
}