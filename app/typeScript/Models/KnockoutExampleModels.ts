import { KnockoutExampleModel } from "./KnockoutExampleModel";

export class KnockoutExampleModels {
    KnockoutExampleModels: KnockoutObservableArray<KnockoutExampleModel>;
    Name: KnockoutObservable<string>
    Age: KnockoutObservable<number>

    constructor(name: string, age: number) {
        this.KnockoutExampleModels = ko.observableArray(new Array<KnockoutExampleModel>());
        this.Name = ko.observable(name);
        this.Age = ko.observable(age);
        this.fetch();
    }   

    public add(){
        this.KnockoutExampleModels.push(new KnockoutExampleModel(this.Name(), this.Age()))
    }

    public fetch() : void {
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name 1", 1))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name 2", 2))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name 3", 3))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name 4", 4))
    }
}