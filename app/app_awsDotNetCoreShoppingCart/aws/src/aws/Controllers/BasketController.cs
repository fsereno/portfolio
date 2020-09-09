using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Utils;
using Models;

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
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
            return this._basket;
        }

        // GET api/basket/getItem
        [HttpGet("get/{id}")]
        public string Get(int id)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");

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
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");

            if (!String.IsNullOrEmpty(value))
            {
                this._basket.Add(value);
            }

            return this._basket;
        }

        [HttpPost("add")]
        public List<Item> Add([FromBody]AddRequest request)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            if (!String.IsNullOrEmpty(request.Item.Name))
            {
                request.Items.Add(request.Item);
            }
            return request.Items;
        }

        // GET api/basket/updateItem/1/with/value
        [HttpGet("update/{id}/with/{value}")]
        public List<string> Put(int id, string value)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
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
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out int position);
            if (isInRange)
            {
                this._basket?.RemoveAt(position);
            }

            return this._basket;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}
