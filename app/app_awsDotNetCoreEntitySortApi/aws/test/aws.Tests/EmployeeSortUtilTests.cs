using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using aws;
using Utils;
using Models;
using Interfaces;

namespace aws.Tests
{
    public class EmployeeSortUtilTests
    {
        private IEmployeeSortUtil _sut { get; set; }
        private List<Employee> _employees { get; set; }
        public EmployeeSortUtilTests()
        {
            _sut = new EmployeeSortUtil();
            _employees = new List<Employee>() {
                new Employee()
                {
                    Name = "John Doe",
                    Salary = 5000,
                    DisplaySalary = "£5,000.00"
                },
                new Employee()
                {
                    Name = "Joe Bloggs",
                    Salary = 10000,
                    DisplaySalary = "£10,000.00"
                }
            };
        }

        [Fact]
        public void Test_Sort_Salary_Default()
        {
            var result = _sut.SortBySalaryDefault(_employees);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }

        [Fact]
        public void Test_Sort_Salary_Default_Null()
        {
            var result = _sut.SortBySalaryDefault(null);
            Assert.Empty(result);
        }
        [Fact]
        public void Test_Sort_Salary_Desc()
        {
            var result = _sut.SortBySalaryDesc(_employees);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }
        [Fact]
        public void Test_Sort_Salary_Asc()
        {
            var result = _sut.SortBySalaryAsc(_employees);
            Assert.Equal("John Doe", result[0].Name);
        }
    }
}