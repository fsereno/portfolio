class PersonType {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}

var person = new PersonType("james");
console.log(person.name);