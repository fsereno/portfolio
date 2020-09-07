"use strict;"
import { Component } from "./components/component";
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService"
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

let stringRepository = new StringRepository();
let stringService = new StringService(stringRepository);
let validatorService = new ValidatorService();
let randomGeneratorService = new RandomGeneratorService(stringService);
let component = new Component (
    validatorService,
    randomGeneratorService,
    stringService
);

component.init();