import { KnockoutExampleModel } from "./KnockoutExampleModel";

export class KnockoutExampleModels { // look at extending KnockoutExampleModel
    collection: KnockoutObservableArray<KnockoutExampleModel>;
    name: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    self: KnockoutExampleModels;

    constructor(name: string, age: number) {
        this.collection = ko.observableArray(new Array<KnockoutExampleModel>());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.fetch();
    }   

    public add(){
        this.collection.push(new KnockoutExampleModel(this.name(), this.age()))
    }

    public fetch() : void {
        this.collection.push(new KnockoutExampleModel("Your name 1", 1))
        this.collection.push(new KnockoutExampleModel("Your name 2", 2))
        this.collection.push(new KnockoutExampleModel("Your name 3", 3))
        this.collection.push(new KnockoutExampleModel("Your name 4", 4))
    }

    public remove = (item: KnockoutExampleModel) => {
        this.collection.remove(item);
    }
}