namespace Portfolio.StringSort.Models
{
    /// <summary>
    /// Represents the request body for sorting a comma-separated string.
    /// </summary>
    public class SortRequest
    {
        /// <summary>
        /// Gets or sets the comma-separated string to sort.
        /// </summary>
        public string CommaSeperatedString { get; set; }
    }
}