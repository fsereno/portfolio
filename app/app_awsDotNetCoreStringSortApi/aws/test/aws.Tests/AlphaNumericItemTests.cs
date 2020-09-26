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
        public void Test_AlphaNumeric_Sort()
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

        [Fact]
        public void Test_AlphaNumeric_IComparer_Value_Sort()
        {
            var items = new List<AlphaNumericItem>()
            {
                new AlphaNumericItem() { Value = "b", Index = 1 },
                new AlphaNumericItem() { Value = "c", Index = 10 },
                new AlphaNumericItem() { Value = "a", Index = 2 }
            };

            items.Sort(new AlphaNumericItem.SortByValue());
            Assert.Equal("a", items[0].Value);
            Assert.Equal("b", items[1].Value);
            Assert.Equal("c", items[2].Value);
        }

        [Fact]
        public void Test_AlphaNumeric_IComparer_Index_Sort()
        {
            var items = new List<AlphaNumericItem>()
            {
                new AlphaNumericItem() { Value = "b", Index = 1 },
                new AlphaNumericItem() { Value = "c", Index = 10 },
                new AlphaNumericItem() { Value = "a", Index = 2 }
            };

            items.Sort(new AlphaNumericItem.SortByIndex());
            Assert.Equal(1, items[0].Index);
            Assert.Equal(2, items[1].Index);
            Assert.Equal(10, items[2].Index);
        }
    }
}