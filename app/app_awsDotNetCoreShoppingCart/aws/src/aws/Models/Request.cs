using System;
using System.Collections.Generic;

namespace Models
{
    public class AddRequest
    {
        public Item Item { get; set; }
        public List<Item> Items { get; set; }
    }
}