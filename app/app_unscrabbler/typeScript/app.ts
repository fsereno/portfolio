"use strict;"
import { Component } from './components/component';
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { DictionaryService } from "../../typeScript/Services/DictionaryService";
import { UnscrabbleService } from "../../typeScript/Services/UnscrabbleService";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService"
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

let dictionaryRepository = new DictionaryRepository();
let stringRepository = new StringRepository();
let stringService = new StringService(stringRepository);
let validatorService = new ValidatorService();
let dictionaryService = new DictionaryService(dictionaryRepository);
let unscrabbleService = new UnscrabbleService(
    stringService,
    dictionaryRepository
);
let randomGeneratorService = new RandomGeneratorService(stringService);
let component = new Component (
    validatorService,
    dictionaryService,
    unscrabbleService,
    randomGeneratorService,
    stringService
);

component.init();