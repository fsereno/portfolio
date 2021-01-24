"use strict;"

export class Application {
    constructor(order: number = Number.MAX_VALUE) {
        this.order = order;
    }

    public order: number;
}