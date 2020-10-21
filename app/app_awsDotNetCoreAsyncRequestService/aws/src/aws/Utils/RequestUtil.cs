using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Utils
{
    public class RequestUtil
    {
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