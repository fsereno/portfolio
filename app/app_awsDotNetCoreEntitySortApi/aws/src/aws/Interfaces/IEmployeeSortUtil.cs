using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Interfaces
{
    public interface IEmployeeSortUtil
    {
        List<Employee> SortBySalaryDefault(List<Employee> employees);

        List<Employee> SortBySalaryDesc(List<Employee> employees);

        List<Employee> SortBySalaryAsc(List<Employee> employees);
    }
}
