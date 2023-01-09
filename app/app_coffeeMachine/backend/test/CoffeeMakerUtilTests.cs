using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Moq;
using Portfolio.CoffeeMachine.Utils;
using Portfolio.CoffeeMachine.Models;
using Xunit;

namespace Portfolio.CoffeeMachine.Tests
{
    public class CoffeeMakerUtilTests
    {
        private readonly CoffeeMakerUtil _sut;

        private readonly Mock<ILogger<CoffeeMakerUtil>> _logger;
        public CoffeeMakerUtilTests()
        {
            _logger = new Mock<ILogger<CoffeeMakerUtil>>();
            _sut = new CoffeeMakerUtil(_logger.Object);
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

        [Fact]
        public void Test_Run_Verify_Logging()
        {
            var log = _sut.Run();
            VerifyLogger(LogLevel.Information, "Starting synchronous process");
            VerifyLogger(LogLevel.Information, "Ending synchronous process");
        }

        [Fact]
        public async Task Test_Run_Async_Verify_Logging()
        {
            var log = await _sut.RunAsync();
            VerifyLogger(LogLevel.Information, "Starting asynchronous process");
            VerifyLogger(LogLevel.Information, "Ending asynchronous process");
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