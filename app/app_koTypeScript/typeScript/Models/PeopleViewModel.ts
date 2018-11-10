import { PeopleModel } from "./PeopleModel";

export class PeopleViewModel {
    collection: KnockoutObservableArray<PeopleModel>;
    name: KnockoutObservable<string>;
    age: KnockoutObservable<number>;

    constructor(name: string, age: number) {
        this.collection = ko.observableArray(new Array<PeopleModel>());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.fetch();
    }   

    public add(){
        this.collection.push(new PeopleModel(this.name(), this.age()))
    }

    public fetch() : void {
        this.collection.push(new PeopleModel("Your name 1", 1))
        this.collection.push(new PeopleModel("Your name 2", 2))
        this.collection.push(new PeopleModel("Your name 3", 3))
        this.collection.push(new PeopleModel("Your name 4", 4))
    }

    public remove () {
        //data-bind="click: $parent.remove"
       
    }

    public removeConfirm = (item: PeopleModel) => {
        this.collection.remove(item);
    }
}