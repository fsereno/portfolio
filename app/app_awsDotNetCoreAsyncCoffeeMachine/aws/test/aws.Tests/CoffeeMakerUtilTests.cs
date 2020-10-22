using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aws;
using Utils;
using Xunit;

namespace aws.Tests
{
    public class CoffeeMakerUtilTests
    {
        private readonly CoffeeMakerUtil _sut;
        public CoffeeMakerUtilTests()
        {
            this._sut = new CoffeeMakerUtil();
        }

        [Fact]
        public async Task Test_RunAsync_Has_Correct_Numer_Of_Steps()
        {
            var log = await this._sut.Run();
            var result = log.Count == 29;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_DoProcessesAsync()
        {
            var log = await this._sut.DoProcessesAsync();
            var result = this._sut.Join(log);
            Assert.Equal("Test", result);
        }
 
        [Fact]
        public void Test_DoProcesses()
        {
            var log = this._sut.DoProcesses();
            var result = this._sut.Join(log);
            Assert.Equal("Test", result);
        }
    }
}