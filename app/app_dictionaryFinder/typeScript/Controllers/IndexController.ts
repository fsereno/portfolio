// Interfaces
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    private dictionaryService: IDictionaryService;
    private validatorService: IValidatorService;

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

                    let dictionaryResultsModel = this.dictionaryService.Find(input),
                        result = dictionaryResultsModel.result.toString() + ": " + dictionaryResultsModel.word + ", " + dictionaryResultsModel.description;

                    jQuery("#result").text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}