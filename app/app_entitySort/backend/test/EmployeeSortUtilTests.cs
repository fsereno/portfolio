using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using Portfolio.EntitySort.Utils;
using Portfolio.EntitySort.Models;
using Portfolio.EntitySort.Interfaces;

namespace Portfolio.EntitySort.Tests
{
    public class EmployeeSortUtilTests
    {
        private readonly IEmployeeSortUtil _sut;
        private readonly List<Employee> _employees;
        private readonly Mock<ILogger<EmployeeSortUtil>> _logger;
        public EmployeeSortUtilTests()
        {
            _logger = new Mock<ILogger<EmployeeSortUtil>>();

            _sut = new EmployeeSortUtil(_logger.Object);

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

            VerifyLogger(LogLevel.Information, "Sort by defaut started");
            VerifyLogger(LogLevel.Information, "Sort by defaut finished");

            Assert.Equal("Joe Bloggs", result[0].Name);
        }

        [Fact]
        public void Test_Sort_Salary_Default_Null()
        {
            var result = _sut.SortBySalaryDefault(null);

            VerifyLogger(LogLevel.Information, "Sort by defaut started");
            VerifyLogger(LogLevel.Information, "Sort by defaut finished");

            Assert.Empty(result);
        }
        [Fact]
        public void Test_Sort_Salary_Desc()
        {
            var result = _sut.SortBySalaryDesc(_employees);

            VerifyLogger(LogLevel.Information, "Sort by salary descending started");
            VerifyLogger(LogLevel.Information, "Sort by salary descending finished");

            Assert.Equal("Joe Bloggs", result[0].Name);
        }
        [Fact]
        public void Test_Sort_Salary_Asc()
        {
            var result = _sut.SortBySalaryAsc(_employees);

            VerifyLogger(LogLevel.Information, "Sort by salary ascending started");
            VerifyLogger(LogLevel.Information, "Sort by salary ascending finished");

            Assert.Equal("John Doe", result[0].Name);
        }

        private void VerifyLogger(LogLevel expectedLogLevel, string expectedMessage = "")
        {
            _logger.Verify(
                x => x.Log(
                    It.Is<LogLevel>(l => l == expectedLogLevel),
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => String.IsNullOrEmpty(expectedMessage) ? true : v.ToString() == expectedMessage),
                    It.IsAny<Exception>(),
                    It.Is<Func<It.IsAnyType, Exception, string>>((v, t) => true)));
        }
    }
}