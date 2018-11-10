import { PeopleModel } from "./PeopleModel";
export class PeopleViewModel {
    collection: KnockoutObservableArray<PeopleModel>;
    name: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    delete: PeopleModel;

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
        this.collection.push(new PeopleModel("James Bond", 23))
        this.collection.push(new PeopleModel("Joe Bloggs", 34))
    }

    public remove = (item: PeopleModel) => {
        this.delete = item;
    }

    public removeConfirm = () => {
        this.collection.remove(this.delete);
    }
}