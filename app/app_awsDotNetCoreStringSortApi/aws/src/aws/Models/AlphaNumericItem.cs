using System;
using System.Collections;
using System.Collections.Generic;

namespace Models
{
    public class AlphaNumericItem : IComparable<AlphaNumericItem>
    {
        public string Value { get; set; }

        public int Index { get; set; }

        public int CompareTo(AlphaNumericItem other)
        {
            var result = 0;
            if (this.Index < other.Index)
            {
                result = -1;

            } else if (this.Index > other.Index)
            {
                result = 1;
            }
            return result;
        }

        public class SortByValue : IComparer<AlphaNumericItem>
        {
            public int Compare(AlphaNumericItem next, AlphaNumericItem current)
            {
                return String.Compare(next.Value, current.Value);
            }
        }

        public class SortByIndex : IComparer<AlphaNumericItem>
        {
            public int Compare(AlphaNumericItem next, AlphaNumericItem current)
            {
                return Decimal.Compare(next.Index, current.Index);
            }
        }
    }
}
