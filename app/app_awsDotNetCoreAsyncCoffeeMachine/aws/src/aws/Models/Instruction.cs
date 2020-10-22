using System;

namespace Models
{
    public class Instruction
    {
        public Instruction(string detail, int thread)
        {
            this.Detail = detail;
            this.Thread = thread;
        }
        public string Detail { get; set; }
        public int Thread { get; set; }
    }
}
