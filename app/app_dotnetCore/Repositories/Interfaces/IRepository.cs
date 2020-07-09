using System.Collections.Generic;
using Domains;

namespace Repositories
{
    public interface IRepository<T> where T : Person
    {
        T Get(T entity);

        void Add(T entity);

        List<T> GetAll();
    }
}
