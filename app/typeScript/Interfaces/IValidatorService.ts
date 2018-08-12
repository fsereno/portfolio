export interface IValidatorService  {
   validateForm(formId: string, options: JQueryValidation.ValidationOptions): JQueryValidation.Validator;
}