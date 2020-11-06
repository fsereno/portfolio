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

namespace Utils.Tests
{
    public class BasketUtilTests
    {
        private IBasketUtil _sut;

        public BasketUtilTests()
        {
            _sut = new BasketUtil();
        }

        [Fact]
        public void Test_IsInRange_Happy_Test()
        {
            var position = 0;
            var collection = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            var result = _sut.TryRange(2, collection, out position);
            Assert.True(result);
            Assert.Equal(1, position);
        }

        [Fact]
        public void Test_IsInRange_UnHappy_Test()
        {
            var position = 0;
            var collection = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            var result = _sut.TryRange(3, collection, out position);
            Assert.False(result);
            Assert.Equal(2, position);
        }

        [Fact]
        public void Test_IsInRange_Zero_Index()
        {
            var position = 0;
            var collection = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            var result = _sut.TryRange(0, collection, out position);
            Assert.False(result);
            Assert.Equal(-1, position);
        }

        [Fact]
        public void Test_IsInRange_Empty_Collection()
        {
            var position = 0;
            var collection = new List<Item>();
            var result = _sut.TryRange(1, collection, out position);
            Assert.False(result);
            Assert.Equal(-1, position);
        }

        [Fact]
        public void Test_GetItems_EmptyRequest()
        {
            var requestItems = new List<Item>();
            var localItems = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            var result = _sut.GetItems(requestItems, localItems);
            Assert.Equal(2, result.Count);
        }

        [Fact]
        public void Test_GetItems_EmptyLocal()
        {
            var requestItems = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" },
                new Item() { Name = "Pear" }
            };
            var localItems = new List<Item>();
            var result = _sut.GetItems(requestItems, localItems);
            Assert.Equal(3, result.Count);
        }

        [Fact]
        public void Test_GetItems_GreaterThan()
        {
            var requestItems = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" },
                new Item() { Name = "Pear" }
            };
            var localItems = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            var result = _sut.GetItems(requestItems, localItems);
            Assert.Equal(3, result.Count);
        }
    }
}