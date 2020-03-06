import { userModel } from "./userModel";
import { StatusLiterals } from "./StatusLiterals";
export class UserViewModel {
    private formId: string;
    private editModalId: string;
    private context: userModel;
    private statusLiterals: StatusLiterals;
    public usersCollection: KnockoutObservableArray<userModel>;
    public statusCollection: KnockoutObservableArray<string>;
    public name: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;
    public active: KnockoutObservable<boolean>;
    public status: KnockoutObservable<string>;

    constructor(formId: string, editModalId: string) {
        this.formId = formId;
        this.editModalId = editModalId;
        this.context = null;
        this.statusLiterals = new StatusLiterals();
        this.usersCollection = ko.observableArray(new Array<userModel>());
        this.statusCollection = ko.observableArray(new Array<string>());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.active = ko.observable(false);
        this.status = ko.observable(this.statusLiterals.inactive);
        this.getUsers();
        this.getStatus();
    }

    public getUsers(): void {
        this.usersCollection.push(new userModel("James Bond", 23, false, this.statusLiterals.inactive));
        this.usersCollection.push(new userModel("Joe Bloggs", 34, false, this.statusLiterals.inactive));
    }

    public getStatus(): void {
        this.statusCollection.push(this.statusLiterals.inactive);
        this.statusCollection.push(this.statusLiterals.pending);
        this.statusCollection.push(this.statusLiterals.active);
    }

    public remove = (item: userModel) => this.context = item;

    public removeConfirm = () => {
        if (this.usersCollection.indexOf(this.context) > -1) {
            this.usersCollection.remove(this.context);
        }
    }

    public populateEdit = (item: userModel) => {
        this.context = item;
        this.name(item.name);
        this.age(item.age);
        this.active(item.active);
        this.status(item.status)
    }

    public clear = () => {
        this.name("");
        this.age(0);
        this.active(false);
        this.status(this.statusLiterals.inactive);
    }

    public closeEdit = () => jQuery("#" + this.editModalId).modal("hide");

    public toggleStatus = (item: userModel) => {
        this.populateEdit(item);
        this.update();
    }

    public update = () => {
        if (jQuery("#" + this.formId).valid()) {
            if (this.usersCollection.indexOf(this.context) > -1
                && this.name().length > 0 && this.age() > 0) {
                var replace = new userModel(
                    this.name(),
                    this.age(),
                    this.active(),
                    this.status())
                this.usersCollection.replace(this.context, replace);
                this.closeEdit();
            } else {
                if (this.name().length > 0 && this.age() > 0) {
                    this.usersCollection.push(new userModel(
                        this.name(),
                        this.age(),
                        this.active(),
                        this.status()));
                    this.closeEdit();
                }
            }
        }
    }
}