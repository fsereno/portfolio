// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";

export class IndexController  {
    
    stringService: IStringService;
    validatorService: IValidatorService;
    dictionaryService: IDictionaryService;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService,
        dictionaryService: IDictionaryService

    ) 
    {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.dictionaryService = dictionaryService;
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
                    inThis = jQuery("#scrabbleInput").val().toString();

                if(valid){

                    let unscrabbleResult = self.stringService.Unscrabble(
                        findThis,inThis),
                        dictionaryResultModel = self.dictionaryService.Find(findThis),
                        outcome = unscrabbleResult && dictionaryResultModel.result
                        ? "True, '" + findThis + "' can be found in '" + inThis + "' and is a 'truthy' word."
                        : "False, '" + findThis + "' cannot be found in '" + inThis + "'.";

                    outcome = unscrabbleResult && !dictionaryResultModel.result
                        ? "True, '" + findThis + "' can be found in " + inThis + " but it is not a 'truthy' word."
                        : outcome;

                    jQuery("#result").text(outcome);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}