
namespace Repositories
{
    public interface IRepository<T> where T : Entity
    {
        T Get(T entity);

        void Add(T entity);

    }
}
