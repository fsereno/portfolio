using System;

namespace Models
{
    public class Instruction
    {
        public Instruction(string detail = "", int seconds = 500)
        {
            this.Detail = detail;
            this.Seconds = seconds;
        }
        public string Detail { get; set; }
        public int Seconds { get; set; }
    }
}
