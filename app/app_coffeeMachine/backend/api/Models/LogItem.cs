namespace Portfolio.CoffeeMachine.Models
{
    /// <summary>
    /// Represents a single log item in the coffee machine log.
    /// </summary>
    public class LogItem
    {
        /// <summary>
        /// Initializes a new instance of the LogItem class with the specified detail and thread.
        /// </summary>
        /// <param name="detail">The detail of the log item.</param>
        /// <param name="thread">The thread associated with the log item.</param>
        public LogItem(string detail, int thread)
        {
            this.Detail = detail;
            this.Thread = thread;
        }

        /// <summary>
        /// Gets or sets the detail of the log item.
        /// </summary>
        public string Detail { get; set; }

        /// <summary>
        /// Gets or sets the thread associated with the log item.
        /// </summary>
        public int Thread { get; set; }
    }
}
