using System;
using System.Collections.Generic;
using System.Linq;
using Domains;

namespace Repositories
{
    public class Repository<T> : IRepository<T> where T : Entity
    {
        private readonly List<T> _collection;

        public Repository(List<T> collection)
        {
            _collection = collection;
        }
        public T Get(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            var result = _collection.SingleOrDefault(
                x => x.Id == entity.Id);

            return result;
        }
        public void Add(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            var exists = Get(entity);

            if (exists == null)
            {
                _collection.Add(entity);
            }
            else
            {
                throw new InvalidOperationException("You cannot add duplicate entities");
            }
        }
    }
}
