using System;
using System.Collections.Generic;

namespace Domains
{
    public class History
    {        
        public int AccountNumber { get; set; }
        public int NumberOfInvestments { get; set; }
        public int NumberOfAccounts { get; set; }
        public DateTime Date { get; set; }
        public Queue<DateTime> PreviousDates { get; set; }
        public Queue<int> PreviousNumberOfInvestments { get; set; }
        
        public History(){}
        public History(int accountNumber, int numberOfInvestments, DateTime date)
        {
            this.AccountNumber = accountNumber;
            this.NumberOfInvestments = numberOfInvestments;
            this.Date = date;
        }
    }
}