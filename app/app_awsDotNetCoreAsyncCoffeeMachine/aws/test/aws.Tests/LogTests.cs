using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aws;
using Utils;
using Models;
using Xunit;

namespace aws.Tests
{
    public class LogTests
    {
        private readonly Log _sut;
        public LogTests()
        {
            _sut = new Log();
        }

        [Fact]
        public void Test_Log()
        {
            _sut.Add(new LogItem("Instruct 1", 10));
            _sut.Add(new LogItem("Instruct 2", 20));
            _sut.Add(new LogItem("Instruct 3", 30));

            var result = new List<string>();

            foreach(var item in _sut)
            {
                result.Add(item.Detail);
            }

            Assert.True(result.Count == 3);
        }
    }
}