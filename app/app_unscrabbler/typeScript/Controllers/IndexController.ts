// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IUnscrabbleService } from "../../../typeScript/Interfaces/IUnscrabbleService";

export class IndexController  {
    
    private stringService: IStringService;
    private validatorService: IValidatorService;
    private dictionaryService: IDictionaryService;
    private unscrabbleService: IUnscrabbleService;

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
            self.reset();
            self.unscrabbleAll();
        });
    }

    reset(){

        const self = this;

        jQuery("#reset").on("click", () => {

            // This will return from a repository eventually
            let alpha = self.stringService.AlphaString,
                        criteria = [alpha];

            let ramdomString = self.stringService.GenerateRandom(criteria, 15);

            // Populate new random string, use the stringService
            jQuery("#scrabbleInput").val(ramdomString);

            // Clear your results
            jQuery("#yourResults").text("");

            // Clear Unscrabblers results
            jQuery("#unscrabblerResults").text("");
            
            // Clear found result
            jQuery("#result").text("");

        });

    }

    unscrabbleAll(){

        const self = this;

        jQuery("#unscrabbleAll").on("click", () => {

            let scrabbledText = jQuery("#scrabbleInput").val().toString(),
                
                unscrabblerResults =  self.unscrabbleService.unscrabbleAll(scrabbledText),
                result = unscrabblerResults.join(", ");

            jQuery("#unscrabblerResults").text(result);

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
                    yourResultsArray: string[] = yourResults.length > 0 ? yourResults.split(",") : [];

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
                    jQuery("#yourResults").text(yourResultsArray.join(", "));

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}