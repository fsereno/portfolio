using System.Collections.Generic;
using Portfolio.UniqueDataEntry.Models;

namespace Portfolio.UniqueDataEntry.Interfaces
{
    public interface IUniqueDataEntryUtil
    {
        /// <summary>
        /// Testing to see if an item can be added by attempting to add the passed item to the dictionary
        /// </summary>
        /// <param name="dictionary">A dictionary of exsiting collection</param>
        /// <param name="item">The item to be added</param>
        /// <returns>A bool, can the item be added or not ?</returns>
        bool CanItemBeAdded(Dictionary<Item, string> dictionary, Item item);
    }
}