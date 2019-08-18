using System.Collections.Generic;
using Repositories;
using Domains;

namespace Services
{
    public class PersonService<T> : IPersonService<T> where T : Person
    {
        readonly IRepository<T> _repository;

        public PersonService(
            IRepository<T> repository)
        {
            _repository = repository;

        }
        public void Add(T person)
        {
            if (person == null)
            {
                throw new System.ArgumentNullException(nameof(person));
            }

            var exsits = _repository.Get(person);

            if (exsits == null)
            {
                _repository.Add(person);
            } 
        }
        public T Get(T person)
        {
            if (person == null)
            {
                throw new System.ArgumentNullException(nameof(person));
            }

            var result = _repository.Get(person);
            return result;
        }

        public List<T> GetAll()
        {
            var persons = _repository.GetAll();

            return persons;
        }

        public List<T> SortById(List<T> collection)
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
