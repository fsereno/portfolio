// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { PeopleViewModel } from "../Models/PeopleViewModel";
export class IndexController  {

    private validatorService: IValidatorService;
    private formId: string;

    constructor
    (
        validatorService: IValidatorService 
    ) 
    {
        this.validatorService = validatorService;
        this.formId = "inputForm";
    }
    init() {
        const self = this;
        jQuery(() => {
            self.validateForm();
            self.bind();
        });
    }
    validateForm(){
        this.validatorService.ValidateForm(this.formId, null);
    }
    bind() {
        ko.applyBindings(new PeopleViewModel("Your name Test 3", 0));
    }    
}