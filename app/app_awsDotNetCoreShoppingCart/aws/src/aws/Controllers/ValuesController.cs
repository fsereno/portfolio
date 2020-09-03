using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private string[] basket = new string[] { "Item 1", "Item 2" };

        // GET api/values
        [HttpGet("all")]
        public IEnumerable<string> Get()
        {
            return this.basket;
        }

        // GET api/values/5
        [HttpGet("item/{id}")]
        public string Get(int id)
        {
            var index = id - 1;
            var isInRange = index < this.basket.Length;
            if (isInRange) {
                return this.basket[index];
            }
            return "The item you are looking for does not exist";
        }


        [HttpGet("add/{value}")]
        public IEnumerable<string> Post(string value)
        {
            if (!String.IsNullOrEmpty(value)) {
                var basket = this.basket.ToList();
                basket.Add(value);
                this.basket = basket.ToArray();
            }

            return this.basket;
        }
        // POST api/values
        /*[HttpGet("add/{value}")]
        public IEnumerable<string> Get(string value)
        {
            if (!String.IsNullOrEmpty(value)) {
                var basket = this.basket.ToList();
                basket.Add(value);
                this.basket = basket.ToArray();
            }

            return this.basket;
        }*/

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
