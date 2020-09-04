using System;
using System.Collections.Generic;

namespace Utils
{
    public class BasketUtil : IBasketUtil
    {
        public bool IsInRange(int index, List<string> collection, out int position)
        {
            position = index - 1;
            return position < collection?.Count;
        }
    }
}
