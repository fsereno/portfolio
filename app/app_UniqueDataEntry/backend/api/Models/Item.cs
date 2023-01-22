using System.Collections.Generic;

namespace Portfolio.UniqueDataEntry.Models
{
    public class Item
    {
        public Item()
        {
            this.FirstName = string.Empty;
            this.SecondName = string.Empty;
            this.Contact = string.Empty;
            this.PostCode = string.Empty;
        }

        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Contact { get; set; }
        public string PostCode { get; set; }

        public class ItemEqualityComparer : IEqualityComparer<Item>
        {
            public bool Equals(Item item1, Item item2)
            {
                if (item2 == null && item1 == null)
                {
                    return true;
                }
                else if (item1 == null || item2 == null)
                {
                    return false;
                }
                else if (Normalise(item1.SecondName) == Normalise(item2.SecondName)
                    && Normalise(item1.Contact) == Normalise(item2.Contact)
                    && Normalise(item1.PostCode) == Normalise(item2.PostCode))
                {
                    return true;
                }
                else {
                    return false;
                }
            }

            public int GetHashCode(Item item)
            {
                var toHash = Normalise(item.SecondName) + Normalise(item.Contact) + Normalise(item.PostCode);
                return toHash.GetHashCode();
            }
            private string Normalise(string value)
            {
                return value.Trim().ToUpper();
            }
        }
    }
}