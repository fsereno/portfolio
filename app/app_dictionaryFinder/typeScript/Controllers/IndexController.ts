// Interfaces
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    dictionaryService: IDictionaryService;
    validatorService: IValidatorService;

    constructor
    (

        dictionaryService: IDictionaryService,
        validatorService: IValidatorService
      
    ) 
    {
        this.dictionaryService = dictionaryService;
        this.validatorService = validatorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm("inputForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    input = jQuery("#input").val().toString();

                if(valid){

                    let result = this.dictionaryService.Find(input);

                    jQuery("#result").text(result.toString());

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}