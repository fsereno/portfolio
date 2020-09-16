using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Utils
{
    public class EntitySortUtil : IEntitySortUtil
    {
        public List<Employee> SortLowToHigh(List<Employee> employees)
        {
            employees.Sort();
            return employees;
        }
    }
}
