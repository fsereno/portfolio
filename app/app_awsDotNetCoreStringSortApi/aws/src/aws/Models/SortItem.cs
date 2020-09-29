using System;

namespace Models
{
    public class SortItem
    {
        public SortItem()
        {
            this.Value = string.Empty;
            this.PaddedValue = string.Empty;
            this.Index = 0;
        }
        public string Value { get; set; }
        public string PaddedValue { get; set; }
        public int Index { get; set; }
    }
}