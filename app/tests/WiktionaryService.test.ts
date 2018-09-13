import { expect } from "chai";
import { WiktionaryService } from "../typeScript/Services/WiktionaryService";

describe("WiktionaryService", () => {
    describe("Find", () => {
        it("Should return something", () => {
            let wiktionaryService = new WiktionaryService();
            
            wiktionaryService.Find("Sleep").then((data)=>{

                console.log(data);

            });


            //expect(result).to.be.an('object');
        });
    });
});