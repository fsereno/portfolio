using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Portfolio.StringSort.Interfaces;
using Portfolio.StringSort.Models;

namespace Portfolio.StringSort.Utils
{
    /// <summary>
    /// Utility class for sorting strings.
    /// </summary>
    public class StringSortUtil : IStringSortUtil
    {
        private readonly ILogger<StringSortUtil> _logger;

        /// <summary>
        /// Initializes a new instance of the StringSortUtil class with the specified logger.
        /// </summary>
        /// <param name="logger">The logger to use for logging messages.</param>
        public StringSortUtil(ILogger<StringSortUtil> logger)
        {
            _logger = logger;
        }

        /// <inheritdoc/>
        public string Sort(string commaSeperatedString)
        {
            _logger.LogInformation("Starting Sort process");

            var itemsToSort = GetSortItems(commaSeperatedString);
            Sort(itemsToSort);

            var result = Join(itemsToSort);

            _logger.LogInformation("Finished Sort process");

            return result;
        }

        /// <inheritdoc/>
        public List<SortItem> GetSortItems(string commaSeperatedString)
        {
            _logger.LogInformation("Started splitting items");

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

            _logger.LogInformation("Finished splitting items");

            return itemsToSort;
        }

        /// <inheritdoc/>
        public string Join(List<SortItem> sortedItems)
        {
            _logger.LogInformation("Started Join process of sorted items");

            var result = string.Empty;

            if (sortedItems == null || sortedItems?.Count == 0) {
                return result;
            }

            foreach (var item in sortedItems)
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

            _logger.LogInformation("Finished Join process of sorted items");

            return result;
        }

        /// <summary>
        /// Sorts the items using the natural sorting logic.
        /// </summary>
        /// <param name="itemsToSort">The list of SortItems to sort.</param>
        private void Sort(List<SortItem> itemsToSort)
        {
            _logger.LogInformation("Sort the items");
            itemsToSort?.Sort(new SortItem.NaturalSorter());
        }
    }
}