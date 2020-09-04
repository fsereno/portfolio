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
        private List<string> _basket { get; set; }
        private readonly IBasketUtil _basketUtil;

        public BasketController(IBasketUtil basketUtil)
        {
            this._basket = new List<string>() { "Item 1", "Item 2" };
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
        public List<string> Post(string value)
        {
            if (!String.IsNullOrEmpty(value))
            {
                var basket = this._basket;
                basket.Add(value);
                this._basket = basket;
            }

            return this._basket;
        }

        // PUT api/values/5
        [HttpPut("updateItem/{id}/with/{value}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpGet("deleteItem/{id}")]
        public List<string> Delete(int id)
        {
            var position = 0;
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out position);
            if (isInRange)
            {
                var basket = this._basket;
                basket?.RemoveAt(position);
                this._basket = basket;
            }

            return this._basket;
        }
    }
}
