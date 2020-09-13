using System;
using System.Collections.Generic;

namespace Models
{
    public class GetRequest
    {
        public GetRequest()
        {
            this.Index = 0;
        }
        public int Index { get; set; }
        public List<Item> Items { get; set; }
    }
}