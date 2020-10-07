using System;
using System.Collections.Generic;
using Models;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string Sort(string commaSeperatedString);

       List<SortItem> Sort(string commaSeperatedString, Action<ValueTuple<string, List<SortItem>>> addMethod, Action<List<SortItem>> sortMethod);

       string Join(List<SortItem> sortedCharacters);

       void OrderBy(List<SortItem> itemsToSort);

       void AddSortItemToCollection((string group, List<SortItem> sortItems) request);
   }
}
