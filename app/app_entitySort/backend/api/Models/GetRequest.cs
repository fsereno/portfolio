using System.Collections.Generic;

namespace Portfolio.EntitySort.Models
{
    /// <summary>
    /// Represents the request body for sorting employees.
    /// </summary>
    public class GetRequest
    {
        /// <summary>
        /// Gets or sets the list of employees to sort.
        /// </summary>
        public List<Employee> Employees { get; set; }
    }
}