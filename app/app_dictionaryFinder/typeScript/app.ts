
"use strict;"
import { Component } from './components/component';
import { DictionaryService } from "../../typeScript/Services/DictionaryService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";

let dictionaryRepository = new DictionaryRepository();
let dictionaryService = new DictionaryService(dictionaryRepository);
let validatorService = new ValidatorService();

let component = new Component(
    dictionaryService,
    validatorService
);

component.init();