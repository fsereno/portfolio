let persons = [];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

persons.push(new Person("James", 23));
persons.push(new Person("Anna", 30));
persons.push(new Person("Tim", 18));

persons.forEach((person) => console.log(`${person.name} ${person.age}`));