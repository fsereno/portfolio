class Dog {
    walk() {
        console.log("The Dog is walking.");
    }
    sleep() {
        console.log("The Dog is sleeping.");
    }
    bark() {
        console.log("The Dog is barking.");
    }
}

class Cat extends Dog {
    walk() {
        console.log("The Cat is walking.");
    }
    sleep() {
        console.log("The Cat is sleeping.");
    }
    bark() {
        throw new Error("Cats do not bark");
    }
    meow(){
        console.log("The Cat is meowing.");
    }
}

let dog = new Dog();
let cat = new Cat();
let animals = [dog, cat];

animals.forEach((animal) => {
    animal.bark();
});