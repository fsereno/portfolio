using System;
using System.Collections.Generic;

namespace Interfaces
{
   public interface IStringSortUtil
   {
       string Sort(string commaSeperatedString);

       List<string> Sort(string commaSeperatedString, Action<ValueTuple<string, List<string>>> addMethod, Func<List<string>, List<string>> sortMethod);

       string Join(List<string> sortedCharacters);

       List<string> OrderAlphaNumeric(List<string> charactersToSort);

       void AddStringToCollection((string character, List<string> collection) request);
   }
}
