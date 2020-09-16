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

namespace aws.Tests
{
    public class EntitySortUtilTests
    {
        [Fact]
        public void Test_Sort_Salary_Default()
        {
            var sut = new EntitySortUtil();
            var employeesToSort = new List<Employee>() {
                new Employee()
                {
                    Name = "John Doe",
                    Salary = 5000
                },
                new Employee()
                {
                    Name = "Joe Bloggs",
                    Salary = 10000
                }
            };
            var result = sut.SortSalaryDefault(employeesToSort);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }

        [Fact]
        public void Test_Sort_Salary_Default_Null()
        {
            var sut = new EntitySortUtil();
            var result = sut.SortSalaryDefault(null);
            Assert.Empty(result);
        }
        [Fact]
        public void Test_Sort_Salary_High_To_Low()
        {
            var sut = new EntitySortUtil();
            var employeesToSort = new List<Employee>() {
                new Employee()
                {
                    Name = "John Doe",
                    Salary = 5000
                },
                new Employee()
                {
                    Name = "Joe Bloggs",
                    Salary = 10000
                }
            };
            var result = sut.SortSalaryHighToLow(employeesToSort);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }
        [Fact]
        public void Test_Sort_Salary_Low_To_High()
        {
            var sut = new EntitySortUtil();
            var employeesToSort = new List<Employee>() {
                new Employee()
                {
                    Name = "Joe Bloggs",
                    Salary = 10000
                },
                new Employee()
                {
                    Name = "John Doe",
                    Salary = 5000
                }
            };
            var result = sut.SortSalaryLowToHigh(employeesToSort);
            Assert.Equal("John Doe", result[0].Name);
        }
    }
}