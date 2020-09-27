using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Interfaces;

namespace Utils
{
    public class StringSortUtil : IStringSortUtil
    {
        private const string _regex = "[a-zA-Z0-9]$";

        private const string _replaceRegex = "[0-9]+";

        public string Sort(string commaSeperatedString)
        {
            var sortedAlphaNumeric = this.Sort(
                    commaSeperatedString,
                    AddStringToCollection,
                    OrderAlphaNumeric);
            var result = this.Join(sortedAlphaNumeric);
            return result;
        }

        public List<string> Sort(
                string commaSeperatedString,
                Action<ValueTuple<string, List<string>>> addMethod,
                Func<List<string>, List<string>> sortMethod)
        {
            var characters = commaSeperatedString.Split(',');
            var charactersToSort = new List<string>();

            foreach (var character in characters)
            {
                addMethod(new ValueTuple<string, List<string>>(character, charactersToSort));
            }

            var result = sortMethod(charactersToSort);
            return result;
        }

        public string Join(List<string> sortedCharacters)
        {
            var result = string.Empty;

            if (sortedCharacters == null || sortedCharacters?.Count == 0) {
                return result;
            }

            foreach (var character in sortedCharacters)
            {
                if (!String.IsNullOrEmpty(result) && !String.IsNullOrEmpty(character))
                {
                    result = $"{result},{character}";
                }
                else if(!String.IsNullOrEmpty(character))
                {
                    result = character;
                }
            }
            return result;
        }

        public void AddStringToCollection((string character, List<string> collection) request)
        {
            var regex = new Regex(_regex);
            if (regex.IsMatch(request.character))
            {
                request.collection.Add(request.character);
            }
        }

        public List<string> OrderAlphaNumeric(List<string> charactersToSort)
        {
            var result = charactersToSort.OrderBy( x => PadLeft(x)).ToList();
            return result;
        }

        private string PadLeft(string input)
        {
            return Regex.Replace(input, _replaceRegex, match => match.Value.PadLeft(10, '0'));
        }
    }
}