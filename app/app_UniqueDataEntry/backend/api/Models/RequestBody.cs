using System.Collections.Generic;

namespace Portfolio.UniqueDataEntry.Models
{
    /// <summary>
    /// Represents the request body for unique data entry operations.
    /// </summary>
    public class RequestBody
    {
        /// <summary>
        /// Initializes a new instance of the RequestBody class with default values.
        /// </summary>
        public RequestBody()
        {
            this.Items = new List<Item>();
            this.Item = new Item();
        }

        /// <summary>
        /// Gets or sets the list of items.
        /// </summary>
        public List<Item> Items { get; set; }

        /// <summary>
        /// Gets or sets the item to be added.
        /// </summary>
        public Item Item { get; set; }
    }
}