using System;

namespace CodeExamples.Generics.Code {
	public class ExampleComplexType
    {   
        public string Name;

        public ExampleComplexType(string name)
        {
            this.Name = name;
        }
    }
    public class GenericList<T>
    {
        public void Add(T value)
        {
            System.Console.WriteLine("Added a new item to the Generic List of value {0}", value.ToString());
        }
    }
}

namespace Generics.Programe
{
	public class Programe 
    {
		public void Main()
        {
            var exampleComplexType = new CodeExamples.Generics.Code.ExampleComplexType("Example Type");

            var listofInts = new CodeExamples.Generics.Code.GenericList<int>();
            listofInts.Add(10);

            var listofExampleComplexType = new CodeExamples.Generics.Code.GenericList<CodeExamples.Generics.Code.ExampleComplexType>();
            listofExampleComplexType.Add(exampleComplexType);
		}
	}
}