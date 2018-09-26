// Interfaces
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    private dictionaryService: IDictionaryService;
    private validatorService: IValidatorService;
    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (

        dictionaryService: IDictionaryService,
        validatorService: IValidatorService
      
    ) 
    {
        this.dictionaryService = dictionaryService;
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

                    let dictionaryResultsModel = this.dictionaryService.Find(input),
                        result = dictionaryResultsModel.result.toString() 
                        + ": " 
                        + dictionaryResultsModel.word 
                        + ", " 
                        + dictionaryResultsModel.description;

                    self.result.text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
    }
}