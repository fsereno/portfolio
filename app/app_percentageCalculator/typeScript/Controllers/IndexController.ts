// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { ICalculatorService } from "../../../typeScript/Interfaces/ICalculatorService";

export class IndexController  {
    
    validatorService: IValidatorService;
    calculatorService: ICalculatorService

    constructor
    (

        validatorService: IValidatorService,
        calculatorService: ICalculatorService
      
    ) 
    {
        this.validatorService = validatorService;
        this.calculatorService = calculatorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm("percentageCalculatorForm");

        });

    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    percentage = Number(jQuery("#percentageInput").val()),
                    ofThisNumber = Number(jQuery("#percentageOfInput").val());

                if(valid){

                    let result = self.calculatorService.PercentageOf(percentage, ofThisNumber);

                    jQuery("#result").text(result.toString());

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
        
    }
       
}