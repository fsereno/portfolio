using System;
using System.Collections.Generic;

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

        public class SortAlphaNumeric : IComparer<SortItem>
        {
            public int Compare(SortItem current, SortItem next)
            {
                /*this.compareTo(that)
                returns

                a negative int if this < that
                0 if this == that
                a positive int if this > that*/

                var result = current.PaddedValue.CompareTo(next.PaddedValue);

                if (result == 0)
                {
                    result = current.Index.CompareTo(next.Index);
                }

                return result;
            }
        }
    }
}