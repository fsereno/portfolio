using System;

namespace Generics.Code {
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
            var exampleComplexType = new Generics.Code.ExampleComplexType("Example Type");

            var listofInts = new Generics.Code.GenericList<int>();
            listofInts.Add(10);

            var listofExampleComplexType = new Generics.Code.GenericList<Generics.Code.ExampleComplexType>();
            listofExampleComplexType.Add(exampleComplexType);
		}
	}
}