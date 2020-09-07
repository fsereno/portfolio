"use strict;"
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IUnscrabbleService } from "../../../typeScript/Interfaces/IUnscrabbleService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";
import { IStringService } from "../../../typeScript/Interfaces/IStringService";

export class Component {

    private validatorService: IValidatorService;
    private dictionaryService: IDictionaryService;
    private unscrabbleService: IUnscrabbleService;
    private randomGeneratorService: IRandomGeneratorService;
    private stringService: IStringService;
    private scrabbleInput: JQuery<HTMLElement>;
    private yourResults: JQuery<HTMLElement>;
    private unscrabblerResults: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private winnerResults: JQuery<HTMLElement>;
    private resetBtn: JQuery<HTMLElement>;
    private unscrabbleAllBtn: JQuery<HTMLElement>;
    private findInput: JQuery<HTMLElement>;
    private resultDescription: JQuery<HTMLElement>;
    private formId: string;

    constructor(
        validatorService: IValidatorService,
        dictionaryService: IDictionaryService,
        unscrabbleService: IUnscrabbleService,
        randomGeneratorService: IRandomGeneratorService,
        stringService: IStringService) {
        this.validatorService = validatorService;
        this.dictionaryService = dictionaryService;
        this.unscrabbleService = unscrabbleService;
        this.randomGeneratorService = randomGeneratorService;
        this.stringService = stringService;
        this.scrabbleInput = jQuery("#scrabbleInput");
        this.yourResults = jQuery("#yourResults");
        this.unscrabblerResults = jQuery("#unscrabblerResults");
        this.result = jQuery("#result");
        this.winnerResults = jQuery("#winnerResults");
        this.resetBtn = jQuery("#resetBtn");
        this.unscrabbleAllBtn = jQuery("#unscrabbleAllBtn");
        this.findInput = jQuery("#findInput");
        this.resultDescription = jQuery("#resultDescription");
        this.formId = "unscrabblerForm";
    }

    init() {
        jQuery(() => {
            let randomString = this.generateRandomString();
            this.scrabbleInput.val(randomString);
            this.validateForm();
            this.reset();
            this.unscrabbleAll();
        });
    }

    generateRandomString(): string{
        let constonants = this.stringService.Constonants;
        let vowels = this.stringService.Vowels;
        let criteria = [constonants, vowels]
        let randomString = this.randomGeneratorService.GenerateRandomString(criteria, 15);

        return randomString
    }

    reset() {
        this.resetBtn.on("click", () => {
            let randomString = this.generateRandomString();
            this.scrabbleInput.val(randomString);
            this.yourResults.text("");
            this.resultDescription.text("");
            this.unscrabblerResults.text("");
            this.result.text("");
            this.winnerResults.text("");
        });
    }

    winnerResult() {
        let yourResults = this.yourResults.text();
        let unscrabblerResults = this.unscrabblerResults.text();
        let result = this.unscrabbleService.winner(yourResults, unscrabblerResults);

        this.winnerResults.text(result);
    }

    unscrabbleAll() {
        this.unscrabbleAllBtn.on("click", () => {
            let scrabbledText = this.scrabbleInput.val().toString();
            let unscrabblerResults =  this.unscrabbleService.unscrabbleAll(scrabbledText);
            let result = unscrabblerResults.join(", ");
            this.unscrabblerResults.text(result);
            this.winnerResult();
        });
    }

    validateForm(){
        let validateFormOptions = {
            submitHandler: (form: HTMLElement) => {
                let valid = jQuery(form).valid();
                let findThis = this.findInput.val().toString();
                let inThis = this.scrabbleInput.val().toString();
                let yourResults = this.yourResults.text();
                let yourResultsArray: string[] = yourResults.length > 0 ? yourResults.split(",") : [];

                if (valid) {
                    let unscrabbleResult = this.unscrabbleService.Unscrabble(findThis, inThis);
                    let dictionaryResultModel = this.dictionaryService.Find(findThis);
                    let result = unscrabbleResult && dictionaryResultModel.result;
                    let outcome = result
                        ? `True, '${findThis}' can be found in '${inThis}' and is a 'truthy' word.`
                        : `False, '${findThis}' cannot be found in '${inThis}'.`;

                    outcome = unscrabbleResult && !dictionaryResultModel.result
                        ? `True, '${findThis}' can be found in '${inThis}' but it is not a 'truthy' word.`
                        : outcome;

                    if (result) {
                        yourResultsArray.push(findThis);
                    }

                    this.result.text(outcome);
                    this.resultDescription.text(dictionaryResultModel.description);
                    this.yourResults.text(yourResultsArray.join(", "));
                }
            }
        }

        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}