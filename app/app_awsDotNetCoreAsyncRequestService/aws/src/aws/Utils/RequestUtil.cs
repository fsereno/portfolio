using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Utils
{
    public class RequestUtil
    {
        public async Task<string> DoProcessesAsync()
        {
            var log = new StringBuilder();
            var a = Task.Run(() => this.DoProcessA(log));
            var b = Task.Run(() => this.DoProcessB(log));
            var c = Task.Run(() => this.DoProcessC(log));
            Task.WaitAll(new Task[]{ a, b, c });
            return log.ToString();
        }

        public string DoProcesses()
        {
            var log = new StringBuilder();
            this.DoProcessA(log);
            this.DoProcessB(log);
            this.DoProcessC(log);
            return log.ToString();
        }


        public void DoProcessA(StringBuilder log)
        {
            log.Append($"Start A on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
            Thread.Sleep(5000);
            log.Append($"Stop A on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
        }

        public void DoProcessB(StringBuilder log)
        {
            log.Append($"Start B on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
            Thread.Sleep(1000);
            log.Append($"Stop B on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
        }

        public void DoProcessC(StringBuilder log)
        {
            log.Append($"Start C on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
            Thread.Sleep(2000);
            log.Append($"Stop C on thread: {Thread.CurrentThread.ManagedThreadId}");
            log.Append(",");
        }
    }
}