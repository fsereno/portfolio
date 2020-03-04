"use strict;"
export interface IValidatorService  {
   ValidateForm(formId: string, options: JQueryValidation.ValidationOptions): JQueryValidation.Validator;
}