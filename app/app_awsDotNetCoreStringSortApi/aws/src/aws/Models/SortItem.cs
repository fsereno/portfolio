﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

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
                var alphaResult = 0;
                var outcome = 0;

                var valueA = a.Value;
                var valueB = b.Value;

                /*if (valueA == valueB)
                {
                    return 0;
                }*/

                var numericArrayA = Regex.Split(valueA, "([0-9]+)");
                var numericArrayB = Regex.Split(valueB, "([0-9]+)");

                for (var i = 0; i < numericArrayA.Length && i < numericArrayB.Length; i++)
                {
                    if (numericArrayA[i] != numericArrayB[i])
                    {
                        int x, y;
                        if (!int.TryParse(numericArrayA[i], out x))
                            return numericArrayA[i].CompareTo(numericArrayB[i]);

                        if (!int.TryParse(numericArrayB[i], out y))
                            return numericArrayA[i].CompareTo(numericArrayB[i]);

                        return x.CompareTo(y);
                    }
                }

                /*var valueAFirstCharIsInt = char.IsDigit(valueA[0]);
                var valueBFirstCharIsInt = char.IsDigit(valueB[0]);

                if (!valueAFirstCharIsInt && valueBFirstCharIsInt)
                {
                    outcome = 1;
                }
                else if (valueAFirstCharIsInt && !valueBFirstCharIsInt) // this may not be needed
                {
                    outcome = -1;
                }

                if (outcome != 0)
                {
                    return outcome;
                }

                var digitChunkA = new string(valueA.Where( x => char.IsDigit(x)).ToArray());
                var digitChunkB = new string(valueB.Where( x => char.IsDigit(x)).ToArray());
                var alphaChunkA = new string(valueA.Where( x => !char.IsDigit(x)).ToArray());
                var alphaChunkB = new string(valueB.Where( x => !char.IsDigit(x)).ToArray());

                var integersA = int.TryParse(digitChunkA, out var parsedIntegersA) ? parsedIntegersA : 0;
                var integersB = int.TryParse(digitChunkB, out var parsedIntegersB) ? parsedIntegersB : 0;
                var intResult = integersA.CompareTo(integersB);

                if (string.IsNullOrEmpty(alphaChunkA) || string.IsNullOrEmpty(alphaChunkB))
                {
                    outcome = intResult;
                }

                if (valueA.Substring(0, valueA.IndexOf(digitChunkA)) == valueB.Substring(0, valueB.IndexOf(digitChunkB)))
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
                }*/
                return outcome;
            }
        }
    }
}