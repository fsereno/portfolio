/*
    To compile this code run the following in the terminal
       > npx babel typeScript  --out-dir js --extensions '.ts'
*/

class PersonType {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}

var test = new PersonType("james");
console.log(test.name);