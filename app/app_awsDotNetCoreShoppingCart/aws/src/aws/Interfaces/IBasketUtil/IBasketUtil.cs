using System;
using System.Collections.Generic;
using Models;

namespace Utils
{
    public interface IBasketUtil
    {
        bool TryRange(int index, IList<Item> collection, out int position);

        List<Item> GetItems(List<Item> requestItems, List<Item> localItems);
    }
}
