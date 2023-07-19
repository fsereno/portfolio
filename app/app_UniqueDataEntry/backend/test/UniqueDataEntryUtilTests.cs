using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using Portfolio.UniqueDataEntry.Interfaces;
using Portfolio.UniqueDataEntry.Utils;
using Portfolio.UniqueDataEntry.Models;

namespace Portfolio.UniqueDataEntry.Test
{
    public class UniqueDataEntryUtilTests
    {
        private IUniqueDataEntryUtil _sut;
        private Mock<ILogger<UniqueDataEntryUtil>> _logger;
        private Dictionary<Item, string> _dictionary;

        public UniqueDataEntryUtilTests()
        {
            _logger = new Mock<ILogger<UniqueDataEntryUtil>>();
            _sut = new UniqueDataEntryUtil(_logger.Object);

            var initialCollection = new List<Item>()
            {
                new Item(){ FirstName = "James", SecondName = "Bond", Contact = "000 000 000", PostCode = "AB00 1AB" },
                new Item(){ FirstName = "Tom", SecondName = "Jones", Contact = "000 000 000", PostCode = "AB00 2AB"}
            };
            _dictionary = initialCollection.ToDictionary(x => x, x => x.FirstName, new Item.ItemEqualityComparer());
        }

        [Fact]
        public void TestCanItemBeAddedNotMatching()
        {
            var item = new Item(){ FirstName = "Tom", SecondName = "Smith", Contact = "000 000 000", PostCode = "AB00 3AB" };
            var result = _sut.CanItemBeAdded(_dictionary, item);

            Assert.True(result);
        }

        [Fact]
        public void TestCanItemBeAddedPartialMatch()
        {
            var item = new Item(){ FirstName = "Tommy", SecondName = "Jones", Contact = "000 000 000", PostCode = "AB00 2AB" };
            var result = _sut.CanItemBeAdded(_dictionary, item);
            VerifyLogger(LogLevel.Warning, "You cannot add duplicate items.");
            Assert.False(result);
        }

        [Fact]
        public void TestCanItemBeAddedMatchingSecondNameDifferentElse()
        {
            var item = new Item(){ FirstName = "Tommy", SecondName = "Jones", Contact = "111 111 111", PostCode = "AB00 4AB" };
            var result = _sut.CanItemBeAdded(_dictionary, item);

            Assert.True(result);
        }

        [Fact]
        public void TestCanItemBeAddedToEmptyDictionary()
        {
            var initialCollection = new List<Item>();
            var item = new Item(){ FirstName = "Karen", SecondName = "Jones", Contact = "000 000 000", PostCode = "AB00 1AB" };
            var dictionary = initialCollection.ToDictionary(x => x, x => x.FirstName, new Item.ItemEqualityComparer());
            var result = _sut.CanItemBeAdded(dictionary, item);
            Assert.True(result);
        }

        [Fact]
        public void TestCanItemBeAddedCaseSensitive()
        {
            var item = new Item(){ FirstName = "JAMES", SecondName = "BOND", Contact = "000 000 000", PostCode = "AB00 1AB" };
            var result = _sut.CanItemBeAdded(_dictionary, item);
            Assert.False(result);
        }

        [Fact]
        public void TestCanItemBeAddedSpaceSensitive()
        {
            var item = new Item(){ FirstName = "James", SecondName = "Bond ", Contact = " 000 000 000 ", PostCode = "AB00 1AB" };
            var result = _sut.CanItemBeAdded(_dictionary, item);
            Assert.False(result);
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