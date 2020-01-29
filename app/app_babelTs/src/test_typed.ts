class PersonType {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}

var test = new PersonType("James");
console.log(test.name);