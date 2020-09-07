
"use strict;"
import { Component } from "./components/component";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { CalculatorService } from "../../typeScript/Services/calculatorService";

let validatorService = new ValidatorService();
let calculatorService = new CalculatorService();
let component = new Component (
    validatorService,
    calculatorService
);

component.init();