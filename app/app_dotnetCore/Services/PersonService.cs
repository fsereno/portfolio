using System.Collections.Generic;
using Repositories;
using Domains;

namespace Services
{
    public class PersonService : IPersonService
    {
       
        readonly List<Person> _persons;
        readonly IRepository<Entity> _repository;

        public PersonService(
            IRepository<Entity> repository)
        {
            _repository = repository;

        }

        public void Add(Person person)
        {

            _repository.Add(person);

        }

        public Entity Get(Person person)
        {
           var result = _repository.Get(person);
            return result;
        }
    }
}
