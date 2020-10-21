using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Utils
{
    public class RequestService
    {
        public async Task<string> TestMethod()
        {
            var result = await Task.Run(() => string.Empty);
            return result;
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
