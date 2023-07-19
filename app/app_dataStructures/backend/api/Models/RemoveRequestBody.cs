namespace Portfolio.DataStructures.Models
{
    /// <summary>
    /// Represents the request body for removing  an item from a data structure.
    /// </summary>
    public class RemoveRequestBody
    {
        /// <summary>
        /// Gets or sets the collection name or identifier.
        /// </summary>
        public string[] Collection { get; set; }
    }
}