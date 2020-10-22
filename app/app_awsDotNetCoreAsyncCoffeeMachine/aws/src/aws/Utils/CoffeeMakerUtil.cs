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

            this.Start("boiling the kettle", 3000);
            this.Start("getting coffee from cupboard");
            this.Start("packing coffee into cafetiere");
            this.Start("getting cup from cupboard");
            this.Start("getting milk from fridge");
            this.Start("pouring milk into cup");
            this.Start("putting cup in microwave");
            this.Start("microwaving cup", 1000);
            this.Start("pouring boiling water into cafetiere");
            this.Start("brewing the coffee", 1000);
            this.Start("getting cup from microwave");
            this.Start("plunging cafetiere");
            this.Start("pouring coffee into cup");
            this.Start("stiring coffee");
            this.Start("drinking");

            return this.log;
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
