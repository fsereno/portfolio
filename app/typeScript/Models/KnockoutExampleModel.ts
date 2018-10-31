export class KnockoutExampleModel {
    Name: KnockoutObservable<string>
    Age: KnockoutObservable<number>

    constructor(name: string, age: number) {
        this.Name = ko.observable(name);
        this.Age = ko.observable(age);
    }
}