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

        public class SortAlphaNumeric : IComparer<SortItem>
        {
            public int Compare(SortItem a, SortItem b)
            {
                var outcome = 0;
    
                if (a.Value == b.Value)
                {
                    return 0;
                }

                var chunkA = Regex.Split(a.Value, "([0-9]+)");
                var chunkB = Regex.Split(b.Value, "([0-9]+)");

                for (var i = 0; i < chunkA.Length && i < chunkB.Length; i++)
                {
                    if (chunkA[i] != chunkB[i])
                    {
                        var x = 0;
                        var y = 0;
                        if (!int.TryParse(chunkA[i], out x))
                        {
                            outcome = chunkA[i].CompareTo(chunkB[i]);
                            return outcome;
                        }

                        if (!int.TryParse(chunkB[i], out y))
                        {
                            outcome = chunkA[i].CompareTo(chunkB[i]);
                            return outcome;
                        }

                        outcome = x.CompareTo(y);
                        return outcome;
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