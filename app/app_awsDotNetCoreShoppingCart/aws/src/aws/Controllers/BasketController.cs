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
        [HttpGet("get/{id}")]
        public string Get(int id)
        {
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out int position);
            if (isInRange)
            {
                return this._basket[position];
            }

            return "The item you are looking for does not exist";
        }

        // GET api/basket/addItem
        [HttpGet("add/{value}")]
        public List<string> Post(string value)
        {
            if (!String.IsNullOrEmpty(value))
            {
                this._basket.Add(value);
            }

            return this._basket;
        }

        // GET api/basket/updateItem/1/with/value
        [HttpGet("update/{id}/with/{value}")]
        public List<string> Put(int id, string value)
        {
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out int position);
            if(isInRange) {
                var currentValue = this._basket[position];
                this._basket[position] = value;
            }

            return this._basket;
        }

        // DELETE api/values/5
        [HttpGet("delete/{id}")]
        public List<string> Delete(int id)
        {
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out int position);
            if (isInRange)
            {
                this._basket?.RemoveAt(position);
            }

            return this._basket;
        }
    }
}
