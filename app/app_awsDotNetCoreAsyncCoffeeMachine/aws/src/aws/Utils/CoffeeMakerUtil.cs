using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Interfaces;
using Models;

namespace Utils
{
    /* processes to making coffee
1. Put the kettle on (async)
2. Get coffee from cupboard
3. Pack coffee into cafetiere
4. Get cup from cupboard
5. Get milk from fridge
6. Pour milk into cup
7. Put cup in microwave
8. Turn on microwave (async)
9. Pour boiling water into cafetiere (Kettle has finished)
10. Leave coffee to brew (async)
11. Get cup from microwave (Microwave has finished)
12. Plunge cafetiere (brewing has finished)
13. Pour coffee into cup
14. Stir
15. Drink
*/
    public class CoffeeMakerUtil : ITaskRunner
    {
        private List<string> log { get; set; }

        public async Task<List<string>> Run()
        {
            this.log = new List<string>();

            var boilingWaterTask = this.StartAsync("boiling the kettle", 3000);
            this.Do("get coffee from cupboard");
            this.Do("pack coffee into cafetiere");
            this.Do("get cup from cupboard");
            this.Do("get milk from fridge");
            this.Do("pour milk into cup");
            this.Do("put cup in microwave");
            var microwavingCupTask = this.StartAsync("microwaving cup", 2000);
            var waterBoild = await boilingWaterTask;
            this.Do("pour boiling water into cafetiere");
            this.Do("brew the coffee");
            var cupMicrowaved = await microwavingCupTask;
            this.Do("get cup from microwave");
            this.Do("plunge cafetiere");
            this.Do("pour coffee into cup");
            this.Do("stir coffee");
            this.Do("drink coffee");

            return this.log;
        }

        public async Task<bool> StartAsync(string instruction, int seconds = 500)
        {
            this.log.Add($"Start {instruction.ToLower()} on thread: {Thread.CurrentThread.ManagedThreadId}");
            await Task.Delay(seconds);
            this.log.Add($"Finished {instruction} on thread: {Thread.CurrentThread.ManagedThreadId}");
            return true;
        }

        public void Do(string instruction)
        {
            var detail = char.ToUpper(instruction[0])+instruction.Substring(1);
            this.log.Add($"{detail} on thread: {Thread.CurrentThread.ManagedThreadId}");
        }

        public void Start(string instruction, int seconds = 500)
        {
            this.log.Add($"Start {instruction} on thread: {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(seconds);
            this.log.Add($"Finished {instruction} on thread: {Thread.CurrentThread.ManagedThreadId}");
        }

        public async Task<List<string>> DoProcessesAsync()
        {
            var log = new List<string>();
            var a = Task.Run(() => this.DoProcessA(log));
            var b = Task.Run(() => this.DoProcessB(log));
            var c = Task.Run(() => this.DoProcessC(log));
            Task.WaitAll(new Task[]{ a, b, c });
            return log;
        }

        public List<string> DoProcesses()
        {
            var log = new List<string>();
            this.DoProcessA(log);
            this.DoProcessB(log);
            this.DoProcessC(log);
            return log;
        }

        public void DoProcessA(List<string> log)
        {
            log.Add($"Start A on thread: {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(5000);
            log.Add($"Stop A on thread: {Thread.CurrentThread.ManagedThreadId}");
        }

        public void DoProcessB(List<string> log)
        {
            log.Add($"Start B on thread: {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(1000);
            log.Add($"Stop B on thread: {Thread.CurrentThread.ManagedThreadId}");
        }

        public void DoProcessC(List<string> log)
        {
            log.Add($"Start C on thread: {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(2000);
            log.Add($"Stop C on thread: {Thread.CurrentThread.ManagedThreadId}");
        }

        //temp method
        public string Join(List<string> log)
        {
            var result = string.Empty;

            if (log == null || log?.Count == 0) {
                return result;
            }

            foreach (var item in log)
            {
                if (!String.IsNullOrEmpty(result))
                {
                    result = $"{result}, {item}";
                }
                else
                {
                    result = $"{item}";
                }
            }
            return result;
        }
    }
}
