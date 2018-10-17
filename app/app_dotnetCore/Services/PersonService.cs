using System.Collections.Generic;
using Repositories;

namespace Services
{
    public class PersonService : IPersonService
    {
       
        readonly List<Person> _persons;
        readonly IRepository<Person> _repository;

        public PersonService(
            IRepository<Person> repository)
        {
            _repository = repository;

        }

        public PersonService(List<Person> persons)
        {
            _persons = persons;

        }

        public void Add(Person person)
        {

            _repository.Add(person);

        }

        public Person Get(Person person)
        {
           var result = _repository.Get(person);
            return result;
        }
    }
}
