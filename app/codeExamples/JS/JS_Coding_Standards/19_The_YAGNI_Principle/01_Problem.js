class Person {
    constructor(name) {
        this.name = name;
    }
    name = "";
    age = 0;
    sex = "";
    occupation = "";
}

let person = new Person("James");

console.log(person.name);