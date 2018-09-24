// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IUnscrabbleService } from "../../../typeScript/Interfaces/IUnscrabbleService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";

export class IndexController  {
    
    private validatorService: IValidatorService;
    private dictionaryService: IDictionaryService;
    private unscrabbleService: IUnscrabbleService;
    private randomGeneratorService: IRandomGeneratorService;

    private scrabbleInput: JQuery<HTMLElement>;
    private yourResults: JQuery<HTMLElement>;
    private unscrabblerResults: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private winnerResults: JQuery<HTMLElement>;
    private resetBtn: JQuery<HTMLElement>;
    private unscrabbleAllBtn: JQuery<HTMLElement>;
    private findInput: JQuery<HTMLElement>;
    private resultDescription: JQuery<HTMLElement>;

    constructor
    (

        validatorService: IValidatorService,
        dictionaryService: IDictionaryService,
        unscrabbleService: IUnscrabbleService,
        randomGeneratorService: IRandomGeneratorService
    ) 
    {
        this.validatorService = validatorService;
        this.dictionaryService = dictionaryService;
        this.unscrabbleService = unscrabbleService;
        this.randomGeneratorService = randomGeneratorService;

        this.scrabbleInput = jQuery("#scrabbleInput");
        this.yourResults = jQuery("#yourResults");
        this.unscrabblerResults = jQuery("#unscrabblerResults");
        this.result = jQuery("#result");
        this.winnerResults = jQuery("#winnerResults");
        this.resetBtn = jQuery("#resetBtn");
        this.unscrabbleAllBtn = jQuery("#unscrabbleAllBtn");
        this.findInput = jQuery("#findInput");
        this.resultDescription = jQuery("#resultDescription");
    }

    init() {

        const self = this;

        jQuery(() => {

            let randomString = self.generateRandomString();

            self.scrabbleInput.val(randomString);
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

        self.resetBtn.on("click", () => {

            let randomString = self.generateRandomString();

            self.scrabbleInput.val(randomString);
            self.yourResults.text("");
            self.resultDescription.text("");
            self.unscrabblerResults.text("");
            self.result.text("");
            self.winnerResults.text("");

        });

    }

    winnerResult(){

        const self = this;

        let yourResults = self.yourResults.text(),
            unscrabblerResults = self.unscrabblerResults.text(),
            result = self.unscrabbleService.winner(yourResults, unscrabblerResults);

        self.winnerResults.text(result);

    }

    unscrabbleAll(){

        const self = this;

        self.unscrabbleAllBtn.on("click", () => {

            let scrabbledText = self.scrabbleInput.val().toString(),
                
                unscrabblerResults =  self.unscrabbleService.unscrabbleAll(scrabbledText),
                result = unscrabblerResults.join(", ");

            self.unscrabblerResults.text(result);
            self.winnerResult();
            
        });
    }

    validateForm(){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    findThis = self.findInput.val().toString(),
                    inThis = self.scrabbleInput.val().toString(),
                    yourResults = self.yourResults.text(),
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

                    self.result.text(outcome);
                    self.resultDescription.text(dictionaryResultModel.description);
                    self.yourResults.text(yourResultsArray.join(", "));

                }   
            }
        }

        self.validatorService.ValidateForm("unscrabblerForm", validateFormOptions);
    }
}