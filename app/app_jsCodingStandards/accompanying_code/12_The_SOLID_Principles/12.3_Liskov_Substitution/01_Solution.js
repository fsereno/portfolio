class Animal {
    move() {
        console.log("The Animal is moving.");
    }
    sleep() {
        console.log("The Animal is sleeping.");
    }
    communicate() {
        console.log("The Animal is communicating.");
    }
}

class Dog extends Animal {
    move() {
        console.log("The Dog is walking.");
    }
    sleep() {
        console.log("The Dog is sleeping.");
    }
    communicate() {
        console.log("The Dog is barking.")
    }
}

class Cat extends Animal {
    move() {
        console.log("The Cat is walking.");
    }
    sleep() {
        console.log("The Cat is sleeping.");
    }
    communicate() {
        console.log("The Cat is meowing.")
    }
}

let dog = new Dog();
let cat = new Cat();
let animals = [dog, cat];

animals.forEach((animal) => {
    animal.communicate();
});