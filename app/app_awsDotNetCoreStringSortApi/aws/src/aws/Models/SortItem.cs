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

                for (var i = 0; i < chunkA.Length && i < chunkB.Length; i++)
                {
                    var itemA = chunkA[i];
                    var itemB = chunkB[i];
                    if (itemA != itemB)
                    {
                        var periodSplitA = Regex.Split(itemA, "([.]+)");
                        var periodSplitB = Regex.Split(itemB, "([.]+)");

                        if (!int.TryParse(itemA, out var integerA))
                        {
                            return itemA.CompareTo(itemB);
                        }
                        if (!int.TryParse(itemB, out var integerB))
                        {
                            return itemA.CompareTo(itemB);
                        }
                        return integerA.CompareTo(integerB);
                    }
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