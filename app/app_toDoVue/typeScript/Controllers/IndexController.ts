// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    private validatorService: IValidatorService;
    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (
        validatorService: IValidatorService 
    ) 
    {
        this.validatorService = validatorService;
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

    validateForm(){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    input = self.input.val().toString();

                if(valid){

                    self.result.text(input);

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
    }
}