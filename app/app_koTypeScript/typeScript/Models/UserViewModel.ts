"use strict;"

import { userModel } from "./userModel";
import { StatusLiterals } from "../Enums/StatusLiterals";

export class UserViewModel {
    private formId: string;
    private editModalId: string;
    private addModalId: string;
    private context: userModel;
    public usersCollection: KnockoutObservableArray<userModel>;
    public statusCollection: KnockoutObservableArray<string>;
    public name: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;
    public active: KnockoutObservable<boolean>;
    public status: KnockoutObservable<string>;

    constructor(formId: string, editModalId: string, addModalId: string) {
        this.formId = formId;
        this.editModalId = editModalId;
        this.addModalId = addModalId;
        this.context = null;
        this.usersCollection = ko.observableArray(new Array<userModel>());
        this.statusCollection = ko.observableArray(new Array<string>());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.active = ko.observable(false);
        this.status = ko.observable(StatusLiterals.Inactive);
        this.getUsers();
        this.getStatus();
    }

    public getUsers(): void {
        this.usersCollection.push(new userModel("James Bond", 23, false, StatusLiterals.Inactive));
        this.usersCollection.push(new userModel("Joe Bloggs", 34, false, StatusLiterals.Inactive));
    }

    public getStatus(): void {
        this.statusCollection.push(StatusLiterals.Inactive);
        this.statusCollection.push(StatusLiterals.Pending);
        this.statusCollection.push(StatusLiterals.Active);
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
        this.status(StatusLiterals.Inactive);
    }

    private close = (id: string) => {
        let modalId = "#" + id;
        jQuery(modalId).modal("hide");
    }

    public closeEdit = () => {
        this.close(this.editModalId);
    }

    public closeAdd = () => {
        this.close(this.addModalId);
    }

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
            }
        }
    }

    public add = () => {
        if (jQuery("#" + this.formId).valid()) {
            if (this.name().length > 0 && this.age() > 0) {
                this.usersCollection.push(new userModel(
                    this.name(),
                    this.age(),
                    this.active(),
                    this.status()));
                this.closeAdd();
            }
        }
    }
}