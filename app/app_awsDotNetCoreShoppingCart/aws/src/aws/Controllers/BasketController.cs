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
        private List<Item> _items { get; set; }
        private readonly IBasketUtil _basketUtil;

        public BasketController(IBasketUtil basketUtil)
        {
            this._basket = new List<string>() { "Item 1", "Item 2" };
            this._items = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
            _basketUtil = basketUtil;
        }

        // GET api/basket/get
        [HttpGet("get")]
        public List<Item> Get()
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
            return this._items;
        }

        // POST api/basket/get
        [HttpPost("get")]
        public Item Get([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");

            var result = new Item();

            if (request != null)
            {
                var items = request.Items?.Count > 0 ? request.Items : this._items;
                var isInRange = this._basketUtil.IsInRange(request.Index, items, out int position);
                if (isInRange)
                {
                    result = items[position];
                }
            }
            return result;
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

        // POST api/basket/add
        [HttpPost("add")]
        public List<Item> Add([FromBody]AddRequest request)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");

            var result = new List<Item>();

            if (request != null && !String.IsNullOrEmpty(request.Item?.Name))
            {
                request.Items?.Add(request.Item);
                result = request.Items;
            }
            return result;
        }

        // GET api/basket/updateItem/1/with/value
        [HttpGet("update/{id}/with/{value}")]
        public List<string> Put(int id, string value)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
            var isInRange = this._basketUtil.IsInRange(id, this._basket, out int position);
            if(isInRange) {
                this._basket[position] = value;
            }

            return this._basket;
        }

        // POST api/basket/update
        [HttpPost("update")]
        public List<Item> Update([FromBody]UpdateRequest request)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");

            var result = new List<Item>();

            if (request != null)
            {
                var isInRange = this._basketUtil.IsInRange(request.Index, request.Items, out int position);
                if (isInRange) {
                    request.Items[position] = request.Item;
                }
                result = request.Items;
            }
            return result;
        }

        // DELETE api/basket/delete/5
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

        // DELETE api/basket/delete
        [HttpPost("delete")]
        public List<Item> Delete([FromBody]GetRequest request)
        {
            this.SetResponseHeaders();
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");

            var result = new List<Item>();

            if (request != null)
            {
                var isInRange = this._basketUtil.IsInRange(request.Index, request.Items, out int position);
                if (isInRange)
                {
                    request.Items.RemoveAt(position);
                }
                result = request.Items;
            }
            return result;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}
