"use strict;"

class Car {
    constructor(make, colour, isHybrid) {
        this.make = make;
        this.colour = colour;
        this.isHybrid = isHybrid;
        this.isHybridText = isHybrid ? "is a hybrid" : "is not a hybrid";
    }
    describe = () => `This car is an ${this.make} and it is ${this.colour}. This car ${this.isHybridText}`;
}

let describeCars = (cars = []) => {
    cars.forEach((car) => {
        console.log(car.describe());
    });
}

let cars = [
    new Car("Aldi", "Red", false),
    new Car("Ford", "Blue", true),
    new Car("Honda", "Black", true),
    new Car("Lamborghini", "Black", false),
    new Car("Porsche", "Yellow", false),
    new Car("Dodge", "Green", true),
];

describeCars(cars);