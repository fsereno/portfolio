namespace Portfolio.DataStructures.Models
{
    /// <summary>
    /// Represents the request body for adding an item to a data structure.
    /// </summary>
    public class AddRequestBody
    {
        /// <summary>
        /// Gets or sets the collection name or identifier.
        /// </summary>
        public string[] Collection { get; set; }

        /// <summary>
        /// Gets or sets the item to add.
        /// </summary>
        public string Item { get; set; }
    }
}