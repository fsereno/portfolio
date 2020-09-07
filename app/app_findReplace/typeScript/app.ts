"use strict;"
import { StringRepository } from '../../typeScript/Repositories/StringRepository';
import { Component } from "./Components/component";
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

let stringRepository = new StringRepository();
let stringService = new StringService(stringRepository);
let validatorService = new ValidatorService();

let component = new Component(
    stringService,
    validatorService
);

component.init();