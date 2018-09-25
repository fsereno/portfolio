// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { ICalculatorService } from "../../../typeScript/Interfaces/ICalculatorService";

export class IndexController  {
    
    private validatorService: IValidatorService;
    private calculatorService: ICalculatorService
    private result: JQuery<HTMLElement>;
    private percentageInput: JQuery<HTMLElement>;
    private percentageOfInput: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (

        validatorService: IValidatorService,
        calculatorService: ICalculatorService
      
    ) 
    {
        this.validatorService = validatorService;
        this.calculatorService = calculatorService;
        this.result = jQuery("#result");
        this.percentageInput = jQuery("#percentageInput");
        this.percentageOfInput = jQuery("#percentageOfInput");
        this.formId = "percentageCalculatorForm";
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
                    percentage = Number(self.percentageInput.val()),
                    ofThisNumber = Number(self.percentageOfInput.val());

                if(valid){

                    let result = self.calculatorService.PercentageOf(percentage, ofThisNumber);

                    self.result.text(result.toString());

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
        
    }
       
}