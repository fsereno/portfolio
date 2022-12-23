namespace Portfolio.CoffeeMachine.Models
{
    public class LogItem
    {
        public LogItem(string detail, int thread)
        {
            this.Detail = detail;
            this.Thread = thread;
        }
        public string Detail { get; set; }
        public int Thread { get; set; }
    }
}
