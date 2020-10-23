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
    public class CoffeeMakerUtilTests
    {
        private readonly CoffeeMakerUtil _sut;
        public CoffeeMakerUtilTests()
        {
            this._sut = new CoffeeMakerUtil();
        }

        [Fact]
        public void Test_Run_Has_Correct_Numer_Of_Steps()
        {
            var log = this._sut.Run();
            var result = log.Get().Count == 17;
            Assert.True(result);
        }

        [Fact]
        public void Test_Run_All_Steps_On_Same_Thread()
        {
            var log = this._sut.Run();
            var threads = log.Get().Select(x => x.Thread);
            var result = threads.Distinct().Count() == 1;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_RunAsync_Has_Correct_Numer_Of_Steps()
        {
            var log = await this._sut.RunAsync();
            var result = log.Get().Count == 17;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_RunAsync_Has_Different_Threads()
        {
            var log = await this._sut.RunAsync();
            var threads = log.Get().Select(x => x.Thread);
            var result = threads.Distinct().Count() > 1;
            Assert.True(result);
        }
    }
}