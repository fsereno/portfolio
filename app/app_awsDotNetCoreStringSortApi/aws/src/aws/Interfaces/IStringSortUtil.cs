using System;
using System.Collections.Generic;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string SortNumeric(string commaSeperatedString);

       string SortAlpha(string commaSeperatedString);
   }
}
