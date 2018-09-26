// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    private stringService: IStringService;
    private validatorService: IValidatorService;
    private findInput: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private replaceInput: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService
      
    ) 
    {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.result = jQuery("#result");
        this.findInput = jQuery("#findInput");
        this.replaceInput = jQuery("#replaceInput");
        this.formId = "findReplaceForm";
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
                    findThis = self.findInput.val().toString(),
                    inThis = self.result.text(),
                    replaceWithThis = self.replaceInput.val().toString();

                if(valid){

                    let textReplaced = self.stringService.FindReplace(
                        findThis,inThis,replaceWithThis);

                    jQuery("#result").text(textReplaced);

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
    }
}