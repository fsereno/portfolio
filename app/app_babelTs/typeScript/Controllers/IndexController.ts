export class IndexController  {

    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private counter: JQuery<HTMLElement>;
    private counterLimit: number;
    private formId: string;

    constructor() {
        this.input = jQuery("#input");
        this.result = jQuery("#result");
        this.counter = jQuery("#counter");
        this.counterLimit = 10;
        this.formId = "inputForm";
    }
    init() {
        jQuery(() => {
            this.validateForm();
            this.setCounter();
        });
    }
    setCounter = (value = 0) => this.counter.text(value);
    incrementCounter = (value:number):number => Number(value + 1);
    isCounterWithinLimit = (value:number): boolean => value <= Number(this.counterLimit - 1);
    thereIsAValue = (input:string):boolean => typeof input !== "undefined" && input.length > 0;
    validateForm = () => {
        jQuery(`#${this.formId}`).on("submit",(e) => {
            e.preventDefault();

            const input = this.input.val().toString();
            const result = this.result.text();
            const counter = Number(this.counter.text());

            if (this.thereIsAValue(input) && this.isCounterWithinLimit(counter)) {
                if(this.thereIsAValue(result)) {
                    this.result.text(`${result}, ${input}`);
                } else {
                    this.result.text(input);
                }
                const updatedCounter = this.incrementCounter(counter);
                this.setCounter(updatedCounter);
                this.input.val();
            }
        });
    }
}