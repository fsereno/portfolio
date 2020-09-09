using System;
using System.Collections.Generic;

namespace Models
{
    public class UpdateRequest
    {
        public int Index { get; set; }
        public Item Item { get; set; }
        public List<Item> Items { get; set; }
    }
}