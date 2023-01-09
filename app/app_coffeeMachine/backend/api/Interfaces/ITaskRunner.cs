using System.Threading.Tasks;
using Portfolio.CoffeeMachine.Models;

namespace Portfolio.CoffeeMachine.Interfaces
{
    public interface ITaskRunner
    {
        /// <summary>
        /// Run tasks synchronously
        /// </summary>
        /// <returns>A Log of taks run</returns>
        Log Run();

        /// <summary>
        /// Run tasks Asynchronously
        /// </summary>
        /// <returns>A Log of taks run</returns>
        Task<Log> RunAsync();

        /// <summary>
        /// Carry out the singular instruction immediately with no waiting
        /// </summary>
        /// <param name="instruction">An instruction as string</param>
        void Do(string instruction);

        /// <summary>
        /// Carry out the specified instruction synchronously waiting for a specified delay
        /// </summary>
        /// <param name="instruction">An instruction as string</param>
        /// <param name="seconds">A delay in seconds</param>
        void Start(string instruction, int seconds);

        /// <summary>
        /// Carry out the specified instruction Asynchronously awaiting for a specified delay
        /// </summary>
        /// <param name="instruction">An instruction as string</param>
        /// <param name="seconds">A delay in seconds</param>
        /// <returns>A Task boolean when the task is complete</returns>
        Task<bool> StartAsync(string instruction, int seconds);
    }
}