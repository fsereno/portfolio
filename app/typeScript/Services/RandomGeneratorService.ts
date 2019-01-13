import { IStringService } from "../Interfaces/IStringService";
import { IRandomGeneratorService } from "../Interfaces/IRandomGeneratorService";
import { IRandomGeneratorRepository } from "../Interfaces/IRandomGeneratorRepository";

export class RandomGeneratorService implements IRandomGeneratorService
{
    public Alphas: string;
    public Numerics: string;
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
        this.Alphas = this.randomGeneratorRepository.Alphas;
        this.Numerics = this.randomGeneratorRepository.Numerics;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
        
    }
    
    GenerateRandomString(criteria: string[], length:number) : string {

        let output: string[] = []

        while(output.length < length) {

            criteria.forEach(criterion => {
            
                let array = this.stringService.ToArray(criterion);
    
                array.forEach((char, i) => {
    
                    let indexToPush = this.Generate(array.length);
    
                    if(i===indexToPush && output.length < length){
                        output.push(char);
                    }

                });
            });
        }

        let result = output.join("");

        return result;

    }

    Generate = (target: number): number => Math.floor(Math.random() * target + 1);
}