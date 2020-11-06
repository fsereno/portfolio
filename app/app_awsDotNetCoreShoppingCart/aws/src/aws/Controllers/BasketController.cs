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
        private List<Item> _items { get; set; }
        private readonly IBasketUtil _basketUtil;

        public BasketController(IBasketUtil basketUtil)
        {
            _items = new List<Item>()
            {
                new Item() { Name = "Apple" },
                new Item() { Name = "Banana" }
            };
           _basketUtil = basketUtil;
        }

        [HttpPost("get")]
        public IList<Item> Get([FromBody]GetRequest request)
        {
            SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                var items = _basketUtil.GetItems(request.Items, _items);
                var isInRange = _basketUtil.TryRange(request.Index, items, out int position);
                if (isInRange)
                {
                    result.Add(items[position]);
                }
                result = result.Any() ? result : items;
            }
            return result;
        }

        [HttpPost("add")]
        public IList<Item> Add([FromBody]AddRequest request)
        {
            SetResponseHeaders();
            var result = new List<Item>();

            if (request != null && !String.IsNullOrEmpty(request.Item?.Name))
            {
                var items = _basketUtil.GetItems(request.Items, _items);
                items.Add(request.Item);
                result = items;
            }
            return result;
        }

        [HttpPost("update")]
        public IList<Item> Update([FromBody]UpdateRequest request)
        {
            SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                var items = _basketUtil.GetItems(request.Items, _items);
                var isInRange = _basketUtil.TryRange(request.Index, items, out int position);
                if (isInRange) {
                    items[position] = request.Item;
                }
                result = items;
            }
            return result;
        }

        [HttpPost("delete")]
        public IList<Item> Delete([FromBody]GetRequest request)
        {
            SetResponseHeaders();
            var result = new List<Item>();

            if (request != null)
            {
                var items = _basketUtil.GetItems(request.Items, _items);
                var isInRange = _basketUtil.TryRange(request.Index, items, out int position);
                if (isInRange)
                {
                    items.RemoveAt(position);
                }
                result = items;
            }
            return result;
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}