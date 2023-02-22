using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Portfolio.EntitySort.Models;
using Portfolio.EntitySort.Interfaces;

namespace Portfolio.EntitySort.Controllers
{
    [Route("api/[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly IEmployeeSortUtil _employeeSortUtil;

        public ApiController(IEmployeeSortUtil employeeSortUtil)
        {
            _employeeSortUtil = employeeSortUtil;
        }

        [HttpPost("sort/salary/desc")]
        public IList<Employee> SortBySalaryDesc([FromBody]GetRequest request)
        {
            var employees = _employeeSortUtil.SortBySalaryDesc(request?.Employees);
            return employees;
        }

        [HttpPost("sort/salary/asc")]
        public IList<Employee> SortBySalaryAsc([FromBody]GetRequest request)
        {
            var employees = _employeeSortUtil.SortBySalaryAsc(request?.Employees);
            return employees;
        }
    }
}