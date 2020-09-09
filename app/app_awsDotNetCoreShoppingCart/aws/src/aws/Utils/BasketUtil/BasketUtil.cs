using System;
using System.Collections.Generic;
using Models;

namespace Utils
{
    public class BasketUtil : IBasketUtil
    {
        public bool IsInRange(int index, List<Item> collection, out int position)
        {
            position = index - 1;
            return position < collection?.Count;
        }
        public bool IsInRange(int index, List<string> collection, out int position)
        {
            position = index - 1;
            return position < collection?.Count;
        }
    }
}
