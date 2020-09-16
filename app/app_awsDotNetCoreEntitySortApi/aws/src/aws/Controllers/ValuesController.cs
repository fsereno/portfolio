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
               // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost]
        public IList<Employee> GetEmployees()
        {
            var employeesToSort = new List<Employee>() {
                new Employee(){ Name = "Joe Bloggs" }
            };
            var employees = this._entitySortUtil.SortSalaryLowToHigh(employeesToSort);
            return employees;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
    }
}
