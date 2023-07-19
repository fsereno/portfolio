using System;
using System.Collections.Generic;

namespace Portfolio.EntitySort.Models
{
    /// <summary>
    /// Represents an employee entity.
    /// </summary>
    public class Employee : IComparable<Employee>
    {
        /// <summary>
        /// Initializes a new instance of the Employee class.
        /// </summary>
        public Employee()
        {
            this.Name = string.Empty;
            this.Salary = 0;
        }

        /// <summary>
        /// Gets or sets the name of the employee.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the salary of the employee.
        /// </summary>
        public decimal Salary { get; set; }

        /// <summary>
        /// Gets or sets the display salary of the employee.
        /// </summary>
        public string DisplaySalary { get; set; }

        /// <summary>
        /// Compares the current employee with another employee based on salary.
        /// </summary>
        /// <param name="otherEmployee">The other employee to compare with.</param>
        /// <returns>An integer indicating the relative order of the employees based on salary.</returns>
        public int CompareTo(Employee otherEmployee)
        {
            var result = 0;
            if (this.Salary < otherEmployee.Salary)
            {
                result = 1;

            } else if (this.Salary > otherEmployee.Salary)
            {
                result = -1;
            }
            return result;
        }

        /// <summary>
        /// Comparer for sorting employees by salary in descending order.
        /// </summary>
        public class SortBySalaryDesc : IComparer<Employee>
        {
            /// <summary>
            /// Compares two employees based on salary in descending order.
            /// </summary>
            /// <param name="current">The first employee to compare.</param>
            /// <param name="next">The second employee to compare.</param>
            /// <returns>An integer indicating the relative order of the employees based on salary.</returns>
            public int Compare(Employee current, Employee next)
            {
                return Decimal.Compare(next.Salary, current.Salary);
            }
        }

        /// <summary>
        /// Comparer for sorting employees by salary in ascending order.
        /// </summary>
        public class SortBySalaryAsc : IComparer<Employee>
        {
            /// <summary>
            /// Compares two employees based on salary in ascending order.
            /// </summary>
            /// <param name="current">The first employee to compare.</param>
            /// <param name="next">The second employee to compare.</param>
            /// <returns>An integer indicating the relative order of the employees based on salary.</returns>
            public int Compare(Employee current, Employee next)
            {
                return Decimal.Compare(current.Salary, next.Salary);
            }
        }
    }
}
