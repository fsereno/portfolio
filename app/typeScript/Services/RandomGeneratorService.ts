import { IStringService } from "../Interfaces/IStringService";
import { IRandomGeneratorService } from "../Interfaces/IRandomGeneratorService";
import { IRandomGeneratorRepository } from "../Interfaces/IRandomGeneratorRepository";

export class RandomGeneratorService implements IRandomGeneratorService
{
    public AlphaString: string;
    public NumericString: string;
    public Constonants: string;
    public Vowels: string;
    private stringService: IStringService;
    private randomGeneratorRepository: IRandomGeneratorRepository

    constructor
    (
        stringService: IStringService,
        randomGeneratorRepository: IRandomGeneratorRepository
    ){

        this.stringService = stringService;
        this.randomGeneratorRepository = randomGeneratorRepository;
        this.AlphaString = this.randomGeneratorRepository.AlphaString;
        this.NumericString = this.randomGeneratorRepository.AlphaString;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
        
    }
    
    GenerateRandom(criteria: string[], length:number) : string {

        let output: string[] = []

        while(output.length < length) {

            criteria.forEach(criterion => {
            
                let array = this.stringService.ToArray(criterion);
    
                array.forEach((char, i) => {
    
                    let indexToPush = Math.floor(Math.random() * array.length);
    
                    if(i===indexToPush && output.length < length){
                        output.push(char);
                    }

                });
            });
        }

        let result = output.join("");

        return result;

    }
}