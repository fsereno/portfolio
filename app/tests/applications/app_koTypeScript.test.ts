import Nightmare  = require("nightmare");
const   chai = require('chai'),
        chaiAsPromised = require('chai-as-promised'),
        sinonChai = require('sinon-chai'),
        should = chai.should(),
        expectedResult: Number = 4,
        application = "app_koTypeScript",
        url = "http://localhost:8080/"+application+"/index.html";
        
chai.use(sinonChai); 
chai.use(chaiAsPromised);

describe(application, () => {
    it("Should add a single item to the table a when clicking 'Add item', entering a Name and Age, and clicking Save Changes. Expected result is" + expectedResult + "items.", 
        function() {
            this.timeout(0);
            let test = async (url) => {
                return new Nightmare({show:false})
                .goto(url)
                .click("#addItem")
                .wait(3000)
                .type('#name', 'Todd Terry')
                .type('#age', '')
                .type('#age', '45')
                .click("#saveChanges")
                .wait(3000)
                .end()
                .evaluate(() => {
                    return jQuery("#items tr").length;
                })
                .end();
            }
            return test(url).should.eventually.equal(expectedResult);
        });
});