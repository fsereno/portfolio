using System.Collections.Generic;
using Domains;

namespace MVC.Models
{
    public class HomeViewModel
    {
        public List<PersonViewModel> Persons { get; set; }

        public HomeViewModel(List<Person> persons)
        {
            Persons = new List<PersonViewModel>();

            foreach(Person person in persons)
            {
                var personViewModel = new PersonViewModel(person);
                Persons.Add(personViewModel);
            }
        }
    }
}
