using System;
using System.Collections.Generic;

namespace Domains
{
    public class QItem
    {        
        public int NumberOfItems { get; set; }
        public DateTime Date { get; set; }
        public Queue<int> PreviousNumberOfItems { get; set; }
        public QItem(){}
        public QItem(int numberOfItems, DateTime date)
        {
            this.NumberOfItems = numberOfItems;
            this.Date = date;
        }
    }
}