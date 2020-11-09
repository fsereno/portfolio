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
            var itemsToSort = GetSortItems(commaSeperatedString);
            Sort(itemsToSort);

            var result = Join(itemsToSort);
            return result;
        }

        public List<SortItem> GetSortItems(string commaSeperatedString)
        {
            var itemsToSort = new List<SortItem>();
            if (String.IsNullOrEmpty(commaSeperatedString))
            {
                return itemsToSort;
            }

            var characterGroups = commaSeperatedString.Split(',');

            foreach (var characterGroup in characterGroups)
            {
               itemsToSort.Add( new SortItem() { Value = characterGroup.Trim() });
            }

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

        private void Sort(List<SortItem> itemsToSort)
        {
            itemsToSort?.Sort(new SortItem.NaturalSorter());
        }
    }
}