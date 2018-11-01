import { KnockoutExampleModel } from "./KnockoutExampleModel";

export class KnockoutExampleModels {
    KnockoutExampleModels: KnockoutObservableArray<KnockoutExampleModel>;
    
    constructor(knockoutExampleModels: KnockoutExampleModel[]) {
        this.KnockoutExampleModels = ko.observableArray(knockoutExampleModels);
    }

    public fetch() : void {
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name", 0))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name", 0))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name", 0))
        this.KnockoutExampleModels.push(new KnockoutExampleModel("Your name", 0))
    }
}