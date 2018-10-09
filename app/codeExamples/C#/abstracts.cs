using System;

namespace CodeExamples.Abstracts.Code
{
 public abstract class ExampleAbstractClass
 {
    public abstract void Set(int id, string name);
    public abstract string Get();
 }
  class ExampleA : ExampleAbstractClass
  {
    protected int ID; 
    protected string Name;
    override public void Set(int id , string name) 
    {
        this.ID = id;
        this.Name = name;
    }
    override public string Get(){
        // Example A specific code here
        var result = $"Example A: ID:{this.ID}, Name:{this.Name}";
        return result;
    }
  }
  class ExampleB : ExampleAbstractClass
  {
    protected int ID; 
    protected string Name;
    override public void Set(int id , string name) 
    {
        this.ID = id;
        this.Name = name;
    }
    override public string Get(){
        // Example B specific code here
        var result = $"Example B: ID:{this.ID}, Name:{this.Name}";
        return result;
    }
  }
}

namespace CodeExamples.Abstracts.Services {
    public class ExampleService {
        public string Get(CodeExamples.Abstracts.Code.ExampleAbstractClass example){
            return example.Get();
        }
    }
}

namespace CodeExamples.Abstracts.Programe
{
    public class Programe 
    {
        public void Main() 
        {
            var exampleA = new CodeExamples.Abstracts.Code.ExampleA();
            var exampleB = new CodeExamples.Abstracts.Code.ExampleB();
            var exampleService = new CodeExamples.Abstracts.Services.ExampleService();

            exampleA.Set(1,"Example A Name");
            exampleB.Set(2,"Example B Name");

            // Basic example of the Liskov Substitution Principle
            Console.WriteLine(exampleService.Get(exampleA));
            Console.WriteLine(exampleService.Get(exampleB));
        }
    }
}