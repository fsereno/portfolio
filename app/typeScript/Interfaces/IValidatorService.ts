export interface IValidatorService  {
    
    validateForm(formId: string, callBack: (valid: boolean) => void): void;
    
}