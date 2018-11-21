using Domains;

namespace MVC.Models
{
    public class PersonViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public PersonViewModel(Person person)
        {
            Id = person.Id;
            Name = person.Name;
            Age = person.Age;
        }
    }
}
