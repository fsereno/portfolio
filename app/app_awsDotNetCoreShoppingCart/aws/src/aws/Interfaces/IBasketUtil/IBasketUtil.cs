using System;

namespace Utils
{
    public interface IBasketUtil
    {
        bool IsInRange(int index, string[] collection, out int position);
    }
}
