// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    textService: ITextService;
    validatorService: IValidatorService;

    constructor
    (

        textService: ITextService,
        validatorService: IValidatorService
      
    ) 
    {
        this.textService = textService;
        this.validatorService = validatorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm("unscrabblerForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    findThis = jQuery("#findInput").val().toString(),
                    inThis = jQuery("#result").text();

                if(valid){

                    let unscrabbled = self.textService.Unscrabble(
                        findThis,inThis);

                    console.log(unscrabbled)

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}