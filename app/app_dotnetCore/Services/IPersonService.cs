using System.Collections.Generic;
using Domains;

namespace Services
{
    public interface IPersonService
    {
        Entity Get(Person person);

        void Add(Person person);

        List<Entity> SortById(List<Entity> collection); 

    }
}