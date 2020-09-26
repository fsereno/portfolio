using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Interfaces;
using Models;

namespace Utils
{
    public class StringSortUtil : IStringSortUtil
    {
        private const string _alphaRegex = "[a-zA-Z]";
        private const string _integerRegex = "[0-9]";

        public string Sort(string commaSeperatedString)
        {
            var sortedNumeric = this.Sort<int>(commaSeperatedString, AddIntegerToCollection);
            var sortedAlpha = this.Sort<string>(commaSeperatedString, AddStringToCollection);
            var values = new string[]{ sortedNumeric, sortedAlpha };
            var result = this.Join(values);
            return result;
        }

        public string Sort<T>(string commaSeperatedString, Action<ValueTuple<string, List<T>>> addMethod)
        {
            var characters = commaSeperatedString.Split(',');
            var charactersToSort = new List<T>();

            foreach (var character in characters)
            {
                addMethod(new ValueTuple<string, List<T>>(character, charactersToSort));
            }

            charactersToSort.Sort();
            var result = String.Join<T>(',', charactersToSort);
            return result;
        }

        public string Join(string[] values)
        {
            var result = string.Empty;

            if (values?.Length == 0) {
                return result;
            }

            foreach (var value in values)
            {
                if (!String.IsNullOrEmpty(result) && !String.IsNullOrEmpty(value))
                {
                    result = $"{result},{value}";
                }
                else if(!String.IsNullOrEmpty(value))
                {
                    result = value;
                }
            }
            return result;
        }

        private void AddStringToCollection((string character, List<string> collection) request)
        {
            var regex = new Regex(_alphaRegex);
            if (regex.IsMatch(request.character))
            {
                request.collection.Add(request.character);
            }
        }

        private void AddIntegerToCollection((string character, List<int> collection) request)
        {
             if (int.TryParse(request.character, out var value))
             {
                 request.collection.Add(value);
             }
        }

        //a1
        /*public void AddAlphaNumericItemToCollection((string character, List<AlphaNumericItem> collection) request)
        {
            var integerArray  = Regex.Split(request.character, _alphaRegex);
            var alphaArray  = Regex.Split(request.character, _integerRegex);
            int value = 0;
            if (integerArray.Length > 1 && int.TryParse(integerArray[1], out value))
            {
                var item = new AlphaNumericItem() { Value = alphaArray[0], Index = value };
                request.collection.Add(item);
            } else {
                var item = new AlphaNumericItem() { Value = request.character, Index = value };
                request.collection.Add(item);
            }
        }*/
    }
}
