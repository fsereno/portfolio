using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Interfaces;

namespace Utils
{
    public class StringSortUtil : IStringSortUtil
    {
        public string Sort(string commaSeperatedString)
        {
            var sortedNumeric = this.SortNumeric(commaSeperatedString);
            //var sortedAlpha = this.SortAlpha(commaSeperatedString);
            var sortedAlpha = this.SortIt<string>(commaSeperatedString, IsValidString, AddStringToCollection);

            var result = $"{sortedNumeric},{sortedAlpha}";
            return result;
        }

        public bool IsValidString(string input)
        {
            var regex = new Regex("[a-zA-Z]");
            return regex.IsMatch(input);
        }

        public bool AddStringToCollection(Tuple<string, List<string>> request)
        {
            request.Item2.Add(request.Item1);
            return true;
        }

        public string SortIt<T>(string commaSeperatedString, Func<string, bool> method, Func<Tuple<string, List<T>>, bool> addMethod) //AddIfValidString
        {
            var characters = commaSeperatedString.Split(',');
            var charactersToSort = new List<T>();

            foreach (var character in characters)
            {
                if (method(character)) // the only problem is tryParse has addtional out par - how to get 2 outs with a Func ?
                {
                    addMethod(new Tuple<string, List<T>>(character, charactersToSort));
                }
            }

            charactersToSort.Sort();
            var result = String.Join<T>(',', charactersToSort);
            return result;
        }

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
