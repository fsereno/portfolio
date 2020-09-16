using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Interfaces
{
    public interface IEntitySortUtil
    {
        List<Employee> SortSalaryDefault(List<Employee> employees);

        List<Employee> SortSalaryHighToLow(List<Employee> employees);

        List<Employee> SortSalaryLowToHigh(List<Employee> employees);
    }
}
