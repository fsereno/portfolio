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
    public class ValuesController : ControllerBase
    {
        private readonly IEntitySortUtil _entitySortUtil;

        public ValuesController(IEntitySortUtil entitySortUtil)
        {
            _entitySortUtil = entitySortUtil;
        }

        [HttpPost("sort/salary/high")]
        public IList<Employee> SortEmployeesHightToLow([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            var employees = this._entitySortUtil.SortSalaryHighToLow(request?.Employees);
            return employees;
        }

        [HttpPost("sort/salary/low")]
        public IList<Employee> SortEmployeesLowToHigh([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            var employees = this._entitySortUtil.SortSalaryLowToHigh(request?.Employees);
            return employees;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}