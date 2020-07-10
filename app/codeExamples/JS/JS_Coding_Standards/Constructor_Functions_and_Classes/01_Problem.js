let persons = [];

persons.push({
  name: "James",
  age: 23
});

persons.push({
  name: "Anna",
  age: 30
});

persons.push({
  name: "Tim",
  age: 18
});

persons.forEach((person) => console.log(`${person.name} ${person.age}`));