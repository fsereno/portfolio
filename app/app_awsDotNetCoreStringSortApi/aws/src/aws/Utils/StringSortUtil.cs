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
        public string Sort(string commaSeperatedString)
        {
            var sortedAlphaNumeric = this.Sort(
                    commaSeperatedString,
                    AddSortItemToCollection,
                    OrderBy);
            var result = this.Join(sortedAlphaNumeric);
            return result;
        }

        public List<SortItem> Sort(
                string commaSeperatedString,
                Action<ValueTuple<string, List<SortItem>>> addMethod,
                Action<List<SortItem>> sortMethod)
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

            sortMethod(itemsToSort);
            return itemsToSort;
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

        public void AddSortItemToCollection((string group, List<SortItem> sortItems) request)
        {
            request.sortItems.Add(new SortItem(request.group));
        }

        public void OrderBy(List<SortItem> itemsToSort)
        {
            itemsToSort?.Sort(new SortItem.NaturalSorter());
        }
    }
}