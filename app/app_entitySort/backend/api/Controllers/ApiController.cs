using Microsoft.AspNetCore.Mvc;
using Portfolio.EntitySort.Interfaces;
using Portfolio.EntitySort.Models;

namespace Portfolio.EntitySort.Controllers
{
    /// <summary>
    /// API controller for sorting employee entities.
    /// </summary>
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly IEmployeeSortUtil _employeeSortUtil;

        /// <summary>
        /// Initializes a new instance of the ApiController class with the specified employee sort utility.
        /// </summary>
        /// <param name="employeeSortUtil">The utility for sorting employee entities.</param>
        public ApiController(IEmployeeSortUtil employeeSortUtil)
        {
            _employeeSortUtil = employeeSortUtil;
        }

        /// <summary>
        /// Sorts the employee entities by salary in descending order.
        /// </summary>
        /// <param name="request">The request containing the employees to sort.</param>
        /// <returns>A list of employee entities sorted by salary in descending order.</returns>
        [HttpPost("sort/salary/desc")]
        public IList<Employee> SortBySalaryDesc([FromBody]GetRequest request)
        {
            var employees = _employeeSortUtil.SortBySalaryDesc(request?.Employees);
            return employees;
        }

        /// <summary>
        /// Sorts the employee entities by salary in ascending order.
        /// </summary>
        /// <param name="request">The request containing the employees to sort.</param>
        /// <returns>A list of employee entities sorted by salary in ascending order.</returns>
        [HttpPost("sort/salary/asc")]
        public IList<Employee> SortBySalaryAsc([FromBody]GetRequest request)
        {
            var employees = _employeeSortUtil.SortBySalaryAsc(request?.Employees);
            return employees;
        }
    }
}
