﻿using System;

namespace Models
{
    public class Employee : IComparable<Employee>
    {
        public Employee() {
            this.Name = string.Empty;
            this.Salary = 0;
        }
        public string Name { get ; set; }

        public decimal Salary { get; set; }

        public int CompareTo(Employee otherEmployee)
        {
            var result = 0;
            if (this.Salary < otherEmployee.Salary)
            {
                result = -1;

            } else if (this.Salary > otherEmployee.Salary)
            {
                result = 1;
            }
            return result;
        }
    }
}