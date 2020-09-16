using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Utils
{
    public class EntitySortUtil : IEntitySortUtil
    {
        public List<Employee> SortSalaryDefault(List<Employee> employees)
        {
            employees?.Sort();
            return employees ?? new List<Employee>();
        }

        public List<Employee> SortSalaryHighToLow(List<Employee> employees)
        {
            employees?.Sort(new Employee.SortBySalaryHighToLow());
            return employees ?? new List<Employee>();
        }

        public List<Employee> SortSalaryLowToHigh(List<Employee> employees)
        {
            employees?.Sort(new Employee.SortBySalaryLowToHigh());
            return employees ?? new List<Employee>();
        }
    }
}
