using System.Collections.Generic;
using Domains;

namespace Services
{
    public interface IPersonService<T> where T : Person
    {
        T Get(T person);

        List<T> GetAll();

        void Add(T person);

        List<T> SortById(List<T> collection); 
    }
}