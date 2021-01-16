"use strict;"
import { Component } from "./Components/component";
import { ValidatorService } from "../../typeScript/Services/ValidatorService";

let validatorService = new ValidatorService();
let component = new Component
(
    validatorService
);

component.init();