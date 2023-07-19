using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Portfolio.UniqueDataEntry.Interfaces;
using Portfolio.UniqueDataEntry.Models;

namespace Portfolio.UniqueDataEntry.Utils
{
    /// <summary>
    /// Utility class for unique data entry operations.
    /// </summary>
    public class UniqueDataEntryUtil : IUniqueDataEntryUtil
    {
        private readonly ILogger<UniqueDataEntryUtil> _logger;

        /// <summary>
        /// Initializes a new instance of the UniqueDataEntryUtil class with the specified logger.
        /// </summary>
        /// <param name="logger">The logger to use for logging messages.</param>
        public UniqueDataEntryUtil(ILogger<UniqueDataEntryUtil> logger)
        {
            _logger = logger;
        }

        /// <inheritdoc/>
        public bool CanItemBeAdded(Dictionary<Item, string> dict, Item item)
        {
            var result = false;
            var currentCount = dict.Count;

            try
            {
                dict.Add(item, item.SecondName);
                result = dict.Count == currentCount + 1;
            }
            catch (Exception exception)
            {
                _logger.LogWarning("You cannot add duplicate items.");
                _logger.LogWarning(exception.Message);
            }

            return result;
        }
    }
}
