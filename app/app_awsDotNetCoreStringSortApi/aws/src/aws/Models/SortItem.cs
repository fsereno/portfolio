using System;
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

        public class NaturalSorter : IComparer<SortItem>
        {
            public int Compare(SortItem a, SortItem b)
            {
                const string _numericRegex = "([0-9]+)";
                var outcome = 0;

                if (a.Value == b.Value)
                {
                    return 0;
                }

                var chunkA = Regex.Split(a.Value, _numericRegex);
                var chunkB = Regex.Split(b.Value, _numericRegex);

                var digitChunkA = chunkA.Where( x => int.TryParse(x, out var i));
                var digitChunkB = chunkB.Where( x => int.TryParse(x, out var i));

                for (var i = 0; i < chunkA.Length && i < chunkB.Length; i++)
                {
                    var itemA = chunkA[i];
                    var itemB = chunkB[i];

                    if (itemA != itemB)
                    {
                        if (!int.TryParse(itemA, out var integerA))
                        {
                            outcome = itemA.CompareTo(itemB);
                            break;
                        }
                        if (!int.TryParse(itemB, out var integerB))
                        {
                            outcome = itemA.CompareTo(itemB);
                            break;
                        }
                        outcome = integerA.CompareTo(integerB);
                        break;
                    }
                }

                if (outcome == 1 && digitChunkA.Any() && digitChunkB.Any())
                {
                    outcome = digitChunkA.Count() < digitChunkB.Count() ? -1 : outcome;
                }

                if (outcome != 0)
                {
                    return outcome;
                }

                if (chunkA.Length > chunkB.Length)
                {
                    outcome = 1;
                }
                else if (chunkA.Length < chunkB.Length)
                {
                    outcome = -1;
                }
                return outcome;
            }
        }
    }
}