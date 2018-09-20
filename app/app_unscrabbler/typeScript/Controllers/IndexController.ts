// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IUnscrabbleService } from "../../../typeScript/Interfaces/IUnscrabbleService";

export class IndexController  {
    
    stringService: IStringService;
    validatorService: IValidatorService;
    dictionaryService: IDictionaryService;
    unscrabbleService: IUnscrabbleService;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService,
        dictionaryService: IDictionaryService,
        unscrabbleService: IUnscrabbleService

    ) 
    {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.dictionaryService = dictionaryService;
        this.unscrabbleService = unscrabbleService;
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
                    inThis = jQuery("#scrabbleInput").val().toString(),
                    yourResults = jQuery("#yourResults").text(),
                    yourResultsArray = yourResults.split(",");

                if(valid){

                    let unscrabbleResult = self.unscrabbleService.Unscrabble(
                        findThis,inThis),
                        dictionaryResultModel = self.dictionaryService.Find(findThis),
                        result = unscrabbleResult && dictionaryResultModel.result,
                        outcome = result
                        ? "True, '" + findThis + "' can be found in '" + inThis + "' and is a 'truthy' word."
                        : "False, '" + findThis + "' cannot be found in '" + inThis + "'.";

                    outcome = unscrabbleResult && !dictionaryResultModel.result
                        ? "True, '" + findThis + "' can be found in '" + inThis + "' but it is not a 'truthy' word."
                        : outcome;
                    
                    if (result) {

                        yourResultsArray.push(findThis);
                        
                    }
                        
                    jQuery("#result").text(outcome);
                    jQuery("#yourResults").text(yourResultsArray.join(","));

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}