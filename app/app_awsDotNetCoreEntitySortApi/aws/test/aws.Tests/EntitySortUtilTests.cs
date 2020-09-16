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
        public void Test_Sort()
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
            var result = sut.SortLowToHigh(employeesToSort);
            Assert.Equal("John Doe", result[0].Name);
        }
    }
}