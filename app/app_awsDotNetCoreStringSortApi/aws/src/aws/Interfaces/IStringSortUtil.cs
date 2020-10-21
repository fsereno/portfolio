using System;
using System.Collections.Generic;
using Models;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string Sort(string commaSeperatedString);

       List<SortItem> GetSortItems(string commaSeperatedString);

       string Join(List<SortItem> sortedCharacters);
   }
}
