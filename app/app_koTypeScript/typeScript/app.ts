"use strict;"
import { Component } from './components/component';
import { ValidatorService } from "../../typeScript/Services/validatorService";

let validatorService = new ValidatorService();
let component = new Component (
    validatorService
);

component.init();