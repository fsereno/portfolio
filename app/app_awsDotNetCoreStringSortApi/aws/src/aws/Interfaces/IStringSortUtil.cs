using System;
using System.Collections.Generic;
using Models;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string Sort(string commaSeperatedString);

       List<SortItem> Sort(string commaSeperatedString, Action<ValueTuple<string, List<SortItem>>> addMethod, Func<List<SortItem>, List<SortItem>> sortMethod);

       string Join(List<SortItem> sortedCharacters);

       List<SortItem> OrderBy(List<SortItem> itemsToSort);

       void AddSortItemToCollection((string group, List<SortItem> sortItems) request);
   }
}
