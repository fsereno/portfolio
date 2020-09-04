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

namespace Utils.Tests
{
    public class BasketUtilTests
    {
        [Fact]
        public void IsInRangeHappyTest()
        {
            var sut = new BasketUtil();
            var position = 0;
            var collection = new string[]{ "Item 1", "Item 2" };
            var result = sut.IsInRange(2, collection, out position);
            Assert.True(result);
            Assert.Equal(1, position);
        }

        [Fact]
        public void IsInRangeUnHappyTest()
        {
            var sut = new BasketUtil();
            var position = 0;
            var collection = new string[]{ "Item 1", "Item 2" };
            var result = sut.IsInRange(3, collection, out position);
            Assert.False(result);
            Assert.Equal(2, position);
        }
    }
}