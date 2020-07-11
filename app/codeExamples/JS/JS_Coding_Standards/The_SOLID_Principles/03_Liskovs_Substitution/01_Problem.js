class Animal {
    walk() {
        console.log("The Animal is walking.");
    }
    sleep() {
        console.log("The Animal is sleeping.");
    }
}

class Dog extends Animal {
    walk() {
        console.log("The Dog is walking.");
    }
    sleep() {
        console.log("The Dog is sleeping.");
    }
    eat(){
        console.log("The Dog is eating.");
    }
}

class Cat extends Animal {
    walk() {
        console.log("The Cat is walking.");
    }
    sleep() {
        console.log("The Cat is sleeping.");
    }
}

let dog = new Dog();
let cat = new Cat();
let animals = [dog, cat];

animals.forEach((animal) => {
    animal.eat();
});