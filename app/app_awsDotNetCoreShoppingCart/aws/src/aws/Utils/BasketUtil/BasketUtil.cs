using System;
using System.Collections.Generic;
using Models;

namespace Utils
{
    public class BasketUtil : IBasketUtil
    {
        public bool IsInRange(int index, List<Item> collection, out int position)
        {
            var isInRange = false;
            position = -1;
            if (index > 0) {
                position = index - 1;
                isInRange = position < collection?.Count;
            }
            return isInRange;
        }
        public bool IsInRange(int index, List<string> collection, out int position)
        {
            var isInRange = false;
            position = -1;
            if (index > 0) {
                position = index - 1;
                isInRange = position < collection?.Count;
            }
            return isInRange;
        }
    }
}
