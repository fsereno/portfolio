using System;

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
    }
}
