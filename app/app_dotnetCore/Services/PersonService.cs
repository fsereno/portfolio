using System.Collections.Generic;
using Repositories;
using Domains;

namespace Services
{
    public class PersonService : IPersonService
    {
        readonly IRepository<Entity> _repository;

        public PersonService(
            IRepository<Entity> repository)
        {
            _repository = repository;

        }
        public void Add(Person person)
        {
            if (person == null)
            {
                throw new System.ArgumentNullException(nameof(person));
            }

            _repository.Add(person);

        }
        public Entity Get(Person person)
        {
            if (person == null)
            {
                throw new System.ArgumentNullException(nameof(person));
            }

            var result = _repository.Get(person);
            return result;
        }
        public List<Entity> SortById(List<Entity> collection)
        {
            if (collection == null)
            {
                throw new System.ArgumentNullException(nameof(collection));
            }

            collection.Sort();
            return collection;    
        }
    }
}
