using System;

namespace Utils
{
    public class BasketUtil : IBasketUtil
    {
        public bool IsInRange(int index, string[] collection, out int position)
        {
            position = index - 1;
            return position < collection?.Length;
        }
    }
}
