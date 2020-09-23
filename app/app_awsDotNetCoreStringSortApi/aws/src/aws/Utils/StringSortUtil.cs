using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Interfaces;

namespace Utils
{
    public class StringSortUtil : IStringSortUtil
    {
        public string SortNumeric(string commaSeperatedString)
        {
            var characters = commaSeperatedString.Split(',');
            var charactersToSort = new List<int>();

            foreach (var character in characters)
            {
                if (int.TryParse(character, out var value))
                {
                    charactersToSort.Add(value);
                }
            }
            charactersToSort.Sort();
            var result = String.Join<int>(',', charactersToSort);
            return result;
        }

        public string SortAlpha(string commaSeperatedString)
        {
            var characters = commaSeperatedString.Split(',');
            var charactersToSort = new List<string>();

            foreach (var character in characters)
            {
                var regex = new Regex("[a-zA-Z]");
                if (regex.IsMatch(character))
                {
                    charactersToSort.Add(character);
                }
            }
            charactersToSort.Sort();
            var result = String.Join<string>(',', charactersToSort);
            return result;
        }
    }
}
