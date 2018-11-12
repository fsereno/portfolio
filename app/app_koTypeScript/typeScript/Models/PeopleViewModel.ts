import { PeopleModel } from "./PeopleModel";
export class PeopleViewModel {
    collection: KnockoutObservableArray<PeopleModel>;
    name: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    nameToEdit: KnockoutObservable<string>;
    ageToEdit: KnockoutObservable<number>;
    itemToDelete: PeopleModel;
    currentItem: PeopleModel;

    constructor(name: string, age: number) {
        this.collection = ko.observableArray(new Array<PeopleModel>());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.nameToEdit = ko.observable("");
        this.ageToEdit = ko.observable(0);
        this.currentItem = new PeopleModel("", 0);
        this.fetch();
    }   

    public add(){
        if(this.name().length > 0 && this.age() > 0)
            this.collection.push(new PeopleModel(this.name(), this.age()));
    }

    public fetch() : void {
        this.collection.push(new PeopleModel("James Bond", 23))
        this.collection.push(new PeopleModel("Joe Bloggs", 34))
    }

    public remove = (item: PeopleModel) => {
        this.itemToDelete = item;
    }

    public removeConfirm = () => {
        if(this.collection.indexOf(this.itemToDelete) > -1)
            this.collection.remove(this.itemToDelete);
    }

    public edit = (item: PeopleModel) => {
        this.currentItem = item;
        this.nameToEdit(item.name);
        this.ageToEdit(item.age);
    }

    public update = () => {
        if(this.collection.indexOf(this.currentItem) > -1) {
            var replace = new PeopleModel(this.nameToEdit(), this.ageToEdit())
            this.collection.replace(this.currentItem, replace);
        }
    }
}