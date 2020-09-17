using System;
using System.Collections.Generic;
using Interfaces;
using Models;

namespace Utils
{
    public class EmployeeSortUtil : IEmployeeSortUtil
    {
        public List<Employee> SortBySalaryDefault(List<Employee> employees)
        {
            employees?.Sort();
            return employees ?? new List<Employee>();
        }

        public List<Employee> SortBySalaryDesc(List<Employee> employees)
        {
            employees?.Sort(new Employee.SortBySalaryDesc());
            return employees ?? new List<Employee>();
        }

        public List<Employee> SortBySalaryAsc(List<Employee> employees)
        {
            employees?.Sort(new Employee.SortBySalaryAsc());
            return employees ?? new List<Employee>();
        }
    }
}
