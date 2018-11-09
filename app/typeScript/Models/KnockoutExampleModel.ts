export class KnockoutExampleModel {
    name: KnockoutObservable<string>;
    age: KnockoutObservable<number>;

    constructor(name: string, age: number) {
        this.name = ko.observable(name);
        this.age = ko.observable(age);
    }

    /*public remove() : void {
        console.log(this.Name());
    }*/
}