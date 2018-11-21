// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { UserViewModel } from "../Models/UserViewModel";
export class IndexController  {

    private validatorService: IValidatorService;
    private formId: string;
    private editModalId: string;

    constructor
    (
        validatorService: IValidatorService 
    ) 
    {
        this.validatorService = validatorService;
        this.formId = "editForm";
        this.editModalId = "editModal";
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
        ko.applyBindings(
            new UserViewModel(
                this.formId, 
                this.editModalId
                )
        );
    }    
}