using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Interfaces
{
    public interface IEntitySortUtil
    {
        List<Employee> SortLowToHigh(List<Employee> employees);
    }
}
