using System.Collections.Generic;

namespace Portfolio.UniqueDataEntry.Models
{
    /// <summary>
    /// Represents an item for unique data entry.
    /// </summary>
    public class Item
    {
        /// <summary>
        /// Initializes a new instance of the Item class with default values.
        /// </summary>
        public Item()
        {
            this.FirstName = string.Empty;
            this.SecondName = string.Empty;
            this.Contact = string.Empty;
            this.PostCode = string.Empty;
        }

        /// <summary>
        /// Gets or sets the first name of the item.
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the second name of the item.
        /// </summary>
        public string SecondName { get; set; }

        /// <summary>
        /// Gets or sets the contact information of the item.
        /// </summary>
        public string Contact { get; set; }

        /// <summary>
        /// Gets or sets the post code of the item.
        /// </summary>
        public string PostCode { get; set; }

        /// <summary>
        /// Equality comparer for comparing Item objects.
        /// </summary>
        public class ItemEqualityComparer : IEqualityComparer<Item>
        {
            /// <summary>
            /// Determines whether two Item objects are equal.
            /// </summary>
            /// <param name="item1">The first Item to compare.</param>
            /// <param name="item2">The second Item to compare.</param>
            /// <returns>true if the Item objects are equal; otherwise, false.</returns>
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
                else
                {
                    return false;
                }
            }

            /// <summary>
            /// Gets the hash code for the Item object.
            /// </summary>
            /// <param name="item">The Item for which to get the hash code.</param>
            /// <returns>The hash code for the Item object.</returns>
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
