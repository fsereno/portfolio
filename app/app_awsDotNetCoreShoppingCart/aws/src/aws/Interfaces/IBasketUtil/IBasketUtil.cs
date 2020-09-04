using System;
using System.Collections.Generic;

namespace Utils
{
    public interface IBasketUtil
    {
        bool IsInRange(int index, List<string> collection, out int position);
    }
}
