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
    init() {
        jQuery(() => {
            this.validateForm();
            this.updateCounter();
        });
    }
    updateCounter = () => this.counterElement.text(this.couter);
    increaseCounter = () => this.couter = this.couter + 1;
    decreaseCounter = () => this.couter = this.couter - 1;
    isCounterWithinLimit = (value:number): boolean => value <= Number(this.counterLimit - 1);
    thereIsAValue = (input:string) => typeof input !== "undefined" && input.length > 0 ;
    listHasItems = ():boolean => typeof this.result[0] !== "undefined" && this.result[0].childNodes.length > 0;
    addListItem = (input: string):string => {
        if (this.listHasItems()) {
            const result = this.result.html();
            return `${result}<li>${input} <a href="#" class="delete">Delete</a></li>`;
        } else {
            return `<li>${input} <a href="#" class="delete">Delete</a></li>`;
        }
    };
    deleteListItem = (index: number) => {
        const result = this.result[0].childNodes;
        if (typeof result !== "undefined" && result.length > 0) {
            result[index].remove();
            this.decreaseCounter();
            this.updateCounter();
        }
    }
    bindDeleteItemHandler = () => {
        this.result.find("li .delete").on("click", (e) => {
            e.preventDefault();
            const index = jQuery(e.currentTarget).index(".delete") || 0;
            this.deleteListItem(index);
        });
    }
    populateResult = (value:string) => this.result.html(value);
    validateForm = () => {
        this.form.on("submit",(e) => {
            e.preventDefault();
            const input = this.input.val().toString();
            const counter = Number(this.counterElement.text());

            if (this.thereIsAValue(input) && this.isCounterWithinLimit(counter)) {
                const list = this.addListItem(input);
                this.populateResult(list);
                this.bindDeleteItemHandler();
                this.increaseCounter();
                this.updateCounter();
                this.input.val("");
            }
        });
    }
}