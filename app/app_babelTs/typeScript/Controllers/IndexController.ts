"use strict;"
export class IndexController  {

    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private counterElement: JQuery<HTMLElement>;
    private counterLimit: number;
    private form: JQuery<HTMLElement>;
    private couter: number;

    constructor() {
        this.input = jQuery("#input");
        this.result = jQuery("#result");
        this.counterElement = jQuery("#counter");
        this.counterLimit = 10;
        this.couter = 0;
        this.form = jQuery("#inputForm");
    }
    public init() {
        jQuery(() => {
            this.submitFormHandler();
            this.updateCounter();
        });
    }
    private updateCounter = () => this.counterElement.text(this.couter);
    private increaseCounter = () => this.couter = this.couter + 1;
    private decreaseCounter = () => this.couter = this.couter - 1;
    private isCounterWithinLimit = (value:number): boolean => value <= Number(this.counterLimit - 1);
    private thereIsAValue = (input:string):boolean => typeof input !== "undefined" && input.length > 0 ;
    private listHasItems = ():boolean => typeof this.result[0] !== "undefined" && this.result[0].childNodes.length > 0;
    private populateResult = (value:string) => this.result.html(value);
    private clearInput = () => this.input.val("");
    private addListItem = (input: string):string => {
        if (this.listHasItems()) {
            const result = this.result.html();
            return `${result}<li class="list-group-item d-flex justify-content-between align-items-center">${input} <a href="#" class="badge badge-danger delete">Delete</a></li>`;
        } else {
            return `<li class="list-group-item d-flex justify-content-between align-items-center">${input} <a href="#" class="badge badge-danger delete">Delete</a></li>`;
        }
    };
    private deleteListItem = (index: number) => {
        const result = this.result[0].childNodes;
        if (typeof result !== "undefined" && result.length > 0) {
            result[index].remove();
            this.decreaseCounter();
            this.updateCounter();
        }
    }
    private bindDeleteItemHandler = () => {
        this.result.find("li .delete").on("click", (e) => {
            e.preventDefault();
            const index = jQuery(e.currentTarget).index(".delete") || 0;
            this.deleteListItem(index);
        });
    }
    private isFormValid = (input:string):boolean => {
        let isValid = false;
        const counter = Number(this.counterElement.text());
        if (this.thereIsAValue(input) && this.isCounterWithinLimit(counter)) {
            isValid = true;
        }
        return isValid;
    }
    private submitFormHandler = () => {
        this.form.on("submit",(e) => {
            e.preventDefault();
            const input = this.input.val().toString();
            if (this.isFormValid(input)) {
                const list = this.addListItem(input);
                this.populateResult(list);
                this.bindDeleteItemHandler();
                this.increaseCounter();
                this.updateCounter();
                this.clearInput();
            };
        });
    }
}