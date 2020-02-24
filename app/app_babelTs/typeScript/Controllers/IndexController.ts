// Interfaces

export class IndexController  {

    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor()
    {
        this.input = jQuery("#input");
        this.result = jQuery("#result");
        this.formId = "inputForm";
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm();

        });
    }

    validateForm = () => {
        const self = this;

        jQuery(`#${this.formId}`).on("submit", function(e) {
            e.preventDefault();

            const input = self.input.val().toString();
            self.result.text(input);
        });
    }
}