using Domains;

namespace MVC.Models
{
    public class PersonViewModel
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public PersonViewModel(Person person)
        {
            Name = person.Name;
            Age = person.Age;
        }
    }
}
