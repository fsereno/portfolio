import { UserModel } from "./UserModel";
export class UserViewModel {
    private formId: string;
    private editModalId: string;
    private context: UserModel;
    public collection: KnockoutObservableArray<UserModel>;
    public name: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;

    constructor(formId: string, editModalId: string) {
        this.formId = formId;
        this.editModalId = editModalId;
        this.collection = ko.observableArray(new Array<UserModel>());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.context = null;
        this.get();
    }   

    public get() : void {
        this.collection.push(new UserModel("James Bond", 23))
        this.collection.push(new UserModel("Joe Bloggs", 34))
    }

    public remove = (item: UserModel) => this.context = item;

    public removeConfirm = () => {
        if(this.collection.indexOf(this.context) > -1)
            this.collection.remove(this.context);
    }

    public populateEdit = (item: UserModel) => {
        this.context = item;
        this.name(item.name);
        this.age(item.age);
    }

    public clearEdit = () => {
        this.name("");
        this.age(0);
    }

    public closeEdit = () => jQuery("#"+this.editModalId).modal("hide");

    public update = () => {
        if(jQuery("#"+this.formId).valid()){
            if(this.collection.indexOf(this.context) > -1
                && this.name().length > 0 && this.age() > 0) {
                var replace = new UserModel(this.name(), this.age())
                this.collection.replace(this.context, replace);
                this.closeEdit();
            } else {
                if(this.name().length > 0 && this.age() > 0) {
                    this.collection.push(new UserModel(this.name(), this.age()));
                    this.closeEdit();
                }
            }
        }
    }
}