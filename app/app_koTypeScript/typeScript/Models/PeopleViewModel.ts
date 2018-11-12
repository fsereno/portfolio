import { PeopleModel } from "./PeopleModel";
export class PeopleViewModel {
    private formId: string;
    private editModalId: string;
    private itemToDelete: PeopleModel;
    private currentItem: PeopleModel;
    public collection: KnockoutObservableArray<PeopleModel>;
    public name: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;

    constructor(formId: string, editModalId: string) {
        this.formId = formId;
        this.editModalId = editModalId;
        this.collection = ko.observableArray(new Array<PeopleModel>());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.currentItem = new PeopleModel("", 0);
        this.fetch();
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
        this.name(item.name);
        this.age(item.age);
    }

    public closeEdit = () => {
        jQuery("#"+this.editModalId).modal("hide");
    }

    public update = () => {
        if(jQuery("#"+this.formId).valid()){
            if(this.collection.indexOf(this.currentItem) > -1) {
                var replace = new PeopleModel(this.name(), this.age())
                this.collection.replace(this.currentItem, replace);
                this.closeEdit();
            } else {
                if(this.name().length > 0 && this.age() > 0) {
                    this.collection.push(new PeopleModel(this.name(), this.age()));
                    this.closeEdit();
                }
            }
        }
    }
}