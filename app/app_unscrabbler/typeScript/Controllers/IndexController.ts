// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IUnscrabbleService } from "../../../typeScript/Interfaces/IUnscrabbleService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";

export class IndexController  {
    
    private stringService: IStringService;
    private validatorService: IValidatorService;
    private dictionaryService: IDictionaryService;
    private unscrabbleService: IUnscrabbleService;
    private randomGeneratorService: IRandomGeneratorService;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService,
        dictionaryService: IDictionaryService,
        unscrabbleService: IUnscrabbleService,
        randomGeneratorService: IRandomGeneratorService

    ) 
    {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.dictionaryService = dictionaryService;
        this.unscrabbleService = unscrabbleService;
        this.randomGeneratorService = randomGeneratorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            let randomString = self.generateRandomString();

            jQuery("#scrabbleInput").val(randomString);

            self.validateForm();
            self.reset();
            self.unscrabbleAll();
            
        });
    }

    generateRandomString(): string{

        const self = this;

        let constonants = self.randomGeneratorService.Constonants,
            vowels = self.randomGeneratorService.Vowels,
            criteria = [constonants, vowels];

        let randomString = self.randomGeneratorService.GenerateRandom(criteria, 15);

        return randomString
    }

    reset(){

        const self = this;

        jQuery("#reset").on("click", () => {

            let randomString = self.generateRandomString();

            // Populate new random string, use the stringService
            jQuery("#scrabbleInput").val(randomString);

            // Clear your results
            jQuery("#yourResults").text("");

            // Clear Unscrabblers results
            jQuery("#unscrabblerResults").text("");
            
            // Clear found result
            jQuery("#result").text("");

            // Clear winner result
            jQuery("#winnerResults").text("");

        });

    }

    winnerResult(){

        const self = this;

        let yourResults = jQuery("#yourResults").text(),
            unscrabblerResults = jQuery("#unscrabblerResults").text(),
            result = self.unscrabbleService.winner(yourResults, unscrabblerResults);

        jQuery("#winnerResults").text(result);

    }

    unscrabbleAll(){

        const self = this;

        jQuery("#unscrabbleAll").on("click", () => {

            let scrabbledText = jQuery("#scrabbleInput").val().toString(),
                
                unscrabblerResults =  self.unscrabbleService.unscrabbleAll(scrabbledText),
                result = unscrabblerResults.join(", ");

            jQuery("#unscrabblerResults").text(result);
            self.winnerResult();
            
        });
    }

    validateForm(){

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
                    jQuery("#resultDescription").text(dictionaryResultModel.description);
                    jQuery("#yourResults").text(yourResultsArray.join(", "));

                }   
            }
        }

        self.validatorService.ValidateForm("unscrabblerForm", validateFormOptions);
    }
}