using Repositories;

namespace Services
{
    public interface IPersonService
    {
        Person Get(Person person);

        void Add(Person person);

    }
}
