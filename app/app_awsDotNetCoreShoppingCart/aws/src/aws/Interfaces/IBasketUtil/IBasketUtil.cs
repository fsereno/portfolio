using System;
using System.Collections.Generic;
using Models;

namespace Utils
{
    public interface IBasketUtil
    {
        bool IsInRange(int index, IList<string> collection, out int position);
        bool IsInRange(int index, IList<Item> collection, out int position);
    }
}
