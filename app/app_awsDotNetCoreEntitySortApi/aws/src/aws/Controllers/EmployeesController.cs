using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Interfaces;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeSortUtil _employeeSortUtil;

        public EmployeesController(IEmployeeSortUtil employeeSortUtil)
        {
            _employeeSortUtil = employeeSortUtil;
        }

        [HttpPost("sort/salary/desc")]
        public IList<Employee> SortBySalaryDesc([FromBody]GetRequest request)
        {
            SetResponseHeaders();
            var employees = _employeeSortUtil.SortBySalaryDesc(request?.Employees);
            return employees;
        }

        [HttpPost("sort/salary/asc")]
        public IList<Employee> SortBySalaryAsc([FromBody]GetRequest request)
        {
            SetResponseHeaders();
            var employees = _employeeSortUtil.SortBySalaryAsc(request?.Employees);
            return employees;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}