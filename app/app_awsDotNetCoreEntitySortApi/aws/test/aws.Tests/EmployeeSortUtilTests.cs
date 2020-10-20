using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
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
            this._sut = new EmployeeSortUtil();
            this._employees = new List<Employee>() {
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
            var result = this._sut.SortBySalaryDefault(this._employees);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }

        [Fact]
        public void Test_Sort_Salary_Default_Null()
        {
            var result = this._sut.SortBySalaryDefault(null);
            Assert.Empty(result);
        }
        [Fact]
        public void Test_Sort_Salary_Desc()
        {
            var result = this._sut.SortBySalaryDesc(this._employees);
            Assert.Equal("Joe Bloggs", result[0].Name);
        }
        [Fact]
        public void Test_Sort_Salary_Asc()
        {
            var result = this._sut.SortBySalaryAsc(this._employees);
            Assert.Equal("John Doe", result[0].Name);
        }

        [Fact]
        public async void Test_Async()
        {
            var array = new int[5];
            var result = 5;

            foreach (var item in array)
            {
                await Task.Run(() => Process(result));
            }

            Assert.True(true);
        }
        
        /*private void Process(int result) //56.92
        {
            Console.WriteLine("Working...");
            Thread.Sleep(10000);
        }*/

        private async void Process(int result) // 7.20
        {
            Console.WriteLine("Working...");
            await Task.Run(() => Thread.Sleep(10000));
        }
    }
}