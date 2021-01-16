"use strict;"
import { Component } from './components/component';
import { ValidatorService } from "../../typeScript/Services/ValidatorService";

let validatorService = new ValidatorService();
let component = new Component (
    validatorService
);

component.init();