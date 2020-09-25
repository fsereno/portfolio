using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using aws;
using Interfaces;
using Models;
using Utils;

namespace aws.Tests
{
    public class AlphaNumericItemTests
    {
        [Fact]
        public void Test_AlphaNumericSort()
        {
            var items = new List<AlphaNumericItem>()
            {
                new AlphaNumericItem() { Value = "a", Index = 1 },
                new AlphaNumericItem() { Value = "a", Index = 10 },
                new AlphaNumericItem() { Value = "a", Index = 2 }
            };

            items.Sort();
            Assert.Equal(10, items[2].Index);
        }
    }
}