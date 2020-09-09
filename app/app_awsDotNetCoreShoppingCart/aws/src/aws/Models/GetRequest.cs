using System;
using System.Collections.Generic;

namespace Models
{
    public class GetRequest
    {
        public int Index { get; set; }
        public List<Item> Items { get; set; }
    }
}