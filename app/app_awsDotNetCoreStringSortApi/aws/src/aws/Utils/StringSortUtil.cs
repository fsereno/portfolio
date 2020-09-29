using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Interfaces;
using Models;

namespace Utils
{
    public class StringSortUtil : IStringSortUtil
    {
        private const string _regex = "[a-zA-Z0-9]$";

        private const string _numericRegex = "[0-9]+";

        public string Sort(string commaSeperatedString)
        {
            var sortedAlphaNumeric = this.Sort(
                    commaSeperatedString,
                    AddStringToCollection,
                    OrderBy);
            var result = this.Join(sortedAlphaNumeric);
            return result;
        }

        public List<SortItem> Sort(
                string commaSeperatedString,
                Action<ValueTuple<string, List<SortItem>>> addMethod,
                Func<List<SortItem>, List<SortItem>> sortMethod)
        {
            var itemsToSort = new List<SortItem>();
            if (String.IsNullOrEmpty(commaSeperatedString))
            {
                return itemsToSort;
            }

            var characterGroups = commaSeperatedString.Split(',');

            foreach (var group in characterGroups)
            {
                addMethod(new ValueTuple<string, List<SortItem>>(group, itemsToSort));
            }

            var result = sortMethod(itemsToSort);
            return result;
        }

        public string Join(List<SortItem> sortedCharacters)
        {
            var result = string.Empty;

            if (sortedCharacters == null || sortedCharacters?.Count == 0) {
                return result;
            }

            foreach (var item in sortedCharacters)
            {
                if (!String.IsNullOrEmpty(result))
                {
                    result = $"{result},{item.Value}";
                }
                else
                {
                    result = $"{item.Value}";
                }
            }
            return result;
        }

        public void AddStringToCollection((string group, List<SortItem> sortItems) request)
        {
            var indexMatch = Regex.Match(request.group, _numericRegex);
            var paddedValue = Regex.Replace(request.group, _numericRegex, "0");
            request.sortItems.Add(new SortItem()
            {
                Value = request.group,
                PaddedValue = paddedValue,
                Index = int.TryParse(indexMatch.Value, out var index) ? index : 0
            });
        }

        public List<SortItem> OrderBy(List<SortItem> itemsToSort)
        {
            if (itemsToSort == null) {
                return new List<SortItem>();
            }
            var result = itemsToSort.OrderBy(x => x.PaddedValue).ThenBy( x => x.Index);
            return result.ToList();
        }
    }
}