using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Portfolio.CoffeeMachine.Interfaces;
using Portfolio.CoffeeMachine.Models;

namespace Portfolio.CoffeeMachine.Utils
{
    public class CoffeeMakerUtil : ITaskRunner
    {
        private Log _log;
        private readonly ILogger<CoffeeMakerUtil> _logger;

        public CoffeeMakerUtil(ILogger<CoffeeMakerUtil> logger)
        {
            _logger = logger;
        }

        /// <inheritdoc/>
        public Log Run()
        {
            _log = new Log();
            _logger.LogInformation("Starting synchronous process");

            this.Start("boiling the kettle", 3000);
            this.Do("get coffee from cupboard");
            this.Do("pack coffee into cafetiere");
            this.Do("get cup from cupboard");
            this.Do("get milk from fridge");
            this.Do("pour milk into cup");
            this.Do("put cup in microwave");
            this.Start("microwaving cup", 3500);
            this.Do("pour boiling water into cafetiere");
            this.Do("brew the coffee");
            this.Do("get cup from microwave");
            this.Do("plunge cafetiere");
            this.Do("pour coffee into cup");
            this.Do("stir coffee");
            this.Do("drink coffee");

            _logger.LogInformation("Ending synchronous process");

            return _log;
        }

        /// <inheritdoc/>
        public async Task<Log> RunAsync()
        {
            _log = new Log();
            _logger.LogInformation("Starting asynchronous process");

            var boilingWaterTask = this.StartAsync("boiling the kettle", 3000);
            this.Do("get coffee from cupboard");
            this.Do("pack coffee into cafetiere");
            this.Do("get cup from cupboard");
            this.Do("get milk from fridge");
            this.Do("pour milk into cup");
            this.Do("put cup in microwave");
            var microwavingCupTask = this.StartAsync("microwaving cup", 3500);
            var waterBoild = await boilingWaterTask;
            this.Do("pour boiling water into cafetiere");
            this.Do("brew the coffee");
            var cupMicrowaved = await microwavingCupTask;
            this.Do("get cup from microwave");
            this.Do("plunge cafetiere");
            this.Do("pour coffee into cup");
            this.Do("stir coffee");
            this.Do("drink coffee");

            _logger.LogInformation("Ending asynchronous process");

            return _log;
        }

        /// <inheritdoc/>
        public async Task<bool> StartAsync(string instruction, int seconds)
        {
            _log.Add(new LogItem($"Start {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            await Task.Delay(seconds);
            _log.Add(new LogItem($"Finished {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            return true;
        }

        /// <inheritdoc/>
        public void Start(string instruction, int seconds)
        {
            _log.Add(new LogItem($"Start {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
            Thread.Sleep(seconds);
            _log.Add(new LogItem($"Finished {instruction.ToLower()}", Thread.CurrentThread.ManagedThreadId));
        }

        /// <inheritdoc/>
        public void Do(string instruction)
        {
            var detail = char.ToUpper(instruction[0])+instruction.Substring(1);
            _log.Add(new LogItem(detail, Thread.CurrentThread.ManagedThreadId));
        }
    }
}