using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Utils;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class BasketController : ControllerBase
    {
        private string[] _basket { get; set; }
        private readonly IBasketUtil _basketUtil;

        public BasketController(IBasketUtil basketUtil)
        {
            this._basket = new string[] { "Item 1", "Item 2" };
            _basketUtil = basketUtil;
        }

        // GET api/basket/get
        [HttpGet("get")]
        public IEnumerable<string> Get()
        {
            return this._basket;
        }

        // GET api/basket/getItem
        [HttpGet("getItem/{id}")]
        public string Get(int id)
        {
            var position = 0;
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out position);
            if (isInRange)
            {
                return this._basket[position];
            }
            return "The item you are looking for does not exist";
        }

        // GET api/basket/addItem
        [HttpGet("addItem/{value}")]
        public IEnumerable<string> Post(string value)
        {
            if (!String.IsNullOrEmpty(value))
            {
                var basket = this._basket?.ToList();
                basket.Add(value);
                this._basket = basket?.ToArray();
            }

            return this._basket;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpGet("deleteItem/{id}")]
        public IEnumerable<string> Delete(int id)
        {
            var position = 0;
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out position);
            if (isInRange)
            {
                var basket = this._basket?.ToList();
                basket?.RemoveAt(position);
                this._basket = basket.ToArray();
            }

            return this._basket;
        }
    }
}
