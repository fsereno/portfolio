using System;
using System.Collections.Generic;
using System.Linq;

namespace Models
{
    public class SortItem
    {
        public SortItem(string value = "")
        {
            this.Value = value;
        }
        public string Value { get; set; }

        public class SortAlphaNumeric : IComparer<SortItem>
        {
            public int Compare(SortItem a, SortItem b)
            {
                /*this.compareTo(that)
                returns
                a negative int if this < that
                0 if this == that
                a positive int if this > that*/

                // the problem is with 10 and 1A
                // 10 should be less than 1A, need to go against the grain!
                var alphaResult = 0;
                var outcome = 0;

                var valueA = a.Value;
                var valueB = b.Value;

                var valueAFirstCharIsInt = char.IsDigit(valueA[0]);
                var valueBFirstCharIsInt = char.IsDigit(valueB[0]);

                if (!valueAFirstCharIsInt && valueBFirstCharIsInt)
                {
                    outcome = 1;
                }

                if (valueAFirstCharIsInt && !valueBFirstCharIsInt) // this may not be needed
                {
                    outcome = -1;
                }

                if (outcome != 0)
                {
                    return outcome;
                }

                var digitChunkA = new string(valueA.Where( x => char.IsDigit(x)).ToArray());
                var digitChunkB = new string(valueB.Where( x => char.IsDigit(x)).ToArray());

                var integersA = String.IsNullOrEmpty(digitChunkA) ? 0 : int.Parse(digitChunkA);
                var integersB = String.IsNullOrEmpty(digitChunkB) ? 0 : int.Parse(digitChunkB);

                var alphaChunkA = new string(valueA.Where( x => !char.IsDigit(x)).ToArray());
                var alphaChunkB = new string(valueB.Where( x => !char.IsDigit(x)).ToArray());

                var intResult = integersA.CompareTo(integersB);

                if (!string.IsNullOrEmpty(alphaChunkA) && string.IsNullOrEmpty(alphaChunkB))
                {
                    outcome = intResult;
                }
                else if(string.IsNullOrEmpty(alphaChunkA) && !string.IsNullOrEmpty(alphaChunkB)) // this may not be needed
                {
                    outcome = intResult;
                }

                if (outcome == 0)
                {
                    alphaResult = alphaChunkA.CompareTo(alphaChunkB);
                }

                if (alphaResult != 0)
                {
                    outcome = alphaResult;
                }
                else if (alphaResult == 0 && intResult != 0)
                {
                    outcome = intResult;
                }
                else if (intResult == 0 && alphaResult != 0)
                {
                    outcome = alphaResult;
                }
                return outcome;
            }
        }
    }
}