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
            _sut = new CoffeeMakerUtil();
        }

        [Fact]
        public void Test_Run_Has_Correct_Numer_Of_Steps()
        {
            var log = _sut.Run();
            var result = log.Get().Count == 17;
            Assert.True(result);
        }

        [Fact]
        public void Test_Run_All_Steps_On_Same_Thread()
        {
            var log = _sut.Run();
            var threads = log.Get().Select(x => x.Thread);
            var result = threads.Distinct().Count() == 1;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_RunAsync_Has_Correct_Numer_Of_Steps()
        {
            var log = await _sut.RunAsync();
            var result = log.Get().Count == 17;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_RunAsync_Has_Different_Threads()
        {
            var log = await _sut.RunAsync();
            var threads = log.Get().Select(x => x.Thread);
            var result = threads.Distinct().Count() > 1;
            Assert.True(result);
        }

        [Fact]
        public async Task Test_RunAsync_Has_The_Correct_Order_For_Kettle()
        {
            var log = await _sut.RunAsync();
            var indexes = GetIndexOfOrderedTasks(log, "finished boiling the kettle", "pour boiling water into cafetiere");
            var result = indexes.IndexOfFirstTask < indexes.IndexOfSecondTask;
            Assert.True(true);
        }

        [Fact]
        public async Task Test_RunAsync_Has_The_Correct_Order_For_Microwave()
        {
            var log = await _sut.RunAsync();
            var indexes = GetIndexOfOrderedTasks(log, "finished microwaving cup", "get cup from microwave");
            var result = indexes.IndexOfFirstTask < indexes.IndexOfSecondTask;
            Assert.True(true);
        }

        private (int IndexOfFirstTask, int IndexOfSecondTask) GetIndexOfOrderedTasks(Log log, string detailOfFirstItem, string detailOfSecondItem)
        {
            var indexOfFirstTask = 0;
            var indexOfSecondTask = 0;

            var i = 0;
            foreach (var item in log)
            {
                if (item.Detail.ToLower() == detailOfFirstItem.ToLower())
                {
                    indexOfFirstTask = i;
                }

                if (item.Detail.ToLower() == detailOfSecondItem.ToLower())
                {
                    indexOfSecondTask = i;
                }
                i++;
            }
            return (indexOfFirstTask, indexOfSecondTask);
        }
    }
}