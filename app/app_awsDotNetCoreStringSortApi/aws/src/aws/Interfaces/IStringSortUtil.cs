using System;
using System.Collections.Generic;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string Sort(string commaSeperatedString);

       string Sort<T>(string commaSeperatedString, Action<ValueTuple<string, List<T>>> addMethod);
   }
}
