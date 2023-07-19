using System.Collections.Generic;
using Portfolio.StringSort.Models;

namespace Portfolio.StringSort.Interfaces
{
   public interface IStringSortUtil
   {
       /// <summary>
       /// Main Sort method taking and returning a strin
       /// </summary>
       /// <param name="commaSeperatedString">A comma seperated string of value to sort</param>
       /// <returns>A sorted comma seperated string</returns>
       string Sort(string commaSeperatedString);

       /// <summary>
       /// Extracts each item into a complex type ready for sorting
       /// </summary>
       /// <param name="commaSeperatedString">A comma seperated string of value to split</param>
       /// <returns>A List of SortItems ready to sort</returns>
       List<SortItem> GetSortItems(string commaSeperatedString);

       /// <summary>
       /// Join back together from complex List type into a comma seperated string
       /// </summary>
       /// <param name="sortedItems">Sorted items</param>
       /// <returns>A sorted comma seperated string</returns>
       string Join(List<SortItem> sortedItems);
   }
}
