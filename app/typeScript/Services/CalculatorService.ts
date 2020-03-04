import { ICalculatorService } from "../Interfaces/ICalculatorService";

export class CalculatorService implements ICalculatorService
{
    public Add(a :number, b:number): number {
      
        return a + b;
    
    }

    public PercentageOf(percentage:number, ofThisNumber: number): number {
    
        let result = Number(percentage)/100*Number(ofThisNumber);
    
        return result;
    
    }
}